// add string trim function
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ''); }

function openList(list) {
  var strings = list.split(/\r\n|\r|\n/);

  for (var i=0; i<strings.length; i++) {
    // check empty
    strings[i] = strings[i].trim();
    if (strings[i] == '') continue;

    var url = strings[i];

    //open the new tab
    chrome.extension.getBackgroundPage().createTab(url);
  }
}
