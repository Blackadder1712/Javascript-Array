let get = document.querySelector('#get-img');

let images = document.querySelector('.images');

let request = new XMLHttpRequest();

//create request object


           //create request

        request.open('GET','https://picsum.photos/200');


        //send request

        request.send();

        request.addEventListener('load', function()
        {
          let[data] = JSON.parse(request.responseText);
          console.log(data);

          const html = document.querySelector(".array_image");
         
            
            
        
        })

      




