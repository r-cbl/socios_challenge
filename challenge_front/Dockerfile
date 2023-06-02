FROM node:16

WORKDIR /app/frontend

COPY package*.json /app/frontend/

COPY tsconfig.json /app/frontend/

RUN npm install

RUN npm i -g react-scripts

COPY . /app/frontend/

COPY .env.example .env

RUN chown -R node /app/frontend/node_modules

USER node

CMD [ "npm", "start" ]