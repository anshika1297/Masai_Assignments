let nav= async ()=>{
    return ` <header><div id="nav">
    <h3>Your Receipe Treasure</h3>
   <ul type="none">
    <li><a href="index.html">Home</a></li>
    <li><a href="receipieByName.html">Search Receipe</a></li>
    <li><a href="DayReceipe.html">Receipe of The Day</a></li>
    <li><a href="signin.html">SignIN/SignUP</a></li>
   </ul>
</div><header>`
}

//url=``;
async function getData(url)
    {
        var mdata=await fetch(url);
        var jsonData=await mdata.json();
   
          return jsonData.meals;
          
           
    }

    function  displayData(Data,parent){
    
          var div=document.createElement("div");
          var name=document.createElement("h3");
          name.textContent="Dish of the Day: "+Data.strMeal;
          var dive=document.createElement("div");
          dive.id="container"
          var img=document.createElement("img");
          img.src=Data.strMealThumb;
          var rec=document.createElement("p");
          rec.textContent=Data.strInstructions;
          dive.append(img,rec);
          div.append(name,dive)
          parent.append(div);

        }
  
  function displayRandomData(data,parent){
    data.map((elem)=>{
        var div=document.createElement("div");
        div.id="rec_card";
        div.addEventListener("click",()=>{
            localStorage.setItem("dish",JSON.stringify(elem));
            location.href="receipe.html";
        })
        var img=document.createElement("img");
        img.src=elem.strMealThumb;
        var dive=document.createElement("div");
        dive.id="container";
        var name=document.createElement("h3");
        name.textContent=elem.strMeal;
        var cat=document.createElement("p");
        cat.textContent="Category: "+elem.strCategory;
        var area=document.createElement("p");
        area.textContent="Region/Cusine: "+elem.strArea;
       dive.append(name,cat,area);
       div.append(img,dive);
       parent.append(div);
    })
  }

  
    
/*var id;
    function search_movie(func,delay){
        if(id){
            clearTimeout(id);
        }
        id=setTimeout(function(){
            getData();
        },delay);
    }*/









export {nav,getData,displayData,displayRandomData};