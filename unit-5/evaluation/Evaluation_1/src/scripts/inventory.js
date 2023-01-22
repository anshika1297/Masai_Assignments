function redirectToIndexPage() {
  windows.location.href="/index.html";
}
var product_data=JSON.parse(localStorage.getItem("data"))||[];

function append() {
 
  product_data.map(function(elem, index)
   {
  
       var div=document.createElement("div");
       
       var img=document.createElement("img");
       img.setAttribute("src",elem.image);
       img.setAttribute("alt",elem.name);
       img.setAttribute("id","Product_image");
    
       
       var name=document.createElement("p");
       name.textContent=elem.name;

       var brand=document.createElement("p");
       brand.textContent=elem.brand;

       var price=document.createElement("p");
       price.textContent=elem.price;
       
        var btn=document.createElement("button");
        btn.innerHTML="remove product";
        btn.addEventListener("click",function (){
          remove(index);
        });

       
       div.append(img,name,brand,price,btn);
  
       document.getElementById("products_data").append(div);
   });
  }


function remove(index) {
  var del=product_data.splice(index,1);
        localStorage.setItem("data", JSON.stringify(product_data));
        document.querySelector("#products_data").textContent="";
        append();
}

window.addEventListener("load", function () {
  // get the add more products button here and add eventlisteners
  document.querySelector("#add_product").addEventListener("click",redirectToIndexPage);
  append();

});
