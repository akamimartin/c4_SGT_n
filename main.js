var student_array = [];
var average = 0;
var highest_grade = -1;
var lowest_grade = 101;
var highest_array = [];
var lowest_array = [];


function highest_lowest_grade(){
	
	for (var i = 0; i < student_array.length; i++){
		var grade = parseFloat(student_array[i].grade);
		if (grade > highest_grade) {
			highest_array = [i];
			highest_grade = grade;
		}
		else if (grade == highest_grade){
			highest_array.push(i);
		}

		else if (grade < lowest_grade){
			lowest_array = [i];
			lowest_grade = grade;
		}
		else if(grade == lowest_grade){
			lowest_array.push(i);
		}
	}
}
function highlight(){
	for (var i = 0; i < highest_array.length; i++){
		student_array[highest_array[i]].grade_element.addClass('highest');
	}
	for (var i = 0; i < lowest_array.length); i++){
		student_array[lowest_array[i]].grade_element.addClass('lowest');
	}
}
//finds the average of the class
function average_grade(){
	var total = 0;
	for (var i = 0; i < student_array.length; i++){
		var grade = parseFloat(student_array[i].grade);
		total += grade;

	}
	average = total/student_array.length;
}

//displays the average
function display_average(){
	$('#operations').html(average);
}

//dev1 below 
//add input information into #student_info.

function add_studentinfo() {
//added new div (5/15)
  var name_div = $('<div>').addClass("inputed_name").html($("#student_name").val());
  var course_div = $('<div>').addClass("inputed_course").html($("#student_course").val());
  var grade_div = $('<div>').addClass("inputed_grade").html($("#student_grade").val());

  $('#name').append(name_div);
  $('#course').append(course_div);
  $('#grade').append(grade_div);
//end 
  var student = {
    names: $("#student_name").val(),
    course: $("#student_course").val(),
    grade: $("#student_grade").val(),
    grade_element: grade_div
  }

  student_array.push(student);
  console.log('student_array' + student);
}


function display_style() {
	//changes input 
	$('.form-control').css({
		backgroundColor: 'white',
		height: '50px',
		fontSize: '20px',
	});
	//changes student name, student course, and student grade
	$('.student_container').css({
		fontSize: '20px',
		fontWeight: 'bold',
		color: '#3f3f3f',
	});

	$('#grade_average').css({
		fontSize: '20px',
		position: 'relative',
		top: '-30px',
		left: '-860px',
		fontWeight: 'bold',
		color: '#3f3f3f',
	});

	$('#button').css({
		position: 'relative',
		left: '80%',
		top: '10px',
		height: '45px',
	});

	$('#button1').css({
		position: 'relative',
		left: '80%',
		top: '10px',
		height: '45px',
	});

	$('#operations').css({
		position: 'absolute',
		fontSize: '20px',
		color: '#7f0000',
	})
}

$(document).ready(function(){
	display_style();
	$('#button').click(function(){
	add_studentinfo();
	average_grade();
	display_average();
	highest_lowest_grade();
	highlight();
	});
});

