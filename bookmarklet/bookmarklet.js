(function(){

  console.log("bookmarklet started!");
  let paras = document.getElementsByTagName('p');
  for(elemntd of paras){
    elemntd.innerHTML ='kitten';
  }
})();
