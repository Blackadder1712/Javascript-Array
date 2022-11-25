
//regex variables 
let emailInput = document.getElementById('email');
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let emails =[];





    
   $("#send").click(function()
   {
            //check if email field contains @ character
            if 
            (emailInput.value.match(emailRegex) )
            {
                $("#email").css({"border": "3px solid #7FFF94"})
                {
                 
                
                  
                    var x = document.getElementById("email").value;
                    emails.unshift(x);
                   
                    
                  


                    console.log(emails);
                
                  
                 
                
                  

            

                 
                    
       
                    
                

                  
                    
                    

              
                    document.getElementById("text").innerHTML = x;
                    
                    document.getElementById("texti").innerHTML = x;

                    
                 

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
      let imagepicked = imageList[0];
      let emailpicked = [emails[0]];
      let chosen = document.querySelector(".selected-image");
     

      if (emails.length >= 1)
      {
     

        emailpicked.push(imagepicked);


        console.log(emailpicked);


       
 
           
 

         let imageSelected = `<div class="selected-image">${emailpicked[1]}</div>`

               
            
         chosen.insertAdjacentHTML("beforeend", imageSelected)



             
        
            
            


       


            



            

      
            

      

       
        
      
    
     

      

        

      }

    }
    

    

            

        

              