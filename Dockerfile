FROM node:9-alpine

ENV NODE_ENV production

RUN mkdir /app
WORKDIR /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

COPY . /app
COPY . .

RUN npm run build

EXPOSE 4000


CMD ["node", './server']


FROM golang:alpine
ADD . /go/src/zeit/hello
RUN go install zeit/hello
CMD ["/go/bin/hello"]
EXPOSE 8000
