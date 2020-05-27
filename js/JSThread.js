'use strict';
let polyfillStatus = 'unknown';

if (!this.setImmediate) { // polyfill for non-node applications, way faster than setTimeout(func, 0)
	let ID = 1337, funcs = {};

	try {
		window.addEventListener('message', e => {
			if (e.data && e.data.fid && funcs[e.data.fid]) {
				funcs[e.data.fid].func(...funcs[e.data.fid].args);
				delete funcs[e.data.fid];
			}
		});

		this.setImmediate = (func, ...args) => {
			let fid;

			// Search for open fid... I think 10,000,000 is enough lol
			do {
				fid = ID = (ID + 1) % 10000000;
			} while (funcs[fid]);

			funcs[fid] = {func, args};
			window.postMessage({fid}/*, window.origin*/);
		};

		polyfillStatus = 'setImmediate polyfill';
	} catch (err) { // fallback for non-browser applications *coughd2bscough*
		this.setImmediate = func => setTimeout(func, 0);
		polyfillStatus = 'setImmediate fallback polyfill';
	}
} else {
	polyfillStatus = 'setImmediate exists';
}

let JSThread = { // cooperative multitasking library - accepts normal, async, or generator functions

	// Status of the polyfill
	polyfillStatus: polyfillStatus,

	// promise that resolves on the next event loop
	yield: () => new Promise(resolve => setImmediate(resolve)),

	// promise that resolves after 'ms' milliseconds
	sleep: ms => new Promise(resolve => (typeof ms === 'number') ? setTimeout(resolve, ms) : setImmediate(resolve)),

	// returns true if valid for threading, or false otherwise
	valid: thread => Boolean(thread && typeof thread === 'function'),

	// creates a thread function that is ready for execution
	create: thread => {
		if (!JSThread.valid(thread)) {
			throw new Error('Pseudo-Threading accepts a normal, async, or generator function!');
		}

		return (...args) => new Promise((resolve, reject) => setImmediate(() => { // defer init until next event loop so no function code executes during current block
			let tmp = thread(...args);

			if (tmp && tmp.then && typeof tmp.then === 'function') {
				tmp.then(resolve);

				if (typeof tmp.catch === 'function') {
					tmp.catch(reject);
				}

				return;
			}

			if (tmp && tmp.next && typeof tmp.next === 'function') {
				let t = () => {
					let ret = tmp.next();

					if (ret.done) {
						resolve(ret.value);
					} else if (typeof ret.value === 'number') {
						setTimeout(t, ret.value);
					} else {
						setImmediate(t);
					}
				};

				t();

				return;
			}

			resolve(tmp);
		}));
	},

	// creates and immediately runs thread
	spawn: (thread, ...args) => JSThread.create(thread)(...args),
};

try { // try to export for node
	module.exports = JSThread;
} catch (err) {
	// probably browser, fail passively
}