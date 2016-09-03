/*function helloWorld() {
	alert("Hello.");
}

helloWorld();*/

function frickinClock() {
	var now = new Date();
	var hours = now.getHours()
		{if (now.getHours > 12)
			{hours - 12}
		}
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	
	document.write(hours + "." + minutes + "." + seconds);
		
	}
	
	frickinClock();
}

