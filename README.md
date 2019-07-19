## Create react app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Authentication on dev

We didnot get the sso to work on dev.
We therefore resorted to basic auth instead.
This has the disadvantage that dev works different from prod and that a username password needs to be hardcoded on client.
In order to get this project running locally for dev these code changes are required:

* comment in the following lines in App.js. 
```javascript
// headers: { 
//   'Authorization': 'Basic ' + btoa(getUserName() + ":" + getPassword())
// },
```
should become:
```javascript
headers: { 
  'Authorization': 'Basic ' + btoa(getUserName() + ":" + getPassword())
},
```


* Set your username in the function "getUserName" in file GetUserName.js
* Set your password in the function "getPassword" in file GetPassword.js

***! Make sure not to commit usernames and passwords !***


* comment out the following line that would redirect to the sso in production:
```javascript
window.location.href = `${"/accounts/login/"}?next=${nextUrl}`;
```
should become:
```javascript
// window.location.href = `${"/accounts/login/"}?next=${nextUrl}`;
```

***! Revert all these changes before making a production build and do not commit any of these changes !***

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deploy the client:

Deploy the build to the server:

* Run `npm run build` to create a build in the build folder

* Go to the deploy folder

* Run `ansible-playbook -i staging deploy.yml` to deploy the build to staging.

NB: Assumed is that your ssh public key has been added to buildout's authorized_keys.
