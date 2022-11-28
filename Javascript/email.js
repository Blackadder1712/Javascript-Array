let imageList = [];

function SearchPhotos()
{
    let image = document.querySelector(".random-img");

  
     
    //create object

    let request = new XMLHttpRequest();
 


    //create request

    request.open('GET', 'https://picsum.photos/v2/list?page=2&limit=100')

    //send request

    request.send();

   
 
    request.addEventListener("load", function()
    {
        let data = JSON.parse(request.responseText);

     

       
 
        //grab random photo from array
             
                  
       
            const htmls = Math.floor(Math.random() * data.length) + 0;
 
           
            let html = `  <img class="image" src="${data[htmls].download_url}">`;

             
        
            
            


            imageList.unshift(html);
             
             



             
        if(data.length >= 1)
        {

            image.removeChild(image.lastElementChild)
        }


            



            

      
            

            
            
        image.insertAdjacentHTML("beforeend", html)

       
        
      
        
        
      

        
           
        
        
        
        

        

       
        

        
        
        
        //convert into javascript
    });

 
          

  

}

//regex variables 
let emailInput = document.getElementById('email');
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


 emailList =[]


    
   $("#send").click(function()
   {
            //check if email field contains @ character
            if 
            (emailInput.value.match(emailRegex)  )
            {
                $("#email").css({"border": "3px solid #7FFF94"})
                {
                 
                
 
                    
                   x = document.getElementById("email").value;
                  emails = [x];
                  console.log(emailList);


                  emailList.unshift(emails);
              
                  
                  
             
                   

                    
                
                  if (emails[0] == emails[1])
                  {
                      alert("Email already stored")
                  }
                   
                





 
            
 
               
                  


                   
                  
                 
                
                  

            

                 
                    
       
                    
                

                  
                    

              
                    document.getElementById("text").innerHTML = x;
                    
                    document.getElementById("text-2").innerHTML = x;


                   
          

                }

              
             
                
              
                

          
             

                
         

                
              
               

       
               
                
              

            }

            

            else
           {
              $("#email").css({"border": "3px solid red"})
              {
                alert("Please enter valid email address")
              }

            }




          


    })
    
    
    function SelectImage()
    {
      let chosen = document.querySelector(".selected-image");
    
        
           
       let photoSelected = imageList[0]

       let emailSelected = emailList[0]

       let result = photoSelected + document.getElementById("email").value
      

       emailSelected.unshift(photoSelected);
       console.log(emailSelected)

       
       
        if (emails[0] !== emails[1])
        {
          
          let imageSelected = `<div class="selected-image">${result}}</div>`
              
          chosen.insertAdjacentHTML("beforeend", imageSelected);
        }
        else
        {
          let imageSelected = `<div class="selected-image">${photoSelected}}</div>`
          chosen.insertAdjacentHTML("beforeend", imageSelected);
          
        }

       
           
         
     
       

       

               
        

        




             
        
            
            


       


            



            

      
            

      

       
        
      
    
     

      

        

      
       

    }
    

    

            

        

              