getUsersData();
const getUsersData = async () => {
   var url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users";
  try{
    var data= await fetch (url);
    //var forecast= await fetch(url2);
    var vdata= await data.json();
    
    if(data.cod=="404"){
        return "not found";
    }
    else{
      splitData();
        return vdata;
        
    }
   }catch(err){
    return "not found";
   }
  
};

function splitData(...datax){
    a=datax[0];
    b=datax[1];
    console.log(a+" "b);
  return {
    totalPages,
    data1,
    data2,
    data3
  }
}


// donot change the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getUsersData,
    splitData,
  };
}
