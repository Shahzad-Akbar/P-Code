const canvas = document.getElementById("canvas")
const cxt = canvas.getContext('2d')
let num;
let circleCount = 0;
// let r1 = 0;
// let r2 = 0;



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("click", function(event){

    if(circleCount >= 2){
        cxt.clearRect(0,0, canvas.width, canvas.height);
        circleCount = 0
        // r1=r2=0;

    }else{
         num = Math.floor(Math.random() * 100);            //for random radius
        //  if(r1 = 0){
        //     r1=num;
        //  }else{
        //     r2=num;
        //  }
    drawCircle(event.clientX, event.clientY)
    circleCount++;
    }

    // const differenct = r2-r1;
    // const radSum = r1+r2;
   
    
});

function drawCircle(x, y){
    console.log(num);
    cxt.beginPath()
    cxt.arc(x, y, num, 0, Math.PI * 2);
    cxt.stroke()
    
}
