// function to get jSon file
$(document).ready(function(){
	fetchJson();
	setRandomColours();
	$("#getMessage").click(function(){
		fetchJson();
		setRandomColours();
	})
});
         
function fetchJson(){
	$.ajax({
    	url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
    	type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    	data: {}, // Additional parameters here
    	dataType: 'json',
    	success: function(data) { 
    		document.getElementById("quote").innerHTML = '"' + data['quote'] + '"';
    		document.getElementById('author').innerHTML = '~ ' + data['author'];
    		checkObj(data);
    		$('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data['quote'] + '" ~ ' + data['author']));
    	},
    	error: function(err) { alert(err); },
    	beforeSend: function(xhr) {
    	xhr.setRequestHeader("X-Mashape-Authorization", "V8ZOzPisBbmshdMDf7IJypZjSb6ap14hXKHjsnqLmKz2cMJcHM"); // Enter here your Mashape key
    }
});
}

function setRandomColours(){
	var colour1 = '#'; 
	var colour2 = '#';
	// set up arrays such that each element goes well with element of same number in other array
    var letters1 = ['FF7575', 'FF79E1', 'FF73B9', 'FE67EB', 'E77AFE', 'D97BFD', 'A27AFE']; 
    var letters2 = ['FFDFDF', 'FFDFF8', 'FFDFEF', 'FFDBFB', 'F9D9FF', 'F4DCFE', 'E6DBFF']; 
    var selector = Math.floor(Math.random() * letters1.length);
    colour1 += letters1[selector];
    colour2 += letters2[selector];
    document.getElementById('quote-box').style.background = colour2; // Setting the random color on div element.
    document.getElementById('outer-box').style.background = colour1;
    document.getElementById('quote').style.color = colour1;
    document.getElementById('author').style.color = colour1;
    document.getElementById('bod').style.background = colour1; // Setting the random color on div element.
    document.getElementById('getMessage').style.color = colour1;
    document.getElementById('getMessage').style.background = colour2;
    document.getElementById('twitter').style.color = colour2;
    document.getElementById('facebook').style.color = colour2;
}


function checkObj(obj){
	for (var key in obj) {
 		if (obj.hasOwnProperty(key)) {
    			
    		var val = obj[key];
    		var first = "key: " + key + " type of: " + typeof key;
    		var second = "val: " + val + " type of: " + typeof val;
    		console.log(first);
    		console.log(second);
  		}
	}
}


