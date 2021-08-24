FROM node:14

LABEL author="Victor Marcolino<marcolino.victor@gmail.com>"
WORKDIR /usr/src
COPY package*.json ./

RUN npm install
COPY src /usr/src

EXPOSE 9000
CMD [ "node", "app" ]
