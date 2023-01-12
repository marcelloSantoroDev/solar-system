FROM node:16.19.0-alpine

WORKDIR /star-wars

COPY ./package.json .

RUN npm install

COPY . /star-wars/

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]