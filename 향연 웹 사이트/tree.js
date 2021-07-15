var canvas = document.querySelector('canvas');

canvas.width=2077;
canvas.height=2000;

var c = canvas.getContext('2d');

var height = 200;

function trunk(){
    c.beginPath();
    c.fillStyle="#964B00";
    c.fillRect(innerWidth *0.5-30,innerHeight-400,60,height);   
}

function grass(){
    c.beginPath();
    c.fillStyle="#008000";
    c.fillRect(0,innerHeight-height, innerWidth,height);
    
}

var colorArray=[
    '#81ecec',
    '#00b894',
    '#a29bfe',
    '#ffeaa7',
    '#b2bec3'
]

function leave(x,y,radius){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.color=colorArray[Math.floor(Math.random() *5-1)];
    this.increase=true;

    this.drawCircle=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
        c.fillStyle=this.color;
        c.fill();
        c.stroke();
             
    } 
    this.update=function(){
        this.drawCircle();
    
        if (this.radius==0){
            this.increase=true;
        }
        else if(this.radius>=40){
            this.increase=false;
        }
        
        if (this.increase==true){
            this.radius+=1;
        }
        else{
            this.radius-=1;
        }
    }

}

var circleArray=[];

function definition(){
    circleArray=[];

    for (var i=0; i<500; i++){
        
            var x=innerWidth*0.5+(Math.random()-0.5)*400;
            var y=innerHeight-400-height+(Math.random()-0.5)*400;
            var radius=Math.floor(i*0.2); 
            if (Math.pow(innerWidth*0.5-x,2)+Math.pow(innerHeight-400-height-y,2)<40000){ 
                circleArray.push(new leave(x,y,radius))
            }
    }
    
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    trunk()
    grass()
    for (var i =0; i<circleArray.length; i++){
        circleArray[i].update();
    }
    
}

definition();
animate();