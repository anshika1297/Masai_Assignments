let data = [];
let fecthCountries = async () => {
  let country= await fetch( "https://restcountries.com/v3.1/all");
  var cdata=await country.json();
  data=await cdata;

   
  //console.log(data[0].name.common);
  
  
  renderData(data);

  return data;
};

let countryCard = (el) => {
  let cardDiv = document.createElement("div");
  
  let img=document.createElement("img");
  img.src=el.flags.png;

  let name=document.createElement("h3");
 
  name.textContent=el.name.common;
  let pop=document.createElement("p");
  pop.textContent="Population: "+el.population;
  let reg=document.createElement("p");
  reg.textContent="Region: "+el.region;
  let cap=document.createElement("p");
  cap.textContent="Capital: "+el.capital;

   cardDiv.append(img,name,pop,reg,cap);

  return cardDiv;
};

let renderData = (data) => {
  
  let container = document.getElementById("all_countries");
    data.map((elem)=>{
     var card= countryCard(elem);
     container.append(card);
    })
  
  return container;
};

let sortLogic = (order, data) => {
  console.log(order);
  if(order=""){
  console.log(order);
  }
 else if(order=="asc"){
  data.sort(function(a,b){
    return a.population-b.population;
});
 }
 else
 {
  data.sort(function(a,b){
    return b.population-a.population;
});
 }
 
  return data;
};
let filterByRegionLogic = (data, regionName) => {
  console.log("regionName");
  if(regionName=="all"){
   var j =data;
  }
  else{
    var j=data.filter(function(elem){
      return elem.region==regionName;
  });
  }
  return j;
};
let handleSortAndFilter = () => {
  console.log(data);
    let region=document.getElementById("filter_region").value;
  let newdata=filterByRegionLogic(data,region);
console.log(newdata);
            let order=document.getElementById("sort_population").value;
          newdata= sortLogic(order,newdata);
          //console.log(newdata);
 
  document.getElementById("all_countries").textContent="";
  renderData(newdata);
};


document.querySelector("#filter_region").addEventListener("onchange",handleSortAndFilter);
 document.querySelector("#sort_population").addEventListener("onchange",handleSortAndFilter);


window.onload = function () {
  fecthCountries();

 
 
};

if (typeof exports !== "undefined") {
  module.exports = {
    renderData,
    handleSortAndFilter,
    sortLogic,
    filterByRegionLogic,
    fecthCountries,
  };
}
