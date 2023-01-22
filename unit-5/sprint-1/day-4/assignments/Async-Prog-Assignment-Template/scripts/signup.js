var Details=JSON.parse(localStorage.getItem("account-data")) || [];

document.querySelector("form").addEventListener("submit",signup);


function signup(){
  event.preventDefault();  
  var name=document.getElementById("name").value;
  var contact=document.getElementById("contact").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
 
  if(name=="" ||contact==""||email==""||password=="")
  {
    window.alert("Enter all the the Details");
  }
  else
  {
    var obj={
    name:name,
    email:email,
    password:password,
    contact:contact
    }
    Details.push(obj);
    localStorage.setItem("account-data",JSON.stringify(Details));
   window.alert("Account Created Succesfully")
  }

    
   
  };