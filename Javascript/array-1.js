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

    emailList = []
    photoList=[]
 
    $("#send").click(function () {
        if (imageList.length < 1) {
            alert("Please select an image ")

        }
        else {
            //check if email field contains @ character, if so do a red border 
            if
                (emailInput.value.match(emailRegex)) {
                $("#email").css({ "border": "3px solid #7FFF94" })
                {
                   email = []
                      
                    x = document.getElementById("email").value ; //put user input into a variable

                    email.unshift(x) //email into array
                    emailList.unshift(email) // email into larger array
                    photo = imageList[0] // image variable 
                    photoList.unshift(photo) // image into array
                    emailList.unshift(photoList) //photoListy into larger array
                    console.log(emailList)

                    
                    
                 


                }


            }


            else {
                $("#email").css({ "border": "3px solid red" })
                {
                    alert("Please enter valid email address")

                }
            }
        }
    })

}

