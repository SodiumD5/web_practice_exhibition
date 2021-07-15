var canvas = document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c = canvas.getContext('2d');

var colorArray =[
    ,
    '#a29bfe', 
    '#ffeaa7',
    '#dfe6e9',
    '#55efc4',
];

var x=Math.random() * innerWidth;
var y=Math.random() * innerHeight;
var dx=(Math.random(1,5)) ;
var dy=(Math.random(1,5) ) ;
var radius= 30;

window.addEventListener(
    'resize', function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
    }
)

window.addEventListener('click', function(event){
    for (var i =0; i<circleArray.length; i++){
        circleArray[i].dy = Math.random() * 20
    }
})

//마우스 x좌표 y좌표 구해서 변수에 저장
const mouse={
    x: innerWidth /2,
    y: innerHeight/2
};

window.addEventListener('mousemove', event =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

function Circle(x,y,dx,dy,radius,a){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.a=a;
    this.radius=radius;
    this.color=colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0, Math.PI *2, false);
        c.fillStyle= this.color
        c.fill();
    
    }

    this.update= function() {
    
        this.x += this.dx;
        this.dy+=this.a;
        this.y+=this.dy;

        if(this.x < this.radius) {
            this.x = this.radius
            this.dx *= -0.9
        }
        else if(innerWidth - this.x < this.radius) {
            this.x = innerWidth-this.radius;
            this.dx *= -0.9
        }

        if(innerHeight - this.y < this.radius) {
            this.y = innerHeight - this.radius
            this.dy *= -0.9
        }
        if(this.y < this.radius) {
            this.y = this.radius
            this.dy *= -1
        }
        
        if (Math.pow(mouse.x-this.x,2)+Math.pow(mouse.y-this.y,2)<2000){
            this.x=mouse.x
            this.y=mouse.y
        }

        
        this.draw();

    }
    
}
    

var circleArray =[]

function init(){
    circleArray=[];
    
    for (var i=0; i<800; i++){
        var radius=Math.random() *10 +1;
        var x=Math.random() * innerWidth -radius *2;
        var a= 0.1;
        var dx = (Math.random()-0.5) * 8
        var dy=0;
        var y= innerHeight* 0.4 + (Math.random() - 0.5) * innerHeight* 0.8
        circleArray.push(new Circle(x,y,dx,dy,radius,a))
    }
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight); //화면 지움
    
    for (var i =0; i<circleArray.length; i++){
        circleArray[i].update();
    }
    
}




init()
animate()
