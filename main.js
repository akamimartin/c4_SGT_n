var student_array = [];
var average = 0;



function average_grade(){
	var total = 0;
	for (var i = 0; i < student_array.length; i++){
		total += student_array[i].grade;
	}
	average = total/student_array.length;
}

//dev1 below
var student_array= [];

function add_studentinfo() {
  var student = {
    names: $("#student_name").val(),
    course: $("#student_course").val(),
    grade: $("#student_grade").val(),
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
	});

	$('#grade_average').css({
		fontSize: '20px',
	});

	$('#button').css({
		position: 'relative',
		left: '80%',
	});

	$('#button1').css({
		position: 'relative',
		left: '80%',
	});
}

$(document).ready(function(){
	display_style();
	$('#button').click(function(){
		add_studentinfo();
	});
});
