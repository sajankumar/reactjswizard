
## completed task
http://sajankumarvijayan.com/finleap/build/


## Task Requirement

You are going to build a React JS application wizard which consumes an API service. 

The application should guide a user through a three step application process with the following constraints:  
1. User should choose an option which comes from the first API integration 
2. User should provide custom data which needs to be validated accordingly 
3. User can move forward and backward in the three steps but can only finish when all required data is entered  
Step 1.  Ask for the city in which the user lives. It should be an autocomplete/typeahead field using the Google Places API for city around the world.  Step 2.  Ask for contact information, email and mobile phone number.  
Step 3.  Review information entered, and place a Confirm button. Clicking the Confirm button the system should prepare a JSON object with all the info gathered, and send it to a fictional URL as a post query.  

It would probably be best to focus on the basic requirements first but if you feel like you have time, feel free to do any nice "extras" you want. For instance, if you've worked with react before, maybe you have a favorite framework/library to handle data-flow. If you've worked with design/ux/styling and have time, maybe you can even make the application look and feel nice when using it :) 


## running in local machine

node js must be installed and ### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.