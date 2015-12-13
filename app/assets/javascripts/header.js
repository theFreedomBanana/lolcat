$('document').ready(function() {

	$('#most_popular').click(function() {
		$(this).addClass("active");
		$('#most_recent').removeClass("active");
	});

	$('#most_recent').click(function() {
		$(this).addClass("active");
		$('#most_popular').removeClass("active");
	});
});