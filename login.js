const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
const PORT = process.env.PORT || 80; // Use the environment port if available, or 3000 as default
res.setHeader('Cross-Origin-Opener-Policy','same-origin')
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});


function OM(googleUser) {
  var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://yourbackend.example.com/tokensignin');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
          console.log('Signed in as: ' + xhr.responseText);
        };
        xhr.send('idtoken=' + id_token);
        googleUser;

  // Use other parts of your code here, assuming the variables are correctly defined
};
// Decode the ID token to access user information
//const decodedToken = jwt_decode(idToken);
// Access user information from the decoded token
//const userId = decodedToken.sub;
//const userName = decodedToken.name;
//const userEmail = decodedToken.email;