import Sortable from "sortablejs";

// next page
document.getElementById("box").addEventListener("click", function () {
    // pg 4 init -> game play
    if(document.getElementById("pg4_img").style.display == "block") {
        document.getElementById("pg4_img").style.display = "none";
        document.getElementById("pg4_img1").style.display = "block";
        document.getElementById("pg3_box").style.display = "none";
        document.getElementById("pg4_box").style.display = "flex";
    // door close up -> pg 4
    }else if(document.getElementById("pic_4").style.display == "block"){ 
        const clicks = document.querySelectorAll(".clicked");
        clicks.forEach((item) => item.classList.remove("clicked"));
        const select = document.querySelectorAll(".selected__clue");
        select.forEach((item) => item.classList.remove("selected__clue"));
        document.body.style.backgroundColor = "#d5ff92";
        document.getElementById("pic_4").style.display = "none";
        document.getElementById("pg4_img1").style.display = "block";
        document.getElementById("pg4_box").style.display = "flex";
    // clues clicked -> pg 5
    }else if(document.getElementById('pic_7').style.display == "block" || document.getElementById('pic_8').style.display == "block"){
        const clicks = document.querySelectorAll(".clicked");
        clicks.forEach((item) => item.classList.remove("clicked"));
        const select = document.querySelectorAll(".selected__clue");
        select.forEach((item) => item.classList.remove("selected__clue"));
        document.getElementById("pic_7").style.display = "none";
        document.getElementById("pic_8").style.display = "none";
        document.getElementById("pg4-1_box").style.display = "none";
        document.getElementById("pg5_img").style.display = "block";
        document.getElementById("pg4_box").style.display = "flex";
        document.body.style.backgroundColor = "#e6d8cb";
    }else {
        // console.log("Error");
        return;
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
    }
}));


// Clue Clicking
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
    document.getElementById("pg4-1_box").style.display = "none";
    if (selected_num == 4) {
        document.body.style.backgroundColor = "#d5ff92";
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
    } else if (selected_num == 7) {
        document.body.style.backgroundColor = "#f9e2c3";
        document.getElementById("pg5_img").style.display = "none";
        orderChangeBooks();
    } else if (selected_num == 8) {
        document.body.style.backgroundColor = "#fefcf6";
        document.getElementById("cl_8").style.display = "none";
        document.getElementById("mggl_4").style.display = "block";
        document.getElementById("mggl_6").style.display = "block";
    } else if (selected_num == 9) {
        document.body.style.backgroundColor = "#fefcf6";
        document.getElementById("pic_9").style.display = "block";
        return;
    } else if (selected_num == 13 && document.getElementById("mggl_6").classList[1] == "selected__item") {
        document.getElementById("cl_13").style.display = "none";
        document.getElementById("bi_5").style.display = "none";
        document.getElementById("mggl_5").style.display = "block";
        document.getElementById("mggl_6").style.display = "none";
        document.getElementById("mggl_7").style.display = "block";
        document.getElementById("pg5_img2").style.display = "block";
        return;
    } else if (selected_num >= 10 && selected_num <= 14) {
        document.getElementById("locked").style.display = "block";
        setTimeout(function(){document.getElementById("locked").style.display = "none";}, 2000);
        document.getElementById("pg5_img2").style.display = "block";
        return;
    } else if (selected_num == 15) {
        document.getElementById("cl_15").style.display = "none";
        document.getElementById("mggl_3").style.display = "block";
        return;
    } else if (selected_num == 16) {
        document.getElementById("pic_10").style.display = "block";
        return;
    } else if (selected_num == 17 && 
        document.getElementById("mggl_3").style.display == "block" &&
        document.getElementById("mggl_4").style.display == "block" &&
        document.getElementById("mggl_5").style.display == "block" &&
        document.getElementById("mggl_7").style.display == "block") {
        location.replace("st3_32.html");
        return;
    } else if (selected_num == 17) {
        document.getElementById("secretdoor").style.display = "block";
        setTimeout(function(){document.getElementById("secretdoor").style.display = "none";}, 2000);
        document.getElementById("pg5_img").style.display = "block";
        return;
    } else {
        document.body.style.backgroundColor = "#fdfbf8";
    }

    document.getElementById("pg4-1_box").style.display = "flex";
    document.getElementById("pg4_box").style.display = "none";
    var text_id = "sl_" + selected_num;
    var pic_id = "pic_" + selected_num;
    document.getElementById(text_id).classList.add("selected__clue");
    document.getElementById(pic_id).style.display = "block";
})
);


    
// unclick clue
document.getElementById("pic_10").addEventListener("click", function() {
    document.getElementById("pic_10").style.display = "none"
});


