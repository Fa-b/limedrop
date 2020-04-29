var $ = window.jQuery;

var LimeConfig = require(["LimeConfig"]);

try {
	window.socket = window.io();
} catch (e) { }

var cookie = {
	data: {},

	load: function () {
		var the_cookie = document.cookie.split(";");
		if (the_cookie[0]) {
			this.data = JSON.parse(unescape(the_cookie[0]));
		}
		return this.data;
	},

	save: function (expires, path) {
		var d = expires || new Date(Date.now() + 12096e5);
		var p = path || "/";
		document.cookie =
			escape(JSON.stringify(this.data)) +
			";path=" +
			p +
			";expires=" +
			d.toUTCString();
	}
};

require(["D2Bot"], function (D2BOTAPI) {
	var API = typeof socket !== "undefined" ? socket : D2BOTAPI();
	var md5 = CryptoJS.MD5;
	var regexFilter,
		filterUpdate = {};
	var itemCount = 0;
	var savedEntryCount = 0;
	var groupEntryCount = 0;
	var MAX_ITEM = 1000; // TODO: make this a config
	var countables = [];
	var drops = {};

	(function enableBackToTop() {
		var backToTop = $("<a>", {
			id: "back-to-top",
			href: "#top"
		});
		var icon = $("<i>", {
			class: "icon-chevron-up"
		});

		backToTop.appendTo("body");
		icon.appendTo(backToTop);

		backToTop.hide();

		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				backToTop.fadeIn();
			} else {
				backToTop.fadeOut();
			}
		});

		backToTop.click(function (e) {
			e.preventDefault();

			$("body, html").animate({
				scrollTop: 0
			},
				600
			);
		});
	})();

	function initialize() {
		$(".app-search").toggle(0);

		function updateRegEx(filter, regex) {
			printStr = "";
			filterUpdate[filter] = regex;

			if (JSON.stringify(regexFilter) != JSON.stringify(filterUpdate)) {
				for (var entry in LimeConfig["SearchFilter"]) {
					if (filterUpdate[entry]) printStr += filterUpdate[entry];
				}

				console.log("Generated RegEx:", printStr, "\nPress Enter to confirm");
			}
		}

		function appendTextField(name, data) {
			var htmlTemplate = `
<span class="form-filter-element">
	<label class="form-filter-label" for="search-data-` + name + `" id="label-` + name + `">` + name + `:</label>
		<div class="form-filter">
			<input class="form-filter-input" type="text" id="search-data-` + name + `" name="search-data-` + name + `"/>
		</div>
</span>`;

			var $formFilter = $(htmlTemplate);
			var mask = new RegExp(data.mask);
			var regex = [];
			for (var entry in data.regex) {
				regex.push([
					new RegExp(data.regex[entry][0], "g"),
					data.regex[entry][1]
				]);
			}
			$formFilter.data("regex", regex);
			$formFilter.data("name", name);
			$formFilter.data("inputmask", mask);
			$formFilter.data("validate", function (value) {
				$("#search-data-" + name).removeClass("valid");

				if ($formFilter.data("inputmask").exec(value)) {
					$("#search-data-" + name).addClass("valid");
					var output = value;
					var regList = $formFilter.data("regex");
					for (var regex in regList) {
						output = output.replace(regList[regex][0], regList[regex][1]);
					}
					$formFilter.attr(
						"title",
						$formFilter.data("name") + " is: '" + value + "'\n\t => " + output
					);
					updateRegEx(name, output);
				}
			});

			$formFilter.on("keypress keyup", function (event) {
				var str = $("#search-data-" + name).val();
				var keycode = event.keyCode ? event.keyCode : event.which;
				if (keycode == "13") {
					while (!$(this).data("inputmask").exec(str)) {
						if (str.length === 0) {
							str = data.default;
							break;
						}
						str = str.substring(0, str.length - 1);
					}
					$("#search-data-" + name).val(str);
				}

				$(this).data("validate")(str);
			});

			$("#search-group").append($formFilter);

			// Check validity on init
			$("#search-data-" + name).val(data.default);
			$formFilter.data("validate")(data.default);
		}

		function appendCheckBox(name, data) {
			var htmlTemplate = `
<span class="form-filter-element">
	<label class="form-filter-label" for="search-data-` + name + `" id="label-` + name + `">` + name + `:</label>
	<div class="form-filter">
		<input type="checkbox" id="search-data-` + name + `" name="search-data-` + name + `"/>
	</div>
</span>`;

			var $formFilter = $(htmlTemplate);
			var regex = [];
			for (var entry in data.regex) {
				regex.push([
					new RegExp(data.regex[entry][0], "g"),
					data.regex[entry][1]
				]);
			}
			$formFilter.data("regex", regex);
			$formFilter.find("#search-data-" + name).indeterminate = true;
			$formFilter.data("name", name);
			$formFilter.data("setState", function (state) {
				if (data.checked === state) {
					$("#search-data-" + name).prop("checked", true);
					$formFilter.data("state", "checked");
				} else if (data.unchecked === state) {
					$("#search-data-" + name).prop("checked", false);
					$formFilter.data("state", "unchecked");
				} else if (data.indeterminate === state) {
					$("#search-data-" + name).prop("indeterminate", true);
					$formFilter.data("state", "indeterminate");
				}

				var output = state;
				var regList = $formFilter.data("regex");
				for (var regex in regList) {
					output = output.replace(regList[regex][0], regList[regex][1]);
				}

				$formFilter.attr(
					"title",
					name + " is: '" + state + "'\n\t => " + output
				);
				updateRegEx(name, output);

				$("#label-" + name).text(state + ":");
			});

			$formFilter.on("click", function (event) {
				var next = {
					checked: "unchecked",
					unchecked: "indeterminate",
					indeterminate: "checked"
				};
				var value = data[next[$(this).data("state")]];

				$(this).data("setState")(value);
			});

			$("#search-group").append($formFilter);

			// Check validity on init
			$formFilter.data("setState")(data.default);
		}

		function appendSelectBox(name, data) {
			var htmlTemplate = `
<span class="form-filter-element">
    <label class="form-filter-label" for="search-data-` + name + `" id="label-` + name + `">` + name + `:</label>
	<div class="form-filter">
		<select multiple id="search-data-` + name + `" name="search-data-` + name + `"/>
	</div>
</span>`;

			var $formFilter = $(htmlTemplate);
			var mask = new RegExp(data.mask);
			var regex = [];
			for (var entry in data.regex) {
				regex.push([
					new RegExp(data.regex[entry][0], "g"),
					data.regex[entry][1]
				]);
			}
			$formFilter.data("regex", regex);
			$formFilter.data("name", name);
			$formFilter.data("values", data.values);

			$("#search-group").append($formFilter);

			var optionList = $formFilter.data("values");
			for (var option in optionList) {
				$("#search-data-" + name).append(`<option value="` + optionList[option] + `">` + optionList[option] + `</option>`);
			}

			$("#search-data-" + name).on("change", function (e, param) {
				var value = "";
				var output;
				var selected = $("#search-data-" + name).val();
				for (var str in selected) {
					value += selected[str] + ", ";
				}

				output = value.substring(0, value.lastIndexOf(","));

				var regList = $formFilter.data("regex");
				for (var regex in regList) {
					output = output.replace(regList[regex][0], regList[regex][1]);
				}

				$formFilter.attr(
					"title",
					name + " is: '" + value + "'\n\t=> " + output
				);
				updateRegEx(name, output);
			});

			$("#search-data-" + name).val(data.default);

			$("#search-data-" + name).chosen({
				rtl: true,
				placeholder_text_multiple: "Select " + name,
				display_selected_options: false,
				hide_results_on_select: false,
				width: "100% !important"
			});
			$("#search-data-" + name).trigger("change");
		}

		for (var entry in LimeConfig["SearchFilter"]) {
			var filter = LimeConfig["SearchFilter"][entry];
			if (filter.type === "text") {
				// Textfield
				appendTextField(entry, filter);
			} else if (filter.type === "tristate") {
				// Tristate Checkbox
				appendCheckBox(entry, filter);
			} else if (filter.type === "multi") {
				// Tristate Checkbox
				appendSelectBox(entry, filter);
			} else {
				console.info("Invalid Config Entry for Search Filters");
			}

			// Initially up-to-date
			regexFilter = JSON.parse(JSON.stringify(filterUpdate));

			$("#search-group").on("keypress", function (e) {
				var key = e.which;
				if (
					key == 13 &&
					JSON.stringify(regexFilter) != JSON.stringify(filterUpdate)
				) {
					// the enter key code
					regexFilter = JSON.parse(JSON.stringify(filterUpdate));
					$("#search-bar").trigger("change");
				}
			});
		}

		cookie.load();

		if (!cookie.data.server) {
			cookie.data.server = "http://localhost:8080";
			cookie.save();
		}

		if (cookie.data.username && cookie.data.session) {
			API.emit(
				"validate",
				cookie.data.username,
				cookie.data.session,
				cookie.data.server,
				function (err, valid) {
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
				}
			);
		} else {
			login("public", "public", cookie.data.server, function (loggedin) {
				start(loggedin);
			});
		}

		//$(".search-filter").toggle(0);

		//refreshList();
	}

	function login(username, password, server, callback) {
		API.emit("login", username, password, server, function (err, result) {
			if (err) {
				console.log(err);
				cookie.data.username = "";
				cookie.data.session = "";
				cookie.data.loggedin = false;
				cookie.save();
				return callback(false);
			}

			cookie.data.loggedin = username !== "public" ? true : false;
			// Don't override Cookie with default..
			if (cookie.data.loggedin) {
				cookie.data.server = server;
				cookie.data.username = username;
				cookie.data.session = result;
				cookie.save();
			}
			$("#ld-login-api").val(cookie.data.server);
			showNotification("Notification", "Now logged in as " + username, false);
			$(document).trigger("click");
			callback(cookie.data.loggedin);
		});
	}

	var CurrentRealm;
	var CurrentGameType;
	var CurrentGameMode;
	var CurrentGameClass;
	var AccountsMap = {};

	function showNotification(head, text, perm) {
		var template = `
<a class="` + (perm ? `always-there ` : "") + `ld-notify-card link" style="border-top:1px solid #3c3c3c">
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
    
        $("#ldNotify").append($(template));

        var expanded = $("#ldNotifyDrop").attr("aria-expanded");
        $("#ldNotifyDrop").click();
        if(expanded === "true")
            $("#ldNotifyDrop").click();

		$(".ld-notify-card").off("click");
		$(".ld-notify-card").click(function (event) {
			if ($(this).hasClass("always-there")) {
				return;
			}

			event.stopImmediatePropagation();
			$(this).remove();
		});
	}

	function refreshList(limit = true) {
		$("#items-list").html("");
		itemCount = 0;
		savedEntryCount = 0;
		groupEntryCount = 0;
		MAX_ITEM = 1000;
		roundTime = [];
		countables = [];

		console.log("refresh");
		addItemstoList(limit, LimeConfig["ItemGroup"], false);
	}

	function getItemDesc(desc) {
		var i,
			desc,
			stringColor = "<span class='color0'>";

		if (!desc) {
			return "";
		}

		desc = desc.split("\n");
		stringColor = "<span class='color0'>";

		// Lines are normally in reverse. Add color tags if needed and reverse order.
		for (i = desc.length - 1; i >= 0; i -= 1) {
			if (desc[i].indexOf("Sell value: ") > -1) {
				// Remove sell value
				desc.splice(i, 1);

				i += 1;
			} else {
				if (desc[i].match(/^(ÿ|˙)c/)) {
					stringColor = desc[i].substring(0, 3);
				} else {
					desc[i] = stringColor + desc[i];
				}
			}

			desc[i] = desc[i].replace(
				/(ÿ|˙)c([0-9!"+<;.*])/g,
				"<span class='color$2'>"
			);
			desc[i] = desc[i] + "</span>";
			if (stringColor == "<span class='color0'>") {
				//What a dirty solution O.o
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

		// Check our queue list if the item is already listed there
		var queuedItems = document.getElementById("dropQueueList").children;
		for (var i = 0; i < queuedItems.length; i++) {
			if (queuedItems[i].id === itemUID) {
				// ID is already queued.. get out of here
				return undefined;
			}
		}

		// Maybe the description of our item is corrupted
		// But more likely, the requested item is already listed in the queue
		if (!itemUID) return undefined;

		var itemID = itemUID.split(":")[1];
		// Check if item is not already listed as a countable, unless it is just
		// a group list entry
		if (!result.groupId && countables[itemUID] != undefined) return undefined;

		var description = cleanDecription(result.description).split("<br/>");
		var title = description.shift();
		description = description.join("<br/>");

		result.realm = CurrentRealm;
		result.itemid = itemUID;
		var templateid =
			CurrentRealm +
			"-" +
			result.account +
			"-" +
			result.character +
			"-" +
			itemUID;
		var htmlTemplate =`
<div class="d-flex flex-row comment-row p-l-0 m-t-0 m-b-0" id="` + itemUID + `">
    <div class="p-2 ld-img-col" style="position:relative; display: flex; align-self: center; justify-content: center;">
        <div style="position:relative">
            <div id="png-` + itemUID + `"><i>image</i></div>
        </div>
    </div>
    <div class="p-2 comment-text">
		<h6 class="-medium">` + title + `</h6>
		<span class="m-b-15 d-block">` + description + `</span>
	</div>
    <div class="comment-footer w-100">
        <span class="text-muted float-right">` + CurrentRealm + "/" + result.account + "/" + result.character + "/{" + itemUID + "}" + `</span>
    </div>
</div>`;

		// Todo: try using DOM operations instead of jQuery
		var $item = $(htmlTemplate);

		let prevRatio = {};
		let handleIntersect = (entries, observer) => {
			entries.forEach((entry) => {
				//if (entry.intersectionRatio > 0.05) {
				let elem = entry.target;

				if (prevRatio[elem] > entry.intersectionRatio) {
					//console.log("Leaving:", elem);
					//$item.addClass("hidden");
				} else if (entry.intersectionRatio >= 0.1) {
					$item.removeClass("hidden");
					if (!result.itemImage || result.groupId) {
						try {
							var tmp = JSON.parse(result.image);
						} catch (e) {
							console.warn("Old D2Bot# version active.. please update");
						}
						if (tmp) {
							result.itemImage = new ItemImage({
								image: tmp.code,
								itemColor: tmp.color,
								sockets: tmp.sockets,
								description: result.description
							});
							result.itemImage.onload = () => {
								result.itemImage.getItem().then((canvas) => {
									result.image = canvas.toDataURL();
									var imageTemplate = `<img src="` + result.image + `" alt="user" class="ld-item">`;
									var imgDiv = document.getElementById("png-" + itemUID);
									imgDiv.innerHTML = imageTemplate;
								});
							};
						} else {
							var imageTemplate = `<img src="` + ((result.image.indexOf("data") != -1) ? "" : "data:image/jpeg;base64,") + result.image + `" alt="user" class="ld-item">`;
							var imgDiv = document.getElementById("png-" + itemUID);
							imgDiv.innerHTML = imageTemplate;
						}
					}
				}
				prevRatio[elem] = entry.intersectionRatio;
				//}
			});
		};

		let observer = new IntersectionObserver(handleIntersect, {
			root: null,
			rootMargin: "100px",
			threshold: 0.4
		});

		$item.data("itemData", result);
		$item.click(function () {
			$(this).toggleClass("selected");
			if ($(this).hasClass("selected")) {
				$("#dropQueueList").append($(this));
				var itemDiv = document.getElementById(itemUID);
				observer.observe(itemDiv);

				$("#dropQueueList").animate({ scrollTop: $("#dropQueueList")[0].scrollHeight }, 10);
			} else {
				// Unselecting an item in the queue should place it back to inventory
				// First check if currently selected account location is same or ALL, then check if selected character location is the same or ALL
				if (
					($("#account-select").val() === "Show All" ||
						$("#account-select").val() === $(this).data("itemData").account) &&
					($("#character-select").val().split(".")[0] === "Show All" ||
						$("#character-select").val().split(".")[0] ===
						$(this).data("itemData").character)
				) {
					// Yes, then check if it is a group item
					var itemGroup = $(this).data("itemData");
					if ($("#" + itemGroup.groupId).length) {
						// first remove it from the DOM
						$(this).remove();

						// we have the group and the item info still here, so we can add it back to the list
						$updateItemGroup($("#" + itemGroup.groupId), itemGroup);
					} else {
						// No.. move the item to the inventory
						$("#items-list").append($(this));
					}
				} else {
					// No, then the unselected item should be removed from the DOM!
					$(this).remove();
				}
			}
		});

		if (!result.groupId) {
			$("#items-list").append($item);

			var itemDiv = document.getElementById(itemUID);
			observer.observe(itemDiv);
		}

		return $item;
	}

	function updateItemCount(groupId) {
		var count = $("#item-menu-select-" + groupId + " option").length;
		var countTemplate =`
<span class="badge badge-dark animated wobble" style="webkit-animation-duration: 0.3s; animation-duration: 0.3s; border: 1px solid #464646; box-shadow: 0px 0px 5px #00000066;">

    <h6 class="styled-counter" if="item-menu-count-` + groupId + `">` + count + `</h6>
</span>`;
		$("#item-menu-count-" + groupId).html(countTemplate);
	}

	function $updateItemGroup($group, result) {
		var itemUID = result.description.split("$")[1];
		var id = itemUID.split(":")[1];

		// Check our queue list if the item is already listed there
		var queuedItems = document.getElementById("dropQueueList").children;
		for (var i = 0; i < queuedItems.length; i++) {
			if (queuedItems[i].id === itemUID) {
				// ID is already queued.. get out of here
				return undefined;
			}
		}

		// Maybe the description of our item is corrupted
		// But more likely, the requested item is already listed in the queue
		if (!itemUID) return undefined;

		var specs = itemUID.split(":")[0] + " - ";
		if(result.groupData.specs) {
			var desc = result.description.replace(/\n|\r/gm, "");
			specs = "";
			result.groupData.specs.forEach((entry) => {
				if(desc.match(new RegExp(entry[0], 'gi')))
					specs += desc.replace(new RegExp(entry[0], 'gi'), entry[1]) + " - ";
			});
		}
		result.groupId = $group.attr("id");
		var optionTemplate =`<option value="` + itemUID + `" id="item-menu-option-` + result.groupId + `">` + specs + result.account+"/"+result.character + `</option>`;
		var $itemOption = $(optionTemplate);
		$itemOption.data("itemData", result);

		// First check if currently selected account location is same or ALL, then check if selected character location is the same or ALL
		if (
			($("#account-select").val() === "Show All" ||
				$("#account-select").val() === result.account) &&
			($("#character-select").val().split(".")[0] === "Show All" ||
				$("#character-select").val().split(".")[0] === result.character)
		) {
			$group.find("#item-menu-select-" + result.groupId).append($itemOption);
			updateItemCount(result.groupId);
		}

		return $itemOption;
	}

	function $addItemGroup(result) {
		var itemUID = result.description.split("$")[1];
		result.realm = CurrentRealm;
		result.itemid = itemUID;
		var templateid =
			CurrentRealm +
			"-" +
			result.account +
			"-" +
			result.character +
			"-" +
			itemUID;
		var id = itemUID.split(":")[1];

		var groupId = result.group + id;

		if (!document.getElementById(groupId)) {
			// Group doesn't exist yet.. create it
			var description = cleanDecription(result.description).split("<br/>");
			var title = description.shift();
			var count = 0;
			description = description.join("<br/>");
			var htmlTemplate =`
<div class="d-flex flex-row comment-row hidden p-l-0 m-t-0 m-b-0" aria-haspopup="true" id="` + groupId + `">
    <div class="p-2 ld-img-col" style="position:relative; display: flex; align-self: center; justify-content: center;">
        <div style="position:relative">
            <div id="png-` + groupId + `"><i>image</i></div>
            <div id="item-menu-count-` + groupId + `" style="position: absolute; top: -10px; right: calc(100% - 10px);">` + count + `</div>
        </div>
    </div>
    <div class="styled-item-menu" id="item-menu-` + groupId + `">
        <div style="height:100%;">
            <div>
                <input type="text" disabled placeholder="0"  id="item-menu-input-` + groupId + `"/>
                <i class="fas fa-share-square fa-2x" id="group-list-btn-` + groupId + `"></i>
            </div>
            <select multiple="multiple" id="item-menu-select-` + groupId + `" size></select>
        </div>
    </div>
    <div class="p-2 comment-text">
        <h6 class="-medium">` + title + `</h6>
        <span class="m-b-15 d-block">` + description + `</span>
    </div>
    <div class="comment-footer w-100" hidden>
        <span class="text-muted float-right">` + CurrentRealm + "/" + result.account + "/" + result.character + "/{" + itemUID + "}" + `</span>
    </div>
</div>`;

			var $itemGroup = $(htmlTemplate);

			let prevRatio = {};
			let handleIntersect = (entries, observer) => {
				entries.forEach((entry) => {
					//if (entry.intersectionRatio > 0.05) {
					let elem = entry.target;

					if (prevRatio[elem] > entry.intersectionRatio) {
						//console.log("Leaving:", elem);
						//$itemGroup.addClass("hidden");
					} else if (entry.intersectionRatio >= 0.1) {
						$itemGroup.removeClass("hidden");
						if (!result.itemImage) {
							try {
								var tmp = JSON.parse(result.image);
							} catch (e) {
								//console.warn("Old D2Bot# version active.. please update");
							}
							if (tmp) {
								result.itemImage = new ItemImage({
									image: tmp.code,
									itemColor: tmp.color,
									sockets: tmp.sockets,
									description: result.description
								});
								result.itemImage.onload = () => {
									result.itemImage.getItem().then((canvas) => {
										result.image = canvas.toDataURL();
										var imageTemplate = `<img src="` + result.image + `" alt="user" class="ld-item">`;
										var imgDiv = document.getElementById("png-" + groupId);
										imgDiv.innerHTML = imageTemplate;
									});
								};
							} else {
								var imageTemplate = `<img src="` + ((result.image.indexOf("data") != -1) ? "" : "data:image/jpeg;base64,") + result.image + `" alt="user" class="ld-item">`;
								var imgDiv = document.getElementById("png-" + groupId);
								imgDiv.innerHTML = imageTemplate;
							}
						}
					}
					prevRatio[elem] = entry.intersectionRatio;
					//}
				});
			};

			let observer = new IntersectionObserver(handleIntersect, {
				root: null,
				rootMargin: "100px",
				threshold: 0.4
			});

			$itemGroup.data("itemData", result);
			//$itemGroup.data("itemCount", count);

			function updateSelectCount(selected) {
				var i = 0;
				selected.find(":selected").each(function () {
					i++;
				});

				$("#item-menu-input-" + groupId).val(i);
			}
            
			$(document).on("click", function (event) {
                let selectBox = $("#item-menu-select-"+groupId);
                let groupMenu = $("#item-menu-" + groupId);
                
				if ($(event.target).closest($itemGroup).length) {
					// Show dropdown item selection
					groupMenu.show();
					// Using mousedown & move might be good for checking the change events in the input box :)
					selectBox.on("change mousedown mousemove", function() {
						updateSelectCount($(this));
					});
                    
                    var selectList = () => {
                        list = selectBox.val();
                        for (var item in list) {
                            selectBox.find("option[value='" + list[item] + "']").each(function () {
                                var item = $addItem($(this).data("itemData"));
                                item.trigger("click");
                                $(this).remove();
                                updateItemCount(groupId);
                            });
                        }
					};
                    
					selectBox.on("keydown", function (e) {
						var key = window.event?window.event.keyCode:e.which;
						if(key == 13)// the enter key code
                            selectList();
                    });
                    
                    $("#group-list-btn-" + groupId).on("click", selectList);
				} else if (!$(event.target).closest("#item-menu-select-" + groupId).length) {
					// Close the dropdown item selection if the user clicks outside of it
					selectBox.off();
					groupMenu.hide();
				}
			});

			// First check if currently selected account location is same or ALL, then check if selected character location is the same or ALL
			if (
				($("#account-select").val() === "Show All" ||
					$("#account-select").val() === result.account) &&
				($("#character-select").val().split(".")[0] === "Show All" ||
					$("#character-select").val().split(".")[0] === result.character)
			) {
				$("#items-list").append($itemGroup);
				var itemDiv = document.getElementById(groupId);
				observer.observe(itemDiv);
			}

			groupEntryCount += 1;
			return $itemGroup;
		}

		savedEntryCount += 1;
		return $("#" + groupId);
	}

	function buildregex(str) {
		var retRegex = str ? "(?=.*?(" + str + ")+)" : "";
		for (var entry in LimeConfig["SearchFilter"]) {
			if (regexFilter[entry]) retRegex += regexFilter[entry];
		}
		return retRegex;
	}

	function addItemstoList(limit=true, itemGroups=[], dummyData=(Object.keys(AccountsMap).length===0)) {
		var loader = document.getElementById("loader");
        loader.hidden = false;
        
        if(dummyData) {
            showNotification("Dummy Output", "No accounts found, dummy data will be used!", false);
            var items = JSON.parse(JSON.stringify(Items));
            var idx = 0;
            for (var key in Items) {
                items[key].description = items[key].description.replace(/\$(\d+):/gmi, "$" + (idx++).toString().padStart(8, '0') + ":");
            }
        }
		
		function queryCountables($account, $character, loadMoreItem, itemGroup={key: "all", value: { regex: "" } }) {
            //loader.hidden = false;
            var callback = function (err, results) {
				if (err) { console.log(err); return false; };
				var y = $(window).scrollTop();
				
				var ladder = CurrentGameClass == "Ladder";
				var sc = CurrentGameMode == "Softcore";
				var lod = CurrentGameType == "Expansion";
				
				// Here go the countable items by RegEx.. to extend the list simply append another entry to LimeConfig.js.
				// Countable items will receive an additional number field in the view (upper right corner of item box).
				for (var i in results) {
					if(results[i].description) {
						//if ((results[i].ladder == ladder) && (results[i].sc == sc) && (results[i].lod == lod)) {
							var item = {
								classid: results[i].description.split("$")[1].split(":")[1],
								uid: results[i].description.split("$")[1],
								location: results[i].description.split("$")[1].split(":")[2],
								x: results[i].description.split("$")[1].split(":")[3],
								y: results[i].description.split("$")[1].split(":")[4]
							};
							var itemID = results[i].description.split("$")[1].split(":")[1];
							results[i].group = itemGroup.key;
							results[i].groupData = itemGroup.value;
							if(!countables[item.uid])
								countables[item.uid] = []
							if(!countables[item.uid][itemGroup.key])
								countables[item.uid][itemGroup.key] = $addItemGroup(results[i]);
								

							$updateItemGroup(countables[item.uid][itemGroup.key], results[i]);
						//}
					}
				}
				
				$(window).scrollTop(y);
				//loader.hidden = true;

				roundTime.elapsed = new Date().getTime();
				if (loadMoreItem) {
					loadMoreItem();
				}
			}
            
            var regex = "^"+itemGroup.value.regex.toLocaleLowerCase()+buildregex($("#search-bar").val().toLocaleLowerCase())+".*$";
            
            if(!dummyData) {
                API.emit("fastQuery", regex, CurrentRealm, $account, $character, callback);
            } else {
                console.warn("No accounts found. Appending dummy group items..");
                setTimeout(() => {
                    var re = new RegExp(regex.replace(/\./g, "[\\s\\S]"), 'mi');
                    var list = [];
                    for (var key in items) {
                        if(re.exec(items[key].description)) {
                            list.push(items[key]);
                        }
                    }
                    
                    callback(null, list);
                }, 0);
            }
		}

		function doQuery($account, $character, loadMoreItem) {
            //loader.hidden = false;
            var callback = function (err, results) {
                if (err) {
                    console.log(err);
                    return;
                }
                var y = $(window).scrollTop();

                var item;
                var ladder = CurrentGameClass == "Ladder";
                var sc = CurrentGameMode == "Softcore";
                var lod = CurrentGameType == "Expansion";

                for (var i in results) {
                    if (results[i].description) {
                        //if ((results[i].ladder == ladder) && (results[i].sc == sc) && (results[i].lod == lod)) {
                        var itemID = results[i].description.split("$")[1].split(":")[1];
                        // Only the first countable item will be used
                        item = $addItem(results[i]);

                        itemCount += 1;
                        //}
                    }
                }

                $(window).scrollTop(y);
                //loader.hidden = true;

                roundTime.elapsed = new Date().getTime();
                if (loadMoreItem) {
                    loadMoreItem();
                }
            }
            
            var regex = $("#search-bar").val().toLocaleLowerCase();
			regex = (regex.length>0)?"^"+buildregex(regex)+".*$":null;
            
            if(!dummyData) {
                API.emit("fastQuery", regex, CurrentRealm, $account, $character, callback);
            } else {
                console.warn("No accounts found. Appending dummy items..");
                setTimeout(() => {
                    var re = new RegExp(regex.replace(/\./g, "[\\s\\S]"), 'mi');
                    var list = [];
                    for (var key in items) {
                        if(re.exec(items[key].description)) {
                            list.push(items[key]);
                        }
                    }

                    return callback(null, list);
                }, 0);
            }
		}

		var ended;
		var accountListid;
		var groupListid;
		var account = $("#account-select").val();
		var character = $("#character-select").val();

		var chr = "";
		var accList = [];
		var groupList = []; //"(";

		if (character == "Show All") {
			chr = "";
		} else {
			chr = character;
		}

		if (account == "Show All") {
			for (var i in AccountsMap) {
				accList.push(i);
			}
            
            if(accList.length === 0)
                accList.push("");
		} else {
			accList.push(account);
		}
		
		//console.log(itemGroups);
		
		for (var group in itemGroups) {
			groupList.push({ key: group, value: itemGroups[group] });
		}

		var groupCount = 0;
		var groupItemCount = 0;

		var roundTime = {
			start: new Date().getTime(),
			elapsed: new Date().getTime(),
			groups: 0,
			total: 0
		};

		accountListid = 0;
		groupListid = 0;
		ended = false;

		window.loadMoreItem = function () {
			var time_ms = roundTime.elapsed - roundTime.start;
			roundTime.total += time_ms;
			roundTime.start = new Date().getTime();

			//accountListid++;
			//console.log("Found Account:", accList[accountListid - 1], "After:", (time_ms / 1000).toFixed(3),"seconds");
			//if (accountListid == accList.length) {
				if (!ended) {
					$footer = `
<div>
    <p>End of Items on ` + accList.length + ` Accounts</p>
	<span class="m-b-15 d-block">` + itemCount + ` Items in total.
        <br>` + groupCount + ` item groups sorted after ` + (roundTime.groups / 1000).toFixed(3) + ` seconds. ` + groupItemCount + ` items were grouped.
        <br>Saved ` + savedEntryCount + ` list entries with ` + groupEntryCount +` group entries
        <br>After ` + (roundTime.total / 1000).toFixed(3) + ` seconds in total.
	</span>
</div>`;
					$("#load-more").html($footer);
					ended = true;
					window.loadMoreItem = false;

					loader.hidden = true;
				}

				return;
			//}

			//doQuery(accList[accountListid++], chr, itemCount > MAX_ITEM ? limit ? false : window.loadMoreItem : window.loadMoreItem);
		};

		window.loadAllCountable = function () {
			var time_ms = roundTime.elapsed - roundTime.start;
			roundTime.groups += time_ms;
			roundTime.start = new Date().getTime();

			accountListid++;
			//console.log("Found Group:", groupList[groupListid - 1], "After:", (time_ms / 1000).toFixed(3),"seconds");
			//if (accountListid == accList.length) {
				
				// Todo: use promises instead.. correct group not guaranteed on bulk search
				console.log("Finished group:", Object.keys(itemGroups)[groupListid++]);
				accountListid = 0;
				
				if (groupListid == groupList.length) {
					if (!ended) {
						var sortedGroups = [];
						Object.keys(countables).forEach((uid) => {
							Object.keys(countables[uid]).forEach((name) => {
								if (!sortedGroups[name]) {
									sortedGroups[name] = 0;
									groupCount++;
								}
								sortedGroups[name]++;
								groupItemCount++;
							});
						});

						window.loadAllCountable = false;
						accountListid = 0;

						console.log(
							"Finished collecting item groups:",
							sortedGroups,
							"\nFetching the rest now..."
						);

						//loader.hidden = true;

						roundTime.total += roundTime.groups;
						
						//for(var j = 0; j < accList.length; j++)
							doQuery(/*accList[j]*/"", chr, window.loadMoreItem);
					}

					return;
				}
				
				//for(var j = 0; j < accList.length; j++)
					//queryCountables(/*accList[j]*/"", chr, window.loadAllCountable, groupList[groupListid]);
			//}
		};
	
		for(var j = 0; j < groupList.length; j++)
			queryCountables(/*accList[j]*/"", chr, window.loadAllCountable, groupList[j]);
		//loader.hidden = true;
	}

	function pupulateAccountCharSelect(realm, core, type, ladder) {
		API.emit("accounts", realm, function (err, account) {
			if (err) {
				console.log(err);
				return;
			}
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
				};

				var charCheck = {
					ladder: charkey[2] == "l" ? true : false,
					lod: charkey[1] == "e" ? true : false,
					sc: charkey[0] == "s" ? true : false
				};

				if (
					charCheck.ladder == checks.ladder &&
					charCheck.lod == checks.lod &&
					charCheck.sc == checks.sc
				)
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
			refreshList(true);
		});
	}

	var add_row_index = 1;

	function start(loggedin) {
		if (loggedin) {
			$(".logged-in-out").fadeToggle("hide");
			$(".current-user-btn").html(
				"<i class='font-24 mdi mdi-account-circle current-user-btn'></i>" +
				cookie.data.username +
				"</a>"
			);
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
			refreshList(true);
		});

		$("#search-bar").off("change");
		$("#search-bar").change(function () {
			refreshList(true);
		});

		$("#character-select").off("change");
		$("#character-select").change(function () {
			refreshList(true);
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
		$("#game-realm")
			.find(".game-realm-" + CurrentRealm)
			.attr("selected", "selected");
		$(".game-realm-" + CurrentRealm).addClass(clickedClass);
		$(".game-type-" + CurrentGameType).addClass(clickedClass);
		$(".game-mode-" + CurrentGameMode).addClass(clickedClass);
		$(".game-class-" + CurrentGameClass).addClass(clickedClass);

		$("#game-realm").off("change");
		$("#game-realm").change(function () {
			CurrentRealm = $(this).find("option:selected").text().trim();
			window.localStorage.setItem("CurrentRealm", CurrentRealm);
			pupulateAccountCharSelect(
				CurrentRealm,
				CurrentGameMode,
				CurrentGameType,
				CurrentGameClass
			);
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
			pupulateAccountCharSelect(
				CurrentRealm,
				CurrentGameMode,
				CurrentGameType,
				CurrentGameClass
			);
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
			pupulateAccountCharSelect(
				CurrentRealm,
				CurrentGameMode,
				CurrentGameType,
				CurrentGameClass
			);
		});

		$(".game-class").off("click");
		$(".game-class").click(function () {
			if (CurrentGameClass == $(this).text().trim()) {
				return;
			}

			$(".game-class").removeClass(clickedClass);
			$(this).addClass(clickedClass);
			CurrentGameClass = $(this).text().trim().replace(" ", "");
			window.localStorage.setItem("CurrentGameClass", CurrentGameClass);
			pupulateAccountCharSelect(
				CurrentRealm,
				CurrentGameMode,
				CurrentGameType,
				CurrentGameClass
			);
		});
		pupulateAccountCharSelect(
			CurrentRealm,
			CurrentGameMode,
			CurrentGameType,
			CurrentGameClass
		);

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
				if (
					(scrollHeight - scrollPosition) / scrollHeight < 0.3 &&
					itemCount > MAX_ITEM
				) {
					if (window.loadMoreItem) {
						MAX_ITEM += 1000;
						window.loadMoreItem();
					}
				}

				if (cookie.data.loggedin && intCount++ > 20) {
					intCount = 0;
					API.emit("poll", function (err, msg) {
						if (msg.body === "empty") {
							return;
						}

						console.log(msg);
						msg.body = JSON.parse(msg.body);

						for (var i = 0; i < msg.body.length; i++) {
							var data = JSON.parse(msg.body[i].body);
							drops[data.hash].forEach(itemData => {
								console.log(itemData.itemid);
								//$("#" + itemData.itemid).remove();
								var item = document.getElementById(itemData.itemid);
								item.parentNode.removeChild(item);
							});
							
						}
						
						
						var itemTitles = [];
						
						drops[data.hash].forEach(itemData => {
							var description = cleanDecription(itemData.description).split("<br/>");
							itemTitles.push(description.shift());
						});
						
						// TODO: add data to logfile
						
						delete drops[data.hash];
						
						if(itemTitles.length > 0) {
							var titles = itemTitles.join("<br/>")
							if(data.data == "GameAction has completed task") {
								showNotification(data.data, "Items Dropped:<br/>" + titles, false);
							} else if(data.status) {
								if(data.status == "error" || data.status == "failed") {
									showNotification("<span class='color1'>" + data.data + "</span><br/>", "<span class='color1'>Not Dropped:</span><br/>" + titles, false);
								} else {
									showNotification(data.data, "Happy to be back :-)" , false);
								}
							} else {
								showNotification("<span class='color1'>" + data.data + "</span><br/>", "<span class='color1'>Not Dropped:</span><br/>" + titles, false);
							}
						} else {
							showNotification(data.data, "Happy to be back :-)" , false);
						}
						
						// Check our queue list if it is empty yet
						var queuedItems = document.getElementById("dropQueueList").children;
						// Queue is empty, so we finished :-)
						if(queuedItems.length == 0) {
							// TODO: store and link logfile
							var keys = Object.keys(drops);
							if(keys.length === 0) {
								showNotification("Finished", "All tasks have completed", false);
							} else {
								itemTitles = [];
								keys.forEach(key => {
									drops[key].forEach(itemData => {
										var description = cleanDecription(itemData.description).split("<br/>");
										itemTitles.push(description.shift());
									});
								});

								drops = {};
								
								showNotification("<span class='color1'>Fatal</span><br/>", "<span class='color1'>Something went wrong with the following items:</span><br/>" + titles, false);
							}
						}
					});
				}
			}, 100);
		});

		$("#log-accounts").off("click");
		$("#log-accounts").click(function () {
			var apipass = document.getElementById("log-accounts-api").value;

			if (!apipass || apipass.length < 1) {
				return;
			}

			for (var i = 0; i < add_row_index; i++) {
				var realm = document
					.getElementsByName("realm" + i)[0]
					.value.toLowerCase();
				var acc = document.getElementsByName("acc" + i)[0].value.toLowerCase();
				var pass = document
					.getElementsByName("pass" + i)[0]
					.value.toLowerCase();
				var chars = document
					.getElementsByName("chars" + i)[0]
					.value.toLowerCase();

				if (realm.length == 0 || acc.length == 0 || pass.length == 0) {
					continue;
				}

				if (chars.length == 0) {
					chars = [""];
				} else {
					chars = document
						.getElementsByName("chars" + i)[0]
						.value.toLowerCase()
						.split(/[\s,;: ]+/);
				}

				var hash = API.md5(realm + acc).toString();

				API.emit("put", "secure", hash + ".txt", pass, apipass, function (
					err
				) { });

				var GameInfo = {
					hash: hash,
					profile: cookie.data.username,
					action: "doMule",
					data: JSON.stringify({
						realm: realm,
						account: acc,
						chars: chars
					})
				};

				API.emit("gameaction", GameInfo, function (err) { });

				document.getElementsByName("acc" + i)[0].value = "";
				document.getElementsByName("pass" + i)[0].value = "";
				document.getElementsByName("chars" + i)[0].value = "";
			}

			$("#add-accounts-modal").modal("hide");
		});

		$(".launch-btn").off("click");
		$(".launch-btn").click(function () {
			var gamename = $("#gamename").val();
			var gamepass = $("#gamepass").val();
			drops = {};

			if (!gamename || gamename == "") {
				alert("GameName Required!");
				return;
			}

			$(".selected").each(function (i, v) {
				var $item = $(v);
				var item = $item.data("itemData");
				//delete item.image;
				//delete item.description;

				//$item.remove();

				// It appears this causes issues during realm selection otherwise
				item.realm = item.realm.toLowerCase();

				var hash = API.md5(item.realm + item.account.toLowerCase()).toString();

				if (!drops[hash]) {
					drops[hash] = [];
				}

				drops[hash].push(item);
			});

			var idx = 0;
			const start = Date.now();
			
			for (var d in drops) {
				if (drops.hasOwnProperty(d)) {
					let GameInfo = {
						hash: d,
						profile: cookie.data.username,
						action: "doDrop",
						data: JSON.stringify({
							gameName: gamename,
							gamePass: gamepass,
							items: drops[d]
						})
					};

					// TODO: make delay a config
					setTimeout((i) => {
						console.log("Scheduled drop", i, "after", ((Date.now() - start)/1000).toFixed(3),"seconds");
						console.log(GameInfo);
						API.emit("gameaction", GameInfo, function (err) { });
					}, idx * 1000, idx++);
					
				}
			}
		});

		$(".logout-btn").off("click");
		$(".logout-btn").click(function () {
			$(".logged-in-out").fadeToggle("hide");
			login("public", "public", cookie.data.server, function (loggedin) { });
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
		$("#add-accounts-modal").modal("show");
		while (add_row_index > 5) {
			$("#addr" + (add_row_index - 1)).html("");
			add_row_index--;
		}
	});

	$("#add-row").click(function () {
		$("#addr" + add_row_index).html(
			"<td data-label='Realm' class='ld-modal-col0'><select class='ld-select-add' name='realm" +
			add_row_index +
			"'><option>USEast</option><option>USWest</option><option>Europe</option><option>Asia</option></select></td><td data-label='Account' class='ld-modal-col1'><input class='ld-input-add' type='text' name='acc" +
			add_row_index +
			"' placeholder='Account' /></td><td data-label='Password' class='ld-modal-col2'><input class='ld-input-add' type='text' name='pass" +
			add_row_index +
			"' placeholder='Password'/></td><td data-label='Character(s)' class='ld-modal-col3'><input class='ld-input-add' type='text' name='chars" +
			add_row_index +
			"' placeholder='a, b, c or empty'/></td>"
		);
		$("#tab-logic").append('<tr id="addr' + (add_row_index + 1) + '"></tr>');
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
			console.log("Attempt logging in:", username, server);
			login(username, password, server, function (loggedin) {
				start(loggedin);
			});
		}
	});

	// $("#ld-login-api").off("change");
	// $("#ld-login-api").change(function () {
	// $("#login-ok-btn").trigger("click");
	// });
	$("#ld-login-user").off("keypress");
	$("#ld-login-user").keypress(function (event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if (keycode == "13") {
			console.log("User change");
			$("#login-ok-btn").trigger("click");
		}
	});
	$("#ld-login-pw").off("keypress");
	$("#ld-login-pw").keypress(function (event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if (keycode == "13") {
			console.log("Password change");
			$("#login-ok-btn").trigger("click");
		}
	});

	$("#imgur-upload-btn").click(function () {
		$("#upload-imgur-modal").modal("show");
		var queuedItems = document.getElementById("dropQueueList").children;
		var itemList = {};
		for (var i = 0; i < queuedItems.length; i++) {
			var item = $(queuedItems[i]).data("itemData");
			if (!item.itemImage)
				try {
					item.itemImage = JSON.parse(item.image);
				} catch (e) {
					//console.warn("Old D2Bot# version active.. please update");
				}
			itemList[i] = item;
		}

		var container = document.getElementById("itemScreenshot");
		window.ItemScreenshot.drawCompilation(itemList).then((template) => {
			container.innerHTML = template;
			let width = container.firstChild.style.width.split("px")[0];
			$("#imgurContainer").css("max-width", width + "px");
			/*setTimeout(function(){
				html2canvas(container.firstChild).then(canvas => {
					container.appendChild(canvas)
				});
			}, 500);*/
		});
	});
	
	$("#begin-upload-btn").click(function () {
		// Begin file upload
        $(this).attr("disabled", true);
		console.log("Uploading file to Imgur..");

		var settings = {
			async: true,
			crossDomain: true,
			processData: false,
			contentType: false,
			type: 'POST',
			url: "https://api.imgur.com/3/image",
			headers: {
				Authorization: 'Client-ID 24d18153402171f',
				Accept: 'application/json'
			},
			mimeType: 'multipart/form-data',
		    error: function(jqXHR, textStatus, errorMessage) {
				console.err(jqXHR,textStatus,errorMessage); // Optional
		    }
		};
		
		var container = document.getElementById("itemScreenshot");
        
        html2canvas(container.firstChild).then(canvas => {
            $(this).removeAttr("disabled");
            $('#upload-imgur-modal').modal('hide');
			var formData = new FormData();
			formData.append("image", canvas.toDataURL().split("data:image/png;base64,")[1]);
			settings.data = formData;
			$.ajax(settings).done(function(response) {
                $('#upload-imgur-modal').modal('hide');
				var imgurResponse = JSON.parse(response);
				console.log(imgurResponse);
				showNotification("Uploaded Image to Imgur", `<a target='_blank' rel='noopener noreferrer' href='` + imgurResponse.data.link + `' style='color:#2962ff'>` + imgurResponse.data.link + `</a>`, false);
			});
		});
	});

	initialize();
	showNotification("Notification", "Welcome to Lime Drop!", true);
	API.emit("poll", function () { });
});