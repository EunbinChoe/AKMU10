// next page
document.getElementById("box").addEventListener("click", function () {
    if(document.getElementById("pg1_img").style.display == "block") {
        document.getElementById("pg1_img").style.display = "none";
        document.getElementById("pg2_img").style.display = "block";
        document.getElementById("pg1_box").style.display = "none";
        document.getElementById("pg2_box").style.display = "flex";
        document.body.style.backgroundColor = "#fedcca";
    }else if(document.getElementById("pg2_img").style.display == "block") {
        document.getElementById("pg2_img").style.display = "none";
        document.getElementById("pg3_img").style.display = "block";
        document.getElementById("pg2_box").style.display = "none";
        document.getElementById("pg3_box").style.display = "flex";
        document.body.style.backgroundColor = "#e2ede1";
    }else if(document.getElementById("pg3_img").style.display == "block" || document.getElementById("pg3_img2").style.display == "block") {
        return;
    }else if(document.getElementById("pic_2").style.display == "block" || document.getElementById("pic_3").style.display == "block"){
        const clicks = document.querySelectorAll(".clicked");
        clicks.forEach((item) => item.classList.remove("clicked"));
        const select = document.querySelectorAll(".selected__clue");
        select.forEach((item) => item.classList.remove("selected__clue"));
        document.getElementById("pic_2").style.display = "none";
        document.getElementById("pic_3").style.display = "none";
        document.getElementById("pg3_img").style.display = "block";
        document.getElementById("pg3_box").style.display = "flex";
        document.body.style.backgroundColor = "#e2ede1";
    }else if(document.getElementById("pic_1").style.display == "block"){
        return;
    }else {
        console.log("Error");
    }
});


// next room
const nextRoom = document.querySelectorAll(".move");
nextRoom.forEach((item) =>
item.addEventListener("click", function () {
    if(document.getElementById('pg3_img').style.display == "block"){
        document.getElementById("pg3_img").style.display = "none";
        document.getElementById("pg3_img2").style.display = "block";
    }else if(document.getElementById('pg3_img2').style.display == "block"){
        document.getElementById("pg3_img2").style.display = "none";
        document.getElementById("pg3_img").style.display = "block";
    }else{
        console.log("Error");
    }
}));
  

// Opening Item
const openItem = document.querySelectorAll(".item");
openItem.forEach((item) =>
  item.addEventListener("click", function () {
    let i = this.id.split("_").pop();
    if (i == 1 && document.getElementById("mggl_1").style.display == "block") {
        if (document.getElementById("bi_1").style.display == "block"){
            document.getElementById("bi_1").style.display = "none";
        }else {
            document.getElementById("bi_1").style.display = "block";
        }
        document.getElementById("mggl_1").classList.toggle("selected__item");
    }else if (i == 2 && document.getElementById("mggl_2").style.display == "block") {
        if (document.getElementById("bi_2").style.display == "block"){
            document.getElementById("bi_2").style.display = "none";
        }else {
            document.getElementById("bi_2").style.display = "block";
        }
        document.getElementById("mggl_2").classList.toggle("selected__item");
    }else {
        // console.log("Error");
        return;
    }
}));


// Clicking Items
const clickItems = document.querySelectorAll(".bag__item");
clickItems.forEach((item) => item.addEventListener("click",
function (){
    if (document.getElementById("bi_2").style.display == "block") {
        if (document.getElementById("letter2").style.display == "block"){
            document.getElementById("bi_2").style.display = "none";
            document.getElementById("mggl_2").style.display = "none";
            document.getElementById("letter2").style.display = "none";
            document.getElementById("letter_close").style.display = "block";
        }
    }else {
        if (document.getElementById("letter1").style.display == "block"){
            document.getElementById("letter1").style.display = "none";
            document.getElementById("letter2").style.display = "block";

        }else if (document.getElementById("letter2").style.display == "block"){
            document.getElementById("letter1").style.display = "block";
            document.getElementById("letter2").style.display = "none";
        }

    }
}));



// conversations
let i = 0;

