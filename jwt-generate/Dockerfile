FROM node:10.15-alpine
ENV TZ=America/Sao_Paulo
RUN echo $TZ > /etc/timezone
WORKDIR /vampeta
ADD . /vampeta
RUN touch .env
RUN npm i --only=prod
EXPOSE 3000
ENTRYPOINT ["sh","-c","node src/server.js"]
