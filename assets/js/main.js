//Main JS File
var studentArray = [];
var uniqueId = 0;
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

	$("#student_info").on("click", "button", function(){
		var rowDel = $(this).closest(".student_container");
		var rowId = rowDel.attr("id");
		var loop = studentArray.length;
		var deleted = false;
		var i = 0;

		rowDel.remove();
		
		while(!deleted && i < loop){
			var student = studentArray[i];
			if(student.id == rowId){
				studentArray.splice(i, 1);
				deleted = true;
			}
			i++;
		}
		displayAvg();
		highLowHighlight();
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
			gradeError = "Please enter a number 0-100";
		}
		var originalTextGrade = gradeIn.attr("placeholder");
		gradeIn.addClass("input-error");
		gradeIn.val('');
		gradeIn.attr("placeholder", gradeError);
		error = true;
		setTimeout(function(){gradeIn.removeClass("input-error"); gradeIn.attr("placeholder", originalTextGrade)}, 3000);
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
		//create Row Element by object
		student.elm = createRowElement(student);

		//reset the form values
		resetFormValues();

		updateStudentList();

		return true;
	}
	return false;
}