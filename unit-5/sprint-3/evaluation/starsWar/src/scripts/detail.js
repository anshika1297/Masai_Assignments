function showdetail(){
    var detail=JSON.parse(localStorage.getItem("details"));
    document.getElementById("char_name").textContent=detail.name;
    document.getElementById("birthyear").textContent=detail.birth_year;
    document.getElementById("gender").textContent=detail.gender
    document.getElementById("height").textContent=detail.height;
    document.getElementById("eyecolor").textContent=detail.eye_color;
    document.getElementById("mass").textContent=detail.mass;
    document.getElementById("haircolor").textContent=detail.hair_color;
}

showdetail();

function goback(){
    location.href="index.html";
}