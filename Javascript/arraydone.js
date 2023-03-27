
const image = document.querySelector(".image");
const emailInput = document.getElementById('email');
const sendButton = document.getElementById('send');
const containerDiv = document.querySelector(".selected-image");


const emailRegex = '^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$';

let data = null;      //store the data of the pictures
let currentEmail = null; //store the current email

let imageList = [];  //store image ids 
let emailList = [];   //store emails
let collection = [];  //store the emails and selected images together





function SearchPhotos() {
        let index = Math.floor(Math.random() * data.length) + 0; //select rando image
        image.setAttribute('src', "https://picsum.photos/id/" + data[index].id + "/200"); //set image properties
        image.setAttribute('alt', data[index].id);
}


sendButton.addEventListener('click', function (){
        
    if(emailInput.value.match(emailRegex)){   //if email passes regex
        if(!emailList.includes(emailInput.value)){ //check if its not a duplicate 
            emailList.push(emailInput.value);       //add it if it isnt     
            boxDiv = `<div class="container" id ="${emailInput.value}" > ${emailInput.value}</div>`;
            containerDiv.insertAdjacentHTML("beforeend", boxDiv);
            console.log(currentEmail);
            box = document.getElementById(`${emailInput.value}`);    
           
            
           
        }

        console.log(imageList)
    
   
      
        if(currentEmail != emailInput.value && currentEmail != "")
        { //if the latest email is not the same as the input value, new email was entered

            
      
         
            collection[currentEmail] = imageList;  //save the current email and its nested imageList into the collection
                //then replace the currentemail with the input value
            currentEmail = emailInput.value;
            
            if(collection[currentEmail]){  //if the new email is already in the collection, fetch it
                imageList = collection[currentEmail]; // the needed imagelist is the one within the currrent email
             
            } else{      
           
                imageList = []; // if new email create new imagelist
         
            }
        }
        

        
        if(!imageList.includes(image.getAttribute('alt'))){ //if image is not a duplicate 
      
            imageList.push(image.getAttribute('alt'));  //and add it to the list array
            
            let img = image.cloneNode();  //copy the random image;
            box = document.getElementById(`${emailInput.value}`);
            box.append(img)
          
        } 
        else
        {
        alert("Image was already added");  //if its already in the list, show an error
        }
        
        
    } else {        

        emailInput.style.border = "3px solid red";
        alert("Please enter valid email");
    }
    
    SearchPhotos();

    console.log(collection)
   

});

   



function loadImages(){
    let request = new XMLHttpRequest();
    request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100');
    request.send();
    request.addEventListener("load", function () {
        data = JSON.parse(request.responseText);
        SearchPhotos();
    });
}

loadImages(); 


