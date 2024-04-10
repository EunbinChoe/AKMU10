document.getElementById("pg7_img").style.display = "block";
document.getElementById("pg8_img1").style.display = "none";
document.getElementById("pg8_img2").style.display = "none";
document.getElementById("pg8_img2_").style.display = "none";
document.getElementById("pg8_img3").style.display = "none";
document.getElementById("pic_7").style.display = "none";
document.getElementById("pic_8").style.display = "none";
document.getElementById("pic_9").style.display = "none";
document.getElementById("pic_11").style.display = "none";
document.getElementById("pic_47").style.display = "none";
document.getElementById("pg7_box").style.display = "flex";
document.getElementById("pg8_box").style.display = "none";
document.getElementById("pg8-1_box").style.display = "none";
document.getElementById("out").style.display = "none";
document.getElementById("outro1").style.display = "none";
document.getElementById("outro2").style.display = "none";
const bag_items = document.querySelectorAll(".bag__item");
bag_items.forEach((item) => item.style.display = "none");
document.getElementById("obtaineditem").style.display = "none";
document.getElementById("empty").style.display = "none";
document.getElementById("open").style.display = "none";
document.getElementById("getnote").style.display = "none";
document.getElementById("locked").style.display = "none";
document.getElementById("wrong").style.display = "none";
document.getElementById("wrongsong").style.display = "none";
document.getElementById("wrongtime").style.display = "none";
document.getElementById("safeplace").style.display = "none";
document.getElementById("safepassword").style.display = "none";
document.getElementById("notyet").style.display = "none";
for (let i = 1; i <= 13; i++) {
    let it = "bi_" + i;
    document.getElementById(it).style.display = "none";
}
for (let i = 1; i <= 3; i++) {
    let it = "mggl_" + i;
    document.getElementById(it).style.display = "block";
}
for (let i = 4; i <= 13; i++) {
    let it = "mggl_" + i;
    document.getElementById(it).style.display = "none";
}