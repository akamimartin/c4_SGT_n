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
        class: "student_info col-md-12",
    });
    var name_o = $('<div>', {
        class: "s_name col-md-3"
    });
    var course_o = $('<div>', {
        class: "s_course col-md-3"
    });
    var grade_o = $('<div>', {
        class: "s_grade col-md-3"
    });
    var delete_o = $('<button>', {
        class: "col-md-3",
        type: "button",
        text: "button"
    });

    $('#student_object').append(output_stud);
    $(output_stud).append(name_o, course_o, grade_o, delete_o);

    for (var i = 0; i < student_array.length; i++) {
        var student = student_array[i];
        if (student_array.length < 1) {
            return
        }
        $('').val(student_array[i].name)
        student.grade
        student.course
    }
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
