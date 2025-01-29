//no.3 
	function friendlyfunction()
        	{
			var nickname = "Karen";
			var height = 62;
			var weight = 50;

			var finalHeight = height / 12;
			var deciheight = height % 12;  
			var finalWeight = weight * 2.20462;

			finalHeight = Math.round(finalHeight);	
			finalWeight = Math.round((finalWeight) * 100.0) / 100.0;

                	if (confirm("Do you agree on sharing your information in this site?"))
                	{
                		console.log("Name: " + nickname + "\n" + "Height: " + finalHeight + "'" + deciheight + "\"\n" + "Weight: " + finalWeight + " lbs");
                	}
                	else
                	{
				console.log("User does not wish to share his/her information."); 
                      	}
               	}
