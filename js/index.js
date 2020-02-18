var $ = window.jQuery;

try {
	window.socket = window.io();
}
catch (e) {}

var cookie = {
	data: {},

	load: function () {
		var the_cookie = document.cookie.split(';');
		if (the_cookie[0]) {
			this.data = JSON.parse(unescape(the_cookie[0]));
		}
		return this.data;
	},

	save: function (expires, path) {
		var d = expires || new Date(2020, 02, 02);
		var p = path || '/';
		document.cookie = escape(JSON.stringify(this.data))
						  + ';path=' + p
						  + ';expires=' + d.toUTCString();
	}
}

require(["D2Bot"], function (D2BOTAPI) {
	var API = (typeof socket !== "undefined") ? socket : D2BOTAPI();
	var md5 = CryptoJS.MD5;
	var itemCount = 0;
	var MAX_ITEM = 100;

	(function enableBackToTop() {
		var backToTop = $('<a>', { id: 'back-to-top', href: '#top' });
		var icon = $('<i>', { class: 'icon-chevron-up' });

		backToTop.appendTo('body');
		icon.appendTo(backToTop);

		backToTop.hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				backToTop.fadeIn();
			}
			else {
				backToTop.fadeOut();
			}
		});

		backToTop.click(function (e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop: 0
			}, 600);
		});
	})()

	function initialize()
	{
		cookie.load();

		if (!cookie.data.server) {
			cookie.data.server = "http://localhost:8080";
			cookie.save();
		}

		if (cookie.data.username && cookie.data.session) {
			API.emit('validate', cookie.data.username, cookie.data.session, function (err, valid) {
				if (err) {
					console.log(err);
					return;
				}

				if (!valid) {
					login("public", "public", cookie.data.server, function (loggedin) {
						start(loggedin);
					});
				} else {
					start(cookie.data.loggedin);
				}
			});
		} else {
			login("public", "public", cookie.data.server, function (loggedin) {
				start(loggedin);
			});
		}

		refreshList();
	}

	function login(username, password, server, callback)
	{
		API.emit('login', username, password, server, function (err, result) {
			if (err) {
				console.log(err);
				cookie.data.username = "";
				cookie.data.session = "";
				cookie.data.loggedin = false;
				cookie.save();
				return callback(false);
			}

			cookie.data.server = server;
			cookie.data.username = username;
			cookie.data.session = result;
			cookie.data.loggedin = (username !== "public") ? true : false;
			cookie.save();
			showNotification("Notification", "Now logged in as " + username, false);
			callback(cookie.data.loggedin);
		});
	}

	var CurrentRealm;
	var CurrentGameType;
	var CurrentGameMode;
	var CurrentGameClass;
	var AccountsMap = {};

	function showNotification(head, text, perm)
	{
		var template = `<a class="` + (perm ? `always-there ` : "") + `ld-notify-card link border-top">
		<div class="d-flex no-block align-items-center p-10">
			<span class="btn btn-success btn-circle">
				<i class="ti-calendar"></i>
			</span>
			<div class="m-l-10">
				<h5 class="m-b-0">` + head + `</h5>
				<span class="mail-desc">` + text + `</span>
			</div>
		</div>
		</a>`;

		$('#ldNotify').append($(template));
		$("#ldNotifyDrop").click();

		$(".ld-notify-card").off("click");
		$(".ld-notify-card").click(function (event) {
			if ($(this).hasClass("always-there")) {
				return;
			}

			event.stopImmediatePropagation();
			$(this).remove();
		})
	}

	function refreshList() {
		$("#items-list").html("");
		itemCount = 0;
		MAX_ITEM = 100;
		addItemstoList();
	}

	function getItemDesc (desc) {
		var i, desc,
			stringColor = "<span class='color0'>";

		if (!desc) {
			return "";
		}

		desc = desc.split("\n");
		stringColor = "<span class='color0'>";

		// Lines are normally in reverse. Add color tags if needed and reverse order.
		for (i = desc.length - 1; i >= 0; i -= 1) {
			if (desc[i].indexOf("Sell value: ") > -1) { // Remove sell value
				desc.splice(i, 1);

				i += 1;
			} else {
				if (desc[i].match(/^(ÿ|˙)c/)) {
					stringColor = desc[i].substring(0, 3);
				} else {
					desc[i] = stringColor + desc[i];
				}
			}

			desc[i] = desc[i].replace(/(ÿ|˙)c([0-9!"+<;.*])/g, "<span class='color$2'>");
			desc[i] = desc[i] + "</span>";
			if (stringColor == "<span class='color0'>") {	//What a dirty solution O.o
				desc[i] = desc[i] + "</span>";
			}

		}

		if (desc[desc.length - 1]) {
			desc[desc.length - 1] = desc[desc.length - 1].trim();
		}

		desc = desc.join("<br>");

		return desc;
	}


	function cleanDecription(description) {
		return getItemDesc(description.toString().split("$")[0]);
	}

	function $addItem(result) {
		var itemUID = result.description.split("$")[1];

		var description = cleanDecription(result.description).split("<br/>");
		var title = description.shift();
		description = description.join("<br/>")

		result.realm = CurrentRealm.toLowerCase();
		result.itemid = itemUID;
		var templateid = CurrentRealm + "-" + result.account + "-" + result.character + "-" + itemUID;
		var htmlTemplate = `
		<div class="d-flex flex-row comment-row p-l-0 m-t-0 m-b-0" id="` + templateid + `">
			<div class="p-2 ld-img-col">
				<img src="data:image/jpeg;base64, ` + result.image + `" alt="user" class="ld-item">
			</div>
			<div class="comment-text w-100">
				<h6 class="-medium">` + title + `</h6>
				<span class="m-b-15 d-block">` + description + `
				</span>
				<div class="comment-footer">
					<div class="flex">
						<span class="text-muted float-right">` + CurrentRealm + "/" + result.account + "/" + result.character + "/{" + itemUID + '}' + `</span>
						<!--<button type="button" class="btn btn-cyan btn-sm">Helm</button>
						<button type="button" class="btn btn-success btn-sm">Armor</button>-->
					</div>
				</div>
			</div>
		</div>`;

		var $item = $(htmlTemplate);
		$item.data("itemData", result);
		$item.data("itemCount", "");
		$item.click(function () {
			$(this).toggleClass("selected");
			
			if($(this).hasClass("selected")) {
				$("#dropQueueList").append($(this));
			} else { // Unselecting an item in the queue should place it back to inventory
				// First check if currently selected account location is same or ALL, then check if selected character location is the same or ALL
				if( ($("#account-select").val() === "Show All" || $("#account-select").val() === $(this).data("itemData").account) &&
					($("#character-select").val().split(".")[0] === "Show All" || $("#character-select").val().split(".")[0] === $(this).data("itemData").character)
				) {
					// Yes, then move the item to the inventory
					$("#items-list").append($(this));
				} else {
					// No, then the unselected item should be removed from the DOM!
					$(this).remove();
				}
			}
		});
		
		queuedIds = [];
		// Check our queue list if the item is already listed there
		$("#dropQueueList div").each(function() {
			// if there is the property itemData
			if($(this).data("itemData")) {
				// get the ID
				queuedIds[$(this).data("itemData").itemid] = $(this);
			}
		});
		if(queuedIds[result.itemid] === undefined)
			$("#items-list").append($item);
	}

	function buildregex(str) {
		return str;
	}

	function addItemstoList() {
		function doQuery($account, $character, loadMoreItem) {
			API.emit("query", buildregex($("#search-bar").val().toLocaleLowerCase()), CurrentRealm, $account, $character, function (err, results) {
				if (err) { console.log(err); return; };
				var y = $(window).scrollTop();

				for (var i in results) {
					$addItem(results[i]);
				}

				itemCount += results.length;

				$(window).scrollTop(y);

				if (loadMoreItem) {
					loadMoreItem();
				}
			});
		}

		var ended;
		var accountListid;
		var account = $("#account-select").val();
		var character = $("#character-select").val();

		if (character == "Show All") {
			var accList = [];

			if (account == "Show All") {
				for (var i in AccountsMap) {
					accList.push(i);
				}
			} else {
				accList.push(account);
			}

			accountListid = 0;
			ended = false;

			window.loadMoreItem = function () {
				if (accountListid == accList.length) {
					if (!ended) {
						$("#items-list").append("<div>End of Items on Accounts</div>");
						ended = true;
						window.loadMoreItem = false;
					}

					return;
				}

				var acc = accList[accountListid++];

				doQuery(acc, "", itemCount > MAX_ITEM ? false : window.loadMoreItem);
			};

			window.loadMoreItem();
		}
		else doQuery($("#account-select").val(), character);
	}

	function pupulateAccountCharSelect(realm, core, type, ladder) {
		API.emit("accounts", realm, function (err, account) {
			if (err) { console.log(err); return; }
			AccountsMap = {};

			for (var q in account) {
				var res = account[q].split("\\");

				if (!res || res.length < 3) {
					continue;
				}

				if (!AccountsMap[res[1]]) {
					AccountsMap[res[1]] = [];
				}

				var charkey = res[2].split(".")[1];

				var checks = {
					ladder: CurrentGameClass == "Ladder" ? true : false,
					lod: CurrentGameType == "Expansion" ? true : false,
					sc: CurrentGameMode == "Softcore" ? true : false
				}

				var charCheck = {
					ladder: charkey[2] == "l" ? true : false,
					lod: charkey[1] == "e" ? true : false,
					sc: charkey[0] == "s" ? true : false
				}

				if ((charCheck.ladder == checks.ladder) && (charCheck.lod == checks.lod) && (charCheck.sc == checks.sc))
					AccountsMap[res[1]].push(res[2]);
			}

			$("#character-select").html("");
			$("#account-select").html("");
			var csoption = $("<option/>");
			csoption.text("Show All");
			$("#character-select").append(csoption);
			$("#account-select").append("");
			var asoption = $("<option/>");
			asoption.text("Show All");
			$("#account-select").append(asoption);
			for (var i in AccountsMap) {
				asoption = $("<option/>");
				asoption.text(i);
				$("#account-select").append(asoption);
			}
			refreshList();
		});
	}

	var add_row_index = 1;

	function start(loggedin) {
		if (loggedin) {
			$(".logged-in-out").fadeToggle("hide");
			$(".current-user-btn").html("<i class='font-24 mdi mdi-account-circle current-user-btn'></i>" + cookie.data.username + "</a>")
		}

		$("#account-select").off("change");
		$("#account-select").change(function () {
			$("#character-select").html("");
			var $thisAccount = $(this).val();
			var csoption = $("<option/>");
			csoption.text("Show All");
			$("#character-select").append(csoption);
			for (var j in AccountsMap[$thisAccount]) {
				csoption = $("<option/>");
				csoption.text(AccountsMap[$thisAccount][j]);
				$("#character-select").append(csoption);
			}
			refreshList();
		});

		$("#search-bar").off("change");
		$("#search-bar").change(function () {
			refreshList();
		});

		$("#character-select").off("change");
		$("#character-select").change(function () {
			refreshList();
		});

		CurrentRealm = window.localStorage.getItem("CurrentRealm");
		if (!CurrentRealm) {
			window.localStorage.setItem("CurrentRealm", "USEast");
			CurrentRealm = window.localStorage.getItem("CurrentRealm");
		}
		CurrentGameType = window.localStorage.getItem("CurrentGameType");
		if (!CurrentGameType) {
			window.localStorage.setItem("CurrentGameType", "Expansion");
			CurrentGameType = window.localStorage.getItem("CurrentGameType");
		}
		CurrentGameMode = window.localStorage.getItem("CurrentGameMode");
		if (!CurrentGameMode) {
			window.localStorage.setItem("CurrentGameMode", "Softcore");
			CurrentGameMode = window.localStorage.getItem("CurrentGameMode");
		}
		CurrentGameClass = window.localStorage.getItem("CurrentGameClass");
		if (!CurrentGameClass) {
			window.localStorage.setItem("CurrentGameClass", "Ladder");
			CurrentGameClass = window.localStorage.getItem("CurrentGameClass");
		}
		var clickedClass = "btn-success";
		//set button state
		$("#game-realm").find(".game-realm-" + CurrentRealm).attr("selected", "selected")
		$(".game-realm-" + CurrentRealm).addClass(clickedClass);
		$(".game-type-" + CurrentGameType).addClass(clickedClass);
		$(".game-mode-" + CurrentGameMode).addClass(clickedClass);
		$(".game-class-" + CurrentGameClass).addClass(clickedClass);

		$("#game-realm").off("change");
		$("#game-realm").change(function () {
			CurrentRealm = $(this).find("option:selected").text().trim();
			window.localStorage.setItem("CurrentRealm", CurrentRealm);
			pupulateAccountCharSelect(CurrentRealm, CurrentGameMode, CurrentGameType, CurrentGameClass);
		});

		$(".game-type").off("click");
		$(".game-type").click(function () {
			if (CurrentGameType == $(this).text().trim()) {
				return;
			}

			$(".game-type").removeClass(clickedClass);
			$(this).addClass(clickedClass);
			CurrentGameType = $(this).text().trim();
			window.localStorage.setItem("CurrentGameType", CurrentGameType);
			pupulateAccountCharSelect(CurrentRealm, CurrentGameMode, CurrentGameType, CurrentGameClass);
		});

		$(".game-mode").off("click");
		$(".game-mode").click(function () {
			if (CurrentGameMode == $(this).text().trim()) {
				return;
			}

			$(".game-mode").removeClass(clickedClass);
			$(this).addClass(clickedClass);
			CurrentGameMode = $(this).text().trim();
			window.localStorage.setItem("CurrentGameMode", CurrentGameMode);
			pupulateAccountCharSelect(CurrentRealm, CurrentGameMode, CurrentGameType, CurrentGameClass);
		});

		$(".game-class").off("click");
		$(".game-class").click(function () {
			if (CurrentGameClass == $(this).text().trim()) {
				return;
			}

			$(".game-class").removeClass(clickedClass);
			$(this).addClass(clickedClass);
			CurrentGameClass = $(this).text().trim().replace(' ', '');
			window.localStorage.setItem("CurrentGameClass", CurrentGameClass);
			pupulateAccountCharSelect(CurrentRealm, CurrentGameMode, CurrentGameType, CurrentGameClass);
		});
		pupulateAccountCharSelect(CurrentRealm, CurrentGameMode, CurrentGameType, CurrentGameClass);

		var intCount = 0;
		$(function () {
			setInterval(function () {
				/*var pos;

				var pageTopToDivBottom = $("#load-more").offset().top + $("#load-more")[0].scrollHeight;
				var scrolledPlusViewable = $(window).scrollTop() + $(window).height();

				if ($(window).scrollTop() > pageTopToDivBottom)
					pos = "up";
				else if (scrolledPlusViewable < $("#load-more").offset().top)
					pos = "down";
				else
					pos = "see";

				if (pos == "see") {
					if (window.loadMoreItem) window.loadMoreItem();
				}*/
				var scrollHeight = $(document).height();
				var scrollPosition = $(window).height() + $(window).scrollTop();
				if ((scrollHeight - scrollPosition) / scrollHeight < 0.3 && itemCount > MAX_ITEM) {
					if (window.loadMoreItem) {
						MAX_ITEM += 50;
						window.loadMoreItem();
					}
				}

				if (cookie.data.loggedin && intCount++ > 20) {
					intCount = 0;
					API.emit("poll", function (err, msg) {
						if (msg.body === "empty") {
							return;
						}

						msg.body = JSON.parse(msg.body);

						for (var i = 0; i < msg.body.length; i++) {
							var data = JSON.parse(msg.body[i].body);
							showNotification("Game Action", data.data, false);
						}
					});
				}
			}, 100);
		});

		$("#log-accounts").off("click");
		$("#log-accounts").click(function() {
			var apipass = document.getElementById("log-accounts-api").value;

			if (!apipass || apipass.length < 1) {
				return;
			}

			for (var i = 0; i < add_row_index; i++) {
				var realm = document.getElementsByName('realm' + i)[0].value.toLowerCase();
				var acc = document.getElementsByName('acc' + i)[0].value.toLowerCase();
				var pass = document.getElementsByName('pass' + i)[0].value.toLowerCase();
				var chars = document.getElementsByName('chars' + i)[0].value.toLowerCase();

				if (realm.length == 0 || acc.length == 0 || pass.length == 0) {
					continue;
				}

				if (chars.length == 0) {
					chars = [""];
				} else {
					chars = document.getElementsByName('chars' + i)[0].value.toLowerCase().split(/[\s,;: ]+/);
				}

				var hash = API.md5(realm + acc).toString();

				API.emit("put", "secure", hash + ".txt", pass, apipass, function (err) {});

				var GameInfo = {
					hash: hash,
					profile: cookie.data.username,
					action: "doMule",
					data: JSON.stringify({realm: realm, account: acc, chars: chars})
				}

				API.emit("gameaction", GameInfo, function (err) {});

				document.getElementsByName('acc' + i)[0].value = "";
				document.getElementsByName('pass' + i)[0].value = "";
				document.getElementsByName('chars' + i)[0].value = "";
			}

			$('#add-accounts-modal').modal('hide');
		});

		$(".launch-btn").off("click");
		$(".launch-btn").click(function () {
			var gamename = $("#gamename").val();
			var gamepass = $("#gamepass").val();
			var drops = {};

			if(!gamename || gamename == ""){
				alert("GameName Required!");
			  return;
			}

			$(".selected").each(function (i, v) {
				var $item = $(v);
				var item = $item.data("itemData");
				delete item.image;
				delete item.description;

				$item.remove();

				var hash = API.md5(item.realm.toLowerCase() + item.account.toLowerCase()).toString();

				if (!drops[hash]) {
					drops[hash] = [];
				}

				drops[hash].push(item);
			})

			for (var d in drops) {
				if (drops.hasOwnProperty(d)) {
					var GameInfo = {
						hash: d,
						profile: cookie.data.username,
						action: "doDrop",
						data: JSON.stringify({gameName: gamename, gamePass: gamepass, items: drops[d]})
					}

					API.emit("gameaction", GameInfo, function (err) {})
				}
			}
		})

		$(".logout-btn").off("click");
		$(".logout-btn").click(function () {
			$(".logged-in-out").fadeToggle("hide");
			login("public", "public", cookie.data.server, function(loggedin){});
		});
	}

	/*$(window).on("scroll", function() {
		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + $(window).scrollTop();
		if ((scrollHeight - scrollPosition) / scrollHeight < 0.4 && itemCount > 100) {
			if (window.loadMoreItem) {
				window.loadMoreItem();
			}
		}
	});*/

	$(".add-acc-btn").click(function () {
		$("#add-accounts-modal").modal('show');
		while (add_row_index > 5) {
			$("#addr"+(add_row_index-1)).html('');
			add_row_index--;
		}
	});

	$("#add-row").click(function(){
		$('#addr'+add_row_index).html("<td data-label='Realm' class='ld-modal-col0'><select class='ld-select-add' name='realm" + add_row_index + "'><option>USEast</option><option>USWest</option><option>Europe</option><option>Asia</option></select></td><td data-label='Account' class='ld-modal-col1'><input class='ld-input-add' type='text' name='acc" + add_row_index + "' placeholder='Account' /></td><td data-label='Password' class='ld-modal-col2'><input class='ld-input-add' type='text' name='pass" + add_row_index + "' placeholder='Password'/></td><td data-label='Character(s)' class='ld-modal-col3'><input class='ld-input-add' type='text' name='chars" + add_row_index + "' placeholder='a, b, c or empty'/></td>");
		$('#tab-logic').append('<tr id="addr'+(add_row_index+1)+'"></tr>');
		add_row_index++;
	});

	$("#login-ok-btn").click(function () {
		var username = String($("#ld-login-user").val());
		var password = String($("#ld-login-pw").val());
		var server = String($("#ld-login-api").val());

		if (server.length == 0) {
			server = "http://localhost:8080";
		}

		if (username.length > 0 && password.length > 0) {
			login(username, password, server, function (loggedin) {
				start(loggedin);
			});
		}
	})

	initialize();
	showNotification("Notification", "Welcome to Lime Drop!", true);
	API.emit("poll", function() {});
});
