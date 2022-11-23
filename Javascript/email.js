
//regex variables 
let emailInput = document.getElementById('email');
let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


   $("#send").click(function()
   {
            //check if email field contains @ character
            if 
            (emailInput.value.match(emailRegex) )
            {
                $("#email").css({"border": "3px solid #7FFF94"})
                {
                    var x = document.getElementById("email").value;
                    let emails = [];
                    emails.unshift(x);

                    console.log(emails)

                 
                    
       
                    
                

                  
                    
                    

              
                    document.getElementById("text").innerHTML = x;

                    return;

                 

                }

       
               
                
              

            }

            else
           {
              $("#email").css({"border": "3px solid red"})
              {
                alert("Please enter valid email address")
              }

            }

          


            });
          

  

              