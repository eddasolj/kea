(function(){function q(a){0<$(a.target).parents(".js-menuitem--dropdown").length||(r(),$(".js-menuitem--dropdown > div").hide(),g&&$(".js-menuitem--dropdown.active div.active-shadow").toggle(),g=!1)}function t(a){r();$(".js-menuitem--dropdown > div").hide();g&&$(".js-menuitem--dropdown.active div.active-shadow").toggle();g=!1}function B(a){0===$(a.target).parents(".c-dropdown").length&&$(this).parents(".js-menuitem--dropdown").find(".c-dropdown-menu").hide()}function C(a){a.keyCode==D&&(a.preventDefault(),
a.data.dropdown.hide(),$(".js-menuitem--dropdown.active div.active-shadow").show(),g=!1,a.data.button.focus())}function r(){$("body").get(0).removeEventListener(l,q,!0);$(document).off(u,t)}function v(a){a.keyCode!=w||a.shiftKey||(a.preventDefault(),a.data.focus())}function x(a){a.keyCode==w&&a.shiftKey&&(a.preventDefault(),a.data.focus())}function n(a){dropdownAttribute=a.data().dropdown;if(dropdownAttribute===h.Projects||dropdownAttribute===h.YourChildren)return a.find("a:not(.c-dropdownMenu__skiplink):first");
if(dropdownAttribute===h.Groups)return a.find("h3:first");if(dropdownAttribute===h.Courses){var b=a.find(".c-search")[0],c=a.find(".c-dropdown:visible")[0],d=a.find("#course-add-btn:visible")[0],e=a.find(".c-dropdown--emptyState:visible")[0];return b&&"hidden"!==b.style.visibility?$(b.children[0]):c&&"hidden"!==b.style.visibility?$(c.children[0]):d?$(d):e?$(e):a.find('li[role="menuitem"] > a').first()}return null}function y(a,b){var c=!1;a.each(function(a,e){-1==$(e).data().title.toString().toLowerCase().indexOf(b)?
$(e).hide():($(e).show(),c=!0)});return c}function z(a,b){$column=$(b);$column.show()}function A(a,b){$column=$(b);$column.hide()}function m(a,b,c){var d=coursesSortDropdownScope.kpi;CommonFunctions.measureKpi(d.url,d.section,d.measures[b],d.context);c=c||!1;a.sort(function(a,d){a=a.getAttribute("data-"+b).toLowerCase();d=d.getAttribute("data-"+b).toLowerCase();"title"!==b&&(a=parseInt(a),d=parseInt(d));if(c){if(a>d)return-1;if(a<d)return 1}else{if(a>d)return 1;if(a<d)return-1}return 0})}var p=!1,
D=CCL.CommonConstants.keyCodes.escape,E=CCL.CommonConstants.keyCodes.enter,w=CCL.CommonConstants.keyCodes.tab,F=CCL.CommonConstants.mediaScreenSizes.mobile,g,k=$(".js-menuitem--dropdown"),h={Courses:"courses",Groups:"data-projects-dropdown",Projects:"data-project-dropdown",YourChildren:"data-children-dropdown"};document.hideDropDowns=hideDropDowns=function(){$(".js-menuitem--dropdown > div").hide();$(".js-menuitem--dropdown.active div.active-shadow").show();$("ul.l-main-menu-items li.l-tab-menu-text a.l-main-menu-lnk").removeClass("hover")};
$(".js-menuitem--dropdown > button").on("keyup",function(a){a.which==CCL.CommonConstants.keyCodes.space&&$(a.currentTarget).click()});var l=CCL.CommonFunctions.isMobileDevice()?"touchstart":"click",u=CCL.CommonFunctions.isMobileDevice()?CommonTriggers.touchstartInInnerFrame:CommonTriggers.clickInInnerFrame;k.find(".js-titlesFilter").on("keyup",function(a){var b=$(a.currentTarget),c=b.parents("div[data-dropdown]"),d=c.find("[data-title]");b=b.parent().find(".js-titlesFilter__clear");var e=c.find(".c-dropdownMenu__empty"),
g=c.find(".c-dropdownMenu__content"),f=c.find(".c-dropdownMenu__skiplink"),G=a.currentTarget.value;a.which==E&&a.preventDefault();a=a.currentTarget.value.toLowerCase();y(d,a)?(e.hide(),g.show(),f.show()):(e.show(),g.hide(),f.hide());0===G.length?b.hide():b.show();c.find(".js-content").perfectScrollbar("update");c=coursesSortDropdownScope.kpi;CommonFunctions.measureKpi(c.url,c.section,c.measures.search,c.context)});k.find(".js-titlesFilter__clear").on(l,function(a){a.preventDefault();var b=$(a.currentTarget).parents("div[data-dropdown]");
b.find("[data-title]").each(function(a,b){$(b).show()});b.find(".c-dropdownMenu__empty").hide();b.find(".c-dropdownMenu__content").show();b.find(".js-titlesFilter").val("");b.find(".js-content").perfectScrollbar("update");$(this).hide();a.currentTarget.previousElementSibling.focus();return!1});k.children("button[data-action]").on(l,function(a){var b=$(a.currentTarget);if(!b.parents("li.l-more-menu-btn").length){a.preventDefault();var c=b.next();if(c.is(":visible"))c.hide(),$(".js-menuitem--dropdown.active div.active-shadow").show(),
g=!1;else{$(".ccl-context-dialog").not(c).not(".static").hide();"false"===$(".c-messages-popup").attr("aria-hidden")&&$(".c-messages__overlay").click();c.show();$(document).on(u,t);$("body").get(0).addEventListener(l,q,!0);(g=b.parent().hasClass("active"))?$(".js-menuitem--dropdown.active div.active-shadow").toggle():$(".js-menuitem--dropdown.active div.active-shadow").show();c.attr("aria-hidden",!1);$(".ccl-context-dialog").not(c).not(".static").attr("aria-hidden",!0);a=c.hasClass("js-onboarding");
if(0<c.find(".js-content").length||p||a)(el=n(c))&&el.focus();else{p=!0;a=b.data("action");var d=c.find(".c-spinner-bounce"),e=c.data("dropdown"),k=c.data("personid"),f=JSON.parse(localStorage.getItem(e+"_"+k));$.get("/TopMenu/TopMenu/"+a).then(function(a){d.hide();c.append(a);a=c.find("[data-title]");var b=c.find(".js-titlesFilter");b.length&&""!==b.val()&&y(a,b.val().toLowerCase());5<a.length?(c.find(".c-search").css("visibility","visible"),c.find(".c-dropdown").css("visibility","visible")):f&&
(f.sortField="lastUpdated");b=c.find(".js-content");b.perfectScrollbar({suppressScrollX:!0});b.find(".ps-scrollbar-y-rail").css("opacity",.6);b.find(".ps-scrollbar-y").attr("tabindex",-1);b.perfectScrollbar("update");p=!1;$(".js-menuitem--dropdown").find(".c-dropdownMenu, .c-dropdownMenu__content").on(l,B);null!==f&&(c.find(".c-dropdown > select").val(f.sortField),b="title"===f.sortField?a.find('[data-column="lastUpdated"]'):a.find('[data-column="'+f.sortField+'"]'),b.siblings("[data-column]").each(A),
b.each(z),"title"===f.sortField?m(a,f.sortField):m(a,f.sortField,!0),a.detach().appendTo(c.find(".c-dropdownMenu__content > ul")));$firstEl=n(c);dropdownAttribute=c.data().dropdown;dropdownAttribute!=h.YourChildren?($allLink=c.find(".c-dropdownMenu__all:not(.c-dropdownMenu__skiplink)"),$allLink.keydown($firstEl,v),$firstEl.keydown($allLink,x)):($lastLink=c.find(".c-dropdownMenu__content > ul > li > a").last(),$lastLink.keydown($firstEl,v),$firstEl.keydown($lastLink,x));dropdownAttribute!=h.Courses&&
dropdownAttribute!=h.Projects&&c.find(".c-dropdownMenu__skiplink").hide();(el=n(c))&&el.focus()})}c.keyup({button:b,dropdown:c},C)}}});k.find(".c-dropdown > select").on("change",function(a){var b=a.currentTarget;a=$(b).parents(".c-dropdownMenu");var c=a.find("[data-title]"),d=a.data("dropdown"),e=a.data("personid");d=d+"_"+e;JSON.parse(localStorage.getItem(d));b=b.options[b.selectedIndex].value;localStorage.setItem(d,JSON.stringify({sortField:b}));d="title"===b?c.find('[data-column="lastUpdated"]'):
c.find('[data-column="'+b+'"]');d.siblings("[data-column]").each(A);d.each(z);"title"===b?m(c,b):m(c,b,!0);c.detach().appendTo(a.find(".c-dropdownMenu__content > ul"));a.find(".c-dropdown-menu").slideUp()});var H=new CCL.CallbackDebouncer(function(a){$(window).width()<=F&&hideDropDowns()});$(window).on("resize",function(){H.invokeCallback(null,100)})})();
