// url variable
var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// parameters object
var parameters = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	type: 'video'
};

// create clickable images
var displayResults = function(data){
	data.items.forEach(function(item){
		$('.js-search-results').append(
			'<a href="https://www.youtube.com/watch?v=' + item.id.videoId + 
			'" target="_blank"><img src=' + item.snippet.thumbnails.medium.url + 
			' class="centered"></a>');
	});
};

// function to get data
var getData = function() {
	$.getJSON(YOUTUBE_BASE_URL, parameters, displayResults);
};

// event listeners
$('.js-button').on('click', function(e) {
	$('img').remove();
	e.preventDefault();
	parameters.q = $('.js-input').val();
	getData();
});