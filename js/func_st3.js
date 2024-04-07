// next page
let slNum = 0;
document.getElementById("box").addEventListener("click", function () {
    let text = "";
    if(document.getElementById("pg5_img").style.display == "block" && document.getElementById("pg5_box").style.display == "flex") {
        document.getElementById("pg5_img").style.display = "none";
        document.getElementById("pg6_img_1").style.display = "block";
        document.getElementById("pg5_box").style.display = "none";
        document.getElementById("pg6_box").style.display = "flex";
    } else if (document.getElementById("pg6-1_box").style.display == "flex") {
        if (slNum == 0) {
            text = "(악무 소속) 피애지 : <br>\"어? 못 보던 얼굴이네?<br>흠...\"";
        } else if (slNum == 1) {
            text = "나 : \"하.하.하.<br>신입입니다!<br>전 그럼 이만...\"";
        } else if (slNum == 2) {
            text = "피애지 : \"어딜 그렇게<br>바쁘게 가나?<br>가기전에... 우후니?\"";
        } else {
            text = "";
            document.getElementById("sl_1").style.display = "none";
            document.getElementById("answer").style.display = "block";
            document.getElementById("pg6-1_box").style.display = "none";
            document.getElementById("pg6_box").style.display = "flex";
        }
        document.getElementById("sl_1").innerHTML = text;
        ++slNum;
    }else {
        console.log("Error");
    }
});


// next floor
const elevators = document.querySelectorAll(".click__elevator");
elevators.forEach((item) => 
item.addEventListener("click", function() {
    this.parentElement.style.display = "none";
    document.getElementById("pg7_img").style.display = "block";
    document.body.style.background = "#e6e6e6";
    if (document.getElementById("pg7_img").style.display == "block"){
        const elevator = document.querySelectorAll(".ele");
        elevator.forEach((item) => 
        item.addEventListener("click", function () {
                document.body.style.background = "#9ab3da";
                let k = item.classList[1].replace("click__fl", "");
                let newFloor = "pg6_img_" + k;
                document.getElementById("pg7_img").style.display = "none";
                document.getElementById(newFloor).style.display = "block";
                document.getElementById("show_floor").innerText = "< " + k + "층 >";
                document.getElementById("show_floor").style.display = "block";
                setTimeout(function(){document.getElementById("show_floor").style.display = "none";}, 1500);
            })
        )
            
    }
}))


// moving
const nextRoom = document.querySelectorAll(".move");
nextRoom.forEach((item) =>
item.addEventListener("click", function () {
    let className = this.parentElement.id;
    let i = className.split("img_").pop();
    document.getElementById(className).style.display = "none";
    if(isNaN(i)){
        if (i.replace(/\d+/g, '') == "close"){
            className = className.replace("close", "");
        }
    }else{
        className = className + "close";
    }
    document.getElementById(className).style.display = "block";
}));
  

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
    }else if (i == 2 && document.getElementById("mggl_2").style.display == "block") {
        if (document.getElementById("bi_2").style.display == "block"){
            document.getElementById("bi_2").style.display = "none";
        }else {
            document.getElementById("bi_2").style.display = "block";
        }
        document.getElementById("mggl_2").classList.toggle("selected__item");
    }else if (i == 3 && document.getElementById("mggl_3").style.display == "block") {
        if (document.getElementById("bi_3").style.display == "block"){
            document.getElementById("bi_3").style.display = "none";
        }else {
            document.getElementById("bi_3").style.display = "block";
        }
        document.getElementById("mggl_3").classList.toggle("selected__item");
    }else if (i == 4 && document.getElementById("mggl_4").style.display == "block") {
        if (document.getElementById("bi_4").style.display == "block"){
            document.getElementById("bi_4").style.display = "none";
        }else {
            document.getElementById("bi_4").style.display = "block";
        }
        document.getElementById("mggl_4").classList.toggle("selected__item");
    }else if (i == 6 && document.getElementById("mggl_6").style.display == "block") {
        if (document.getElementById("bi_6").style.display == "block"){
            document.getElementById("bi_6").style.display = "none";
        }else {
            document.getElementById("bi_6").style.display = "block";
        }
        document.getElementById("mggl_6").classList.toggle("selected__item");
    }else {
        // console.log("Error");
        return;
    }
}));


// click akmoo
document.getElementById("akmoo").addEventListener("click", function(){
    document.getElementById("akmoo").children.item(1).classList.remove("evidence");
    document.getElementById("pg6_box").style.display = "none";
    document.getElementById("pg6-1_box").style.display = "flex";
})

// answer akmoo
document.getElementById("ans_button").addEventListener("click", function(){
    let pre_ans = document.getElementById("txt").value;
    let ans = pre_ans.replace(/\s/g, "");
    let text;
    if (ans == "후데훗") {
        document.getElementById("answer").style.display = "none";
        document.getElementById("akmoo").style.display = "none";
        document.getElementById("after__akmoo").style.display = "block";
        document.getElementById("after__akmoo2").style.display = "block";
    } else {
        text = "wrong";
        document.getElementById("wrong").style.display = "block";
            setTimeout(function(){document.getElementById("wrong").style.display = "none";}, 1000);
        console.log(text);
    }
})


// door Clicking
const tryDoors = document.querySelectorAll(".door");
tryDoors.forEach((item) =>
    item.addEventListener("click", function () {
    this.parentElement.classList.add("clicked");
    // document.getElementById("box").classList.add("clicked");
    // var selected_num = this.id.split("_").pop();
    var selected_num = this.classList[1].split("__").pop();
    if (!isNaN(selected_num)){
        if (selected_num == 7 
            && document.getElementById("pg6_img_4close").style.display == "block" 
            && document.getElementById("bi_6").style.display == "block"){
            location.replace("st4_44.html");            
        } else{
            document.getElementById("locked").style.display = "block";
            setTimeout(function(){document.getElementById("locked").style.display = "none";}, 2000);
        }
    };
})
);
