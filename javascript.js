var quickest=200;
var count=0;
var avg=0;
var tottime=0;
var start=new Date().getTime();
function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    
function makeShape(){
    
    var top=Math.random()*400;
    var left=Math.random()*400;
    var width=Math.random()*200+100;
    document.getElementById("shape").style.width=width+"px";
    document.getElementById("shape").style.height=width+"px";
    document.getElementById("shape").style.top=top+"px";
    document.getElementById("shape").style.left=left+"px";
    if(Math.random()>0.5){
        document.getElementById("shape").style.borderRadius="50%";
    }
    else{
        document.getElementById("shape").style.borderRadius="0";
    }
    document.getElementById("shape").style.backgroundColor=getRandomColor();
          
    document.getElementById("shape").style.display="block";
    start=new Date().getTime();
}
        
function appear()
{
    setTimeout(makeShape,Math.random()*2000);
}
            
appear();
            
document.getElementById("shape").onclick=function(){
    count=count+1;
    document.getElementById("shape").style.display="none";
    var end=new Date().getTime();
    var timeTaken=(end-start)/1000;
    document.getElementById("timetaken").innerHTML=timeTaken+"s";
    if(timeTaken<quickest)
    {
        document.getElementById("quickesttime").innerHTML=timeTaken+"s";  
        quickest=timeTaken;
    }
    tottime=tottime+timeTaken;
    avg=tottime/count;
    document.getElementById("avg").innerHTML=avg.toFixed(3)+"s";
    appear();
}