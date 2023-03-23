
//regex variables 
const emailInput = document.getElementById('email');

const emailRegex = '^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$';
const sendButton = document.getElementById('send');//global button
const image = document.querySelector(".image"); //

const currentDiv = document.querySelector("#first");//where to put image 

let data = null;
let imageList = []; //array of images 

let collection = [] ;// holds all the objects 
 let emailList = []; // array of emails 

 


// when you click the "new image " button
function SearchPhotos() {

 

        const index = Math.floor(Math.random() * data.length) + 0;
        let randomImg = data[index].download_url;//random image in variable 
       
        let imgId = data[index].id;
        
        image.setAttribute('src', randomImg); //set as source in image div
        image.setAttribute('alt', imgId); //set as source in image div
       

     }


     sendButton.addEventListener("click", function() //on click of button
     {

        if
        (emailInput.value.match(emailRegex)) //if email is valid
        {
            if(emailList.includes(emailInput.value)) //check if already in email list
            {
                
            }
            else
            {
                emailList.push(emailInput);//put email in email list 
                                
                let image_prime = image.cloneNode();//clone of image to display on screen
                currentDiv.append(image_prime);
                console.log(image)
                imageList.unshift(image);
     
                console.log(imageList)

            
               
                SearchPhotos();
                

            }
        }
        else {
            
                emailInput.style.border="3px solid red";
                alert("Invalid Email, Please re-enter");//if email not correct format

            }

           

     })



    function requestImage()
    {
       let request = new XMLHttpRequest();

       //create request
   
       request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100')
   
       //send request
   
       request.send();
   
                  
       request.addEventListener("load", function () {
            data = JSON.parse(request.responseText);
           SearchPhotos(); //call first photo
    
    });

   
    }

    requestImage();

      