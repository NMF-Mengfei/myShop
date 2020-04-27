(function(win,doc){
  var oRoot = document.getElementsByTagName('html')[0];
  const baseSize = 32;
  function calcFs(){
    const scale = document.documentElement.clientWidth / 750
    oRoot.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  }
  win.addEventListener('resize',calcFs,false);
  doc.addEventListener('DOMContentLoaded',calcFs,false)
})(window,document)
