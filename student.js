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
    var output_stud = $('<div class="student_info col-md-12">');
    var name_o = $('<div class="s_name col-md-6">');
    var course_o = $('<div class="s_course col-md-2">');
    var grade_o = $('<div class="s_grade col-md-2">');
    var delete_o = $('<button type="button" class="col-md-2">delete</button>');

    $('#student_object').append(output_stud);
    $(output_stud).append(name_o, course_o, grade_o, delete_o);

    for (var i = 0; i < 6; i++) {

        $('.s_name').text(student_array[i]['name'])
        $('.s_course').text(student_array[i].course)
        $('.s_grade').text(student_array[i].grade)

    }
}



$(document).ready(function() {
    $('.s_add').on('click', add_student);


});

function average_grade() 
{
    var sum = 0;
    var average = 0;

        for (i = 0; i < student_array.length; i++) 
        {
            sum += parseFloat(student_array[i].grade);
        
        }   
    average = parseFloat(sum) / student_array.length;
    console.log('Average: ',average);
}

function high_grade() 
{
    var max = 0;
        for (i = 0; i < student_array.length; i++) 
        {
            if (student_array[i].grade > student_array[i+1].grade)
            {
                 max = student_array[i].grade;
                 console.log('Max:', max);
            }
        }
}

function low_grade()
{
   var min = 0;
        for (i = 0; i < student_array.length; i++) 
        {
            if (student_array[i].grade < student_array[i+1].grade)
            {
                 min = student_array[i].grade;
                 console.log('Min:', min);
            }
        }
}
