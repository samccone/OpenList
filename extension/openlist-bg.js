chrome.runtime.onInstalled.addListener(function(details) {
    chrome.contextMenus.create({"title": "OpenList", "id": "OpenList-ContextMenuOpen", "contexts":["selection"]});

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        if (info.menuItemId === "OpenList-ContextMenuOpen") {
            openList(info.selectionText);
        }
    });
});

function createTab(url) {
  chrome.tabs.create({'url': 'https://google.com', 'selected':false}, function(tab) {
    if (!/^htt/.test(url)) {
      url = 'http://' + url;
    }

    console.log(url)

    chrome.tabs.executeScript(tab.id, {code: 'window.location="' + url + '"'});
  });
}
