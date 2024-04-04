// next page
document.getElementById("box").addEventListener("click", function () {
    if(document.getElementById("pg4_img").style.display == "block") {
        document.getElementById("pg4_img").style.display = "none";
        document.getElementById("pg4_img1").style.display = "block";
        document.getElementById("pg3_box").style.display = "none";
        document.getElementById("pg4_box").style.display = "flex";
        document.body.style.backgroundColor = "#d5ff92";
    }else if(document.getElementById("pg4_img1").style.display == "block") { // || document.getElementById("pg4_img2").style.display == "block"
        // document.getElementById("pg4_img1").style.display = "none";
        // document.getElementById("pg4_img2").style.display = "none";
        // document.getElementById("pg5_img2").style.display = "block";
        // }else if(document.getElementById("pg3_img").style.display == "block" || document.getElementById("pg3_img2").style.display == "block") {
                return;
    }else if(document.getElementById("pic_4").style.display == "block"){ // || document.getElementById("pic_3").style.display == "block"
        const clicks = document.querySelectorAll(".clicked");
        clicks.forEach((item) => item.classList.remove("clicked"));
        const select = document.querySelectorAll(".selected__clue");
        select.forEach((item) => item.classList.remove("selected__clue"));
        document.body.style.backgroundColor = "#d5ff92";
        document.getElementById("pic_4").style.display = "none";
        // document.getElementById("pic_3").style.display = "none";
        document.getElementById("pg4_img1").style.display = "block";
        document.getElementById("pg4_box").style.display = "flex";
    // }else if(document.getElementById("pic_1").style.display == "block"){
    //     return;
    }else {
        console.log("Error");
    }
});


// next room
const nextRoom = document.querySelectorAll(".move");
nextRoom.forEach((item) =>
item.addEventListener("click", function () {
    if(document.getElementById('pg4_img1').style.display == "block"){
        document.getElementById("pg4_img1").style.display = "none";
        document.getElementById("pg4_img2").style.display = "block";
        document.body.style.backgroundColor = "#ead8b7";
    }else if(document.getElementById('pg4_img2').style.display == "block"){
        document.getElementById("pg4_img2").style.display = "none";
        document.getElementById("pg4_img1").style.display = "block";
        document.body.style.backgroundColor = "#d5ff92";
    }else if(document.getElementById('pg5_img').style.display == "block"){
        document.getElementById("pg5_img").style.display = "none";
        document.getElementById("pg5_img2").style.display = "block";
        document.body.style.backgroundColor = "#e6d8cb";
    }else if(document.getElementById('pg5_img2').style.display == "block"){
        document.getElementById("pg5_img2").style.display = "none";
        document.getElementById("pg5_img").style.display = "block";
        document.body.style.backgroundColor = "#e6d8cb";
    }else if(document.getElementById('pic_9').style.display == "block"){
        document.getElementById("pic_9").style.display = "none";
        document.getElementById("pg5_img2").style.display = "block";
        document.body.style.backgroundColor = "#e6d8cb";
    }else{
        console.log("Error");
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
            document.getElementById("pg4_img1").style.display = "none";
            document.getElementById("pg4_img2").style.display = "none";
            document.getElementById("pg5_img").style.display = "none";
            document.getElementById("pg5_img2").style.display = "none";
            if (selected_num == 4) {
                document.body.style.backgroundColor = "#d5ff92";
                document.getElementById("pg4-1_box").style.display = "flex";
                document.getElementById("pg4_box").style.display = "none";
            } else if (selected_num == 5) {
                document.getElementById("pg4_img2").style.display = "block";
                document.getElementById("cl_5").style.display = "none";
                document.getElementById("mggl_1").style.display = "block";
                return;
            } else if (selected_num == 6) {
                document.getElementById("pg4_img2").style.display = "block";
                document.getElementById("cl_6").style.display = "none";
                document.getElementById("mggl_2").style.display = "block";
                return;
            } else if (selected_num == 9) {
                document.body.style.backgroundColor = "#fefcf6";
                document.getElementById("pg4-1_box").style.display = "none";
                document.getElementById("pic_9").style.display = "block";
                return;
            } else if (selected_num == 15) {
                document.getElementById("cl_15").style.display = "none";
                document.getElementById("mggl_3").style.display = "block";
                return;
            } else if (selected_num == 16) {
                document.getElementById("pg4-1_box").style.display = "none";
                document.getElementById("pic_10").style.display = "block";
                return;
            } else {
                document.body.style.backgroundColor = "#fdfbf8";
            }
            var text_id = "sl_" + selected_num;
            var pic_id = "pic_" + selected_num;
            document.getElementById(text_id).classList.add("selected__clue");
            document.getElementById(pic_id).style.display = "block";
        })
    );
}


// unclick clue
document.getElementById("pic_10").addEventListener("click", function() {
    document.getElementById("pic_10").style.display = "none"
});


// Clue 3 answer
document.getElementById("clue3").addEventListener("click", function() {
    let x1 = document.getElementById("numb").value;
    let text;
    if (x1 == 5683){
        document.getElementById("in3").classList.add("input--correct");
        const clickeds = document.querySelectorAll(".clicked");
        clickeds.forEach((item) => item.classList.remove("clicked"));
        document.getElementById("cl_4").style.display = "none";
        document.getElementById("pic_4").style.display = "none";
        document.getElementById("pg5_img").style.display = "block";
        document.getElementById("pg4_box").style.display = "block";
        document.getElementById("mggl_2").style.display = "none";
        document.getElementById("note").style.display = "none";
        document.getElementById("stickynote").style.display = "block";
        document.getElementById("sl_4").classList.remove("selected__clue");
        document.body.style.backgroundColor = "#e6d8cb";
    }else if (isNaN(x1)) {
        text = "Input not valid";
    } else {
        text = "wrong";
    }
    // document.getElementById("demo").innerHTML = text;
});


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
    }else if (i == 2 && (document.getElementById("mggl_2").style.display == "block" || document.getElementById("mggl_3").style.display == "block")) {
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