FROM node:14

WORKDIR /pj
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm","run","start"]
