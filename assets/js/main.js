//Main JS File
var studentArray = [];

var formFields = [];

$(document).ready(function(){

	formFields.push($("#student_name"));
	formFields.push($("#student_course"));
	formFields.push($("#student_grade"));

	$("#student_input").on("click", "button", function(){
		if(addStudent()){
			displayAvg();
			highLowHighlight();
		}
	});

	updateStudentList();

});

function updateStudentList(){
	var contentContainer = $('#student_info .panel-body');
	if(studentArray.length > 0){
		contentContainer.html('');
		$.each(studentArray, function(){
			contentContainer.append(this.elm);
		});
	}else{
		contentContainer.append('<h5 class="col-sm-12 text-center">No Student info</h5>');
	}
	
}

function resetFormValues(){
	$.each(formFields, function(){
		this.val('');
	})
}

function createRowElement(obj){
	var row = $('<div>').addClass('student-row row list-group-item');
	var nameElm = $('<div>').addClass('col-sm-4 col-xs-3').html(obj.name);
	var courseElm = $('<div>').addClass('col-sm-3 col-xs-3').html(obj.course);
	var gradeElm = $('<div>').addClass('col-sm-2 col-xs-3').html(obj.grade);
	var opElm = $('<div>').addClass('col-sm-2 col-xs-2');
	var delBtnElm = $('<button>').addClass('btn btn-danger btn-sm pull-right	').html('<span class="glyphicon glyphicon-trash" aria-hidden="true"> </span><span class="hidden-xs"> Remove</span>');
	opElm.append(delBtnElm);
	row.append(nameElm, courseElm, gradeElm, opElm);

	return row;
}

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
		//create student object and push to the studentArray
		var student = {};
		student.name = nameValue;
		student.course = courseValue;
		student.grade = gradeValue;
		studentArray.push(student);

		//create Row Element by object
		student.elm = createRowElement(student);

		//reset the form values
		resetFormValues();

		updateStudentList();

		return true;
	}
	return false;
}