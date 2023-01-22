


let getdata= async() =>{
    let search=document.getElementById('search').value;
    var url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=AIzaSyDdFCxPLTda5Ha7QST1fLRnDFK8Zr1Uf58`
    let data=await fetch(url);
    let jsondata= await data.json();
    let jdata=await jsondata;
    console.log(jdata);
    appendData(jdata.items);
}

let appendData=(data)=>{
let container=document.getElementById("video_container");
data.map((elem) => {
    let title=document.createElement('h3');
    title.textContent=elem.snippet.title;

    let img=document.createElement('img');
    img.src=elem.snippet.thumbnails.medium.url;

    let div=document.createElement('div');
    div.onclick=()=>{
        localStorage.setItem("video",JSON.stringify(elem));
        window.location.href="video.html";
    }

    div.append(img,title);
    container.append(div);
});
}