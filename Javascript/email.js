let imageList = [];

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

   
 
    request.addEventListener("load", function()
    {
        let data = JSON.parse(request.responseText);

     

       
 
        //grab random photo from array
             
                  
       
            const htmls = Math.floor(Math.random() * data.length) + 0;
 
           
            let html = `  <img class="image" src="${data[htmls].download_url}">`;

             
        
            
            //place it into imageList array


            imageList.unshift(html);
             
             

            // no more than one image at a time

             
        if(data.length >= 1)
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

     

    //save image button
    function SelectImage()
    {
      //put displayed photo into email 1st in array
      let chosen = document.querySelector(".selected-image");
    
        
           
       let photoSelected = imageList[0]

       let emailSelected = emailList[0]
     
      
      
       let result = document.getElementById("email").value +"<br>"+ "<hr>"+ "<br>" + photoSelected   ;
      

       emailSelected.unshift(photoSelected);
       console.log(emailSelected)

     
       

     
        
      


       
        //checking if duplicate email
        if (emails[0].length !== emails[1].length)
        {
      
          
          let imageSelected = `<div class="selected-image">${result}</div>`

       
           


              
          chosen.insertAdjacentHTML("beforeend", imageSelected);
   
          
        
          
        




          
      
           

        }

        
        else
        {
          let imageSelected = `<div class="selected-image">${photoSelected}</div>`
          chosen.insertAdjacentHTML("beforeend", imageSelected);
          
          
        }


           
         
        
       

       

               
        

        




             
        
            
            


       


            



            

      
            

      

       
        
      
    
     

      

        

      
       

    }
    

    

            

        

              