const conversations = document.querySelectorAll(".conversation");
conversations.forEach((item) => item.addEventListener("click", function () {
    let text = "test";
    let j = this.id.split("_").pop();
    if (j == 1){
        if (i == 0) {
            text = "나 : \"좋은 아ㅊ- 네?<br>좋은 소식이요?<br>악뮤요?\"";
        } else if (i == 1) {
            text = "김탐정 : <br>\"자네가 내 밑에서 배운 것들을<br>써먹을 때가 왔다네.<br>탐정으로써 첫 의뢰네.<br>이 편지를 한번 읽어보게나.\"";
        } else {
            text = "";
            const clickeds = document.querySelectorAll(".clicked");
            clickeds.forEach((item) => item.classList.remove("clicked"));
            document.getElementById("cl_1").style.display = "none";
            document.getElementById("sl_1").classList.remove("selected__clue");
            document.getElementById("pic_1").style.display = "none";
            document.getElementById("mggl_1").style.display = "block";
            document.getElementById("pg3_img2").style.display = "block";
            document.getElementById("pg3-1_box").style.display = "none";
            document.getElementById("pg3_box").style.display = "flex";
            document.body.style.backgroundColor = "#e2ede1";
            i = 0;

        }
        document.getElementById("sl_1").innerHTML = text;
        ++i;
    } else {
        return;
    }
}));


// Clue Clicking
const check = document.querySelectorAll(".not__clickable");

if (!check.forEach((item) => item.classList.contains())) {
  const clicks = document.querySelectorAll(".click");
  clicks.forEach((item) =>
  item.addEventListener("click", function () {
    this.parentElement.classList.add("clicked");
    document.getElementById("box").classList.add("clicked");
    var selected_num = this.id.split("_").pop();
    document.getElementById("pg3_img").style.display = "none";
    document.getElementById("pg3_img2").style.display = "none";
    if (selected_num == 1) {
      document.body.style.backgroundColor = "#f7e6cd";
    } else if (selected_num == 2) {
      document.body.style.backgroundColor = "#e2ede1";
    } else {
      document.body.style.backgroundColor = "#fdfbf8";
    }
    var text_id = "sl_" + selected_num;
    var pic_id = "pic_" + selected_num;
    document.getElementById("pg3_box").style.display = "none";
    document.getElementById("pg3-1_box").style.display = "flex";
    document.getElementById(text_id).classList.add("selected__clue");
    document.getElementById(pic_id).style.display = "block";
    })
  );
}


// Clue 1 answer
document.getElementById("clue1").addEventListener("click", function() {
    let x1 = document.getElementById("numb").value;
    let text;
    if (x1 == 140407){
        document.getElementById("in1").classList.add("input--correct");
        const clickeds = document.querySelectorAll(".clicked");
        clickeds.forEach((item) => item.classList.remove("clicked"));
        document.getElementById("cl_2").style.display = "none";
        document.getElementById("pic_2").style.display = "none";
        document.getElementById("pg3_img").style.display = "block";
        document.getElementById("pg3_box").style.display = "block";
        document.getElementById("sl_2").classList.remove("selected__clue");
        document.getElementById("mggl_2").style.display = "block";
    }else if (isNaN(x1)) {
        text = "Input not valid";
    } else {
        document.getElementById("wrong").style.display = "block";
        setTimeout(function(){document.getElementById("wrong").style.display = "none";}, 1000);
        text = "wrong";
    }
    // document.getElementById("demo").innerHTML = text;
});


// Clue 2
document.getElementById("clue2").addEventListener("click", function () {
    let pre_x2 = document.getElementById("txt").value;
    let x2 = pre_x2.replace(/\s/g, "");
    let text;
    if (x2 == "악당구무리로47") {
        location.replace("st2_83.html");
        document.getElementById("in2").classList.add("input--correct");
    } else {
        document.getElementById("wrong").style.display = "block";
        setTimeout(function(){document.getElementById("wrong").style.display = "none";}, 1000);
        text = "wrong";
    }
    // document.getElementById("demo").innerHTML = text;
});
