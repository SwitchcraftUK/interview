FROM node:14.16-slim

WORKDIR /app

COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json
COPY ./lerna.json ./lerna.json
COPY ./packages ./packages
RUN yarn install

ENTRYPOINT [ "yarn", "dev" ]
