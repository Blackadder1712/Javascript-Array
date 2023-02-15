imageList = [];

// when you click the "new image " button
function SearchPhotos() {
    let image = document.querySelector(".random-img");



    //create object

    let request = new XMLHttpRequest();



    //create request

    request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100')

    //send request

    request.send();



    request.addEventListener("load", function () {
        let data = JSON.parse(request.responseText);





        //grab random photo from array



        const htmls = Math.floor(Math.random() * data.length) + 0;


        let html = `  <img class="image" src="${data[htmls].download_url}">`;




        //place it into imageList array


        imageList.unshift(html);



        // no more than one image at a time


        if (data.length >= 1) {

            image.removeChild(image.lastElementChild)
        }


        //display on screen



        image.insertAdjacentHTML("beforeend", html)


        //convert into javascript
    });

        //regex variables 
    let emailInput = document.getElementById('email');

    let emailRegex = '^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$';
    
    lorry= [] // this stores every box that containe htmls
    
    emails= []// list of emails 
    $("#send").click(function () {
        if (imageList.length < 1) {
            alert("Please select an image ")
    
        }
        else {
                //check if email field contains @ character, if so do a red border 
                if 
                (emailInput.value.match(emailRegex))
                {
                    $("#email").css({"border": "3px solid #7FFF94"})
                    {
                      

                        box = []
                        
                   
                    
                        x = document.getElementById("email").value; //user input
                            //check if a box already has email in it 
                     
                     

                    
                        //create html to hold containers
                        chosen = document.querySelector(".selected-image");
                        //create container with email as id a
                        container = `<div class="container" id ="${x}" > </div>`;//container for each email
                        
                        
                        chosen.insertAdjacentHTML("beforeend", container); //displays container

                        //move container into a parent, one email per box
                        
                        box.unshift(container)
                        console.log(box)

                        //move each box into the lorry

                        lorry.unshift(box)
                        console.log(lorry)

                        //now add email into container
                        
                         chosenEmail = document.getElementById(`${x}`);// where emails need to be displayed
                         text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>"; //email format
                
                              
                        chosenEmail.insertAdjacentHTML("beforeend", text); //displays container
                        email = `${text}`// email to be inserted into html
                 

                        console.log(lorry)




                        

                          
                      

                        

            
                       // email.unshift(imageList[0]) // put imag in email array on button click
                        

                    }              

                    
                }
                

                else
                {
                    $("#email").css({"border": "3px solid red"})
                    {
                    alert("Please enter valid email address")
                
                    }
                }
         } 
    })      
  
    
   


    

}