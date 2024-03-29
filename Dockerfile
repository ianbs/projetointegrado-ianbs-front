FROM node:16.13.2

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["yarn", "start"]