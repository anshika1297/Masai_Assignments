var BookList=JSON.parse(localStorage.getItem("buy-list"))||[];

displayBooks();


function displayBooks(){

    BookList.map(function(elem){
  
          var tr= document.createElement("tr");
          var td1=document.createElement("td");
          td1.textContent=elem.Book;
  
          var td2=document.createElement("td");
          td2.textContent=elem.Author;
  
          var td3=document.createElement("td");
          td3.textContent=elem.Description;
  
          var td4=document.createElement("td");
          td4.textContent=elem.Date;
  
          var td5=document.createElement("td");
          td5.textContent=elem.Category;
  
          var td6=document.createElement("td");
          td6.textContent=elem.Price;
  
          tr.append(td1,td2,td3,td4,td5,td6);
          document.querySelector("tbody").append(tr);
    })
  };