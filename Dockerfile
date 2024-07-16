FROM node:16.18.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8000
#COPY . ./
#RUN npm run build:dev
CMD ["npm", "run","start"]