$('#menu').on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
});

$('#pageTitle').on('click', function() {
  $('#profileInfo').slideToggle();
});

$("nav").on('click', function () {
  $('nav').animate({width: 'toggle'}, 250);
});

appending = function(albumTitle, artist, ratingStar, comment, albumCoverUrl) {
  $('#pageTitle').after("<article class='reviewTitle'><img class='cover' src='" + albumCoverUrl +"'><section class='info'><h2 class='albumTitle'>" + albumTitle + "</h2><h3 class='artist'>" + artist + "</h3><section class='rating'>" + ratingStar + "</section></section><section class='comment'><p>" + comment + "</p></section></article>");
};

var local = JSON.parse(localStorage.getItem('shane'));
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
  window.location.href='write.html';
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



    // <script src="jquery-2.1.1.js"></script>
    // <script>
    //   $('#menu').on('click', function () {
    //     $('nav').animate({width: 'toggle'}, 250);
    //   });

    //   $('#pageTitle').on('click', function() {
    //     $('#profileInfo').slideToggle();
    //   });

    //   var ratingStar;
    //   ratingStars = function() {
    //     if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star1') {
    //       ratingStar = "<p>★</p>";
    //     }
    //     else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star2') {
    //       ratingStar = "<p>★★</p>";
    //     }
    //     else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star3') {
    //       ratingStar = "<p>★★★</p>";
    //     }
    //     else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star4') {
    //       ratingStar = "<p>★★★★</p>";
    //     }
    //     else if (JSON.parse(localStorage.getItem(username))[3][albumIndexNumber][2] == 'star5') {
    //       ratingStar = "<p>★★★★★</p>";
    //     }
    //   };

    //   appending = function(albumTitle, artist, comment, albumCoverUrl) {
    //     $('#profileInfo').after("<article class='reviewTitle'><img class='cover' src='" + albumCoverUrl +"'><section class='info'><h2 class='albumTitle'>" + albumTitle + "</h2><h4 class='artist'>" + artist + "</h4></section><section class='rating'>" + ratingStar + "</section><section class='comment'><p>" + comment + "</p></section></article>");
    //   };

    //   $('.reviewTitle').on('click', function () {
    //     $(this).find('.comment').slideToggle();
    //     if ($(this).css('opacity') != '1') {
    //       $(this).css('opacity', '1');
    //     }
    //     else {
    //       $(this).css('opacity', '0.8');
    //     }
    //   });
