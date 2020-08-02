FROM node:12

WORKDIR /server-node

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 3001 

CMD ["node", "server.js"]