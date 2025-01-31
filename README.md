# Ren3 Cloud Dashboard FE

## Setting Up the project

Clone this git repo from (git@github.com:edzehoo/Ren3_clouddashboardFE.git)


## To run the app locally (for development purpose)


### `yarn install`

Install all the required dependencies for the project


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## To run the app in docker

you can either run it through Docker run or also docker-compose

For Docker run:

### `docker build -t Ren3_clouddashboardFE .`

### `docker run -p 8080:80 Ren3_clouddashboardFE`

For Docker compose:

### `docker-compose up --build -d`

