#!/usr/bin/env bash

# install new dependencies if any
yarn install

# remove the current bcrypt modules
yarn remove bcrypt

# install the bcrypt modules for the machine
yarn add bcrypt

echo "Starting API server"

yarn run start