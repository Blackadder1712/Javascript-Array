
           
        
        
        
        

        

       
        

        
       
        


//call to API



function SearchPhotos()
{
    let image = document.querySelector(".random-img");

    //create object

    let request = new XMLHttpRequest();

    //create request

    request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100')

    //send request

    request.send();

    request.addEventListener("load", function()
    {
        let data = JSON.parse(request.responseText);
     

       
 
        //grab random photo from array

         
       
            const htmls = Math.floor(Math.random() * data.length) + 0;
 
           
            const html = `  <img class="image" src="${data[htmls].download_url}">`;

            console.log(htmls)

             
        if(data.length >= 1)
        {

            image.removeChild(image.lastElementChild)
        }


            



            

      
            

            
            
        image.insertAdjacentHTML("beforeend", html)

       
        
      
        
        
      

        
           
        
        
        
        

        

       
        

        
        
        
        //convert into javascript
    });

}
