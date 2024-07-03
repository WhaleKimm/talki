# Dockerfile
FROM node:14

# Create app directory
WORKDIR /app

# Install Vue CLI globally
RUN npm install -g @vue/cli

# Copy package.json and package-lock.json if they exist
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 8080
EXPOSE 8080

# Run Vue development server
CMD ["npm", "run", "serve"]
