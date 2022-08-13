$(function() {
  $('tp-yt-app-drawer').remove();
  $('ytd-two-column-browse-results-renderer').remove();
  $('#home-page-skeleton').remove();
  for (var i=0; i<1000; i++){
    setTimeout(function() {
      $('tp-yt-app-drawer').remove();
      $('ytd-two-column-browse-results-renderer').remove();
    }, 100);
  } 
});