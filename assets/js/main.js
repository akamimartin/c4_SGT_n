//Main JS File
var studentArray = [];
var uniqueId = 0;

$(document).ready(function(){

	$("#student_input").on("click", "button", function(){
		if(addStudent()){
			displayAvg();
			highLowHighlight();
		}
	});

	$("#student_info").on("click", "button", function(){
		var rowDel = $(this).closest(".student_container");
		var rowId = rowDel.attr("id");
		console.log(rowId);
	});

});

function addStudent(){
	var nameIn = $("#student_name");
	var courseIn = $("#student_course");
	var gradeIn = $("#student_grade");
	var nameValue = nameIn.val();
	var courseValue = courseIn.val();
	var gradeValue = parseInt(gradeIn.val());
	var error = false;


	if(nameValue == ""){
		var nameError = "Please enter a name";
		var originalTextName = nameIn.attr("placeholder");
		nameIn.addClass("input-error");
		nameIn.attr("placeholder", nameError);
		error = true;
		setTimeout(function(){nameIn.removeClass("input-error"); nameIn.attr("placeholder", originalTextName)}, 3000);
	}
	if(courseValue == ""){
		var courseError = "Please enter a course";
		var originalTextCourse = courseIn.attr("placeholder");
		courseIn.addClass("input-error");
		courseIn.attr("placeholder", courseError);
		error = true;
		setTimeout(function(){courseIn.removeClass("input-error"); courseIn.attr("placeholder", originalTextCourse)}, 3000);
	}
	if(gradeValue < 0 || gradeValue > 100 || isNaN(gradeValue)){
		var gradeError = "Please enter numbers only";
		if(gradeValue < 0 || gradeValue > 100){
			gradeError = "Please enter a number between 0 and 100";
		}
		var originalTextCourse = gradeIn.attr("placeholder");
		gradeIn.addClass("input-error");
		gradeIn.val('');
		gradeIn.attr("placeholder", gradeError);
		error = true;
		setTimeout(function(){gradeIn.removeClass("input-error"); gradeIn.attr("placeholder", originalTextCourse)}, 3000);
	}

	if(!error){
		uniqueId++;
		var student = {};
		var rowId = "row" + uniqueId;
		student.name = nameValue;
		student.course = courseValue;
		student.grade = gradeValue;
		student.id = rowId;
		studentArray.push(student);
		student = {};

		var row = $("<div class='student_container panel-body' id=" + rowId + "><div class='student-row row'><div class='col-sm-4 col-xs-3'>" + nameValue + "</div><div class='col-sm-3 col-xs-3'>" + courseValue + "</div><div class='col-sm-2 col-xs-3'>" + gradeValue + "</div><div class='col-sm-2 col-xs-2'><button class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash' aria-hidden='true'> </span><span class='hidden-xs'>Remove</span></button></div></div></div>");
		row.appendTo("#student_info");

		nameIn.val('');
		courseIn.val('');
		gradeIn.val('');

		return true;
	}
	return false;
}