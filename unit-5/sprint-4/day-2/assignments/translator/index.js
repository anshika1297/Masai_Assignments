document.getElementById("trans").addEventListener("click",translate);

async function translate (){
    let from=document.getElementById("fromlang").value;
    let to=document.getElementById("tolang").value;
    let text=document.getElementById("fromtext").value;
    try{
        const res = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q:text,
                source: from,
                target: to,
                format: "text",
                api_key: ""
            }),
            headers: { "Content-Type": "application/json" }
        });
        const data=await res.json();
        console.log(data);
        document.getElementById("totext").textContent=data.translatedText;
    }
    catch{

    }
    


}