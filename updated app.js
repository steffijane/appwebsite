window.onload = function(){
  var step=1
  function slideit(){
    document.getElementById('my-img').src = 'image'+step+'.jpg'
    if(step<3)
      step++
    else
      step=1
    setTimeout(slideit,2500)
  }

  slideit()
}
