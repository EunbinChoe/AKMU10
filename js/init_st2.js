document.getElementById("pg4_img").style.display = "block";
document.getElementById("pg4_img1").style.display = "none";
document.getElementById("pg4_img2").style.display = "none";
document.getElementById("pg5_img").style.display = "none";
document.getElementById("pg5_img2").style.display = "none";
document.getElementById("pic_4").style.display = "none";
document.getElementById("pg5_img2").style.display = "none";
document.getElementById("pg3_box").style.display = "flex";
document.getElementById("pg4_box").style.display = "none";
document.getElementById("pg4-1_box").style.display = "none";
const bag_items = document.querySelectorAll(".bag__item");
bag_items.forEach((item) => item.style.display = "none");
let it = "";
for (let i = 1; i <= 7; i++) {
    it = "mggl_" + i;
    document.getElementById(it).style.display = "none";
}