function SearchPhotos()
{
   
    let url = "https://picsum.photos/200" 

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
    });
   
}