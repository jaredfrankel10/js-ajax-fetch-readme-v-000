const app = "I don't do much.";
fetch('https://api.github.com/repos/jquery/jquery/commits')
   .then((response) => {
     return response.json()
   })
   .then((json) => {
     console.log(json);
   });