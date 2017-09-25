// (function() {
  var resizeNYbg = function() {
    const innerH = window.innerHeight

    let elementNY = document.querySelectorAll(".bg-nycity")
    
    if(elementNY.length > 0) {
      elementNY.forEach(function(item) {
        item.style = `min-height: ${innerH}px`  
      })
    }
  }

  window.onresize = resizeNYbg
  resizeNYbg()
// })()