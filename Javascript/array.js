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


emailList =[];// puts email into an array


lorry= [] ; //holds all the onscreen emails and there images 
copy=[];
photo= []

function Old() 
{//if there is a duplicate the image will go to its already established container            
 for(i = 0; i < copy.length; i++)
      
 chosen = document.getElementById(`${i}`)



}

 // hold list of selected images 

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
                        //let photoSelected = imageList[0]   //onscreen image into variable
                        email=[] //hold the email address 
                        x = document.getElementById("email").value;   //email info in variable  
                        
                        email.unshift(x) // push the email info into email array
                       
                        if (lorry.length > 1)
                        for (i = 1; i < lorry.length; i ++)
                      {
                       
                            chosen = document.getElementById(`${i}`)
                        
                          //if there are duplicate emails 
                      
                       }
                     
                    
                        emailList.unshift(email) // push email into emailList
                        email.unshift(imageList[0]) // push photo into the email array
                        console.log(email)
                        console.log(emailList)
                        let chosen=document.querySelector(".selected-image"); //where email/image display
                       
                        let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>";  //display format                     
                       
                        photoSelected = imageList[0] //selected image variable
                        for(i = 0; i < lorry.length; i++);
                        let textSelected = `<div class=container id= "${i}"><div class="selected-image" >${text}${photoSelected}</div></div>`
                   
                        chosen.insertAdjacentHTML("beforeend", textSelected);  
                        
                        
                 

                       /* let chosen=document.querySelector(".selected-image");   //where to display email
                        let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>";  //what to display
                        let textSelected = `<div class=container id= "${i}"><div class="selected-image" >${text}</div></div>`; //email html 


                        
                                                                            
                   

                      
                        console.log(emailList)

                        for(i = 1; i < emailList.length;i++) //delete duplicate email
                        if(emailList[0][1]===emailList[i][1])
                        {
                       
                          //put duplicate email into a seperate variable
                          found = emailList[0]
                            
                          //move to seperate array

                          copy.unshift(found);
                          emailList.shift()
                          console.log(found)
                          console.log(emailList)
                            
                        }


                      
                        
                       // let chosen=document.querySelector(".selected-image");// where in html we want email/image displayed
                       // let chosen2 = document.querySelector(".container");
                        //let text = document.getElementById("email").value + "<br>"
                         + "<hr>" + "<br>"; // html variable to show email on screen
                        
                        
             
                       

                        
                     

                        emailBox.unshift(textSelected) // puts htmls into an array
                        
                        emailBox.unshift(imageSelected)
                        console.log(emailList)
                        email.unshift(imageSelected) // move onscreen image into email array

                         container.unshift(emailBox) // moves html boxes into container array to be sorted 
                  
                         console.log(container)
                               
                        chosen.insertAdjacentHTML("beforeend", textSelected); // append email to screen
                        chosen2.insertAdjacentHTML("beforeend", imageSelected); // append email to screen

                 
                             
                               console.log(emailBox)

                        

                        // holds the htmls of the emails  
                      
                      
                    
                             for(i = 1 ; i < emailList.length; i++)
                             if (emailList[0][1] === emailList[i][1])
                             {
                               
                                  console.log(emailList[0][0])
                       
                                 image = document.querySelector(".selected-image"); // where pic goes
                                 image.removeChild(image.lastElementChild)// dont show duplicate email box 
                             
                                 for(j=0; j < emailBox.length; j++)
                                 if( emailBox[j].includes(duplicateEmail))
                                 {
                                    container.unshift(emailBox[j]);
                                    console.log("help")
                                    
                       
                                 }
      
                              }
                              else
                              {
                                for (i = 1; i < container.length; i ++)
                                  chosen2 = document.getElementById(`${i}`)
     
                              }

                              
                              
                             

                                


      

      



                       
                               
                            
                      }
                  }  
                   

                         
                      
                      else
                      {
                          $("#email").css({"border": "3px solid red"})
                          {
                            alert("Please enter valid email address")
                        
                          }
              
                        */               }
            }

         
    
  }                     
                  
                
                     




             
                        
                     
}                
)
