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
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

emailList =[]



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

                      
                          //move duplicate email to top of duplicate array 

                          
                          document.getElementById("email").value.style.display = none;

                          
                          

                        
                        }
                        //check if newest email is in duplicate list
                       
                      

                        
                  

                        let chosen=document.querySelector(".selected-image");

                        let text = document.getElementById("email").value + "<br>" + "<hr>" + "<br>";

                        for(i = 0; i < lorry.length; i++);

                        let textSelected = `<div class=container id= "${i}"><div class="selected-image" >${text}</div></div>`


                        lorry.unshift(textSelected)


                        console.log(lorry)

                       

                   

                         

                        
 


                        

                      

                        
                      
                          chosen.insertAdjacentHTML("beforeend", textSelected);

                                
                    

              

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


function SelectImage() {
  //put displayed photo into email 1st in array
  emailList.unshift(email)
  email = []

  email.unshift(x)

  email.push(imageList[0])



  //display on screen


  

  

  container =[]
  

  chosen = document.querySelector(".container")

  
  if (lorry.length > 1)
    for (i = 1; i < lorry.length; i ++)
  {
     console.log(emailList)
    chosen = document.getElementById(`${i}`)
    for (i = 1; i < emailList.length; i ++)

    if (emailList.text === emailInput.value)
    {
      console.log("yay")
    }

    

    
 

  }

   photoSelected = imageList[0]
    


   let imageSelected = `<div class="selected-image"  >${photoSelected}</div>`

   container.unshift(imageSelected)
  chosen.insertAdjacentHTML("beforeend", imageSelected);

 

  
  
 
  



  
  


  
  

   
  
 
}
