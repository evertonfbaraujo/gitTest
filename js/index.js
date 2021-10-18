// window.onload =  sysFunc();

// function sysFunc(){
//    var sys = window.navigator.userAgent
//    let sysWow

//    if(sys.indexOf('Windows NT 10.0') > -1){
//        sysWow = 'Windows'
//        console.log(sysWow)
//    }else{
//        document.write( sysWow = sys)
//    }
let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')
var canvasWidth =  document.querySelector('.container').offsetWidth
var canvasHeight =  document.querySelector('.container').offsetHeight
canvas.width = canvasWidth
canvas.height = canvasHeight


// let tFlower = new Image()
// let bFlower = new Image()

// tFlower.onload = function(){
//     ctx.drawImage(tFlower, -100 ,-150 , 570, 460)
// }
// tFlower.src = "../imgs/top-right-flowers.svg"


// bFlower.onload = ()=>{
//     ctx.drawImage(bFlower, -90, 640 , 459,492)
// }

// bFlower.src = "../imgs/bottom-left-flowers.svg"

