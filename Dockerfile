FROM docker.io/node:22-alpine@sha256:5ef237d055ac3c076f47eda1310f2214eb23c30a53aecdc20c35fd17780fa4ee AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM docker.io/httpd:2.4.63-alpine@sha256:4aec2953509e2d3aa5a8d73c580a381be44803fd2481875b15d9ad7d2810d7ca AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD [ "wget", "-qO", "-", "http://localhost/healthz"]
EXPOSE 80
