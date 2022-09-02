let username;
let userresult;

username = prompt("お名前を教えて下さい。");

document.getElementById("name").innerHTML = username;

if (username == "" ){
    document.getElementById("name").innerHTML = "名無し";
}


let rand = Math.floor( Math.random() * 5) ;
if (rand == 0){
    userresult = "大吉";
} else if(rand == 1){
    userresult = "中吉";
} else if(rand == 2){
    userresult = "小吉";
} else if(rand == 3){
    userresult = "吉";
} else if(rand == 4){
    userresult = "凶";
}

document.getElementById("result").innerHTML = userresult;
