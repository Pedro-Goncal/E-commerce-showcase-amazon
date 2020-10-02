import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-project-d3bc4.cloudfunctions.net/api",
});

// 'http://localhost:5001/project-d3bc4/us-central1/api' // The API (cloud function) URL For Debugging Local Host
// 'https://us-central1-project-d3bc4.cloudfunctions.net/api'

export default instance;

/*
===============
CLOUND FUNCTION
===============

ON TERMINAL:

-firebase init

Select:
   Functions: Configure and deply Cloud Functions (space)

-What language would you like: 
   JavaScript
 -Do you want to use ESLint to catch probable bugs and enforce style? 
   Y
   
-Do you want to install dependencies with npm now? 
   Y

*/

//firebase deploy --only functions

//firebase deploy --only hosting

//npm run build && firebase deploy