// Clue 3 answer
document.getElementById("clue3").addEventListener("click", function() {
    let x1 = document.getElementById("numb").value;
    if (x1 == 5683){
        if (document.getElementById("mggl_1").style.display == "block"){
            document.getElementById("in3").classList.add("input--correct");
            const clickeds = document.querySelectorAll(".clicked");
            clickeds.forEach((item) => item.classList.remove("clicked"));
            document.getElementById("cl_4").style.display = "none";
            document.getElementById("pic_4").style.display = "none";
            document.getElementById("pg5_img").style.display = "block";
            document.getElementById("pg4_box").style.display = "flex";
            document.getElementById("pg4-1_box").style.display = "none";
            document.getElementById("mggl_2").style.display = "none";
            document.getElementById("note").style.display = "none";
            document.getElementById("stickynote").style.display = "block";
            document.getElementById("sl_4").classList.remove("selected__clue");
            document.body.style.backgroundColor = "#e6d8cb";
        } else {
            document.getElementById("secretdoor").style.display = "block";
            setTimeout(function(){document.getElementById("secretdoor").style.display = "none";}, 2000);
        }
    }else if (isNaN(x1)) {
        console.log("Input not valid");
    } else {
        document.getElementById("wrong").style.display = "block";
        setTimeout(function(){document.getElementById("wrong").style.display = "none";}, 1000);
    }
});


// Books in shelves
var list = document.querySelector(".list");
var newList = Sortable.create(list, {
    animation: 150,
    disabled: false,
    onEnd: function (evt) {
        var newList = evt.to;
        if(newList.children[0].classList[0] == "book_1" && 
        newList.children[1].classList[0]  == "book_2" && 
        newList.children[2].classList[0]  == "book_3" && 
        newList.children[3].classList[0]  == "book_4" && 
        newList.children[4].classList[0]  == "book_5" && 
        newList.children[5].classList[0]  == "book_6" && 
        newList.children[6].classList[0]  == "book_7" && 
        newList.children[7].classList[0]  == "book_8" && 
        newList.children[8].classList[0]  == "book_9"){
            this.destroy();
            document.getElementById("cl_7").style.display = "none";
            document.getElementById("pic_7").style.display = "none";
            document.getElementById("sl_7").style.display = "none";
            document.getElementById("pg4-1_box").style.display = "none";
            document.getElementById("pg5_img").style.display = "block";
            document.getElementById("pg4_box").style.display = "flex";
            document.getElementById("cl_17").style.display = "inline";
            document.getElementById("revealed").style.display = "block";
            setTimeout(function(){document.getElementById("revealed").style.display = "none";}, 3000);
            document.body.style.backgroundColor = "#e6d8cb";  
        }
    }
});
function orderChangeBooks () {
    newList = Sortable.get(list);
}


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
    }else if (i == 3 && document.getElementById("mggl_4").style.display == "block") {
            if (document.getElementById("bi_3").style.display == "block"){
                document.getElementById("bi_3").style.display = "none";
            }else {
                document.getElementById("bi_3").style.display = "block";
            }
            document.getElementById("mggl_4").classList.toggle("selected__item");
        }else if (i == 4 && document.getElementById("mggl_5").style.display == "block") {
            if (document.getElementById("bi_4").style.display == "block"){
                document.getElementById("bi_4").style.display = "none";
            }else {
                document.getElementById("bi_4").style.display = "block";
            }
            document.getElementById("mggl_5").classList.toggle("selected__item");
        }else if (i == 5 && document.getElementById("mggl_6").style.display == "block") {
            if (document.getElementById("bi_5").style.display == "block"){
                document.getElementById("bi_5").style.display = "none";
            }else {
                document.getElementById("bi_5").style.display = "block";
            }
            document.getElementById("mggl_6").classList.toggle("selected__item");
    }else if (i == 6 && document.getElementById("mggl_7").style.display == "block") {
            if (document.getElementById("bi_6").style.display == "block"){
                document.getElementById("bi_6").style.display = "none";
            }else {
                document.getElementById("bi_6").style.display = "block";
            }
            document.getElementById("mggl_7").classList.toggle("selected__item");
    }else {
        // console.log("Error");
        return;
    }
}));