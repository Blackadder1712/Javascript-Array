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

    emailList = [] // list of emails 
    container = [] // array of email htmls 
    box = [] //array of containers 

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
        
        
            
                        email= [] // holding input and images, new array made with each button click
                         
                        
                        //put input into a variable
                            x = document.getElementById("email").value; 
                        
                        //put variable into email array
                            email.unshift(x) 
                         //put image into email array   
                            email .unshift(imageList[0])
                            console.log(email)
                            emailList.unshift(email)// email array moved to top of email list array
                            console.log(emailList[0][1])
                            // make a container to display on screen if its not a duplicate
                            for(i = 1; i < emailList.length;i++)
                            if(emailList[0][1] === emailList[i][1])
                            {
                                duplicate = emailList[i][1]// put duplicated email into a variable 
                                emailList[0]//delete email copy
                                emailList.unshift(duplicate)//move duplicated to top of array
                               
                                
                               
                                break
                               
                           }



                            
                            
                            chosen = document.querySelector(".selected-image");//where containers go
                            
                        

                             

                             console.log(emailList)



                           
                            let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>"; //email html
                      
                            box.unshift(container)      
                            if(box[0] === box[i])
                            {
                                chosen.removeChild(chosen.lastElementChild)
                                box.pop()
                            }
                           
                            for(i = 0; i < box.length; i++)
                            textSelected = `<div class="container" id ="${i}" >${text} </div></div>`;//container for each email
                            container.unshift(textSelected)//put html into array
                           
                            console.log(container)
                            //check if array is being duplicated
                       

                            chosen.insertAdjacentHTML("beforeend", textSelected); //displays email


                            /*chosen2 = document.getElementById(`${i}`);//where containers go
                            photo = imageList[0]
                            let photoSelected = `<div class="selected-image" > ${photo}</div></div>`;//image html
                            
                            chosen2.insertAdjacentHTML("beforeend", photoSelected); //displays image
                            

                            //check if email is a duplicate 
                            console.log(emailList)

                              //stop a duplicate email container 
                              */
                          
                        

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