function getInputData(){

  event.preventDefault();
  var name= document.getElementById("name").value;
  var brand= document.getElementById("brand").value;
  var price= document.getElementById("price").value;
  var image= document.getElementById("image").value;

  addData(name,brand,price,image);
}

function addData(name, brand, price, image) {
  var data=JSON.parse(localStorage.getItem("mobile_data"))||[];
  var obj={
    "name":name,
    "brand":brand,
    "price":price,
    "image":image,
  }
  data.push(obj);
  localStorage.setItem("mobile_data",JSON.stringify(data));
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}