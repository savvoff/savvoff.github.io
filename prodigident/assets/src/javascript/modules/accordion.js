(() => {
  $('.accordion__tab.active').find('.accordion__content').slideToggle('');
  $('.accordion__tab').click((ev) => {
    if (!$(ev.currentTarget).hasClass('active')) {
      $(ev.currentTarget).find('.accordion__content').slideToggle();
      $(ev.currentTarget).addClass('active').siblings('.accordion__tab.active').removeClass('active')
      .find('.accordion__content').slideToggle();
    }
    else $(ev.currentTarget).removeClass('active').find('.accordion__content').slideToggle();
  })
})()
