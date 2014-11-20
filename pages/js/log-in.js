$('button').on('click', function() {
  var usrname = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var local = JSON.parse(localStorage.getItem(usrname));
  if (local && local[2] == password) {
    window.location.href = '../myreview/myreview.html';
  }
  else if (usrname == undefined || password == undefined) {
    $('header').after('<section id="error"><p>Please write your information to sign in.</p></section>');
    $('#error').slideDown(600);
  }
  else if (local && password != local[2]) {
    $('header').after('<section id="error"><p>Username and Password do not match.Please try again!</p></section>');
    $('#error').slideDown(600);
  }
  else if (!local) {
    $('header').after('<section id="error"><p>The Username is not correct. Please ry again!</p></section>');
    $('#error').slideDown(600);
  }
})