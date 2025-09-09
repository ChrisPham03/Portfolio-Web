# Use the official Node.js 18 image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# The command to run when the container starts
# This will watch the 'src' folder and rebuild on any changes
CMD ["npx", "nodemon", "--watch", "src", "--exec", "npm", "run", "build"]