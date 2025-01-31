# Step 1: Build the React app using a Node.js base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json /app/
COPY yarn.lock /app/

# Install the dependencies
RUN yarn install

# Copy the entire app source code to the container
COPY . /app/

# Example of copying .env file (if you are using it directly)
COPY .env /app/

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx in a separate stage
FROM nginx:alpine

# Copy custom nginx.conf to /etc/nginx/nginx.conf in the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# For debugging purposes, list files
# RUN ls -al /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
