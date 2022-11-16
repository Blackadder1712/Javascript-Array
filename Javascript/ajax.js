//call to API

let images = document.querySelector('.images');

//create request object

let request = new XMLHttpRequest();

//create request

request.open('GET','https://picsum.photos/200');

//send request

request.send();

request.addEventListener('load', function()
{
    let [data] = request.responseText;
    console.log(data);
    
    const html = `   <div class="images">
    <img class="array_image" src="${data.location}  
             
     </div>`;
   
})
