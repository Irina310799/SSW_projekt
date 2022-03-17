window.onload = function(){
	window.setInterval(function(){
		var date = new Date();
		
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var second = date.getSeconds();
		
		var clock = hours + ":" + minutes + ":"+ second;
		document.getElementById("clock").innerHTML = clock;
	})
}