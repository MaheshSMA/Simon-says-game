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
    user=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`)
    buttonflash(randbtn);
    // console.log(randcolor);
    gamseq.push(randcolor);
    console.log(gamseq);

}

function buttonflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    let btncolor=btn.classList[1];
    user.push(btncolor);
    check(user.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function check(idx){
    if(user[idx]===gamseq[idx]){
        if(user.length==gamseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over ! Your score is <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    gamseq=[];
    user=[];
    level=0;
}
