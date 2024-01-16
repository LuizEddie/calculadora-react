FROM node:20.10.0-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start-watch", "--verbose"]






