FROM node:16-alpine

# Update repositories and install Node.js and npm
RUN apk update && \
    apk add --no-cache nodejs npm

# Create and set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm cache clean --force && \
    npm install

# Copy the rest of the application files
COPY . .

RUN npm run build


# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
