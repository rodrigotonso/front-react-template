# You might have to change this from dockerhub. Node "latest" it's not suitable for production.
# Use: https://hub.docker.com/_/node and check for the recommended in: https://nodejs.org/en/
# You should find an image according to your server and architecture. 
# Also, big images come with more vulnerabilities. Try to use something like alpine. 
FROM node:14.12-alpine

# Install node packages.
# Apply the permissions on the begining.
RUN mkdir -p /home/node/app/node_modules \
    && chown -R node:node /home/node/app \
    && chmod -R +x /home/node/app

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./

# Do NOT run as root user!
USER node
RUN npm install
COPY --chown=node:node . .

# TODO: Env should come from outside the repo... 
# FIXME: The copy command is not working.
# Copy the env file.
# ARG ENV_FILE_PATH
# RUN test -n "${ENV_FILE_PATH}"
# COPY ${ENV_FILE_PATH} .
# COPY --chown=node:node "${ENV_FILE_PATH}" 

# Start the app.
RUN npm run build
EXPOSE 3000
CMD npm run start
