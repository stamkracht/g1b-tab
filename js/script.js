chrome.omnibox.onInputChanged.addListener(function (q) {
  var el = document.createElement('span');
  document.body.appendChild(el);
  var updateElement = function() {
    var size = Math.round(Math.random() * 10 + 15);
    var offset = Math.floor(Math.random() * 50);
    var duration = Math.floor(Math.random() * 10);
    el.innerHTML = '<span style="right:'+offset+'vw; font-size: '+size+'px; animation-duration:'+duration+'s">'+q.slice(-1)+'</span>';
    setTimeout(function () {
      updateElement();
    }, duration * 1000);
  };
  updateElement();
});

chrome.omnibox.onInputEntered.addListener(function (q) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: 'https://google.com/search?q='+q});
  });
});
