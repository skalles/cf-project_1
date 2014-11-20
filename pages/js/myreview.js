$('#menu').on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
});

$('#pageTitle').on('click', function() {
  $('#profileInfo').slideToggle();
});


appending = function(albumTitle, artist, ratingStar, comment, albumCoverUrl) {
  $('#profileInfo').after("<article class='reviewTitle'><img class='cover' src='" + albumCoverUrl +"'><section class='info'><h2 class='albumTitle'>" + albumTitle + "</h2><h4 class='artist'>" + artist + "<section class='rating'>" + ratingStar + "</section></h4></section><section class='comment'><p>" + comment + "</p></section></article>");
};

var local = JSON.parse(localStorage.getItem('shayne'));
for (i=0; i < local[3].length; i++) {
  if (local[3][i] != undefined) {
    var ratingStar;
    if (local[3][i][2] == 'star1') {
      ratingStar = "<p>★</p>";
    }
    else if (local[3][i][2] == 'star2') {
      ratingStar = "<p>★★</p>";
    }
    else if (local[3][i][2] == 'star3') {
      ratingStar = "<p>★★★</p>";
    }
    else if (local[3][i][2] == 'star4') {
      ratingStar = "<p>★★★★</p>";
    }
    else if (local[3][i][2] == 'star5') {
      ratingStar = "<p>★★★★★</p>";
    };
    appending(local[3][i][0], local[3][i][1], ratingStar, local[3][i][3]);
    // console.log(local);
  };
};

$('#writeReview').on('click', function() {
  window.location.href='../write-a-review/write-a-review.html';
});

$('.reviewTitle').on('click', function () {
  $(this).find('.comment').slideToggle();
  if ($(this).css('opacity') != '1') {
    $(this).css('opacity', '1');
  }
  else {
    $(this).css('opacity', '0.8');
  }
});