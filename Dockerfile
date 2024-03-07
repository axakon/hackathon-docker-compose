# This determines the base of our container, in this case a pre-made image with Node 18 installed
FROM node:18-alpine

# This sets the current working directory inside the Docker image
WORKDIR /app

# Copy both package.json and package-lock.json into ./app inside the image
COPY package*.json ./

# Installs all the dependencies required by the project inside the image
RUN npm install

# Copies all files from the current root directory on the host machine into ./app inside the image
COPY . .

# Opens up port 3000, which is what Next uses by default
EXPOSE 3000

# Runs the command `npm run dev` inside the container, which starts the Next project. This is usually always the last step of any Dockerfile, called the entrypoint
CMD ["npm", "run", "dev"]
