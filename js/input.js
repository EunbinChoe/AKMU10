let i = 0;

function conversations(j) {
    let text = "test";
    var done = "cl_" + j;
    if (j == 1){
        if (i == 0) {
            text = "나 : \"좋은 아ㅊ- 네?<br>좋은 소식이요?<br>악뮤요?\"";
        } else if (i == 1) {
            text = "김탐정 : <br>\"자네가 내 밑에서 배운 것들을<br>써먹을 때가 왔다네.<br>탐정으로써 첫 의뢰네.<br>이 편지를 한번 읽어보게나.\"";
        } else {
            text = "";
            const clickeds = document.querySelectorAll(".clicked");
            clickeds.forEach((item) => item.classList.remove("clicked"));
            document.getElementById(done).style.display = "none";
            document.getElementById("sl_1").classList.remove("selected__clue");
            document.getElementById("pic_1").style.display = "none";
            document.getElementById("mggl_1").style.display = "block";
            document.getElementById("pg3_img2").style.display = "block";
            document.getElementById("pg4_box").style.display = "none";
            document.getElementById("pg3_box").style.display = "flex";
            document.body.style.backgroundColor = "#e2ede1";

        }
        document.getElementById("sl_1").innerHTML = text;
        ++i;
    } else {
        return;
    }
}

function myFunction1() {
    let x1 = document.getElementById("numb").value;
    let text;
    if (x1 == 140407){
        document.getElementById("in1").classList.add("input--correct");
        const clickeds = document.querySelectorAll(".clicked");
        clickeds.forEach((item) => item.classList.remove("clicked"));
        document.getElementById("cl_2").style.display = "none";
        document.getElementById("pic_2").style.display = "none";
        document.getElementById("pg3_img").style.display = "block";
        document.getElementById("pg3_box").style.display = "block";
        document.getElementById("sl_2").classList.remove("selected__clue");
        document.getElementById("mggl_2").style.display = "block";
    }else if (isNaN(x1)) {
        text = "Input not valid";
    } else {
        text = "wrong";
    }
    // document.getElementById("demo").innerHTML = text;
}

function myFunction2() {
    let pre_x2 = document.getElementById("txt").value;
    let x2 = pre_x2.replace(/\s/g, "");
    document.getElementById("in2").classList.add("input--correct");
    let text;
    if (x2 == "악당구무리로47") {
        location.replace("1_08.html");
    } else {
        text = "wrong";
        location.replace("st1_19.html");
    }
    // document.getElementById("demo").innerHTML = text;
}
