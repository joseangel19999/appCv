FROM node:16.18.0-alpine
WORKDIR /src/
COPY . .
RUN npm install
EXPOSE 3000
#COPY . ./
RUN npm run build:dev
CMD ["npm", "run","start"]