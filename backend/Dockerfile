FROM node:alpine

WORKDIR /app
RUN yarn install
COPY . .
EXPOSE 3001

CMD [ "yarn", "start" ]