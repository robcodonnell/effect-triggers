var $box = $('.box');
var $diamond = $('.diamond');
var $panel = $('.panel');
var $circle = $('.circle');
var $list = $('.list');
var $btnShowHide = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapse = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $btnAppend = $('.btn-append');

$btnShowHide.on('click', function (e) {
  $box.toggleClass('is-clicked');
});

$btnMove.on('click', function (e) {
  $diamond.toggleClass('diamond-move');
});

$btnCollapse.on('click', function (e) {
  $panel.toggleClass('panel-click');
});

$btnBounce.on('click', function (e) {
  $circle.addClass('circle-click');
});

$btnBounce.on('animationend', '.circle-click', function () {
  $(this).removeClass('circle-click');
});

$btnAppend.on('click', function (e) {
  var $li = $('<li>');

  $list.append($li);
});
