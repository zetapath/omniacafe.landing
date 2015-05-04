window.soyjavi = soyjavi = version: "1.02.06"

$ ->
  soyjavi.dom =
    document  : $ document
    header    : $ "header"
    landing   : $ ".landing"

  $(window).stellar() if $(window).width() > 400

  $(document).on "scroll", (event) ->
    px = soyjavi.dom.document.scrollTop()
    percent = parseInt (px * 100) / soyjavi.dom.landing.height()

    if percent > 5
      soyjavi.dom.landing.children("span").addClass "hide"
    else
      soyjavi.dom.landing.children("span").removeClass "hide"

    if percent > 35
      soyjavi.dom.header.addClass "scroll"
      soyjavi.dom.landing.children("img").addClass "hide"
    else
      soyjavi.dom.header.removeClass "scroll"
      soyjavi.dom.landing.children("img").removeClass "hide"
