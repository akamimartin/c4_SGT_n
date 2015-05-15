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
	$(".avg").text(calcAvg());
}

function highLowHighlight(){
	var row = $(".student-row");
	var loop = studentArray.length;
	if(loop < 1){
		return;
	}
	var highIndex = 0; 
	var lowIndex = 0;
	var highGrade = studentArray[highIndex].grade;
	var lowGrade = studentArray[lowIndex].grade;

	for(var i=0; i<loop; i++){
		
		var student = studentArray[i];

		if(student.grade > highGrade){
			highIndex = i;
			highGrade = student.grade;
		}else if(student.grade < lowGrade){
			lowIndex = i;
			lowGrade = student.grade;
		}
	}

	row.removeClass("list-group-item-success");
	row.removeClass("list-group-item-danger");

	if(highIndex != lowIndex){	
		$(row[highIndex]).addClass("list-group-item-success");
		$(row[lowIndex]).addClass("list-group-item-danger");
	}
}