# syntax=docker/dockerfile:1

# --- build ---
FROM node:26-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- serve ---
FROM nginx:1.31-alpine
COPY --from=build /app/dist /usr/share/nginx/html
