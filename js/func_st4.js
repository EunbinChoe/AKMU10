// next page
document.getElementById("box").addEventListener("click", function () {
    if(document.getElementById("pg7_img").style.display == "block") {
        document.getElementById("pg7_img").style.display = "none";
        document.getElementById("pg8_img1").style.display = "block";
        document.getElementById("pg7_box").style.display = "none";
        document.getElementById("pg8_box").style.display = "flex";
    }else if(document.getElementById('pic_9').style.display == "block"){
        document.getElementById("pic_9").style.display = "none";
        document.getElementById("pg8_img3").style.display = "block";
        document.getElementById("pg8-1_box").style.display = "none";
        document.getElementById("pg8_box").style.display = "flex";
    }else if(document.getElementById('outro1').style.display == "flex"){
        document.getElementById("outro1").style.display = "none";
        document.getElementById("outro2").style.display = "flex";
    }else if(document.getElementById('outro2').style.display == "flex"){
        document.querySelector(".top").style.display = "none";
        document.querySelector(".bottom").style.display = "none";
        document.getElementById("out").style.display = "flex";
    }else {
        console.log("Error");
    }
});

document.getElementById("out").addEventListener("click", function(){
    location.replace("credits.html")
})


// next room
const nextRoom = document.querySelectorAll(".move");
nextRoom.forEach((item) =>
item.addEventListener("click", function () {
    if(document.getElementById('pg8_img1').style.display == "block"){
        document.getElementById("pg8_img1").style.display = "none";
        if (this.children.item(0).classList[1] == "to-right") {
            document.getElementById("pg8_img2").style.display = "block";
        } else if (this.children.item(0).classList[1] == "to-left") {
            document.getElementById("pg8_img3").style.display = "block";
        }else {
            console.log("error d");
        }
    }else if(document.getElementById('pg8_img2').style.display == "block"){
        document.getElementById("pg8_img2").style.display = "none";
        if (this.children.item(0).classList[1] == "to-right") {
            document.getElementById("pg8_img3").style.display = "block";
        } else if (this.children.item(0).classList[1] == "to-left") {
            document.getElementById("pg8_img1").style.display = "block";
        }else {
            console.log("error d");
        }
    }else if(document.getElementById('pg8_img3').style.display == "block"){
        document.getElementById("pg8_img3").style.display = "none";
        if (this.children.item(0).classList[1] == "to-right") {
            document.getElementById("pg8_img1").style.display = "block";
        } else if (this.children.item(0).classList[1] == "to-left") {
            document.getElementById("pg8_img2").style.display = "block";
        }else {
            console.log("error d");
        }
    }else if(document.getElementById('pic_11').style.display == "block"){
        if(document.getElementById('mggl_4').style.display == "block" && document.getElementById('mggl_5').style.display == "block" && document.getElementById('mggl_11').style.display == "block"){
            document.getElementById("cl_11").style.display = "none";
        }
        document.getElementById("pic_11").style.display = "none";
        document.getElementById("pg8_img1").style.display = "block";
    }else if(document.getElementById('pic_7').style.display == "block"){
        document.getElementById("pic_7").style.display = "none";
        document.getElementById("pic_47").style.display = "none";
        document.getElementById("pg8_img2").style.display = "block";
    }else if(document.getElementById('pic_8').style.display == "block"){
        document.getElementById("pic_8").style.display = "none";
        document.getElementById("pg8_img2").style.display = "block";
    }else{
        console.log("Error");
    }
}));


