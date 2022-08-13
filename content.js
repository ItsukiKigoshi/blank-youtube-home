$(function() {
  $('#ytd-app').remove(); 
  $('#home-page-skeleton').remove();   
  setTimeout(function() {
    $('tp-yt-app-drawer').remove();
    $('ytd-two-column-browse-results-renderer').remove();
    $('#secondary-inner').remove();
    $('ytd-item-section-renderer').remove();
    $('ytd-comments-entry-point-header-renderer').remove();
	}, 500);
});