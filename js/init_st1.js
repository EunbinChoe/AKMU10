// page initialize
document.getElementById("pg1_img").style.display = "block";
document.getElementById("pg2_img").style.display = "none";
document.getElementById("pg3_img").style.display = "none";
document.getElementById("pg3_img2").style.display = "none";

// box initialize
document.getElementById("pg1_box").style.display = "flex";
document.getElementById("pg2_box").style.display = "none";
document.getElementById("pg3_box").style.display = "none";
document.getElementById("pg3-1_box").style.display = "none";

// collected items
document.getElementById("mggl_1").style.display = "none";
document.getElementById("mggl_2").style.display = "none";

// shown items
const bag_items = document.querySelectorAll(".bag__item");
bag_items.forEach((item) => item.style.display = "none");
document.getElementById("letter1").style.display = "block";
document.getElementById("letter2").style.display = "none";
document.getElementById("letter_close").style.display = "none";

// clicked clue
document.getElementById("pic_1").style.display = "none";
document.getElementById("pic_2").style.display = "none";
document.getElementById("pic_3").style.display = "none";

// wrong
document.getElementById("wrong").style.display = "none";