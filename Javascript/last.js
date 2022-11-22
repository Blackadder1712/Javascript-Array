//call to API

function SearchPhotos()
{
    let image = document.querySelector(".random-img");

    //create object

    let request = new XMLHttpRequest();

    //create request

    request.open('GET', 'https://picsum.photos/v2/list')

    //send request

    request.send();

    request.addEventListener("load", function()
    {
        let data = JSON.parse(request.responseText);
        console.log(data);
        //loop through array
        for (i = 0; i < 30; i++)
        {
            const html = `  <img class="image" src="${data[i].download_url}">`
            
        image.insertAdjacentHTML("beforeend", html);
            
        }
        //convert into javascript
    
      
  
        
   


    })
}