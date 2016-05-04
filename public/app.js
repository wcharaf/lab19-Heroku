$(function() {
  var lyric = '';
  $.get('/api').success(function(data){
    lyric = data;
    $('#lyric').text(lyric);
  });
});
