
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
                if(isNaN(student_array[i].idval)) {
                     student_array[i].idval  = '0';

                };

                console.log("aaaaa check id",  student_array[i].idval   );
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
                console.log("student_array=" , student_array[i]);
                console.log("student array at " , i , " = ", student_array[i]);

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
function add_send_studentinfo(){
 
            student_array= [];
            new_student ='';

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
                if(isNaN(student_array[i].id)) {
                     student_array[i].id  = '0';

                };

                console.log("aaaaa check id",  student_array[i].idval   );
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
                console.log("student_array=" , student_array[i]);
                console.log("student array at " , i , " = ", student_array[i]);
          
    	$.ajax({
      		url:'http://s-apis.learningfuze.com/sgt/create',
      		dataType:'html',
      		//data: {name: $('.name').val(),  grade: $('.grade').val() , course:$('.course').val() },
            data: {name: new_student.name , grade:  new_student.grade  , course: new_student.course },
       		method: 'POST',
      		cache: false,
      		crossDomain: true, 
      		success: function(response){
             
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
    console.log ("inside get_student_data")
    console.log('student.array', student_array);
    $.ajax({
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/sgt/get',
        success: function(response) {
            window.response = response;
            console.log('loaded', response);
            student_array = student_array.concat(response.data);
            for (var i = 0; i < student_array.length; i++) {
               
                console.log("student_array" , student_array[i]);
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
                newdiv.append(id_output, name_output, course_output, grade_output,delete_output);
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
    