FROM docker.io/node:22-alpine@sha256:01393fe5a51489b63da0ab51aa8e0a7ff9990132917cf20cfc3d46f5e36c0e48 AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM docker.io/httpd:2.4.63-alpine@sha256:4aec2953509e2d3aa5a8d73c580a381be44803fd2481875b15d9ad7d2810d7ca AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs
EXPOSE 80