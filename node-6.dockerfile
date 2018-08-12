FROM node:6
ADD ./package.json /ezirajs/package.json
WORKDIR /ezirajs
RUN npm install
ADD . /ezirajs
RUN npm test
