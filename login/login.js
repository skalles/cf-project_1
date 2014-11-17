$(document).ready(function(){

  $("form").submit(function(evt){
    evt.preventDefault();
    var url = $(this).attr("action");
    var formData = $(this).serialize();
    $.post(url,formData,function(response){
      $(".login").html("<p>Thanks for sigining up!</p>")
    })
  });//end submit
});//end ready


//Next step, create a server and implement it to the html.
  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function(){
  // if(xhr.readystate === 4){
  // var loginDatabase = JSON.parse(xhr.responseText);
  // console.log(typeof(xhr.responseText);//convert json file to a javascript object
  // }
  // };
  // xhr.open('Get','loginDatabase.json');
  // xhr.send();
