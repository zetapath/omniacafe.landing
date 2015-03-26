/**
 * omniacafe - ...
 * @version v1.03.23
 * @link    http://omniacafe.com
 * @author   ()
 * @license 
 */
(function(){var soyjavi;window.soyjavi=soyjavi={version:"1.02.06"},$(function(){return soyjavi.dom={document:$(document),header:$("header"),landing:$(".landing")},$(window).stellar(),$(document).on("scroll",function(){var percent,px;return px=soyjavi.dom.document.scrollTop(),percent=parseInt(100*px/soyjavi.dom.landing.height()),percent>65?soyjavi.dom.landing.addClass("scroll"):soyjavi.dom.landing.removeClass("scroll"),percent>70?soyjavi.dom.header.addClass("scroll"):soyjavi.dom.header.removeClass("scroll")})})}).call(this);