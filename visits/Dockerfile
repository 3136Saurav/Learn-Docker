# Specify the base image
FROM node:alpine

# Specify the working directory
WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .


CMD ["npm", "start"]
