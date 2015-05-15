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
	var row = $(".student_container");
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

	var highArray = [$(row[highIndex])];
	var lowArray = [$(row[lowIndex])];
	
	for(var i=0; i<loop; i++){
		var student  = studentArray[i];
		if(student.grade == highGrade){
			highArray.push($(row[i]));
		}else if(student.grade == lowGrade){
			lowArray.push($(row[i]));
		}
	}

	row.removeClass("alert-success");
	row.removeClass("alert-danger");


	if(highIndex != lowIndex){
		if(highArray.length >= lowArray.length){
			var count = highArray.length;
		}else{
			var count = lowArray.length;
		}

		for(var i=0; i<count; i++){
			if(highArray.length > i){
				highArray[i].addClass("alert-success");
			}
			if(lowArray.length > i){
				lowArray[i].addClass("alert-danger");
			}
		}
	}
}