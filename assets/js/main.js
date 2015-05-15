//Main JS File
var studentArray = [];
var student = {}; 

$(document).ready(function(){

	$("#student_input").on("click", "button", function(){
		addStudent();
		displayAvg();
		highLowHighlight();
	})

});

function addStudent(){
	var nameIn = $("#student_name");
	var courseIn = $("#student_course");
	var gradeIn = $("#student_grade");
	var name = nameIn.val();
	var course = courseIn.val();
	var grade = parseInt(gradeIn.val());
	var error = false;

	$(".error").remove();

	if(name == ""){
		var nameError = $("<span class='error'>Enter a Valid Name </span>");
		nameError.appendTo("#student_input");
		error = true;
		setTimeout(function(){nameError.remove()}, 3000);
	}
	if(course == ""){
		var courseError = $("<span class='error'>Enter a Valid Course </span>");
		courseError.appendTo("#student_input");
		error = true;
		setTimeout(function(){courseError.remove()}, 3000);
	}
	if(grade < 0 || grade > 100 || isNaN(grade)){
		var gradeError = $("<span class='error'>Enter a Valid Grade Between 0-100 </span>");
		gradeError.appendTo("#student_input");
		error = true;
		setTimeout(function(){gradeError.remove()}, 3000);
	}

	if(!error){
		student.name = name;
		student.course = course;
		student.grade = grade;
		studentArray.push(student);
		student = {};

		var row = $("<div class='student-row'><span class='col-sm-5'>" + name + "</span><span class='col-sm-3'>" + course + "</span><span class='col-sm-2'>" + grade + "</span><span class='col-sm-2'><button type='button' class='del'>Delete</button></span>")
		row.appendTo("#student_info");

		nameIn.val('');
		courseIn.val('');
		gradeIn.val('');
	}
}