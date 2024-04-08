document.getElementById("pg7_img").style.display = "block";
document.getElementById("pg8_img1").style.display = "none";
document.getElementById("pg8_img2").style.display = "none";
document.getElementById("pg8_img3").style.display = "none";
// document.getElementById("bi_1").style.display = "none";
// document.getElementById("bi_2").style.display = "none";
// document.getElementById("cl_17").style.display = "none";
document.getElementById("pg7_box").style.display = "flex";
document.getElementById("pg8_box").style.display = "none";
document.getElementById("pg8-1_box").style.display = "none";
const bag_items = document.querySelectorAll(".bag__item");
bag_items.forEach((item) => item.style.display = "none");
// document.getElementById("locked").style.display = "none";
// document.getElementById("wrong").style.display = "none";
for (let i = 1; i <= 7; i++) {
    let it = "mggl_" + i;
    document.getElementById(it).style.display = "none";
}