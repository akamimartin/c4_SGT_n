sum_of_grades = null;
grades_array = [];
highest_lowest = [];
var student_array = [];

function averageGrade() {
    for (var i = 0; i < student_array.length; i++) {
        grades_array.push(student_array[i].grade);

        sum_of_grades += parseFloat(student_array[i].grade);
    }
    highest_lowest.push(grades_array.sort[0]);
    highest_lowest.push(grades_array.sort[-1]);
    average_of_grades = sum_of_grades / student_array.length;
};
//$('#grade_average > span').append(average_of_grades);


function add_studentinfo() {
    $('.student_data').html("");

    var new_student = {
        id: $("#student_id").val(),
        name: $("#student_name").val(),
        course: $("#student_course").val(),
        grade: $("#student_grade").val(),

    }

    student_array.push(new_student);

    for (var i = 0; i < student_array.length; i++) {
        /*  $('<div>',{
                class: "student_container0",
              }); */
        if (isNaN(student_array[i].idval)) {
            student_array[i].idval = '0';

        };

        console.log("aaaaa check id", student_array[i].idval);
        var newdiv = $('<div class="student_data col-sm-12">');
        var id_output = $('<span class="col-sm-1">').text(student_array[i].id);
        var name_output = $('<span class="col-sm-3">').text(student_array[i].name);
        var course_output = $('<span class="col-sm-3">').text(student_array[i].course);
        var grade_output = $('<span class="col-sm-3">').text(student_array[i].grade);
        var delete_output = $('<button class="col-sm-2  button_id">').text("Delete");

        //if (i==0){
        //refresh();
        // };
        newdiv.append(id_output, name_output, course_output, grade_output, delete_output);
        $('#student_info').append(newdiv);
        console.log("student_array=", student_array[i]);
        console.log("student array at ", i, " = ", student_array[i]);

    }

}

function list_students() {
    console.log("inside list_students");
    /* $('#student_info').remove($('.student_data'));
      for (var i = 0; i < student_array.length; i++) {
         /*  $('<div>',{
         class: "student_container0",
       }); */

}



//  containerinfo.append(name_output,course_output, grade_output);
//  $(".student_container").append(containerinfo);

/*  $(document).ready(function(){  */
function add_send_studentinfo() {

    student_array = [];
    new_student = '';

    var new_student = {
        id: $("#student_id").val(),
        name: $("#student_name").val(),
        course: $("#student_course").val(),
        grade: $("#student_grade").val(),

    }

    auto_check()

    student_array.push(new_student);

    for (var i = 0; i < student_array.length; i++) {
        /*  $('<div>',{
                class: "student_container0",
              }); */
        //if (isNaN(student_array[i].id)) {
        //    student_array[i].id = '0';

        //};

        console.log("aaaaa check id", student_array[i].id);
        var newdiv = $('<div class="student_data col-sm-12">');
        var id_output = $('<span class="col-sm-1">').text(student_array[i].id);
        var name_output = $('<span class="col-sm-3">').text(student_array[i].name);
        var course_output = $('<span class="col-sm-3">').text(student_array[i].course);
        var grade_output = $('<span class="col-sm-3">').text(student_array[i].grade);
        var delete_output = $('<button class="col-sm-2   button_id">').text("Delete");

        //if (i==0){
        //refresh();
        // };
        newdiv.append(id_output, name_output, course_output, grade_output, delete_output);
        $('#student_info').append(newdiv);
        console.log("student_array=", student_array[i]);
        console.log("student array at ", i, " = ", student_array[i]);

        $.ajax({
            url: 'http://s-apis.learningfuze.com/sgt/create',
            dataType: 'html',
            //data: {name: $('.name').val(),  grade: $('.grade').val() , course:$('.course').val() },
            data: {
                name: new_student.name,
                grade: new_student.grade,
                course: new_student.course
            },
            method: 'POST',
            cache: false,
            crossDomain: true,
            success: function(response) {

                console.log('success  inside post result - respons==', response);
                $('#data_display').html(response);
                get_student_data()
                    /* $('.name').text(response);
                     $('.grade').text(response);
                     $('.course').text(response);*/
                    //message.html('');
                    // if(response.success) {
                $('#data_display').html(response);
            }

        });
    }

}


function get_student_data() {
    console.log("inside get_student_data")
    console.log('student.array', student_array);
    $.ajax({
        dataType: 'json',

        url: 'http://s-apis.learningfuze.com/sgt/get',
        success: function(response) {
            window.response = response;
            console.log('loaded', response);
            student_array = student_array.concat(response.data);
            for (var i = 0; i < student_array.length; i++) {

                console.log("student_array", student_array[i]);
                student_array[i].grade = parseFloat(student_array[i].grade)

                var newdiv = $('<div class="student_data  col-sm-12">');
                var id_output = $('<span class="col-sm-1">').text(student_array[i].id);
                var name_output = $('<span class="col-sm-3">').text(student_array[i].name);
                var course_output = $('<span class="col-sm-3">').text(student_array[i].course);
                var grade_output = $('<span class="col-sm-3">').text(student_array[i].grade);
                var delete_output = $('<button class="col-sm-2   button_id">').text("Delete");

                //if (i==0){
                //refresh();
                // };
                newdiv.append(id_output, name_output, course_output, grade_output, delete_output);
                $('#student_info').append(newdiv);


            }
            /*list_students(); */

        }
    });
}

/*console.log('load ended');   */
function list_students() {
        console.log("inside list_students");
        /* $('#student_info').remove($('.student_data'));
          for (var i = 0; i < student_array.length; i++) {
             /*  $('<div>',{
             class: "student_container0",
           }); */
    }
    //  containerinfo.append(name_output,course_output, grade_output);
    //  $(".student_container").append(containerinfo);

/*  $(document).ready(function(){  */






function auto_course_data() {
    course_array =[];
    console.log("inside auto_course_data")
 
    $.ajax({
        dataType: 'json',
           data: {
                course:  $("#student_course").val(),
            },
        url: 'http://s-apis.learningfuze.com/sgt/courses',
        method: 'POST',
        cache: false,
        crossDomain: true,
        success: function(response) {
            window.response = response;
                console.log('loaded', response);
                course_array = course_array.concat(response.data);
             for (var i = 0; i < course_array.length; i++) {

                 console.log("course_array", course_array[i]);
              

                var new_course_div = $('<ul class="course_div col-sm-12">');
                var course_out = $('<li class="course_out col-sm-12">').text(course_array[i].course);

                 new_course_div.append(course_out);
                 $('#course-list').append(new_course_div);
            }

                  console.log('right before click')
                  //$('#course-list').click(function() {
                    $('.course_out').click(function() {
                        var list_value  = $(this).html();
                        if(list_value > '') {
                            console.log("aaaaaa inside if",list_value);
                            $("#student_course").val( list_value);
                            $('.course_div').html('');
                         }
 
                        console.log("aaaaaaafter",list_value);
                   
                        });
                         
        }
    });
}

 
$(document).ready(function(){
    console.log('document is ready')

    $("#student_course").keyup(function(){
        auto_course_data();
          
    });
});



 function course_list() {
      //  console.log("inside course_list");
      // var test1 = $("#student_course").val($(this).html());
      // console.log('zzztest1' , test1);
       var list_value  = $(this).text();
   $("#student_course").text( list_value);
  


 }

 