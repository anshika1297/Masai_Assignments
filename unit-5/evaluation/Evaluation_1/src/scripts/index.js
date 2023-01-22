//store the products array in localstorage as "data"

function redirectToInventoryPage() {
  windows.location.href="/inventory.html";
}

function getFormData() {
event.preventDefault();
var name=document.getElementById("product_name").value;
var brand=document.getElementById("product_brand").value;
var price=parseInt(document.getElementById("product_price").value);
var image_url=document.getElementById("product_image").value;

addData(name,brand,price,image_url);
}

function addData(name, brand, price, image) {

  var product_data= JSON.parse(localStorage.getItem("data"))||[];
   
var obj={
    name:name,
    brand:brand,
    price:price,
    image:image,
   }
 product_data.push(obj);
 localStorage.setItem("data",JSON.stringify(product_data));
   }
  

window.addEventListener("load", function () {
document.querySelector("#product_form").addEventListener("submit",getFormData);
document.querySelector("#show_products").addEventListener("click",redirectToInventoryPage);
});
