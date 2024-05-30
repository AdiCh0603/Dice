var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.ceil(randomNumber1);

var randomimg1="dice"+randomNumber1+".png";
var randomsource1="images/"+randomimg1;

var im1=document.querySelectorAll("img")[0];
im1.setAttribute("src",randomsource1);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.ceil(randomNumber2);

var randomimg2="dice"+randomNumber2+".png";
var randomsource2="images/"+randomimg2;

var im2=document.querySelectorAll("img")[1];
im2.setAttribute("src",randomsource2);

if(randomNumber1>randomNumber2){
    var t1=document.querySelectorAll("h1")[0];
    t1.innerHTML="Player1 Wins 🚩";
}
else if(randomNumber2>randomNumber1){
    var t2=document.querySelectorAll("h1")[0];
    t2.innerHTML="Player2 Wins 🚩";
}
else{
    var t2=document.querySelectorAll("h1")[0];
    t2.innerHTML="Draw 🤝";
}




