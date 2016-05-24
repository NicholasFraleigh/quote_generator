// function to get jSon file
$(document).ready(function(){
	fetchJson();
	$("#getMessage").click(function(){
		fetchJson();
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
    	},
    	error: function(err) { alert(err); },
    	beforeSend: function(xhr) {
    	xhr.setRequestHeader("X-Mashape-Authorization", "V8ZOzPisBbmshdMDf7IJypZjSb6ap14hXKHjsnqLmKz2cMJcHM"); // Enter here your Mashape key
    }
});
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


