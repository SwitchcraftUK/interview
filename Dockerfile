FROM node:14.16-slim

WORKDIR /app

COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json
COPY ./lerna.json ./lerna.json
RUN mkdir ./packages
COPY ./packages ./packages
RUN yarn install
