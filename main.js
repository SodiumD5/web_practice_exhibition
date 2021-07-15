var image =["source/tree.jpg", "source/fire.jpg", "source/marble.jpg"]
var title =["나무 애니메이션", "불꽃 애니메이션", "구슬 애니메이션"]
var link = ["tree.html","fire.html", "marble.html"]
var number = 1;

function left(){
    document.getElementById("rightbutton").style.visibility="visible";
    document.getElementById("leftbutton").style.visibility="visible";
    if (number>0){
        number--;
        document.getElementById("Image").src=image[number];
        document.getElementById("picturename").innerText=title[number];
        document.getElementById("link").setAttribute('href',link[number]);
        if (number==0){
            document.getElementById("leftbutton").style.visibility="hidden";
        }
    }
    else{
        document.getElementById("leftbutton").style.visibility="hidden";
    }
    
}

function right(){
    document.getElementById("rightbutton").style.visibility="visible";
    document.getElementById("leftbutton").style.visibility="visible";
    if (number<2){
        number+=1;
        document.getElementById("Image").src=image[number];
        document.getElementById("picturename").innerText=title[number];
        document.getElementById("link").setAttribute('href',link[number]);
        if (number==2){
            document.getElementById("rightbutton").style.visibility="hidden";
        }
    }
    else{
        document.getElementById("rightbutton").style.visibility="hidden";
    }
}



