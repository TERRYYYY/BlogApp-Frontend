# Get node image from Docker Hub
FROM node:latest

# Creates a directory in the container
WORKDIR /app

# Copies the package.json files from your local directory (where the Dockerfile is) to the ‘/app’ directory in the container.
COPY package*.json ./

# Installs the dependencies specified in the package.json file.
RUN npm install

# Install the Angular CLI globally within the container. 
RUN npm install -g @angular/cli

# Copies all files from your local directory to the ‘/app’ directory inside the container.
COPY . .

# Build Angular application
RUN ng build

#Starts the app
CMD ["npm", "start"]
