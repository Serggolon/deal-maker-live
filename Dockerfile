FROM node:alpine

WORKDIR /app

COPY package.json .
COPY index.html .

RUN yarn install
COPY src src

CMD ["yarn", "dev"]