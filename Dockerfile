FROM node:14-alpine3.14

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm", "start"]