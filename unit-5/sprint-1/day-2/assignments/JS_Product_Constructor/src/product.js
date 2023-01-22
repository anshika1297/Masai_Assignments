function Product(name,brand,price,description) {
       this.name=name;
       this.brand=brand;
       this.price=price;
       this.description=description;
       this.sold=false;
       
        


}

Product.prototype.toggleStatus = function(){
  this.sold =!this.sold;
}
Product.prototype.changePrice= function(price){
  this.price=price;
}


// function changePrice(price)
//        {
//          this.price=price;
//        }
       
  //function toggleStatus (sold)
      // {
       //  this.sold=sold;
       //}

// Do not change this
export default Product;
