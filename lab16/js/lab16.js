/**
LAB 16: JSON & APIs
By: Jordan Moore and Naish Linde
**/

//https://xkcd.com/info.0.json
//
// var comicObj;
//
// function ajax (){
//   $.ajax({
//       url: "http://xkcd.com/info.0.json",
//       data: {},
//       type: "GET",
//       dataType : "json",
//
//       success: function(data) {
//           console.log(data);
//           var comicObj = data;
//           $('#output').html(comicObj);
//       },
//
//       error: function (jqXHR, textStatus, errorThrown) {
//           // do stuff
//           console.log("Error:", textStatus, errorThrown);
//       }
//   })
// }
var output = $('#output');
var apiButton = $('#apibutton');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://dad-jokes.p.rapidapi.com/random/joke",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "75315872b0msh9c9e2b899bec1c0p1a8451jsnbb30815cd0ab",
		"x-rapidapi-host": "dad-jokes.p.rapidapi.com"
	}
};

apiButton.on('click', function(){
  $.ajax(settings).done(function (response) {
		console.log(response);
		output.append('<p>' + response.body[0].setup + '</p>' + '<br>' + '<p>' + response.body[0].punchline + '</p>');
  });
});
