// url variable
var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// parameters object
var parameters = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	q: '',
	type: 'video'
};

// callback
var displayData = function(data){
	console.log(data);
};

// create clickable images
var displayResults = function(data){
	console.log(data.items);
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


// request & response
// XML HTTP Request Object = XHR
// extensible markup language

// create request object
// define a callback function
// open a request
// send the request

/*
const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

let parameters = {
	part: 'snippet',
	key: 'AIzaSyAvVDxP5JbEej3bMbeCftybGlcTe34tBCQ',
	q: ('horse'),
}

let search = () => $.getJSON(YOUTUBE_BASE_URL, params, displayData);

let displayData = (data) => data;

search()
*/


















