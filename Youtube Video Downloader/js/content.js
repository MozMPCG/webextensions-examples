var vidId = '';
var audId = '';

//Get video ID from youtube URL
function getYTId(url) {
  var regEx = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regEx);
  return (match && match[7].length == 11) ? match[7] : false;
}

//Show an iframe which displays the available resolutions, formats and their sizes.
createFrame = function () {
  var ytId = getYTId(location.href); if (!ytId)return;
  var docObject = document.querySelector('#main>#info');

  if (docObject != null) {
    //Check if the frame has already been created
    var frameRow = document.getElementById('yt');
    if (frameRow == null) {
      var yt = document.createElement('div');
      yt.id  = 'yt';
      yt.className  = 'style-scope ytd-watch';

      //Show available video formats for download
      var iFrame = document.createElement('iframe');
      iFrame.id  = 'ytIframe';
      iFrame.src = 'https://youtubemp3api.com/@api/button/videos/' + ytId;
      iFrame.setAttribute('style', 'width:100%;height:110px');
      iFrame.setAttribute('frameborder', 'no');
      iFrame.setAttribute('scrolling', 'no');
      vidId = ytId;

      //Show available audio formats for download
      var musicFrame = document.createElement('iframe');
      musicFrame.id  = 'ytAudioFrame';
      musicFrame.src = 'https://youtubemp3api.com/@api/button/mp3/' + ytId;
      musicFrame.setAttribute('style', 'width:100%;height:110px');
      musicFrame.setAttribute('frameborder', 'no');
      musicFrame.setAttribute('scrolling', 'no');
      audId = ytId;

      
      docObject.parentNode.insertBefore(yt, docObject);
      yt.appendChild(iFrame);
      yt.appendChild(musicFrame);
    } else {
      var iFrame = document.querySelector('#ytIframe');
      var musicFrame = document.querySelector('#ytAudioFrame');
      if (iFrame && vidId != ytId) {
        var vidSource = 'https://youtubemp3api.com/@api/button/videos/' + ytId;
        iFrame.src = vidSource;
        vidId = ytId;
      }
      if (musicFrame && audId != ytId) {
        var audSource = 'https://youtubemp3api.com/@api/button/mp3/' + ytId;
        musicFrame.src = audSource;
        vidId = ytId;
      }
    }
  }
};

// Recreate the frame if youtube replaces it.
var checkInterval = setInterval(function () { createFrame(); }, 250);
