# syntax=docker/dockerfile:1

# --- build ---
FROM node:26-alpine AS build
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --- serve ---
FROM nginx:alpine
COPY /dist /usr/share/nginx/html
