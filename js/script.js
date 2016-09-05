chrome.omnibox.onInputChanged.addListener(function (q) {
  var el = document.createElement('span');
  var offset = Math.floor(Math.random() * 50);
  var duration = Math.floor(Math.random() * 10);
  el.innerHTML = '<span style="right:'+offset+'vw; animation-duration:'+duration+'s">'+q.slice(-1)+'</span>';
  document.body.appendChild(el);
});

chrome.omnibox.onInputEntered.addListener(function (q) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: 'https://google.com/search?q='+q});
  });
});
