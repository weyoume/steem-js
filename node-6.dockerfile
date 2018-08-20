FROM node:6
ADD ./package.json /ezhelp.js/package.json
WORKDIR /ezhelp.js
RUN npm install
ADD . /ezhelp.js
RUN npm test
