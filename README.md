This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

_____________________________________________________________

#Rick and Morty App

###The problem:
You don't know anything about the Rick and Morty universe. With my app you can look up characters, locations and episodes from Rick and Morty.

###Link:
[Rick and Morty App](https://wizardly-bell-94fd4c.netlify.app)

###Technologies:
- React
- React-Bootstrap
- React-Router

###Roadblocks
- Searchbar: I originally wanted the app to have a search bar but could not incorporate in time.
- Episode list: I created the episode list last and wanted to make it a stateless component in order to meet MVP. I was unable to pass my "nextPage" function effectively in this component so it only displays the first page of episodes in the API. In hindsight I would've set state to my home component and pass the data down to the "Characters" and "Worlds" child components.
- I just tried the URL I pasted in this readme as well and the links for some reason do not work. I'm getting a "Page Not Found" error with a message "Looks like you've followed a broken link or entered a URL that doesn't exist on this site." I'm unsure why.
- I attempted to make a modal that came up when you clicked the character or location card that revealed more information about that person or place but I could not figure it out in time. I was able to display the API urls but not able to display the data itself in the modal.
- I thought of making a welcome message where you can set a nickname or something that the app would call you as you navigated the page