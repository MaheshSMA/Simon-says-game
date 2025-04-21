let gamseq=[];
let user=[];

let btns = ["r","y","g","p"]

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
    buttonflash(randbtn);
    // console.log(randcolor);
    gamseq.push(randcolor);


}

function buttonflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    user.push(btn);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function check(){
    
}