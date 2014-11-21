$('.log-in-button').on('click', function() {
  var usrname = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var local = JSON.parse(localStorage.getItem(usrname));
  if (local && local[2] == password) {
    window.location.href = 'myreview.html';
  }
  else if (usrname == undefined || password == undefined) {
    $('header').after('<div id="alert"><p>Please write your information to sign in.</p></div>');
    $('#alert').slideDown(600);
  }
  else if (local && password != local[2]) {
    $('header').after('<div id="alert"><p>Username and Password do not match.Please try again!</p></div>');
    $('#alert').slideDown(600);
  }
  else if (!local) {
    $('header').after('<div id="alert"><p>The Username is not correct. Please try again!</p></div>');
    $('#alert').slideDown(600);
  }
})
