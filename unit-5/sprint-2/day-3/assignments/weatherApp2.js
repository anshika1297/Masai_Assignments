getLocation();
    async function getWeatherdata(long,lati){
       
            var city=document.getElementById("city");
            
        if(city.value== ""){
           
            var url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=680f71c08565127042144f571207f804`;
          // var url2=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lati}&lon=${long}&cnt=7&appid=680f71c08565127042144f571207f804`;
        }
        else
        {
            var url1=`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=680f71c08565127042144f571207f804`;
          // var url2=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city.value}&appid=680f71c08565127042144f571207f804`;
            //console.log(url);
        }
       try{
        var weatherdata= await fetch (url1);
        //var forecast= await fetch(url2);
        var data= await weatherdata.json();
        //var forecastdata= await forecast.json();
        console.log(data);
        if(data.cod=="404"){
            notFound();
        }
        else{
            displayData(data,data.name);
            
        }
       }catch(e){
        console.log(e);
       }


        
    }
    function displayData(data,city){
      document.getElementById("location").textContent=city+", "+data.sys.country;
      var gmap=document.getElementById("gmap_canvas");
      gmap.src=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
      document.getElementById("temp").textContent=(data.main.temp- 273.15).toFixed(2)+"°C" ;
      document.getElementById("feels").textContent=(data.main.feels_like- 273.15).toFixed(2)+"°C" ;
      document.getElementById("min").textContent=(data.main.temp_min- 273.15).toFixed(2)+"°C" ;
      document.getElementById("max").textContent=(data.main.temp_max- 273.15).toFixed(2)+"°C" ;
      var date=new Date(data.sys.sunrise*1000);
      var time=date.toLocaleTimeString();
      document.getElementById("sunrise").textContent=time;
      date=new Date(data.sys.sunset*1000);
       time=date.toLocaleTimeString();
      document.getElementById("sunset").textContent=time;
      document.getElementById("visibility").textContent=data.visibility+"m";
      document.getElementById("pressure").textContent=data.main.pressure+"pa";
      document.getElementById("Humidity").textContent=data.main.humidity+"%";
      document.getElementById("weather").textContent=data.weather[0].main;


    }

    function notFound(){

    }

    function getLocation(){
        navigator.geolocation.watchPosition(function(position){
         
            getWeatherdata(position.coords.longitude, position.coords.latitude);
            
        })
    }
 
    function getDate(){
        const d = new Date();
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = months[d.getMonth()];
        let date=d.getDate();
        let time="";
        let hour;
        if(d.getHours()>=13){
            hour= d.getHours()-12;
            time="pm";
        }
        else
        {
           hour= d.getHours();
            time="am";
        }
        let min=d.getMinutes();

        document.getElementById("date").textContent= month+" "+date+",  "+hour+":"+min+" "+time;

    }
    
    getDate();

