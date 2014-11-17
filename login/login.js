//Next step, create a server and implement it to the html.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(xhr.readystate === 4){
    var loginDatabase = JSON.parse(xhr.responseText);//convert json file to a javascript object
  }
};
xhr.open('Get','loginDatabase.json');
xhr.send();
