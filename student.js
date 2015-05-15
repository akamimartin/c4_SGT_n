var student_array = [];
var students = $('#student_name').val() + $('#student_course').val() + $('#student_grade').val();
var student_object = {
    name: null,
    course: null,
    grade: null
};

function add_input() {

    $('#student_object').val(students);
}

function add_student() {
    var addstudent = Object.create(student_object);
    addstudent.name = $('#student_name').val();
    addstudent.course = $('#student_course').val();
    addstudent.grade = $('#student_grade').val();
    student_array.push(addstudent);
    console.log(student_array)
    add_input();
}
$(document).ready(function() {
    $('.s_add').on('click', add_student);
})
