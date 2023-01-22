var BookList=JSON.parse(localStorage.getItem("book-list"))||[];

displayBooks(BookList);

function displayBooks(Book_List){
  document.getElementById("book-count").textContent=BookList.length;
  Book_List.map(function(elem,index){

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

        var td7=document.createElement("td");
        td7.textContent="Buy";
        td7.setAttribute("id","Buy")
        td7.addEventListener("click",function (){
            Buy(index, elem);
        });

        var td8=document.createElement("td");
        td8.textContent="Add";
        td8.setAttribute("id","Bookmark");
        td8.addEventListener("click",function (){
            Add(index,elem);
        });

        tr.append(td1,td2,td3,td4,td5,td7,td8,td6);
        document.querySelector("tbody").append(tr);
  })
};

function Buy(index,book ){
        var Mybooks=JSON.parse(localStorage.getItem("buy-list"))||[];
         Mybooks.push(book);
         localStorage.setItem("buy-list", JSON.stringify(Mybooks));
        var AddBook=BookList.splice(index,1);
        localStorage.setItem("book-list", JSON.stringify(BookList));
        document.querySelector("tbody").textContent="";
        displayBooks(BookList);
    };

    function Add(index,book){
        var BookMark=JSON.parse(localStorage.getItem("bookmark-list"))||[];
        BookMark.push(book);
        localStorage.setItem("bookmark-list", JSON.stringify(BookMark));
        var AddBook=BookList.splice(index,1);
        localStorage.setItem("book-list", JSON.stringify(BookList));
        document.querySelector("tbody").textContent="";
        displayBooks(BookList);
        
    };


    function CategoryFiltering()
{
    var Selected=document.querySelector("select").value;
    console.log(Selected);

    if(Selected==="")
    {
        document.querySelector("tbody").textContent="";
    displayBooks(BookList);
    }
    else{
        var filteredBooks=BookList.filter(function(elem){
            return elem.Category===Selected;
        });
        document.querySelector("tbody").textContent="";
        displayBooks(filteredBooks);
    }
    
    
}