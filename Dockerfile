FROM node:20.11.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm Install

COPY . .

EXPOSE 5001

CMD ["node", "index.js"]