// Clue Clicking
let lpUnlock = false;
const clicks = document.querySelectorAll(".click");
clicks.forEach((item) =>
item.addEventListener("click", function () {
    this.parentElement.classList.add("clicked");
    document.getElementById("box").classList.add("clicked");
    var selected_num = this.id.split("_").pop();
    document.getElementById("pg8_img1").style.display = "none";
    document.getElementById("pg8_img2").style.display = "none";
    document.getElementById("pg8_img3").style.display = "none";
    document.getElementById("pg8-1_box").style.display = "none";
    if (selected_num >= 0 && selected_num <= 3) {
        let clueName = "cl_" + selected_num;
        document.getElementById(clueName).style.display = "none";
        if (selected_num < 2){
            document.getElementById("pg8_img1").style.display = "block";
        }else if (selected_num == 2){
            document.getElementById("pg8_img2").style.display = "block";
        }else {
            document.getElementById("pg8_img3").style.display = "block";
        }
        let itemName = "mggl_" + (Number(selected_num) + 6);
        document.getElementById(itemName).style.display = "block";
        document.getElementById("getnote").style.display = "block";
        setTimeout(function(){document.getElementById("getnote").style.display = "none";}, 3000);
    } else if (selected_num == 11) {
        document.getElementById("pic_11").style.display = "block";
    } else if (selected_num == 4) {
        if (document.getElementById("draweropen").style.display == "none"){
            document.getElementById("cl_4").style.display = "none";
            document.getElementById("mggl_11").style.display = "block";
            document.getElementById("pic_11").style.display = "block";
            document.getElementById("obtaineditem").style.display = "block";
            setTimeout(function(){document.getElementById("obtaineditem").style.display = "none";}, 2000);    
        }else {
            document.getElementById("locked").style.display = "block";
            setTimeout(function(){document.getElementById("locked").style.display = "none";}, 2000);    
        }
    } else if (selected_num == 5) {
        document.getElementById("empty").style.display = "block";
        setTimeout(function(){document.getElementById("empty").style.display = "none";}, 2000);
        document.getElementById("pic_11").style.display = "block";
    } else if (selected_num == 6) {
        document.getElementById("mggl_4").style.display = "block";
        document.getElementById("mggl_5").style.display = "block";
        document.getElementById("obtaineditem").style.display = "block";
        setTimeout(function(){document.getElementById("obtaineditem").style.display = "none";}, 2000);    
        document.getElementById("cl_6").style.display = "none";
        document.getElementById("pic_11").style.display = "block";
    } else if (selected_num == 7 && !lpUnlock) {
        document.getElementById("pic_7").style.display = "block";
    } else if (selected_num == 7 && lpUnlock) {
        document.getElementById("pic_8").style.display = "block";
    } else if (selected_num == 8 && document.getElementById("mggl_12").classList[1] == "selected__item") {
        lpUnlock = true;
        document.getElementById("pic_7").style.display = "none";
        document.getElementById("pic_8").style.display = "block";
        document.getElementById("bi_12").style.display = "none";
        document.getElementById("mggl_12").style.display = "none";
    } else if (selected_num == 8) {
        document.getElementById("locked").style.display = "block";
        setTimeout(function(){document.getElementById("locked").style.display = "none";}, 2000);    
    } else if (selected_num == 9) {
        document.body.style.background = "white";
        document.getElementById("sl_9").classList.add("selected__clue");
        document.getElementById("pic_9").style.display = "block";
        document.getElementById("pg8-1_box").style.display = "flex";
        document.getElementById("pg8_box").style.display = "none";
    } else if (selected_num == 10 && wordsfound) {
        document.getElementById("pg8_img3").style.display = "block";
        document.getElementById("cl_10").style.display = "none";
        document.getElementById("mggl_12").style.display = "block";
        document.getElementById("mggl_2").style.display = "none";
        document.getElementById("mggl_11").style.display = "none";
        document.getElementById("bi_2").style.display = "none";
        document.getElementById("bi_11").style.display = "none";
        document.getElementById("obtaineditem").style.display = "block";
        setTimeout(function(){document.getElementById("obtaineditem").style.display = "none";}, 2000);    
    } else if (selected_num == 10 && !wordsfound) {
        document.getElementById("pg8_img3").style.display = "block";
        document.getElementById("notyet").style.display = "block";
        setTimeout(function(){document.getElementById("notyet").style.display = "none";}, 1000);    
    } else if (selected_num == 47) {
        document.getElementById("pg8_img2_").style.display = "none";
        document.getElementById("pic_47").style.display = "block";
        document.body.style.backgroundColor = "#000";
    }

})
);


// Clue 4 - drawer
document.getElementById("clue4").addEventListener("click", function () {
    let x = document.getElementById("txt").value;
    x = x.replace(/\s/g, "");
    if (x.toUpperCase() == "P3AM8") {
        document.getElementById("mggl_6").style.display = "none";
        document.getElementById("mggl_7").style.display = "none";
        document.getElementById("mggl_8").style.display = "none";
        document.getElementById("mggl_9").style.display = "none";
        document.getElementById("mggl_10").style.display = "none";
        document.getElementById("bi_6").style.display = "none";
        document.getElementById("bi_7").style.display = "none";
        document.getElementById("bi_8").style.display = "none";
        document.getElementById("bi_9").style.display = "none";
        document.getElementById("bi_10").style.display = "none";
        document.getElementById("draweropen").style.display = "none";
        document.getElementById("open").style.display = "block";
        setTimeout(function(){document.getElementById("open").style.display = "none";}, 1000);
    } else {
        document.getElementById("wrong").style.display = "block";
        setTimeout(function(){document.getElementById("wrong").style.display = "none";}, 1000);
    }
});

// Clue 5 - song
document.getElementById("clue5").addEventListener("click", function () {
    let x = document.getElementById("txt2").value;
    x = x.replace(/\s/g, "");
    if (x == "사람들이움직이는게") {
        document.getElementById("pic_8").style.display = "none";
        document.getElementById("pg8_img2_").style.display = "block";
        document.getElementById("safepassword").style.display = "block";
        document.getElementById("mggl_13").style.display = "block";
        setTimeout(function(){
            document.getElementById("safepassword").style.display = "none";
            document.getElementById("safeplace").style.display = "block";
        }, 2000);
        setTimeout(function(){document.getElementById("safeplace").style.display = "none";}, 4000);
    } else {
        document.getElementById("wrongsong").style.display = "block";
        setTimeout(function(){document.getElementById("wrongsong").style.display = "none";}, 1000);
    }
});

