const response = $('#form').on('submit', async function(e) {
	e.preventDefault;
	let searchTerm = $('#searchterm').val;
	const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			q: searchTerm,
			api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
		}
	});
	console.log(response);
	return response;
});

let responseDiv = document.createElement('DIV');
$(responseDiv).innerHTML = response;
$('.container').append(responseDiv);
