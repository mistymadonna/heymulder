$(window).load(function () {
  $('iframe').each(function () {
    // resize iframes, which are videos
    this.height = this.clientWidth * 9 / 16;

    var srclater = $(this).attr('srclater');
    $(this).attr('src', srclater);
  });

  var hash = window.location.hash.replace('#', '');
  if (hash.length > 0) {
    showOnly(hash);
  }
});

function showOnly(className) {
  // hide all element under "main"
  $('main').children().hide();

  // show all the ones we want
  $('.' + className).show();

  // highlight the selected
  $('.menu a').removeClass('selected');
  $('#' + className + 'id').addClass('selected');

  window.location.hash = className;

  // collapse the menu
  $('.menu-btn').attr('checked', false);
}
