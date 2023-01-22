async function getData()
    {
        var input=document.getElementById('Dish_name');
        var url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`;
        var mdata=await fetch(url);
        var jsonData=await mdata.json();
    
            displayData(jsonData.meals);
        
        
    }

    function displayData(mdata){
       if(!mdata){
        var m_container=document.getElementById("parent_div");
        m_container.innerHTML=null;
        var img=document.createElement('img');
            img.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAllBMVEX////q6urp+v/U2uD5+fnz8vLSzs7g39/n5uZn4vxN3vyqra/b+P9D3f3W3OLS2N6lp6n1/f/t/v+dnZ26urqrrrDAwMDo6+7JztOusbPu+/+r7f7R9f/S0tLh5en19fW58P3e6++VlZXHx8e+8f2E5/xz5PxDRER+fn5oaWldXV1SUlKGh4eGhobJz9Pj8vd3d3eU6v0c1fdWAAAGqUlEQVR4nO3da3eaShQG4OEmGFIYYUBHHVGJnjZN9fj//9zZe/CaxtN8kBka9pvV5ubC4cmeiwNtmENhthvQgZABGWDIgAwwZEAGGDIgAwwZkAGGDMgAQwZkgCEDMsCQARlgyIAMMGRABhgyIAMMGZABhgzIAEMGZIAhg98M/H7kfwwC1pfcN7DdMoOJyOCuQWS7YQYTkgEZMDLAkIFJg4oF4uEHfUiMGUT/5N9/PPqgj4m5OshfX3/5Dz/qI2LOQP18/dHNUcacgV+q6uEHfUhoXiADDBmQAYYMyABDBmSAIYPuG0SChWXLz9F1A/Xz7cdby8/RdQP2/fW17W2Hzhv8+vm6bvkpOm/gR61f8eq8gYGQARlgOmFQjRcJZDG2s9Fk38BnVZp6OmmaLixc87dtME68ilXeJWliXMGugZ9gBfhs7GFfSE4KhrfgrRoEzUknrNrtJpPJzjsxmC0FmwZjPQwk3o6FXKcQE08rpGMDT3+ORYMjwURKFoodpJTAUGsFowj2DDRB4gnOazaaZhh3tYu5TDWCwe5gzcDXRZBKLlfZiLGRq5PtSx5PEMHgwGjNYKEJCl7rcweF6VEh5VwjLNpuwTm2DALdEySfZAjgutMLworH2B1SY4tGWwa63EteZnj2o6YURudKkEYLwZJBBWWQ7HihC4C5x/7gHhFKXpssBEsGejQQPMlcdu4Eo2MduO6eS89gIVgy0NNfLDP3MiW4JwsohIkeFpN223COHQMfu0LNd7oMjic+PX0AWXGBncHQ9GjHANdH0BVWV3PiVVeAyMLgOsmSgZ4YY/eqDK66Ao6KOD2aWjDbMVjo4UBM3ctocN0V3GynB4Q+GGSXldHVIuliYGhisG5w+eFPYZU0PRvsemFQwNTIrgdCZLgx+NJ9Qc8LksNkML0xcE8GIk7NbSLYMQhOc+P7HA32MS4UTS2WLa2R9AaSftH4kUGW8BJXkq224RKLa2Wv4HfqIBPNFsKX7gvNgFDiYvkDg2zVvHj20sRIb7BkoHfS0piv3iE0Q6RsysDUctnWHsqiGRHk/neDrGxGA2Ob7LYMmi3VEhBuKgHmSiCQl0tvJl46WttTbbbWBW4rXyNke3HcXT9efDDwD27tXV9IjpXAd/vsxJC5MEZI70TgJXHMyy98L47fIEwKDt1/7zaXWAoen8cCFIohvG65Q1i81uY35+mVhb7UKCS8i0V6IYCJQ4fHqtWG2Lzm2lQCKExKKeO4kGKSHtcFfoVX5Sc8PirINttj9/6DRXMDCt56kKbe6Q6EVL9mDpIxi+RZQbQ3LFi+D2WcpN673N6IooqzQmvDgu17cd4rpMm7VZGv4jNCS02wbgBFv0jSJl6y+OAFQlA2pcDbWip0wADiV8F4HFT3it0RqNBWGXTE4I8JYf5sbZXwlxjA4Bi2dui/xqDFkAEZYMiADDBkQAYYMiADDBmQAYYMyABDBmSAIQMywJABGWDMGPghi1h1PKYanHZHfYexAK+oBHrb3FHHRzg326c+CxmrrjfWncdurxqqgze2jmrl41F5HQrmBAzeAvigDn2nckoB55mHykcoRzj4v6DDeVcAFOQ+D6ogrAAKHgpfYPljG2fIoHBkXURS1czHExiIOOKMB2VZ8jBXuc/yAQvW8AApQ65yhwU1D9ZqrcKwzB14RDQoBnmQqzVjtSMf2zhDBnASMVdxXTMGZ+FzFpQxGnCmQviAMQE/YM6kikKVs9JhSkhUYhy/C29gwEpV4kOhTh7bOEMG/r9MwAlgxYdreMfzgIu3oFQ8D/EcWS3RIIafO5z9Gg2wUnImBOMKDWrOhMMFVJF0+GMb1/F5oeI3l9wHqsB3PTO4vc4aNM168FW3jhsYCRmQAYYMyABDBmSAIQMywFgymD5/NqN2G4KxY+B+e/p02kewYzAbfjpP81ZbgrFrsLl76tu+GLwsX542KLGFLA9w3jMXPt3CV2Ynn69uMHuezZbzw3z2DH+Wy+fhcL7czGf4tpwvX3phcNi6L7PZ/LCcb1+2y+38aTOdz+fbORC8zIf9MNgsD8PlZjPbHIaH2WYIf2+fDiACn+CXemHwYTa33/yyBsunP8yIVwbPrbYEY8dgNPz22WxabYgOvV4gAwwZkAGGDMgAc9egm79ys434dw36UwjhPQMHvhP0IY5Sd3/nfRSqQS+irsvg1gB6Q9iLRNF9g36GDMgAQwZkgCEDMsCQARlgyIAMMGRABhgyIAMMGZABhgzIAEMGZIAhAzLAkAEZYMiADDBkQAYYMiADzH+Go9OHeF21IgAAAABJRU5ErkJggg==";
            m_container.append(img);
            return;
       }
    
        var m_container=document.getElementById("parent_div");
        m_container.innerHTML=null;
        mdata.map((elem)=>{
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
           m_container.append(div);
        })
    }
var id;
    function search_Dish(func,delay){
        if(id){
            clearTimeout(id);
        }
        id=setTimeout(function(){
            getData();
        },delay);
    }