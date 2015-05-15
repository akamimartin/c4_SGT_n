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
