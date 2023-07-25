# Use an official Node.js image as the base image
FROM node:18-alpine as backend

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY ./server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code to the container
COPY ./server .

# Expose the port your Node.js application listens on (port 5000 in this case)
EXPOSE 5000

# Start the Node.js application
CMD ["npm", "start"]