$('#menu').on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
  $('#username').text(localUser[0]);
});


$("nav").on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
});


appending = function(albumTitle, artist, ratingStar, comment) {
  $('#pageTitle').after("<article class='reviewTitle'><section class='info'><h2 class='albumTitle'>" + albumTitle + "</h2><h3 class='artist'>" + artist + "</h3><section class='rating'>" + ratingStar + "</section></section><section class='comment'><p>" + comment + "</p></section></article>");
};

var local = JSON.parse(localStorage.getItem('shane'));
for (i=0; i < local[3].length; i++) {
  if (local[3][i] != undefined) {
    var ratingStar;
    if (local[3][i][2] == 'star1') {
      ratingStar = "<p class='star'>★</p>";
    }
    else if (local[3][i][2] == 'star2') {
      ratingStar = "<p class='star'>★★</p>";
    }
    else if (local[3][i][2] == 'star3') {
      ratingStar = "<p class='star'>★★★</p>";
    }
    else if (local[3][i][2] == 'star4') {
      ratingStar = "<p class='star'>★★★★</p>";
    }
    else if (local[3][i][2] == 'star5') {
      ratingStar = "<p class='star'>★★★★★</p>";
    };
    appending(local[3][i][0], local[3][i][1], ratingStar, local[3][i][3]);
  };
};

$('#writeReview').on('click', function() {
  window.location.href='write.html';
});
if ($(window).width() < 500) {
  $('.reviewTitle').on('click', function () {
    $(this).find('.comment').slideToggle();
    // if ($(this).css('opacity') != '1') {
    //   $(this).css('opacity', '1');
    // }
    // else {
    //   $(this).css('opacity', '0.8');
    // }
  });
}
