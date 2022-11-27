
//regex variables 
let emailInput = document.getElementById('email');
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  emailpicked =[]





    
   $("#send").click(function()
   {
            //check if email field contains @ character
            if 
            (emailInput.value.match(emailRegex) )
            {
                $("#email").css({"border": "3px solid #7FFF94"})
                {
                 
                    emails =[];
                  
                    var x = document.getElementById("email").value;
                   
                 
                 
                  
                    

                    emails.unshift(x);

                    
                    emailpicked.unshift(emails)


                    console.log(emailpicked);
                
                  
                 
                
                  

            

                 
                    
       
                    
                

                  
                    

              
                    document.getElementById("text").innerHTML = x;
                  
                 

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
          

    emailpicked = [];
    
    function SelectImage()
    {
  
      let chosen = document.querySelector(".selected-image");
 
      imagepicked = imageList[0];
     
      emailpicked.unshift(emails[0]);
 
     

        emailpicked.push(imagepicked);


        console.log(emailpicked);


       
 
           
 

         let imageSelected = `<div class="selected-image">${emailpicked}</div>`

               
            
         chosen.insertAdjacentHTML("beforeend", imageSelected);





             
        
            
            


       


            



            

      
            

      

       
        
      
    
     

      

        

      
     

    }
    

    

            

        

              