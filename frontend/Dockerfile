FROM oven/bun:1.4.5 AS dependencies
WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

FROM dependencies AS development
COPY . .
EXPOSE 5173
CMD ["bun", "run", "dev:vite", "--host", "0.0.0.0", "--strictPort"]

FROM dependencies AS build
COPY . .
RUN bun run build:vite

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist-vite/ /usr/share/nginx/html/
EXPOSE 80
