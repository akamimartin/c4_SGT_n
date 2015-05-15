var student_array = [];
var students = $('#student_name').val() + $('#student_course').val() + $('#student_grade').val();
var student_object = {
    name: null,
    course: null,
    grade: null
};

<<<<<<< HEAD
function add_input() {

    $('#student_object').val(students);
}

=======
>>>>>>> c87d344f59d9f65fd0ffb6e34a538f062dbfd2e0
function add_student() {
    var addstudent = Object.create(student_object);
    addstudent.name = $('#student_name').val();
    addstudent.course = $('#student_course').val();
    addstudent.grade = $('#student_grade').val();
    student_array.push(addstudent);
    console.log(student_array)
}
$(document).ready(function() {
    $('.s_add').on('click', add_student);
});

function average_grade() {
    var sum = 0;
    var average = 0;

    for (i = 0; i < student_array.length; i++) {
        sum += student_array[i];
        average = sum / student_object.grade;
    }
}

function highlow_grade() {

}
