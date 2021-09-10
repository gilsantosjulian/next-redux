FROM node:16.5.0

WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000

CMD [ "yarn", "dev" ]