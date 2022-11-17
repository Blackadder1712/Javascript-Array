function SearchPhotos()
{
   
    let url = "https://picsum.photos/200";
    const html = document.getElementsByClassName("image")
    

    //make request to API

    fetch(url)
    .then(function (data)
    {
        return data
    }
    )
    .then(function(data)
    {
        console.log(data);
  
        
      
        
    });
   
   
}