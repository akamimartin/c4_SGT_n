var student_array = [];
var average = 0;
function average_grade(){
	var total = 0;
	for (var i = 0; i < student_array.length; i++){
		total += student_array[i].grade;
	}
	average = total/student_array.length;
}

function input_info(){
	$('#student_info').html;
}