/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data))

    bodyTag=document.querySelector("body");
    console.log(bodyTag);
    
    imgTag= document.createElement("img");
        console.log(imgTag);
         imgTag.src=data;
         
         imgTag.appendChild(imgTag);
        