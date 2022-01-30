# => Build container
FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN npm install

RUN npm install react-scripts -g

COPY . /usr/src/app

RUN npm run build
RUN npm fund

# => Run container
FROM nginx:1.16.0

COPY --from=build /usr/src/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 3000
# Start Nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]