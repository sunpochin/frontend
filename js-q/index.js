$(function () {
	var timer;
	$('.btn').on('click', function () {
		$('.btn').addClass('click');
		clearTimeout(timer);
		timer = setTimeout(function () {
			$('.btn').removeClass('click');
		}, 2000);
	});
});
