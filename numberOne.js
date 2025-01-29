//no.1
	var nickname = "Karen";
	var height = 62;
	var weight = 50;

	var finalHeight = height / 12;
	var deciheight = height % 12;  
	var finalWeight = weight * 2.20462;

	finalHeight = Math.round(finalHeight);	
	finalWeight = Math.round((finalWeight) * 100.0) / 100.0;

	alert("Name: " + nickname + "\n" + "Height: " + finalHeight + "'" + deciheight + "\"\n" + "Weight: " + finalWeight + " lbs");