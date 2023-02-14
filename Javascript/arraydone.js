

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

let emailRegex = '^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$';

inbox = []
lorry= [] // holds containers
container = [] // hold all the boxes 
copy = []
box = [] //holds the htmls of the emails/images to show on screen
address = []
emailHtml = []
function emailCopy() {//if there is a duplicate the image will go to its already established container            
    for (i = 0; i < copy.length; i++)

        chosen = document.getElementById(`${i}`)



}





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


                email = [] // list of email data
                x = document.getElementById("email").value; //put user input into a variable
                address.unshift(x)
                email.unshift(address) // move user input into email array
                for(i = 1; i < email.length;i++)
                if(email[0]===email[i])
                {
                    email[i].unshift(copy);
                    imageList[0].unshift(copy);
                    email.shift()
                }

                 /* for (let i = 1; i <= address.length; i++)
                    if (address[0] === address[i]) {





                        //put duplicate email into a seperate variable
                        found = address[i]

                        //move to to top of seperate array
                        copy.unshift(found)
                        //remove new email
                        address.shift()


                    }*/

                  

                    
                    console.log(address)
                
                    let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>"; //email html
                    chosen = document.querySelector(".selected-image");//where containers go
                
                        for (i = 0; i <address.length; i++);//loop through containers so email is applied to each one
                    let textSelected = `<div class="container" id ="${i}" >${text} </div></div>`;//container for each email
                   emailHtml.unshift(textSelected)
                    for(i = 1; i < address.length; i ++)
                    if(address[0]===address[i] )
                    {
                        chosen = document.querySelector(".design")
                         console.log("hello")
                         console.log(address)
                          address.shift()
                        console.log(address)
                       
                    }
                
                  

                    
                    for(i = 0; i < address.length; i++)
                    
               
                    chosen.insertAdjacentHTML("beforeend", textSelected); //displays email
                    inbox.unshift(email)// move list off emails into a larger array
                   
                   
                    photo = imageList[0] // put picked image into a variable 
                    chosenTwo = document.getElementById(`${i}`) //put photo in container
                    let photoSelected = `${photo}`;//image html
                    lorry.unshift(container)
                    console.log(address)
                    console.log(lorry)
                    if (lorry[0].includes(photo)) {
                        alert("Image already stored")
                        chosenTwo = document.querySelector(".design");
                      
                   
                    }

                
                    chosenTwo.insertAdjacentHTML("beforeend", photoSelected); //displays image
                    container.unshift(textSelected) 
                    container.unshift(photoSelected)
                  

          
                    
                    
                    
                   email.unshift(photo) // put chosen photo into email

                



                    /*for (i = 0; i < container.length; i++);//loop through containers so email is applied to each one
                    let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>"; // text content and format


                    chosen = document.querySelector(".container");
                    let textSelected = `<div class="selected-image" id ="${i}" >${text} </div></div>`;//email html
                    let photoSelected = `<div class="selected-image" id ="${i}" > ${photo}</div></div>`;//image html

                    if (!box.includes(textSelected)) //check if display already shows email
                    {
                        chosen.insertAdjacentHTML("beforeend", textSelected); //displays email
                        chosen.insertAdjacentHTML("beforeend", photoSelected);//displays image 
                    }
                    if (box.includes(photoSelected)) {
                        alert("Image already stored")
                        chosen = document.querySelector(".design");
                    }


                    if (box.includes(textSelected)) {
                        chosen.insertAdjacentHTML("beforeend", photoSelected);
                    }






                    box.unshift(textSelected)//put email display into box
                    box.unshift(photoSelected)//put image into box 
                    //container.unshift(box)//moves containers into box */
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