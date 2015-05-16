var student_array = [];

var student_object = {
    name: null,
    course: null,
    grade: null
};



function add_student() {

    var addstudent = Object.create(student_object);
    addstudent.name = $('#student_name').val();
    addstudent.course = $('#student_course').val();
    addstudent.grade = $('#student_grade').val();
    student_array.push(addstudent);

    console.log(student_array)
}

function show_student() {
    console.log('button worked')
    var output_stud = $('<div>', {
        class: "student_info list-group",
    });
    var name_o = $('<div>', {
        class: "s_name list-group-item"
    });
    var course_o = $('<div>', {
        class: "s_course list-group-item"
    });
    var grade_o = $('<div>', {
        class: "s_grade list-group-item"
    });
    var delete_o = $('<button>', {
        class: "list-group-item",
        type: "button",
        text: "delete"
    });

    $('#student_object').append(output_stud);
    $(output_stud).append(name_o, course_o, grade_o, delete_o);


};



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
