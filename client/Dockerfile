# Stage 1: Build Stage
FROM node:22

WORKDIR /client

COPY package.json .

RUN npm install -g vite && npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
