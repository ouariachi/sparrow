FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

RUN chmod +x docker-start.sh

CMD ["bash", "./docker-start.sh"]