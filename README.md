# esp-fe-test
Frontend candidate technical interview project

## Introduction

Thank you for your interest in joining Espressive! We wanted to make our technical interview fun so you will be turning this football team builder into a working application. 

We're prodiving you with a head start with this web app that already includes most of the UI components that you'll need, as well as the basic structure of a redux application. 

Your job is to complete this web app with the tasks outlined below. Each of these are in the Tasks section at the top of the document so it is easier keep track of them and make sure you complete them all before submitting your branch.

It will probably be helpful to you to read all of these instructions before you get started.

## Tasks

- [X] Create a new component called `ListLoading`, which will replace the repeated loading state markup in the [`PlayerList`](src/components/display/PlayerList/PlayerList.js) and [`PlayerSelectModal`](src/components/display/PlayerSelectModal/PlayerSelectModal.js) components.
- [X] Connect the [`Formation`](src/components/page/Formation/Formation.js) component to load the initial data for the player numbers and their position from the `/api/v1/team_selection` API endpoint
- [ ] Set up the [`Formation`](src/components/page/Formation/Formation.js) component to allow removing and adding players to the `team_selection` with a `POST` of these changes to the `/api/v1/team_selection` API endpoint. 
- [ ] Update the [`PlayerSelectModal`](src/components/display/PlayerSelectModal/PlayerSelectModal.js) to only assign players to a row based on position. For each position only the number of players designated in the formation can be used. For instance, in a 4-4-2 formation, only 4 defenders should be allowed, along with 4 midfielders and 3 forwards. There's always 11 players in the team selection, so a player cannot play in two different positions.
- [ ] Connect the [`PlayerDetail`](src/components/display/PlayerDetail/PlayerDetail.js) component to the API to show data from the currently selected player based on the `playerID`. You should always make the call to the API, to make sure you have loaded the latest available data for that player.
- [ ] Update the [`PlayerDetail`](src/components/display/PlayerDetail/PlayerDetail.js) component to allow editing the player position. Once changed, the player is elegible to be selected in such position.

*Extra credit (not required):*
- [ ] Add some unit tests.

## Get Started

To get started on this test, please follow these steps:
1. Clone this repository to your local machine and then make your own working branch. *Please do not fork.*
2. If you do not already have it installed, download and install [`node`](https://nodejs.org/en/download/)
3. If you do not already have it installed, install [`yarn`](https://yarnpkg.com/lang/en/docs/install/)
4. In the project directory run `yarn install`
5. Then run `yarn dev`

Once you run this last step you will see the project open in your default browser!

## Submitting Your Work

Once you have completed all of the items in the [Tasks](#Tasks) section, commit and push all of your work to your branch and send us an email to let us know it is complete and you are ready for us to look at it.


## Tech Stack

You may need to consult documentation on the following projects in order to complete this test:

- [`react-router`](https://reacttraining.com/react-router/)
- [`redux`](https://redux.js.org/)
- [`redux-thunk`](https://github.com/gaearon/redux-thunk)
- [`semantic-ui-react`](https://react.semantic-ui.com)
- [`superagent`](http://visionmedia.github.io/superagent/)

Additional packages are used in this project but are probably not something you'll need to reference. See the [`package.json`](package.json) file for more information on other packages used if needed.


## API endpoints

### `/api/v1/formations`

These are the available team formations. Returns an array of strings.

### `/api/v1/players`

A list of all available players. Returns an array of objects.

### `/api/v1/players/:id`

Passing a player ID to the `players` endpoint will return you the information for that player.

### `/api/v1/team_selection`

The `team_selection` endpoint will return the currently selected team separated into four arrays:
- `forwards`
- `midfielders`
- `defenders`
- `keeper`


## Folder Structure

After cloning the repository, your file structure should look like this:

```
esp-fe-test/
  data/
  node_modules/
  public/
    img/
    index.html
    favicon.ico
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
  .eslintrc
  .gitignore
  package.json
  yarn.lock
  README.md
```

#### `src`
This is the folder you will be working in. *You should not need to touch files in any other folder for this test.* [Webpack](https://webpack.js.org/) compiles all of these files and creates the application.

#### `data`
Leave this folder alone it holds database files for the API. You do not need to open it or edit them.

#### `public`
You do not need to edit any of these files. These are served when your development environment starts.



## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs `yarn data` and `yarn start` at the same time to start the API and development servers. *You should not need to run any of the other scripts below for this test.*

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn data`

Runs the test API and serves the API endpoints and application data. You should not need to modify this script. This API is run with [`json-server`](https://github.com/typicode/json-server).

The routes and a proxy have been set up so you do not need to make API calls on a different port.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.


