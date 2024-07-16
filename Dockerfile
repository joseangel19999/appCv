FROM node:16.18.0-alpine
WORKDIR /app/
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 8011
RUN npm run build:dev
CMD ["npm", "run","start"]