## Progress Flow:

$ called functions from js(js files located in trail folder)

$called fetch function directly (postData).

$RunRemoteScriptFile.js((in trail folder) gives the facility to run the js files which are not declared in the app//src//...tree ...

$Added java script Files in JAVA-SCRIPT_FILES repo and added RunRemoteServerScriptFile.js(in trail folder) which gives access to run the java script files from the server directly...

## How to Run the App:

**Got no time? Clone the below repo as shown and get going!**

```git clone https://github.com/rajjeet/react-quick-start

 cd react-quick-start
 
 npm install
 
 npm start
```
**Other wiseCreating a very simple React app can be very helpful**

**Step 1: Initialize NPM (Node Package Manager)**
```
mkdir new-react-app
cd new-react-app
```
**Step 2: Create React App**

npm also includes a tool called npx, which will run executable packages. What that means is you will run the Create React App code without first downloading the project.

To install the base project, run the following command in cmd:
```
npx create-react-app Reacttest
```

This command will kick off a build process that will download the base code along with a number of dependencies.

When the script finishes you will see a success message that says:
```
Success! Created digital-ocean-tutorial at your_file_path/digital-ocean-tutorial
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd digital-ocean-tutorial
  npm start

Happy hacking!
```

## OUTPUT/RESULT :
As the code to get executed is already defined in REACT.JS code,Just simply Running the App will produce the result in the console.

After going in to the project just type "npm start" in the cmd propmt which will give the result of the JS executed in the console(the JS code in server link is already addressed in the code in RunRemoteServerScriptFile.js(in trail folder))












## Available Scripts

(This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
