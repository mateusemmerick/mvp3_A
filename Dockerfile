# Use an official Node.js runtime as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight Nginx image as the final image
FROM nginx:alpine

# Copy the built React app from the build stage to the Nginx web server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx web server
EXPOSE 80

# Start the Nginx web server
CMD ["nginx", "-g", "daemon off;"]
