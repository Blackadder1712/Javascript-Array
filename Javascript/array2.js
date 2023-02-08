imageList = [];

// when you click the "new image " button
function SearchPhotos()
 {
  let image = document.querySelector(".random-img");



  //create object

  let request = new XMLHttpRequest();



  //create request

  request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100')

  //send request

  request.send();



  request.addEventListener("load", function ()
   {
    let data = JSON.parse(request.responseText);





    //grab random photo from array



    const htmls = Math.floor(Math.random() * data.length) + 0;


    let html = `  <img class="image" src="${data[htmls].download_url}">`;




    //place it into imageList array


    imageList.unshift(html);



    // no more than one image at a time


    if (data.length >= 1)
    {

      image.removeChild(image.lastElementChild)
    }









    //display on screen



    image.insertAdjacentHTML("beforeend", html)























    //convert into javascript
  });






}

let emailInput = document.getElementById('email');

let emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

emailList =[]
//duplicate emails 
copy=[]

lorry = [] //holds all the containers that contain images/emails

container = [] //holds all the image htmls

email = []



$("#send").click(function()
{
    if(imageList.length < 1)
        {
          alert("Please select an image ")

        }
        else
        {
            x = document.getElementById("email").value; //put user input into an array
            console.log(x)
            emailList.unshift(x); //put email at the top of the emailList
            for(i = 1; i < emailList.length; i++)//check if email already exists if so move the element to top delete new 
            if(emailList[0] === emailList[i]) 
            {
             
             //put duplicate email into a seperate variable
                 found = emailList[0]
                //move to seperate array
                 copy.unshift(found)
                 console.log(found)
             

                         //dont display duplicate on screen
                         
              
                        

                         
                         

                       
            }
       // dont show duplicate email box 
            let chosen=document.querySelector(".selected-image");   //where to show email
            let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>";  //what to display
            let textSelected = `<div class=container id= "${i}"><div class="selected-image" >${text}</div></div>`; //email html
            lorry.unshift(textSelected) // put email html to the top of the lorry array
            
            chosen.insertAdjacentHTML("beforeend", textSelected);// where to display email

            function Old() 
            {//if there is a duplicate the image will go to its already established container            
             for(i = 0; i < copy.length; i++)
                  
             chosen = document.getElementById(`${i}`)
            
           
           
            }
            console.log(emailList)

            email.unshift(imageList[0])//put image at the top of email array
            console.log(email)
            for(let i = 1; i < email.length; i++) //loop through the images 
            if(email[0] === email[i])
            {
                email.shift()
                console.log(email)
       
            }

           
            let varied = copy.filter((element) =>  //returns the email that has been duplicated 
            {
               return element === emailInput.value;
               
            })
            
            console.log(varied)

            chosen2 = document.querySelector(".container")  // where images will appear 

                      
            if (lorry.length > 1) //if more than one container holding email/pics, location now changes with the container id 
            for (i = 1; i < lorry.length; i ++)
            {
            
                chosen2 = document.getElementById(`${i}`)
            
                //if there are duplicate emails 

            }

            if(varied.length > 0 && varied.length < 2) // if there is a duplicate email activate function
            {
              Old()
              
             
            }

            photoSelected = imageList[0] //put the on screen image into a variable 
            let imageSelected = `<div class="selected-image"  >${photoSelected}</div>`//where to put image
            container.unshift(imageSelected) // push image html into array
            chosen2.insertAdjacentHTML("beforeend", imageSelected);// where to place image 
            console.log(lorry)
       

         






        }
})