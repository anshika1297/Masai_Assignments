document.querySelector("form").addEventListener("submit",signin);
    var flag=0;
        function signin(){
            var AccountDetails = JSON.parse(localStorage.getItem("account-data")) || [];
            event.preventDefault();
    
            var enteredEmail = document.querySelector("#email").value;
            var enteredPass = document.querySelector("#password").value;

            AccountDetails.map(function(elem){
                if(elem.email===enteredEmail  &&  elem.password===enteredPass){
                    
                   alert("Login Successful");
                   flag++;
                     window.location.href="index.html";
                     
                }
            });
    
            
            if(flag==0){
                    alert("Login failed Please fill correct data or create account");
                    document.querySelector("#email").value="";
                    document.querySelector("#password").value="";
                }
        };