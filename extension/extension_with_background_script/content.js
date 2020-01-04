console.log("Ready to go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request,sender,sendResponse){
  console.log(request.txt);
  if(request.txt==="hello"){
    let paras = document.getElementsByTagName('p');
    for(elemntd of paras){
      // elemntd.innerHTML ='kitten';
      elemntd.style['background-color']='#00A000';
    }
  }
}
