console.log("background running");
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
  // console.log(tab);
  let mgs = {
    txt:"hello"
  }
  chrome.tabs.sendMessage(tab.id,mgs);
}
