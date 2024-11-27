FROM node:22

WORKDIR /mern_chat_server
COPY package.json .
RUN npm install -g nodemon && npm install
COPY . .
CMD npm start
