

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






}

//regex variables 
let emailInput = document.getElementById('email');

let emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

inbox=[]

container = [] // hold all the boxes 

box = [] //holds the htmls of the emails/images to show on screen

function emailCopy() 
{//if there is a duplicate the image will go to its already established container            
 for(i = 0; i < copy.length; i++)
      
 chosen = document.getElementById(`${i}`)



}





$("#send").click(function()
{
    if(imageList.length < 1)
        {
          alert("Please select an image ")

        }
        else
        {   
           
                email = [] // list of email data
                x = document.getElementById("email").value; //put user input into a variable
                email.unshift(x) // move user input into email array
                console.log(email)
                inbox.unshift(email)// move list off emails into a larger array
                photo = imageList[0] // put picked image into a variable 
                email.unshift(photo) // put chosen photo into email
                console.log(inbox)
                console.log(inbox[0])
                
                
               
                    /*let chosen=document.querySelector(".selected-image"); //where image goes
                    let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>"; // text content and format
                    for(i = 0; i < container.length; i++);//loop through containers so email is applied to each one
                   let textSelected = `<div class=container id= "${i}"><div class="selected-image" id ="${i}" >${text}  ${photo}</div></div>`;//email html
                    box.unshift(textSelected) ;// holds all the boxes that contain each set of htmls
                    console.log(box)
                
                   console.log(box)
                    container.unshift(box)
             
                    console.log(box)
                    chosen.insertAdjacentHTML("beforeend", textSelected);
                    console.log(container)
                   for(i = 0; i < container.length; i++);//loop through containers so image is applied
                   */



                                
                          
                            
                            
                             //inbox[i].unshift(photo)  //photo goes into duplicate email instead of creating another element
                             console.log(box)
                   
                            
                         
                                                       
                             //console.log(container)
                  
                        
                                    console.log(box)
                                    for(i = 0; i < container.length; i++);//loop through containers so email is applied to each one
                                    let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>"; // text content and format
                                 
                            
                                    chosen=document.querySelector(".container");
                                    let textSelected = `<div class="selected-image" id ="${i}" >${text} </div></div>`;//email html
                                    let photoSelected = `<div class="selected-image" id ="${i}" > ${photo}</div></div>`;//image html
                            
                                    if(!box.includes(textSelected)) //check if display already shows email
                                    {
                                        chosen.insertAdjacentHTML("beforeend", textSelected); //displays email
                                        chosen.insertAdjacentHTML("beforeend", photoSelected);//displays image 
                                    }
                                    if(box.includes(photoSelected))
                                    {
                                        chosen=document.querySelector(".design");
                                    }
                                    console.log(box)

                                    if(box.includes(textSelected))
                                    {
                                        chosen.insertAdjacentHTML("beforeend", photoSelected);
                                    }
                                 
                              
                            
                                                        
                                console.log(container)
                               
                                box.unshift(textSelected)//put email display into box
                                box.unshift(photoSelected)//put image into box 
                                //container.unshift(box)//moves containers into box 
                                //console.log(container)
                                console.log(box)
                       
                           
                           
                           
                    
                            
                            
                            
                            
                    
                
                           

      
        
              
        }
})        