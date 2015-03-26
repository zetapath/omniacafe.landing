window.soyjavi = soyjavi = version: "1.02.06"

$ ->
  soyjavi.dom =
    document  : $ document
    header    : $ "header"
    landing   : $ ".landing"

  $(window).stellar()


  $(document).on "scroll", (event) ->
    px = soyjavi.dom.document.scrollTop()
    percent = parseInt (px * 100) / soyjavi.dom.landing.height()
    if percent > 65
      soyjavi.dom.landing.addClass "scroll"
    else
      soyjavi.dom.landing.removeClass "scroll"

    if percent > 70
      soyjavi.dom.header.addClass "scroll"
    else
      soyjavi.dom.header.removeClass "scroll"
