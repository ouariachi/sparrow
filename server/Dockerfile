FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x docker-start.sh

CMD ["sh", "./docker-start.sh"]