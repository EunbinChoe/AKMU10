const check = document.querySelectorAll(".not__clickable");
document.getElementById("pic_1").style.display = "none";
document.getElementById("pic_2").style.display = "none";
document.getElementById("pic_3").style.display = "none";

if (!check.forEach((item) => item.classList.contains())) {
  const clicks = document.querySelectorAll(".click");
  clicks.forEach((item) =>
  item.addEventListener("click", function () {
    this.parentElement.classList.add("clicked");
    document.getElementById("box").classList.add("clicked");
    var selected_num = this.id.split("_").pop();
    document.getElementById("pg3_img").style.display = "none";
    document.getElementById("pg3_img2").style.display = "none";
    if (selected_num == 1) {
      document.body.style.backgroundColor = "#f7e6cd";
    } else if (selected_num == 2) {
      document.body.style.backgroundColor = "#e2ede1";
    } else {
      document.body.style.backgroundColor = "#fdfbf8";
    }
    var text_id = "sl_" + selected_num;
    var pic_id = "pic_" + selected_num;
    document.getElementById("pg3_box").style.display = "none";
    document.getElementById("pg3-1_box").style.display = "flex";
    document.getElementById(text_id).classList.add("selected__clue");
    document.getElementById(pic_id).style.display = "block";
    })
  );
}