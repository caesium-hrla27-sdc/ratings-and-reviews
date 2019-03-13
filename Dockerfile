FROM node:11.11.0

WORKDIR /app

COPY . /app

RUN npm install --only=prod

EXPOSE 3003

CMD [ "npm", "start" ]