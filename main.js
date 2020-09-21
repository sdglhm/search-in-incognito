searchInIncognito = function(word) {
  var query = word.selectionText;
  chrome.windows.create({url: "https://www.google.com/search?q=" + query, "incognito": true});
}


chrome.contextMenus.create({
  title: "Search in Google (Incognito)",
  contexts:["selection"],
  onclick: searchInIncognito
});
