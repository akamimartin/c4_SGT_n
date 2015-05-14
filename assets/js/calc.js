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
	var loop = row.length;
	var high = -1;
	var low = 101;

	for(var i=0; i<loop; i++){
		if(studentArray[i] > studentArray[high]){
			high = i;
		}else if(studentArray[i] < studentArray[low]){
			low = i;
		}
	}

	if(high > -1 && low < 100 && high != low){	
		row(high).addClass("high");
		row(low).addClass("low");
	}else{
		console.log("Error with highLowHighlight");
	}
}