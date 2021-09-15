This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Mongo and Mongoose

First of all you should have installed MongoDB and be able to run it before you install mongoose. You can read [this](https://www.positronx.io/install-mongodb-on-macos/) article to see how to do that on Mac, and this one [Install MongoDB Community Edition on macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/).

0. Install Mongo MacOS

```
brew tap mongodb/brew
brew install --build-from-source mongosh
brew install mongodb-community
```

To run MongoDB (i.e. the mongod process) as a macOS service, run:

```
brew services start mongodb-community
```

To stop a mongod running as a macOS service, use the following command as needed:

```
brew services stop mongodb-community
```

To begin using MongoDB, connect mongosh to the running instance. From a new terminal, issue the following:

```
mongosh
```

1. In order to install mongoose, we’ll use npm command in the project folder. But first, you should go to the relevant project folder in command line.

```
yarn add mongoose
```

2. Require mongoose in app.js / in the models or connect file

```
const mongoose = require("mongoose");
```

3. Go to `server/model/connect.js` file, here is the configuration

## Env vars

You can find an example of `env` vars on `.env.example`. Keep in mind the Mongo URI:

```
MONGO_DB_URI=mongodb://localhost:27017/usersDB
```

More info: [Mongoose Connections](https://mongoosejs.com/docs/connections.html)


### Install Docker

https://docs.docker.com/install/

### Run Next-Redux services

```shell script

## Build docker containers (runs `docker-compose build` for you)
## This script also runs `npm run reset` to clean up before rebuilding
$ npm run build

## Start docker containers (runs `docker-compose up` for you)
$ npm run start

## Stop docker containers (runs `docker-compose down` for you)
## This command stops containers, but persists any volumes and images. This means that data is persisted across sessions.
$ npm run stop

## Output service logs
$ npm run log ${SERVICE_NAME}

## List container
$ docker ps -a

## Stop the container(s) using the following command
$ docker-compose down

## Delete all containers using the following command
$ docker rm -f $(docker ps -a -q)

## Delete all volumes using the following command
$ docker volume rm $(docker volume ls -q)

## Restart the containers using the following command
$ docker-compose up -d

## See docker images
$ docker images

## Remove docker images
$ docker rmi $(docker images -q)

## Go inside container
$ docker exec -it <container-id> bash
$ docker exec -it <container-id> /bin/sh
```

### Reference course

[Udemy - Next](https://github.com/theallegrarr/udemy_next/blob/master/pages/weather.js)