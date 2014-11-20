$('#menu').on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
});

var localUser = JSON.parse(localStorage.getItem('shane'));
var rateStar;
$('input[type=radio]').on('click', function() {
  rateStar = this.id;
});
$('#submit').on('click', function () {
  var albumTitle = document.getElementById('albumTitle').value;
  var artistName = document.getElementById('artistName').value;
  var comment = document.getElementById('comment').value;
  var reviewExample = [albumTitle, artistName, rateStar, comment];
  localUser[3].push(reviewExample);
  localStorage.setItem('shane', JSON.stringify(localUser));
  window.location.href = 'myreview.html';
})
