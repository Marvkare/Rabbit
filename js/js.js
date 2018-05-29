const left = document.getElementById('left');
const right = document.getElementById('right');
const imgSlider = document.getElementById('img-slider')
const img = document.getElementById('img')
console.log(img);
left.onclick = function(){ clickLeft()}

right.onclick = function (){ clickRight()}

var noimg = 8;
var x=0
addImage(x);
function  clickLeft(){

  this.x =+ x-1
  if(x<0){
    this.x = noimg
  }
  addImage(x)
}

function clickRight(){

    this.x =+ x+1
    if(x > noimg){
      this.x = 0;
    }
    addImage(x)

}



function addImage(x){
  console.log(x);
  img.src = `img/fondo${x}.jpg`

}
