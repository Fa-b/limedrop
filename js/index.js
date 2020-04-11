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
  var MAX_ITEM = 1000;
  var countables = [];

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
      var htmlTemplate =
        `
            <span class="form-filter-element">
                <label class="form-filter-label" for="search-data-` +
        name +
        `" id="label-` +
        name +
        `">` +
        name +
        `:</label>
                <div class="form-filter">
                    <input class="form-filter-input" type="text" id="search-data-` +
        name +
        `" name="search-data-` +
        name +
        `"/>
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
      var htmlTemplate =
        `
            <span class="form-filter-element">
                <label class="form-filter-label" for="search-data-` +
        name +
        `" id="label-` +
        name +
        `">` +
        name +
        `:</label>
                <div class="form-filter">
                    <input type="checkbox" id="search-data-` +
        name +
        `" name="search-data-` +
        name +
        `"/>
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
      var htmlTemplate =
        `
            <span class="form-filter-element">
                <label class="form-filter-label" for="search-data-` +
        name +
        `" id="label-` +
        name +
        `">` +
        name +
        `:</label>
                <div class="form-filter">
                    <select multiple id="search-data-` +
        name +
        `" name="search-data-` +
        name +
        `"/>
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
        $("#search-data-" + name).append(
          `<option value="` +
          optionList[option] +
          `">` +
          optionList[option] +
          `</option>`
        );
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
    var template =
      `<a class="` +
      (perm ? `always-there ` : "") +
      `ld-notify-card link" style="border-top:1px solid #3c3c3c">
    <div class="d-flex no-block align-items-center p-10">
      <span class="btn btn-success btn-circle">
        <i class="ti-calendar"></i>
      </span>
      <div class="m-l-10">
        <h5 class="m-b-0">` +
      head +
      `</h5>
        <span class="mail-desc">` +
      text +
      `</span>
      </div>
    </div>
    </a>`;

    $("#ldNotify").append($(template));
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
    addItemstoList(limit, LimeConfig["ItemGroup"]);
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
    var htmlTemplate =
      `
    <div class="d-flex flex-row comment-row hidden p-l-0 m-t-0 m-b-0" id="` +
      itemUID +
      `">
      <div class="p-2 ld-img-col" id="png-` +
      itemUID +
      `">
        image
      </div>
      <div class="comment-text w-100">
        <h6 class="-medium">` +
      title +
      `</h6>
        <span class="m-b-15 d-block">` +
      description +
      `
        </span>
        <div class="comment-footer">
          <div class="flex">
            <span class="text-muted float-right">` +
      CurrentRealm +
      "/" +
      result.account +
      "/" +
      result.character +
      "/{" +
      itemUID +
      "}" +
      `</span>
            <!--<button type="button" class="btn btn-cyan btn-sm">Helm</button>
            <button type="button" class="btn btn-success btn-sm">Armor</button>-->
          </div>
        </div>
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
                  var imageTemplate =
                    `<img src="` +
                    result.image +
                    `" alt="user" class="ld-item">`;
                  var imgDiv = document.getElementById("png-" + itemUID);
                  imgDiv.innerHTML = imageTemplate;
                });
              };
            } else {
              var imageTemplate =
                `<img src="` + ((result.image.indexOf("data") != -1)?"":"data:image/jpeg;base64,") + 
                result.image +
                `" alt="user" class="ld-item">`;
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
	  
	  $("#dropQueueList").animate({scrollTop:$("#dropQueueList")[0].scrollHeight}, 10);
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
    var countTemplate =
      `<h6 class="styled-counter" if="item-menu-count-` +
      groupId +
      `">` +
      count +
      `</h6>`;
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

    result.groupId = $group.attr("id");
    var optionTemplate =
      `<option value="` +
      itemUID +
      `" id="item-menu-option-` +
      result.groupId +
      `">` +
      itemUID.split(":")[0] +
      " - " +
      result.account +
      "/" +
      result.character +
      `</option>`;

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
      var htmlTemplate =
        `
      <div class="d-flex align-items-start hidden p-l-0 m-t-0 m-b-0" aria-haspopup="true" id="` +
        groupId +
        `">
        <div class="pt-3 pl-3 pb-2 pr-0" id="png-` +
        groupId +
        `">image</div>
          <span class="badge badge-secondary mt-2"><div id="item-menu-count-` +
        groupId +
        `">` +
        /*(count?" ["+*/
        count /*+"]":"")*/ +
        `</div></span>
            <div class="styled-item-menu" id="item-menu-` +
        groupId +
        `">
              <input type="number" placeholder="0"  id="item-menu-input-` +
        groupId +
        `"/>
              <select multiple="multiple" size='10'  id="item-menu-select-` +
        groupId +
        `"></select>
            </div>
        <div class="p-2 comment-text w-100">
          <h6 class="-medium">` +
        title +
        `</h6>
          <span class="m-b-15 d-block">` +
        description +
        `</span>
          <div class="comment-footer">
            <div class="flex">
              <span class="text-muted">` +
        result.realm +
        "/" +
        result.account +
        "/" +
        result.character +
        "/{" +
        result.itemid +
        "}" +
        `</span>
              <!--<button type="button" class="btn btn-cyan btn-sm">Helm</button>
              <button type="button" class="btn btn-success btn-sm">Armor</button>-->
            </div>
          </div>
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
                    var imageTemplate =
                      `<img src="` +
                      result.image +
                      `" alt="user" class="ld-item">`;
                    var imgDiv = document.getElementById("png-" + groupId);
                    imgDiv.innerHTML = imageTemplate;
                  });
                };
              } else {
                var imageTemplate =
                  `<img src="` + ((result.image.indexOf("data") != -1)?"":"data:image/jpeg;base64,") + 
                  result.image +
                  `" alt="user" class="ld-item">`;
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
        if ($(event.target).closest($itemGroup).length) {
          // Show dropdown item selection
          $("#item-menu-" + groupId).show();
          // Using mousedown & move might be good for checking the change events in the input box :)
          $("#item-menu-select-" + groupId).on(
            "change mousedown mousemove",
            function () {
              updateSelectCount($(this));
            }
          );
          $("#item-menu-select-" + groupId).on("keydown", function (e) {
            var key = window.event?window.event.keyCode:e.which;
            if (key == 13) {
              // the enter key code
              list = $(this).val();
              for (var item in list) {
                $(this)
                  .find("option[value='" + list[item] + "']")
                  .each(function () {
                    var item = $addItem($(this).data("itemData"));
                    item.trigger("click");
                    $(this).remove();
                    updateItemCount(groupId);
                  });
              }
            }
          });
        } else if (
          !$(event.target).closest("#item-menu-select-" + groupId).length
        ) {
          // Close the dropdown item selection if the user clicks outside of it
          $("#item-menu-select-" + groupId).off();
          $("#item-menu-" + groupId).hide();
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

  function addItemstoList(limit = true, group = []) {
    var loader = document.getElementById("loader");

    function queryCountables(
      $account,
      $character,
      loadMoreItem,
      regex = ["all", ""]
    ) {
      API.emit(
        "query",
        "^" +
        regex[1].toLocaleLowerCase() +
        buildregex($("#search-bar").val().toLocaleLowerCase()) +
        ".*$",
        CurrentRealm,
        $account,
        $character,
        function (err, results) {
          if (err) {
            console.log(err);
            return false;
          }
          var y = $(window).scrollTop();

          var ladder = CurrentGameClass == "Ladder";
          var sc = CurrentGameMode == "Softcore";
          var lod = CurrentGameType == "Expansion";

          // Here go the countable items by RegEx.. to extend the list simply append another entry to LimeConfig.js.
          // Countable items will receive an additional number field in the view (upper right corner of item box).
          for (var i in results) {
            if (results[i].description) {
              //if ((results[i].ladder == ladder) && (results[i].sc == sc) && (results[i].lod == lod)) {
              var item = {
                classid: results[i].description.split("$")[1].split(":")[1],
                uid: results[i].description.split("$")[1],
                location: results[i].description.split("$")[1].split(":")[2],
                x: results[i].description.split("$")[1].split(":")[3],
                y: results[i].description.split("$")[1].split(":")[4]
              };
              var itemID = results[i].description.split("$")[1].split(":")[1];
              results[i].group = regex[0];
              if (!countables[item.uid]) countables[item.uid] = [];
              if (!countables[item.uid][regex[0]])
                countables[item.uid][regex[0]] = $addItemGroup(results[i]);

              $updateItemGroup(countables[item.uid][regex[0]], results[i]);
              //}
            }
          }

          $(window).scrollTop(y);

          roundTime.elapsed = new Date().getTime();
          if (loadMoreItem) {
            loadMoreItem();
          }
        }
      );
    }

    function doQuery($account, $character, loadMoreItem) {
      API.emit(
        "query",
        "^" + buildregex($("#search-bar").val().toLocaleLowerCase()) + ".*$",
        CurrentRealm,
        $account,
        $character,
        function (err, results) {
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
      );
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
    } else {
      accList.push(account);
    }

    for (var i in group) {
      groupList.push([i, group[i][0]]);
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

      //console.log("Found Account:", accList[accountListid - 1], "After:", (time_ms / 1000).toFixed(3),"seconds");
      loader.hidden = false;
      if (accountListid == accList.length) {
        if (!ended) {
          $footer =
            `
    <div><p>End of Items on all Accounts</p>
      <span class="m-b-15 d-block">` +
            itemCount +
            ` Items in total.<br>
                ` +
            groupCount +
            ` item groups sorted after ` +
            (roundTime.groups / 1000).toFixed(3) +
            ` seconds. ` +
            groupItemCount +
            ` items were grouped.<br>
        Saved ` +
            savedEntryCount +
            ` list entries with ` +
            groupEntryCount +
            ` group entries<br>
                After ` +
            (roundTime.total / 1000).toFixed(3) +
            ` seconds in total.
      </span>
    </div>`;
          $("#load-more").html($footer);
          ended = true;
          window.loadMoreItem = false;

          loader.hidden = true;
        }

        return;
      }

      doQuery(
        accList[accountListid++],
        chr,
        itemCount > MAX_ITEM ?
          limit ?
            false :
            window.loadMoreItem :
          window.loadMoreItem
      );
    };

    window.loadAllCountable = function () {
      var time_ms = roundTime.elapsed - roundTime.start;
      roundTime.groups += time_ms;
      roundTime.start = new Date().getTime();

      //console.log("Found Group:", groupList[groupListid - 1], "After:", (time_ms / 1000).toFixed(3),"seconds");
      loader.hidden = false;
      //if (accountListid == accList.length) {
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

          loader.hidden = true;

          roundTime.total += roundTime.groups;

          doQuery(
            accList[accountListid++],
            chr,
            itemCount > MAX_ITEM ?
              limit ?
                false :
                window.loadMoreItem :
              window.loadMoreItem
          );
        }

        return;
      }

      queryCountables(
        "",
        chr,
        window.loadAllCountable,
        groupList[groupListid++]
      );
    };

    if (Object.keys(AccountsMap).length === 0) {
      console.warn("No accounts found. Appending dummy data..");
      var items = Items;

      for (var key in items) {
        console.log(items[key]);
        $addItem(items[key]);
      }
    } else {
      queryCountables("", chr, window.loadAllCountable, groupList[groupListid++]);
    }
    loader.hidden = true;
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
              showNotification("Game Action", data.data, false);
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
      var drops = {};

      if (!gamename || gamename == "") {
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
      });

      for (var d in drops) {
        if (drops.hasOwnProperty(d)) {
          var GameInfo = {
            hash: d,
            profile: cookie.data.username,
            action: "doDrop",
            data: JSON.stringify({
              gameName: gamename,
              gamePass: gamepass,
              items: drops[d]
            })
          };

          API.emit("gameaction", GameInfo, function (err) { });
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
		  console.warn("Old D2Bot# version active.. please update");
		}
      itemList[i] = item;
    }

    var container = document.getElementById("itemScreenshot");
    window.ItemScreenshot.drawCompilation(itemList).then((image) => {
      container.innerHTML = `<img src="` + image.toDataURL() + `"/>`;
    });
  });

  initialize();
  showNotification("Notification", "Welcome to Lime Drop!", true);
  API.emit("poll", function () { });
});