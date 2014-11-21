function users (email, username, password, review) {
  this.email = email;
  this.usrname = username;
  this.password = password;
  this.review = review;
  var array = [username, email, password, []];
  localStorage.setItem(username, JSON.stringify(array));
};

function sbmt() {
  var email = document.getElementById('email').value;
  var username = document.getElementById('usrname').value;
  var password = document.getElementById('pswd').value;
  var passwordR = document.getElementById('pswdR').value;
  if (password == passwordR && email != '' && username != '') {
    new users(email, username, password);
    window.location.href = 'myreview.html';
  }
  else {
    $('header').after('<div id="alert"><p>PLEASE TRY AGAIN...</p></div>');
    $('#alert').slideDown();
  }
};

