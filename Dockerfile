# Stage 1: Build the Vue app using Node.js for development
FROM node:18 as dev-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Run the development server (npm run serve)
CMD ["npm", "run", "serve"]

# Expose the port that the development server runs on
EXPOSE 8080

