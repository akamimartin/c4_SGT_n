//Calc JS File


function calcAvg(){
	var loop = studentArray.length;
	var total = 0;

	for(var i=0; i<loop; i++){
		total += parseInt(studentArray[i].grade);
	}

	return (total/loop).toFixed(2);
}

function displayAvg(){
	$("#avg").text(calcAvg());
}

function highLowHighlight(){
	var row = $(".student-row");
	var loop = studentArray.length;
	var highIndex = 0; 
	var lowIndex = 0;
	for(var i=0; i<loop; i++){

		if(studentArray[i].grade > studentArray[high].grade){
			highIndex = i;
		}else if(studentArray[i].grade < studentArray[low].grade){
			lowIndex = i;
		}
	}

	row.removeClass("high");
	row.removeClass("low");
	
	if(highIndex != 0 && lowIndex != 0 && highIndex != lowIndex){	
		row(high).addClass("high");
		row(low).addClass("low");
	}else{
		console.log("Error with highLowHighlight");
	}
}