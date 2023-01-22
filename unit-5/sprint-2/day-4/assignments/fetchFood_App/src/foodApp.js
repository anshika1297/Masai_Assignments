const getCategoriesData = async () => {
  var url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`;
  var cdata=await fetch(url);
  console.log(cdata)
     return cdata;
};

getCategoriesData().then((data) => {
  console.log(data);
})
.catch((err) => console.log("something went wrong"));


const getIngredientData = async () => {
  var url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;
  var cdata=await fetch(url);
  return cdata;
};

getIngredientData().then((data) => {
  console.log(data);
})
.catch((err) => console.log("something went wrong"));

window.onload = function () {
  document.getElementById("get-category-data").addEventListener("click",getCategoriesData);
  document.getElementById("get-ingredient-data").addEventListener("click",getIngredientData);
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
