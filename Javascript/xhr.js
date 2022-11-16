const getImg = document.getElementById('get-img');
const postImg = document.getElementById('post-img');

const sendHttpRequest = (method, url, data) =>
{
    const promise = new Promise((resolve, reject) => 
    {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.responseType = 'json';
        
        if (data)
            {
                xhr.setRequestHeader('Content-Type', 'application/json'); // appends data
            }
     
        
        xhr.onload = function()
        {
            if(xhr.status >= 400)//check response status
              {
                reject(xhr.response);
              }

            else //if no errors
              {
                resolve(xhr.response);
              }
          
        };

        xhr.onerror = () =>
        {
           reject('Something went wrong!'); // if there is an error
        };


    
        xhr.send(JSON.stringify(data));
    });

    return promise;

   
};

const getData = () =>
{
    sendHttpRequest('GET', 'https://picsum.photos').then(responseData =>
    {

    });
};

const sendData = () =>
{
   sendHttpRequest('POST', 'https://picsum.photos',
   {
      email: 'test@test.com'
   }).then(responseData =>
    {

    }).catch(err =>
        {
           console.log(err); 
        });//deal with error

};

getImg.addEventListener('click', getData);
postImg.addEventListener('click', sendData);