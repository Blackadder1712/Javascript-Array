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

emailList =[]
//duplicate emails 
copy=[]

lorry = []

container = []



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
                        x = document.getElementById("email").value;
                        // put x at top of emailList:
                        emailList.unshift(x);
                        //check if email is already in list
                        
                        for (let i = 1; i <= emailList.length; i++)
                        if(emailList[0] === emailList[i])
                        {
                        
                          alert("Email already stored")

                      
                          //put duplicate email into a seperate variable
                           found = emailList[0]
                            
                           //move to seperate array

                            copy.unshift(found);

                            console.log(found)

                          //dont display duplicate on screen
                          document.getElementById("email").value.style.display = none;

                         

                          
                          

                        
                        }
                        //check if newest email is in duplicate list
                       
                      

                        
                  

                        let chosen=document.querySelector(".selected-image");

                        let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>";
                        

                        for(i = 0; i < lorry.length; i++);

                        let textSelected = `<div class=container id= "${i}"><div class="selected-image" >${text}</div></div>`
                        document.getElementById("text").innerHTML = x;

                        lorry.unshift(textSelected)


                        console.log(lorry)

                       

                   

                         

                        
 


                        

                      

                        
                      
                          chosen.insertAdjacentHTML("beforeend", textSelected);

                                
                    

              

                         }
                                    
                       document.getElementById("send").style.display = "none";
                       document.getElementById("save").style.display = "block";
                       document.getElementById("email").addEventListener("click", function()
                        {
                          if (document.getElementById("send").style.display = "none")
                          {
                            document.getElementById("send").style.display = "block";
                            document.getElementById("save").style.display = "none";

                          }
                        })
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

 function Old() 
 {//if there is a duplicate the image will go to its already established container            
  for(i = 0; i < copy.length; i++)
       
  chosen = document.getElementById(`${i}`)
 


 }



function SelectImage() {
  //put displayed photo into email 1st in array
  emailList.unshift(email)
  email = []

  email.unshift(x)

  email.push(imageList[0])



  //display on screen


  

  

  container =[]

  let varied = copy.filter((element) => 
{
   return element === emailInput.value;
   
})
  

  chosen = document.querySelector(".container")

 
  //if more than one container (email)
  if (lorry.length > 1)
    for (i = 1; i < lorry.length; i ++)
  {
   
        chosen = document.getElementById(`${i}`)
    
      //if there are duplicate emails 
  
   }
   
   if(varied.length > 0 && varied.length < 2)
   {
     Old()
     
    
   }
   
  
  

  

 
   



 

  






   photoSelected = imageList[0]
    


   let imageSelected = `<div class="selected-image"  >${photoSelected}</div>`

   container.unshift(imageSelected)
   chosen.insertAdjacentHTML("beforeend", imageSelected);

 

  
  
 
  



  
  


  
  

   
  }
 
