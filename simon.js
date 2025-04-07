let gamseq=[];
let user=[];

let btns = ["red","yellow","green","purple"]

let started=false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(!started){
        console.log("Game started");
        started=true;
        levelup();
    }
});

function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`)
    buttonflash();
}

function buttonflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}