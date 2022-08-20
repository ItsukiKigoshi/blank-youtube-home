$(function() {
  $('tp-yt-app-drawer').remove();
  $('ytd-two-column-browse-results-renderer').remove();
  $('#home-page-skeleton').remove();
  for (var i=0; i<100; i++){
    setTimeout(function() {
      $('tp-yt-app-drawer').remove();
      $('ytd-two-column-browse-results-renderer').remove();
    }, 100);
  } 
});