FROM node:12.12.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./
COPY package.json ./

RUN yarn install --frozen-lockfile

COPY . .
