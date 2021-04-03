FROM node:14 AS base

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY . .

RUN npm run build

FROM base AS development

CMD ["npm", "run", "dev"]

FROM base AS production

ENV NODE_PATH=./build

RUN npm run build

RUN npm start