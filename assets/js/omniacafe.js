/**
 * omniacafe - ...
 * @version v1.03.23
 * @link    http://omniacafe.com
 * @author   ()
 * @license 
 */
(function(){var soyjavi;window.soyjavi=soyjavi={version:"1.02.06"},$(function(){return soyjavi.dom={document:$(document),header:$("header"),landing:$(".landing")},$(window).width()>400&&$(window).stellar(),$(document).on("scroll",function(){var percent,px;return px=soyjavi.dom.document.scrollTop(),percent=parseInt(100*px/soyjavi.dom.landing.height()),percent>5?soyjavi.dom.landing.children("span").addClass("hide"):soyjavi.dom.landing.children("span").removeClass("hide"),percent>35?(soyjavi.dom.header.addClass("scroll"),soyjavi.dom.landing.children("img").addClass("hide")):(soyjavi.dom.header.removeClass("scroll"),soyjavi.dom.landing.children("img").removeClass("hide"))})})}).call(this);