FROM node:16.18.0-alpine as build
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . ./
#CMD ["npm", "run","dev:server"]
RUN npm run build:dev
#CMD ["npm", "run","build:dev"]

FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80