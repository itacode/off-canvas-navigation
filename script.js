$(document).ready(function () {
	var $navWrap = $('#js_nav_wrap'),
		$close = $navWrap.find('#js_close'),
		$contWrap = $('#js_main_cont'),
		$open = $contWrap.find('#js_open'),
		$body = $('body');
	$open.on('click', function (e) {
		e.preventDefault();
		$body.css({'overflow-x': 'hidden'});
		$navWrap.addClass('nav_wrap_visible');
		$contWrap.addClass('nav_wrap_visible');
	});
	$close.on('click', function (e) {
		e.preventDefault();
		$navWrap.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
			$body.css({'overflow-x': ''});
			$navWrap.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
		});
		$navWrap.removeClass('nav_wrap_visible');
		$contWrap.removeClass('nav_wrap_visible');
	});
});