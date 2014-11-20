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
    // var b = localStorage.getItem(username);
    // console.log(JSON.parse(b));
    window.location.href = 'myreview.html';
  }
  else {
    alert('Try again')
  }
  // console.log(localStorage.key(1));//localStorage key can be received with this method. And then, we can reach user info.
};
