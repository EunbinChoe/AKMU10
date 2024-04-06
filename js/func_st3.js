// next page
document.getElementById("box").addEventListener("click", function () {
    if(document.getElementById("pg5_img").style.display == "block" && document.getElementById("pg5_box").style.display == "flex") {
        document.getElementById("pg5_img").style.display = "none";
        document.getElementById("pg6_img_1").style.display = "block";
        document.getElementById("pg5_box").style.display = "none";
        document.getElementById("pg6_box").style.display = "flex";
    }else {
        console.log("Error");
    }
});

// next floor
document.getElementById("cl_1").addEventListener("click", function() {
    this.parentElement.style.display = "none";
    document.getElementById("pg7_img").style.display = "block";
    document.body.style.background = "#e6e6e6";
})



// next room
const nextRoom = document.querySelectorAll(".move");
nextRoom.forEach((item) =>
item.addEventListener("click", function () {
    let className = this.parentElement.id;
    let i = className.split("img_").pop();
    console.log(i);
    document.getElementById(className).style.display = "none";
    if(isNaN(i)){
        console.log(i.replace(/\d+/g, ''));
        if (i.replace(/\d+/g, '') == "close"){
            className = className.replace("close", "");
        }
    }else{
        className = className + "close";
    }
    document.getElementById(className).style.display = "block";
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
    }else if (i == 3 && document.getElementById("mggl_3").style.display == "block") {
        if (document.getElementById("bi_3").style.display == "block"){
            document.getElementById("bi_3").style.display = "none";
        }else {
            document.getElementById("bi_3").style.display = "block";
        }
        document.getElementById("mggl_3").classList.toggle("selected__item");
    }else if (i == 4 && document.getElementById("mggl_4").style.display == "block") {
        if (document.getElementById("bi_4").style.display == "block"){
            document.getElementById("bi_4").style.display = "none";
        }else {
            document.getElementById("bi_4").style.display = "block";
        }
        document.getElementById("mggl_4").classList.toggle("selected__item");
    }else if (i == 6 && document.getElementById("mggl_6").style.display == "block") {
        if (document.getElementById("bi_6").style.display == "block"){
            document.getElementById("bi_6").style.display = "none";
        }else {
            document.getElementById("bi_6").style.display = "block";
        }
        document.getElementById("mggl_6").classList.toggle("selected__item");
    }else {
        // console.log("Error");
        return;
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


// door Clicking
const clicks = document.querySelectorAll(".click");
clicks.forEach((item) =>
    item.addEventListener("click", function () {
    this.parentElement.classList.add("clicked");
    // document.getElementById("box").classList.add("clicked");
    // var selected_num = this.id.split("_").pop();
    var selected_num = this.classList[1].split("__").pop();
    console.log(selected_num);
    if (!isNaN(selected_num)){
        if (selected_num == 7 && document.getElementById("correct_room").style.display == "block"){
            // break;
        } else{
            document.getElementById("locked").style.display = "block";
            setTimeout(function(){document.getElementById("locked").style.display = "none";}, 2000);
        }
    };
})
);
