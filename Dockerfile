FROM public.ecr.aws/lambda/nodejs:20 AS build

WORKDIR /usr/app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run lint:fix && \
    npm run format && \
    # && \
    # npm run test
    npm run build

FROM public.ecr.aws/lambda/nodejs:20
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=build /usr/app/dist/* ./
CMD [ "index.handler" ]