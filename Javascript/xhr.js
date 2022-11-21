function SearchPhotos()
{
   


    
    let url = "https://picsum.photos/v2/list?page=2&limit=100";
    let image = document.querySelector(".image");
    let random = Math.floor(Math.random() *(10) +1)

  
    

   //make request to API

    fetch(url)
    .then(function (data)
    {
      return data.json();

      
     

      
      
       
       
    }
    )

     .then(function(data)
    {
   
        console.log(data);

        const html =`<img class="image" src="${data.download_url}">` 

        image.insertAdjacentHTML("beforeend", html)
   



        
        
        
    })
    
 

  





 
}