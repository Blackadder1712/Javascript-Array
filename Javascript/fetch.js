const getImg = document.getElementById('get-img');
const postImg = document.getElementById('post-img');

const sendHttpRequest = (method, url, data) =>
{
    return fetch('url', 
    {
        method: method,
        body: JSON.stringify(data),
        headers: data ? 
        {
            'Content-Type': 'application/json'
        }:
        {

        }
    })
    .then(response =>
    {
     if(response.status >= 400)
     {
      return response.json().then(errResData =>
        {
            const error = new Error('Something went wrong!');
            error.data = errResData;
        }) 
     }
     console.log(response);
      return response.json();
    });
};

const getData = () =>
{
   sendHttpRequest('GET','https://picsum.photos/').then(response =>
   {
    console.log(response);
     return response.json();
   }).then(responseData =>
    {

    });
};

const sendData = () =>
{
   sendHttpRequest('POST','https://picsum.photos/',
   {
    email:'test@test.com'
   }).then(responseData =>
    {
     console.log(responseData);
    })
    .catch(err =>
        {
            console.log(err);
        });
    
     

   
};

getImg.addEventListener('click', getData);
postImg.addEventListener('click', sendData);