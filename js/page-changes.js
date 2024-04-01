document.getElementById("begin").style.display = "none";
document.getElementById("pg1_img").style.display = "block";
document.getElementById("pg1_box").style.display = "flex";
document.getElementById("pg2_img").style.display = "none";
document.getElementById("pg2_box").style.display = "none";
document.getElementById("pg3_img").style.display = "none";
document.getElementById("pg3_box").style.display = "none";
document.getElementById("pg3_img2").style.display = "none";
document.getElementById("pg3-1_box").style.display = "none";
document.getElementById("mggl_1").style.display = "none";
document.getElementById("mggl_2").style.display = "none";
document.getElementById("bi_1").style.display = "none";
document.getElementById("bi_2").style.display = "none";
document.getElementById("letter1").style.display = "block";
document.getElementById("letter2").style.display = "none";
document.getElementById("letter_close").style.display = "none";
const bag_items = document.querySelectorAll(".bag__item");
bag_items.forEach((item) => item.style.display = "none");


document.getElementById("box").addEventListener("click", function () {
    var pg = 0;
    if(document.getElementById("pg1_img").style.display == "block") {
        pg = 1;
        document.body.style.backgroundColor = "#fedcca";
    }else if(document.getElementById("pg2_img").style.display == "block") {
        pg = 2;
        document.body.style.backgroundColor = "#e2ede1";
    }else if(document.getElementById("pg3_img").style.display == "block" || document.getElementById("pg3_img2").style.display == "block") {
        return;
    }else if(document.getElementById("pic_2").style.display == "block" || document.getElementById("pic_3").style.display == "block"){
        const clicks = document.querySelectorAll(".clicked");
        clicks.forEach((item) => item.classList.remove("clicked"));
        const select = document.querySelectorAll(".selected__clue");
        select.forEach((item) => item.classList.remove("selected__clue"));
        pg = 2;
        document.body.style.backgroundColor = "#e2ede1";
    }else if(document.getElementById("pic_1").style.display == "block"){
        return;
    }else {
        console.log("Error");
    }
    
    pg++;
    
    var pgImg = "pg" + pg + "_img";
    var pgBox = "pg" + pg + "_box";
    document.getElementById("pg1_img").style.display = "none";
    document.getElementById("pg2_img").style.display = "none";
    document.getElementById("pg3_img").style.display = "none";
    document.getElementById("pic_2").style.display = "none";
    document.getElementById("pic_3").style.display = "none";
    document.getElementById(pgImg).style.display = "block";
    document.getElementById("pg1_box").style.display = "none";
    document.getElementById("pg2_box").style.display = "none";
    document.getElementById("pg3_box").style.display = "none";
    document.getElementById("pg3-1_box").style.display = "none";
    document.getElementById(pgBox).style.display = "flex";
});

const nextRoom = document.querySelectorAll(".move");
nextRoom.forEach((item) =>
item.addEventListener("click", function () {
    var room = 0;
    if(document.getElementById('pg3_img').style.display == "block"){
        room = 1;
    }else if(document.getElementById('pg3_img2').style.display == "block"){
        room = 2;
    }else if(document.getElementById('pg4_img1').style.display == "block"){
        room = 3;
    }else{
        console.log("Error");
    }
    
    document.getElementById("pg3_img").style.display = "none";
    document.getElementById("pg3_img2").style.display = "none";
    
    if(room == 1){
        document.getElementById("pg3_img2").style.display = "block";
    }else if(room == 2){
        document.getElementById("pg3_img").style.display = "block";
    }else {
        console.log("Error");
    }
  })
  );
  
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