$(function() {
  $('#ytd-app').remove(); 
  $('#home-page-skeleton').remove();   
  setTimeout(function() {
    // 0.5秒（500ms）後に処理
    $('tp-yt-app-drawer').remove();
    $('ytd-two-column-browse-results-renderer').remove();
    $('#secondary-inner').remove();
    $('ytd-item-section-renderer').remove();
    $('ytd-comments-entry-point-header-renderer').remove();
	}, 500);
});