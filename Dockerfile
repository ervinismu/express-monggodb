FROM node:8.15-alpine

WORKDIR /src
ADD . .
RUN npm install

EXPOSE 8080
CMD ["npm", "start"]
