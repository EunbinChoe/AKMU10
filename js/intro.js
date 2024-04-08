document.getElementById("howto").style.display = "none";

document.getElementById("front").addEventListener("click", function(){
    document.getElementById("front").style.display = "none"
    document.getElementById("howto").style.display = "flex"
    document.body.classList.add("explanation_pg");
    document.body.style.background = "#96BBBB"
})

document.getElementById("btn").addEventListener("click", function(){
    location.replace("st1_19.html");
})