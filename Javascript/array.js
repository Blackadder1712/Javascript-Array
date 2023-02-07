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

//regex variables 
let emailInput = document.getElementById('email');

let emailRegex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';


emailList =[];//list of emails//


container= []  //holds all the onscreen emails and there images 
emailBox = []; //holds the htmls of the emails so they appear on screen

email = [] // hold list of selected images 

$("#send").click(function()
{
    if(imageList.length < 1)
        {
          alert("Please select an image ")

        }
        else
        {
               //check if email field contains @ character, if so do a red border 
                  if 
                  (emailInput.value.match(emailRegex)  )
                  {
                      $("#email").css({"border": "3px solid #7FFF94"})
                      {

                        //put email into a variable :
                        email = [document.getElementById("email").value];
                        // email variable goes to top of emailList array
                        emailList.unshift(email) //email goes into emailList
                        let chosen=document.querySelector(".selected-image");// where in html we want email/image displayed 
                        let text = document.getElementById("email").value + "<br>"
                         + "<hr>" + "<br>"; // html variable to show email on screen
                        selectedPic = imageList[0] //onscreen image into variable
                        
                        for(i = 0; i < emailBox.length; i++);
                        let textSelected = `<div class= "container" id= "${i}"><div class="selected-image" > 
                        ${text} ${selectedPic}
                        </div></div>`
                        
                     

                        emailBox.unshift(textSelected) // puts htmls into an array
                        console.log(emailList)
                        email.unshift(selectedPic) // move onscreen image into email array

                         container.unshift(emailBox) // moves html boxes into container array to be sorted 
                  
                         console.log(container)
                               
                        chosen.insertAdjacentHTML("beforeend", textSelected); // append email to screen

                 
                             
                               console.log(emailBox)

                        

                        // holds the htmls of the emails  
                      
                      
                    
                             for(i = 1 ; i < emailList.length; i++)
                             if (emailList[0][1] === emailList[i][1])
                             {
                                 alert("Email already stored")
                                 duplicate = emailList[i] //duplicate goes into duplicate array 
                                 duplicateEmail = emailList[i][1]  // duplicate email address
                                 duplicate.unshift(selectedPic)  //picture goes into this array
                                 console.log(duplicate)
                                 image = document.querySelector(".selected-image"); // where pic goes
                                 image.removeChild(image.lastElementChild)// dont show duplicate email box 
                                 for(j=0; j < emailBox.length; j++)
                                 if( emailBox[j].includes(duplicateEmail))
                                 {
                                
                                  console.log(emailBox)
                           
                                 }
                                 
                                
                               
                                
                              
                                 
                              }

                                
  if (emailBox.length > 1)
  for (i = 1; i < emailBox.length; i ++)
    {
      console.log(emailList)
      chosen = document.getElementById(`${i}`)
      for (i = 1; i < emailList.length; i ++)

      if (emailList.text === emailInput.value)
      {
        console.log("yay")
      }

      

      


    }

                       
                               
                            
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
                  
                
                     




             
                        
                     
                 

