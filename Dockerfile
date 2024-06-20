FROM public.ecr.aws/lambda/nodejs:20 as builder

WORKDIR /usr/app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run lint && \
    npm run format && \
    npm run dev