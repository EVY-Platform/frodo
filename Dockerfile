#build
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

#final
FROM node:18-buster-slim AS final
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

ARG FRODO_API_HOST="0.0.0.0"
ARG FRODO_API_PORT=8080
ARG FRODO_SURREALDB_URL="http://host.docker.internal:8000/rpc"
ARG FRODO_SURREALDB_USERNAME="root"
ARG FRODO_SURREALDB_PASSWORD="root"
ARG FRODO_SURREALDB_NAMESPACE="ns"
ARG FRODO_SURREALDB_DATABASE="sam"

ENV FRODO_API_HOST=$FRODO_API_HOST
ENV FRODO_API_PORT=$FRODO_API_PORT
ENV FRODO_SURREALDB_URL=$FRODO_SURREALDB_URL
ENV FRODO_SURREALDB_USERNAME=$FRODO_SURREALDB_USERNAME
ENV FRODO_SURREALDB_PASSWORD=$FRODO_SURREALDB_PASSWORD
ENV FRODO_SURREALDB_NAMESPACE=$FRODO_SURREALDB_NAMESPACE
ENV FRODO_SURREALDB_DATABASE=$FRODO_SURREALDB_DATABASE

EXPOSE $FRODO_API_PORT

CMD [ "yarn", "start" ]