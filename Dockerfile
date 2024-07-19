# Stage 1: Build the React app
FROM node:alpine3.18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:1.23.3-alpine

WORKDIR /usr/share/nginx/html

# Remove the default Nginx static assets
RUN rm -rf ./*

# Copy build assets from the first stage
COPY --from=build /app/dist .

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy environment variables script
COPY ./env.sh /docker-entrypoint.d/

# Expose port 80
EXPOSE 80

# Start Nginx server
ENTRYPOINT ["nginx", "-g", "daemon off;"]
