//Main JS File
var studentArray = [];

$(document).ready(function(){

	$("#student_input").on("click", "button", function(){
		if(addStudent()){
			displayAvg();
			highLowHighlight();
		}
	})

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
		if(nameIn.attr("data-toggle") != "popover"){
			nameIn.attr("data-container", "body");
			nameIn.attr("data-toggle", "popover");
			nameIn.attr("data-placement", "bottom");
			nameIn.attr("data-trigger", "manual");
			nameIn.attr("title", "Input Error");
		}
		nameIn.attr("data-content", nameError);

		nameIn.popover('show');
		error = true;
		setTimeout(function(){nameIn.popover('hide')}, 3000);
	}
	if(courseValue == ""){
		var courseError = "Please enter a course";
		if(courseIn.attr("data-toggle") != "popover"){
			courseIn.attr("data-container", "body");
			courseIn.attr("data-toggle", "popover");
			courseIn.attr("data-placement", "bottom");
			courseIn.attr("data-trigger", "manual");
			courseIn.attr("title", "Input Error");
		}
		courseIn.attr("data-content", courseError);

		courseIn.popover('show');
		error = true;
		setTimeout(function(){courseIn.popover('hide')}, 3000);
	}
	if(gradeValue < 0 || gradeValue > 100 || isNaN(gradeValue)){
		var gradeError = "Please enter numbers only";
		if(gradeValue < 0 || gradeValue > 100){
			gradeError = "Please enter a number between 0 and 100";
		}
		if(gradeIn.attr("data-toggle") != "popover"){
			gradeIn.attr("data-container", "body");
			gradeIn.attr("data-toggle", "popover");
			gradeIn.attr("data-placement", "bottom");
			gradeIn.attr("data-trigger", "manual");
			gradeIn.attr("title", "Input Error");
		}
		gradeIn.attr("data-content", gradeError);

		gradeIn.popover('show');
		error = true;
		setTimeout(function(){gradeIn.popover('hide')}, 3000);
	}

	if(!error){
		var student = {};
		student.name = nameValue;
		student.course = courseValue;
		student.grade = gradeValue;
		studentArray.push(student);
		student = {};

		var row = $("<div class='student_container panel-body'><div class='student-row row'><div class='col-sm-4 col-xs-3'>" + nameValue + "</div><div class='col-sm-3 col-xs-3'>" + courseValue + "</div><div class='col-sm-2 col-xs-3'>" + gradeValue + "</div><div class='col-sm-2 col-xs-2'><button class='btn btn-danger btn-sm'><span class='glyphicon glyphicon-trash' aria-hidden='true'> </span><span class='hidden-xs'>Remove</span></button></div></div></div>");
		row.appendTo("#student_info");

		nameIn.val('');
		courseIn.val('');
		gradeIn.val('');

		return true;
	}
	return false;
}