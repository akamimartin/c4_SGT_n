//Calc JS File


function calcAvg(){
	var loop = studentArray.length;
	if(loop < 1){
		return 0;
	}
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
	if(loop < 2){
		return;
	}
	var highGrade = -1;
	var lowGrade = 101; 

	for(var i=0; i<loop; i++){
		var student = studentArray[i];
		if(student.grade > highGrade){
			highGrade = student.grade;
		}else if(student.grade < lowGrade){
			lowGrade = student.grade;
		}
	}
	row.removeClass("list-group-item-success");
	row.removeClass("list-group-item-danger");
	
	for(var i=0; i<loop; i++){
		var student  = studentArray[i];
		if(student.grade == highGrade){
			$(row[i]).addClass("list-group-item-success");
		}else if(student.grade == lowGrade){
			$(row[i]).addClass("list-group-item-danger");
		}
	}
}