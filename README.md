# Ren3 Cloud Dashboard FE

## Setting Up the project

Clone this git repo from (https://github.com/edzehoo/Ren3_clouddashboardFE.git)


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

Can either run it through Docker run or also docker-compose

For Docker run:

### `docker build -t Ren3_clouddashboardFE .`

Builds a Docker image from the current directory (.) and tags it as Ren3_clouddashboardFE. This command creates a custom image based on the Dockerfile in the current directory, which can later be used to run containers.

### `docker run -p 8080:80 Ren3_clouddashboardFE`

Runs a Docker container from the Ren3_clouddashboardFE image, mapping port 8080 on the host to port 80 in the container. This allows you to access the containerized application by navigating to http://localhost:8080 on your local machine.

For Docker compose:

### `docker-compose up --build -d`

Builds images (if necessary) and starts containers in detached mode (-d), running in the background. This command ensures that the latest changes to your code or configuration are included by rebuilding the images before launching the containers.

### `docker-compose down`

Stops and removes all containers, networks, and volumes defined in the docker-compose.yml file. This command effectively shuts down the environment, cleaning up any resources created during docker-compose up.