// Clue 6 - time
document.getElementById("clue6").addEventListener("click", function () {
    let x = document.getElementById("appt").value;
    if (x == "07:26" || x == "19:26") {
        document.querySelector(".ahmola6").style.display = "none";
        document.getElementById("mggl_10").style.display = "block";
        document.getElementById("cl_9").style.display = "none";
        document.getElementById("obtaineditem").style.display = "block";
        setTimeout(function(){document.getElementById("obtaineditem").style.display = "none";}, 2000);
    } else {
        document.getElementById("wrongtime").style.display = "block";
        setTimeout(function(){document.getElementById("wrongtime").style.display = "none";}, 1000);
    }
});

// Clue 47 answer
document.getElementById("clue47").addEventListener("click", function() {
    let x1 = document.getElementById("numb").value;
    if (x1 == 722271){
        document.getElementById("pg8_box").style.display = "none";
        document.getElementById("outro1").style.display = "flex";
        document.getElementById("pic_47").classList.add("outro");
    }else if (isNaN(x1)) {
        console.log("Input not valid");
    } else {
        document.getElementById("wrong").style.display = "block";
        setTimeout(function(){document.getElementById("wrong").style.display = "none";}, 1000);
    }
});


// Opening Item
let wordsfound = false;
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
    }else if (i == 2 && (document.getElementById("mggl_2").style.display == "block" || document.getElementById("mggl_3").style.display == "block")) {
        if (document.getElementById("mggl_11").style.display == "block") {
            wordsfound = true;
        }
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
    }else if (i == 5 && document.getElementById("mggl_5").style.display == "block") {
        if (document.getElementById("bi_5").style.display == "block"){
            document.getElementById("bi_5").style.display = "none";
        }else {
            document.getElementById("bi_5").style.display = "block";
        }
        document.getElementById("mggl_5").classList.toggle("selected__item");
    }else if (i == 6 && document.getElementById("mggl_6").style.display == "block") {
        if (document.getElementById("bi_6").style.display == "block"){
            document.getElementById("bi_6").style.display = "none";
        }else {
            document.getElementById("bi_6").style.display = "block";
        }
        document.getElementById("mggl_6").classList.toggle("selected__item");
    }else if (i == 7 && document.getElementById("mggl_7").style.display == "block") {
        if (document.getElementById("bi_7").style.display == "block"){
            document.getElementById("bi_7").style.display = "none";
        }else {
            document.getElementById("bi_7").style.display = "block";
        }
        document.getElementById("mggl_7").classList.toggle("selected__item");
    }else if (i == 8 && document.getElementById("mggl_8").style.display == "block") {
        if (document.getElementById("bi_8").style.display == "block"){
            document.getElementById("bi_8").style.display = "none";
        }else {
            document.getElementById("bi_8").style.display = "block";
        }
        document.getElementById("mggl_8").classList.toggle("selected__item");
    }else if (i == 9 && document.getElementById("mggl_9").style.display == "block") {
        if (document.getElementById("bi_9").style.display == "block"){
            document.getElementById("bi_9").style.display = "none";
        }else {
            document.getElementById("bi_9").style.display = "block";
        }
        document.getElementById("mggl_9").classList.toggle("selected__item");
    }else if (i == 10 && document.getElementById("mggl_10").style.display == "block") {
        if (document.getElementById("bi_10").style.display == "block"){
            document.getElementById("bi_10").style.display = "none";
        }else {
            document.getElementById("bi_10").style.display = "block";
        }
        document.getElementById("mggl_10").classList.toggle("selected__item");
    }else if (i == 6 && document.getElementById("mggl_11").style.display == "block") {
        if (document.getElementById("bi_11").style.display == "block"){
            document.getElementById("bi_11").style.display = "none";
        }else {
            document.getElementById("bi_11").style.display = "block";
        }
        document.getElementById("mggl_11").classList.toggle("selected__item");
    }else if (i == 7 && document.getElementById("mggl_12").style.display == "block") {
        if (document.getElementById("bi_12").style.display == "block"){
            document.getElementById("bi_12").style.display = "none";
        }else {
            document.getElementById("bi_12").style.display = "block";
        }
        document.getElementById("mggl_12").classList.toggle("selected__item");
    }else if (i == 8 && document.getElementById("mggl_13").style.display == "block") {
        if (document.getElementById("bi_13").style.display == "block"){
            document.getElementById("bi_13").style.display = "none";
        }else {
            document.getElementById("bi_13").style.display = "block";
        }
        document.getElementById("mggl_13").classList.toggle("selected__item");
    }else {
        // console.log("Error");
        return;
    }
}));