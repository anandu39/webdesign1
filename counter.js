  /*javascript code for the timercountdown*/
	var timeleft=10;              //a variable is initialy set to 10 which is required countdown value
	var downloadTimer= setInterval(function(){ 
		timeleft--;          //function to reduce the timercount value each time it is decremented one time
		timeleft="0"+timeleft      //to set the countdown value to a two digit
		document.getElementById("countdowntimer").textContent=timeleft;  //the current value is stored to a variable countdowntimer 
		if(timeleft<=0)
			clearInterval(downloadTimer);
		},1000);

