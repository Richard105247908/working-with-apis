fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data))

    bodyTag=document.querySelector("body");
    console.log(bodyTag);
    
    imgTag= document.createElement("img");
        console.log(imgTag);
         imgTag.src=data;
         
         imgTag.appendChild(imgTag);
        