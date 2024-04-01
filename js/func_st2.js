// next page
document.getElementById("box").addEventListener("click", function () {
    if(document.getElementById("pg4_img").style.display == "block") {
        document.getElementById("pg4_img").style.display = "none";
        document.getElementById("pg4_img1").style.display = "block";
        document.getElementById("pg3_box").style.display = "none";
        document.getElementById("pg4_box").style.display = "block";
        document.body.style.backgroundColor = "#d5ff92";
    }else if(document.getElementById("pg4_img1").style.display == "block") { // || document.getElementById("pg4_img2").style.display == "block"
        // document.getElementById("pg4_img1").style.display = "none";
        // document.getElementById("pg4_img2").style.display = "none";
        // document.getElementById("pg5_img2").style.display = "block";
        // }else if(document.getElementById("pg3_img").style.display == "block" || document.getElementById("pg3_img2").style.display == "block") {
            //     return;
    // }else if(document.getElementById("pic_2").style.display == "block" || document.getElementById("pic_3").style.display == "block"){
    //     const clicks = document.querySelectorAll(".clicked");
    //     clicks.forEach((item) => item.classList.remove("clicked"));
    //     const select = document.querySelectorAll(".selected__clue");
    //     select.forEach((item) => item.classList.remove("selected__clue"));
    //     pg = 2;
    //     document.body.style.backgroundColor = "#e2ede1";
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
    }else{
        console.log("Error");
    }
}));