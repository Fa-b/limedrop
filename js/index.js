var $ = window.jQuery;

var LimeConfig = require(["LimeConfig"]);

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
	var groupItemCount = 0;
	var MAX_ITEM = 1000;
    var roundTime = [];
	var countables = [];

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
        $(".app-search").toggle(0);
        
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
                regex.push([new RegExp(data.regex[entry][0], 'g'), data.regex[entry][1]]);
            }
            $formFilter.data("regex", regex);
            $formFilter.data("name", name);
            $formFilter.data("inputmask", mask);
            $formFilter.data("validate", function(value) {
                $("#search-data-" + name).removeClass("valid");
                
                if($formFilter.data("inputmask").exec(value)) {
                    $("#search-data-" + name).addClass("valid");
                    var output = value;
                    var regList = $formFilter.data("regex");
                    for (var regex in regList) {
                        output = output.replace(regList[regex][0], regList[regex][1]);
                    }
                    $formFilter.attr('title', $formFilter.data("name") + " is: \'" + value + "\'\n\t => (" + output + ")");
                }                    
            });
            
            $formFilter.on("keypress keyup", function(event){
                var str = $("#search-data-" + name).val();
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                    
                    while(!$(this).data("inputmask").exec(str)) {
                        if(str.length === 0) {
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
                regex.push([new RegExp(data.regex[entry][0], 'g'), data.regex[entry][1]]);
            }
            $formFilter.data("regex", regex);
            $formFilter.find("#search-data-" + name).indeterminate = true;
            $formFilter.data("name", name);
            $formFilter.data("setState", function(state) {
                if(data.checked === state) {
                    $("#search-data-" + name).prop("checked", true);
                    $formFilter.data("state", "checked");
                } else if(data.unchecked === state) {
                    $("#search-data-" + name).prop("checked", false);
                    $formFilter.data("state", "unchecked");
                } else if(data.indeterminate === state) {
                    $("#search-data-" + name).prop("indeterminate", true);
                    $formFilter.data("state", "indeterminate");
                }
                
                var output = state;
                var regList = $formFilter.data("regex");
                for (var regex in regList) {
                    output = output.replace(regList[regex][0], regList[regex][1]);
                }
                
                $formFilter.attr('title', name + " is: \'" + state + "\'\n\t => (" + output + ")");
                $("#label-" + name).text(state + ":");
            });
            
            $formFilter.on("click", function(event){
                var next = {"checked":"unchecked", "unchecked":"indeterminate", "indeterminate":"checked"};
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
                regex.push([new RegExp(data.regex[entry][0], 'g'), data.regex[entry][1]]);
            }
            $formFilter.data("regex", regex);
            $formFilter.data("name", name);
            $formFilter.data("values", data.values);
            
            $("#search-group").append($formFilter);
            
            var optionList = $formFilter.data("values")
            for (var option in optionList) {
                $("#search-data-" + name).append(`<option value="` + optionList[option] + `">` + optionList[option] + `</option>`);
            }
            
            
            $("#search-data-" + name).on("change", function(e, param) {
                var value = "";
                var output;
                var selected = $("#search-data-" + name).val();
                for (var str in selected) {
                    value += selected[str] + ", ";
                }
                
                output = value.replace(/, /g, ",")
                output = output.substring(0, output.lastIndexOf(","));
                

                var regList = $formFilter.data("regex");
                for (var regex in regList) {
                    output = output.replace(regList[regex][0], regList[regex][1]);
                }
                
                
                
                $formFilter.attr('title', name + " is: \'" + value + "\'\n\t=> (" + output + ")");
            });

            $("#search-data-" + name).val(data.default);
            
            $("#search-data-" + name).chosen({ rtl: true, placeholder_text_multiple: "Select " + name, display_selected_options: false, hide_results_on_select: false, width: '100% !important' });
            $("#search-data-" + name).trigger("change");
            
            // Check validity on init
            //$("#search-data-" + name).val(data.default);
            //$formFilter.data("validate")(data.default);
        }
        
        for (var entry in LimeConfig["SearchFilter"]) {
            var filter = LimeConfig["SearchFilter"][entry];
            //console.log(filter);
            if(filter.type === "text") { // Textfield
                appendTextField(entry, filter);
                
            } else if(filter.type === "tristate") {   // Tristate Checkbox
                appendCheckBox(entry, filter);
            } else if(filter.type === "multi") {   // Tristate Checkbox
                appendSelectBox(entry, filter);
            } else {
                console.info("Invalid Config Entry for Search Filters");
            }
        }
        
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
        
        $(".search-group").toggle(0);

		//refreshList();
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

			cookie.data.loggedin = (username !== "public") ? true : false;
			// Don't override Cookie with default..
			if (username !== "public") {
				cookie.data.server = server;
				cookie.data.username = username;
				cookie.data.session = result;
				cookie.save();
			}
			// Pleeeease do not overwrite custom server config after reload...
			$("#ld-login-api").val(cookie.data.server);
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

	function refreshList(limit=true) {
		$("#items-list").html("");
		itemCount = 0;
		groupItemCount = 0;
		MAX_ITEM = 1000;
        roundTime = [];
		countables = [];
		
		console.log("refresh");
		// Get Regular Expressions from LimeConfig.js and use these to filter countables
        // Only when logged in..
        //if(cookie.data.loggedin)
            addItemstoList(limit, LimeConfig["ItemGroup"]);
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
		
		// Check our queue list if the item is already listed there
		$("#dropQueueList div").each( function() {
			var data = $(this).data("itemData");
			// if there is the property itemData and the ID's match
			if(data && data.itemid === itemUID) {
				// ID is already queued.. get out of here
				itemUID = undefined;
				return undefined;
			}
		});
		
		// Maybe the description of our item is corrupted
		// But more likely, the requested item is already listed in the queue
		if(!itemUID)
			return undefined;
		
		var itemID = itemUID.split(":")[1]
		// Check if item is not already listed as a countable, unless it is just 
		// a group list entry
		if(!result.groupId && countables[itemID] != undefined)
			return undefined;
		
		

		var description = cleanDecription(result.description).split("<br/>");
		var title = description.shift();
		description = description.join("<br/>")

		result.realm = CurrentRealm;
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
		$item.click(function () {
			$(this).toggleClass("selected");
			
			if($(this).hasClass("selected")) {
				$("#dropQueueList").append($(this));
			} else { // Unselecting an item in the queue should place it back to inventory
				// First check if currently selected account location is same or ALL, then check if selected character location is the same or ALL
				if( ($("#account-select").val() === "Show All" || $("#account-select").val() === $(this).data("itemData").account) &&
					($("#character-select").val().split(".")[0] === "Show All" || $("#character-select").val().split(".")[0] === $(this).data("itemData").character)
				) {
					// Yes, then check if it is a group item
					var itemGroup = $(this).data("itemData");
					if(itemGroup.groupId) {
						// first remove it from the DOM
						$(this).remove();
						// we have the group and the item info still here, so we can add it back to the list
						$updateItemGroup($("#items-list").each(function() {if($(this).data("itemData") && $(this).data("itemData").itemid===itemGroup.itemid) { return $(this); }}), result);
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
		
		if(!result.groupId)
			$("#items-list").append($item);
		
		return $item;
	}
	
	function updateItemCount(id) {
		var count = $('#item-menu-select-'+id+" option").length;
		var countTemplate = `<h6 if="item-menu-count-` + id + `">` + "[x"+count+"]" + `</h6>`;
		$("#item-menu-count-"+id).html(countTemplate);
	}
	
	function $updateItemGroup($group, result) {
		var itemUID = result.description.split("$")[1];
		var id = itemUID.split(":")[1]
		
		// Check our queue list if the item is already listed there
		$("#dropQueueList div").each( function() {
			var data = $(this).data("itemData");
			// if there is the property itemData and the ID's match
			if(data && data.itemid === itemUID) {
				// ID is already queued.. get out of here
				itemUID = undefined;
				return undefined;
			}
		});
		
		// Maybe the description of our item is corrupted
		// But more likely, the requested item is already listed in the queue
		if(!itemUID)
			return undefined;
		
		var optionTemplate =`<option value="` + itemUID + `" id="item-menu-option-` + id + `">` + itemUID.split(":")[0] + " - " + result.account+"/"+result.character + `</option>`;
		
		var $itemOption = $(optionTemplate);
		result.groupId = $group.attr("id");
		$itemOption.data("itemData", result);
		$group.find('#item-menu-select-'+id).append($itemOption);
		
		updateItemCount(id);
					
		return $itemOption;
	}
	
	function $addItemGroup(result) {
		var itemUID = result.description.split("$")[1];
		result.realm = CurrentRealm;
		result.itemid = itemUID;
		var templateid = CurrentRealm + "-" + result.account + "-" + result.character + "-" + itemUID;
		var id = itemUID.split(":")[1]

		// Group doesn't exist yet.. create it
		var description = cleanDecription(result.description).split("<br/>");
		var title = description.shift();
		var count = 0;
		description = description.join("<br/>");
		
		var htmlTemplate = `
		<div class="d-flex flex-row comment-row p-l-0 m-t-0 m-b-0" aria-haspopup="true" id="` + templateid + `">
			<div class="p-2 ld-img-col">
				<img src="data:image/jpeg;base64, ` + result.image + `" alt="user" class="ld-item">
			</div>
			<div class="comment-text w-100">
				<h6 class="-medium">` + title + `</h6>
				<span class="m-b-15 d-block">` + description + `</span>
				<div class="comment-footer">
					<div class="flex">
						<span class="text-muted float-right">` + result.realm + "/" + result.account + "/" + result.character + "/{" + result.itemid + '}' + `</span>
						<!--<button type="button" class="btn btn-cyan btn-sm">Helm</button>
						<button type="button" class="btn btn-success btn-sm">Armor</button>-->
					</div>
				</div>
			</div>
			<div>
				<h6 id="item-menu-count-` + id + `">` + (count?" ["+count+"]":"") + `</h6>
				<div class="item-menu" id="item-menu-` + id + `">
					<input type="number" placeholder="0" id="item-menu-input-` + id + `" style="width:100%;"/>
					<select multiple="multiple" size='10' class="dropdown-menu-right" id="item-menu-select-`+ id + `"></select>
				</div>
			</div>
		</div>`;
		
		var $itemGroup = $(htmlTemplate);
		$itemGroup.data("itemData", result);
		$itemGroup.data("itemCount", count);
		
		function updateSelectCount(selected) {
			var i = 0;
			selected.find(":selected").each(function() {
				i++;
			});
			
			$("#item-menu-input-"+id).val(i);
		}

		$(document).on('click', function(event) {
			if ($(event.target).closest($itemGroup).length) {
				// Show dropdown item selection
				$("#item-menu-"+id).show();
                // Using mousedown & move might be good for checking the change events in the input box :)
				$("#item-menu-select-"+id).on("change mousedown mousemove", function() {
					updateSelectCount($(this));
				});
				$("#item-menu-select-"+id).on('keypress', function(e){
					var key = e.which;
					if(key == 13)// the enter key code
					{
						list = $(this).val();
						for (var item in list) {
							$(this).find("option[value='" + list[item] + "']").each(function() {
								var item = $addItem($(this).data("itemData"));
								item.trigger("click");
								$(this).remove();
								updateItemCount(id);
							});
						}
					}		

				});

			} else if (!$(event.target).closest("#item-menu-select-"+id).length) {
				// Close the dropdown item selection if the user clicks outside of it
                $("#item-menu-select-"+id).off();
				$("#item-menu-"+id).hide();
			}
		});
		
		

		$("#items-list").append($itemGroup);

		return $itemGroup;
	}

	function buildregex(str) {
		return str;
	}

	function addItemstoList(limit=true, group=[]) {
		var htmlTemplate = `
		<div>
			<div class="d-flex flex-column" style="text-align: center;justify-content: center;align-items: center;">
			<h2>Loading Items</h2>
			<div class="d-flex ld-loader" id="loader"></div>
			</div>
		</div>`;
		
		$loader = $(htmlTemplate);
		$("#items-list").append($loader);
		
		function queryCountables($account, $character, loadMoreItem, regex) {
			API.emit("query", buildregex($("#search-bar").val().toLocaleLowerCase()+".*?"+regex), CurrentRealm, $account, $character, function (err, results) {
				if (err) { console.log(err); return; };
				var y = $(window).scrollTop();
				
				var item;
				
				// Here go the countable items by RegEx.. to extend the list simply append another entry to countables.json.
				// Countable items will receive an additional number field in the view (upper right corner of item box).
				for (var i in results) {
					if(results[i].description) {
						var itemID = results[i].description.split("$")[1].split(":")[1];
						if(!countables[itemID])
							countables[itemID] = $addItemGroup(results[i]);

						$updateItemGroup(countables[itemID], results[i]);
						
						groupItemCount += 1;
						itemCount += 1;
					}
				}
				
                $(window).scrollTop(y);
                
				$loader.hide();
				
				if (loadMoreItem) {
					loadMoreItem(err);
				}
			});
		}
		
		function doQuery($account, $character, loadMoreItem) {
			API.emit("query", buildregex($("#search-bar").val().toLocaleLowerCase()), CurrentRealm, $account, $character, function (err, results) {
				if (err) { console.log(err); return; };
				var y = $(window).scrollTop();

				var item;
				
				for (var i in results) {
                    if(results[i].description) {
                        var itemID = results[i].description.split("$")[1].split(":")[1];
                        // Only the first countable item will be used
                        item = $addItem(results[i]);
                        
                        itemCount += 1;
                    }
				}
				
				$(window).scrollTop(y);
				
				$loader.hide();
				
				var temp = roundTime[roundTime.length - 1];
				roundTime[roundTime.length - 1] = (new Date().getTime() - temp);
				if (loadMoreItem) {
					loadMoreItem(err);
				}
			});
		}
		
		$loader.hide();

		var ended;
		var accountListid;
		var account = $("#account-select").val();
		var character = $("#character-select").val();

		var chr = "";
		var accList = [];
		var groupList = "(";
		
		if (character == "Show All") {
			chr = "";
		} else {
			chr = character;
		}
		
		if (account == "Show All") {
			for (var i in AccountsMap) {
				accList.push(i);
			}
		} else {
			accList.push(account);
		}
		
		for (var i in group) {
			groupList += "("+group[i]+")|";
		}
		
		groupList = groupList.substring(0, groupList.lastIndexOf("|"));
		groupList += ")";

		var groupCount = 0;
		var start = new Date().getTime();
		var elapsed = start;
		accountListid = 0;
		groupListid = 0;
		ended = false;
		
		window.loadMoreItem = function (err=null) {
			roundTime.push(new Date().getTime());
			$loader.show();
			
			if (accountListid == accList.length) {
				
				if (!ended) {
					
					// Last element is invalid (not a time difference)
					roundTime.pop();
                    
					var total = 0;
					for (var i in roundTime) {
						total += roundTime[i];
					}
					
					$footer = `
		<div><p>End of Items on all Accounts</p>
			<span class="m-b-15 d-block">` + itemCount + ` Items in total.<br>
                ` + groupCount + ` Countable entries after `+ (elapsed / 1000).toFixed(3) + ` seconds. Saved ` + (groupItemCount - groupCount) + ` Entries by grouping.<br>
                After ` + ((total + elapsed) / 1000).toFixed(3) + ` seconds in total.
			</span>
		</div>`;
					$("#load-more").html($footer);
					ended = true;
					window.loadMoreItem = false;
					
					$loader.hide();
				}
				
				return;
			}

			var acc = accList[accountListid++];

			doQuery(acc, chr, itemCount > MAX_ITEM ? (limit ? false : window.loadMoreItem) : window.loadMoreItem);
		};
		
		window.loadAllCountable = function (err=null) {
			$loader.show();
			
			if (accountListid == accList.length) {
                if (!ended) {
                    
                    Object.keys(countables).forEach(id => {
                        groupCount += 1;
                    });

                    window.loadAllCountable = false;
                    accountListid = 0;
                    
                    console.log("Finished collecting item groups", group, "Fetching the rest now...");

                    $loader.hide();
                    
					elapsed = new Date().getTime() - start;
                    window.loadMoreItem();
                }
                
                return;
			}
			

			//var regex = groupList[groupListid++];

			// var acc = account;
			// if (acc == "Show All")
				// acc = ""
			var acc = accList[accountListid++];
			
			queryCountables(acc, chr, window.loadAllCountable, groupList);
		};
		
		window.loadAllCountable();		
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
			refreshList(false);
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
                
                // It appears this causes issues during realm selection otherwise
                item.realm = item.realm.toLowerCase();

				var hash = API.md5(item.realm + item.account.toLowerCase()).toString();

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
