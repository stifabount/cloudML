# Use a Node.js base image
FROM node:22.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the working directory for the app code
WORKDIR /app/src

# Expose the application's port (if applicable)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
