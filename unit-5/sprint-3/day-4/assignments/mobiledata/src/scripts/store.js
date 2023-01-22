var data=JSON.parse(localStorage.getItem("mobile_data"))||[];
append(data);
function append(data) {
  data.map(function(elem, index)
    {
        var div=document.createElement("div");

        var img=document.createElement("img");
        img.setAttribute("src",elem.image);
        img.setAttribute("alt",elem.name);

        var brand=document.createElement("h4");
        brand.textContent=elem.brand;
        
        var name=document.createElement("h5");
        name.textContent=elem.name;

        var price=document.createElement("h6");
        price.textContent=elem.price;

        var btn=document.createElement("button");
        btn.textContent="Remove";
        btn.addEventListener("click",function (){
            remove(index);
        });

        div.append(img,brand,name,price,btn);
        document.getElementById("mobile_list").append(div);
    });
}

function remove(index) {
  // logic to remove the mobiles data on selected index
  var remove=data.splice(index,1);
  localStorage.setItem("mobile_data", JSON.stringify(data));
  document.querySelector("#mobile_list").textContent="";
  append(data);
}

function sortLowToHigh() {
  data.sort(function(a,b){
    a=parseInt(a.price);
    b=parseInt(b.price);
    return a-b;
});
document.querySelector("#mobile_list").textContent="";
append(data);
}

function sortHighToLow() {
  // sort the list of mobiles in descending order of the price
  console.log("sort");
  data.sort(function(a,b){
    a=parseInt(a.price);
    b=parseInt(b.price);
    return b-a;
});
document.querySelector("#mobile_list").textContent="";
append(data);
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
