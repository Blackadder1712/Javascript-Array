//call to API

let imageList = [];  

function SearchPhotos()
{
    let image = document.querySelector(".random-img");
    let box = document.querySelector(".border");

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
 
           
            let html = `  <img class="image" src="${data[htmls].download_url}">`;

             
        
            
            


            imageList.unshift(html);
             
             



             
        if(data.length >= 1)
        {

            image.removeChild(image.lastElementChild)
        }


            



            

      
            

            
            
        image.insertAdjacentHTML("beforeend", html)

       
        
      
        
        
      

        
           
        
        
        
        

        

       
        

        
        
        
        //convert into javascript
    });

 
          

  

}
