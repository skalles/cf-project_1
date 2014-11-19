$('#menu').on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
});

$('#pageTitle').on('click', function() {
  $('#profileInfo').slideToggle();
});

var ratingStar;
ratingStars = function() {
  if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star1') {
    ratingStar = "<p>★</p>";
  }
  else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star2') {
    ratingStar = "<p>★★</p>";
  }
  else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star3') {
    ratingStar = "<p>★★★</p>";
  }
  else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star4') {
    ratingStar = "<p>★★★★</p>";
  }
  else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star5') {
    ratingStar = "<p>★★★★★</p>";
  }
};

appending = function(albumTitle, artist, comment, albumCoverUrl) {
  $('#profileInfo').after("<article class='reviewTitle'><img class='cover' src='" + albumCoverUrl +"'><section class='info'><h2 class='albumTitle'>" + albumTitle + "</h2><h4 class='artist'>" + artist + "</h4></section><section class='rating'>" + ratingStar + "</section><section class='comment'><p>" + comment + "</p></section></article>");
};

$('.reviewTitle').on('click', function () {
  $(this).find('.comment').slideToggle();
  if ($(this).css('opacity') != '1') {
    $(this).css('opacity', '1');
  }
  else {
    $(this).css('opacity', '0.8');
  }
});
//link to write-a-review page
function wreview() {
  document.location.href = "../write-a-review/write-a-review.html";
}
