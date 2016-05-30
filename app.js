$(window).load(function () {
  $('iframe').each(function () {
    // resize iframes, which are videos
    this.height = this.clientWidth * 9 / 16;

    var srclater = $(this).attr('srclater');
    $(this).attr('src', srclater);
  });
});

function showOnly(className) {
  // hide all element under "main"
  $('main').children().hide();

  // show all the ones we want
  $('.' + className).show();

  // collapse the menu
  $(".menu-btn").attr('checked', false);
}

$('#fashion').click(function () {
  showOnly('fashion');
});

$('#music').click(function () {
  showOnly('music');
});

$('#photo').click(function () {
  showOnly('photo');
});

$('#video').click(function () {
  showOnly('video');
});

$('#interviews').click(function () {
  showOnly('interviews');
});
