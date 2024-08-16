# Use the official Node.js 16 image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install 

# Copy the rest of the application code
COPY . .

# Reinstall bcrypt to ensure it compiles for the correct architecture
RUN npm rebuild bcrypt --build-from-source

# Expose the port the app runs on
EXPOSE 8080

# Define environment variables (can also be set in docker-compose or Kubernetes)
ENV PORT=8080
ENV MONGO_URI=mongodb://mongo-service:27017/noteapp
ENV JWT_SECRET=cloud_assignment

# Start the application
CMD ["npm", "start"]
