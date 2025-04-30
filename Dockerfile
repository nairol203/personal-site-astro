FROM docker.io/node:22-alpine@sha256:ad1aedbcc1b0575074a91ac146d6956476c1f9985994810e4ee02efd932a68fd AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM docker.io/httpd:2.4.63-alpine@sha256:4aec2953509e2d3aa5a8d73c580a381be44803fd2481875b15d9ad7d2810d7ca AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs
EXPOSE 80