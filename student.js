var student_array = [];

var student_object = {
    name: null,
    course: null,
    grade: null
};



function add_student() {

        var addstudent = Object.create(student_object);
        addstudent.s_name = $('#student_name').val();
        addstudent.s_course = $('#student_course').val();
        addstudent.s_grade = parseFloat($('#student_grade').val());
        student_array.push(addstudent);
        //show_student();
        console.log(student_object);
        console.log(student_array);
        average_grade();
        //v--------KC Added the Average function to this button
        

    }
    //got the show_student button to work we can also put it inside the add_student button by removing the comment before the show_student() function
function show_student() {

    console.log('button worked')
    




    for (var i = 0; i < student_array.length; i++) {
        var output_stud = $('<div>', {
            class: "student_container list-group",
        });
        var name_o = $('<div>', {
            class: "st_name list-group-item",
            text: student_array[i].s_name
        });
        var course_o = $('<div>', {
            class: "st_course list-group-item",
            text: student_array[i].s_course
        });
        var grade_o = $('<div>', {
            class: "st_grade list-group-item",
            text: student_array[i].s_grade
        });
        var delete_o = $('<button>', {
            class: "list-group-item",
            type: "button",
            text: "delete"
        });
        $('#student_object').append(output_stud);
        $(output_stud).append(name_o, course_o, grade_o, delete_o);

    }

};



$(document).ready(function() {
    $('.s_add').on('click', add_student);


});

function average_grade() 
{
    var sum = 0;
    var average = 0;
    console.log(student_object);
    console.log(student_array);
    for (var i = 0; i < student_array.length; i++) 
        {
            sum += student_array[i].s_grade;

        }   
    average = sum / student_array.length;
    console.log('Average: ',average);
    $('#student_display').val(average.toFixed(0));
}

function high_grade() 
{
    var max = 0;
    for (var i = 0; i < student_array.length-1; i++) 
    {
        console.log('checking student_array['+i+'] > student_array['+(i+1)+']');

        console.log(student_array[i].s_grade + '>' + student_array[i+1].s_grade)
        if (student_array[i].s_grade > student_array[i+1].s_grade)
        {
             max = student_array[i].s_grade;
             console.log('Max:', max);
        }
    }
}

function low_grade()
{
    var min = 0;
    for (var i = 0; i < student_array.length-1; i++) 
    {
        console.log('checking student_array['+i+'] < student_array['+(i+1)+']');

        console.log(student_array[i].s_grade + '<' + student_array[i+1].s_grade)
        if (student_array[i].s_grade < student_array[i+1].s_grade)
        {
            min = student_array[i].s_grade;
            console.log('Min:', min);
        }
    }
}
