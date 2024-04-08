// pg initialize
document.getElementById("pg4_img").style.display = "block";
document.getElementById("pg4_img1").style.display = "none";
document.getElementById("pg4_img2").style.display = "none";
document.getElementById("pg5_img").style.display = "none";
document.getElementById("pg5_img2").style.display = "none";

// box initialize
document.getElementById("pg3_box").style.display = "flex";
document.getElementById("pg4_box").style.display = "none";
document.getElementById("pg4-1_box").style.display = "none";

document.getElementById("pic_4").style.display = "none";
document.getElementById("pic_7").style.display = "none";
document.getElementById("pic_8").style.display = "none";
document.getElementById("pic_9").style.display = "none";
document.getElementById("pic_10").style.display = "none";

// collected items
for (let i = 1; i <= 7; i++) {
    let it = "mggl_" + i;
    document.getElementById(it).style.display = "none";
}

// shown items
const bag_items = document.querySelectorAll(".bag__item");
bag_items.forEach((item) => item.style.display = "none");

// extra
document.getElementById("cl_17").style.display = "none";
document.getElementById("stickynote").style.display = "none";

// explanations
document.getElementById("locked").style.display = "none";
document.getElementById("secretdoor").style.display = "none";
document.getElementById("revealed").style.display = "none";
document.getElementById("wrong").style.display = "none";