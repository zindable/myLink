# MyLink 🔗

MyLink is a little react app, that provides a static webpage with a list of all my social media profiles. The application is hosted directly on GitHub using [gh-pages](https://www.npmjs.com/package/gh-pages).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run deploy`

Will cause the `predeploy` and `deploy` scripts defined in package.json to run.


Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named build.\
Then, the `deploy` script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
