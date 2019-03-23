FROM node:10-slim

WORKDIR /app
ENV NODE_ENV=production

# Add package spec
ADD package.json yarn.lock /app/
ADD api/package.json /app/api/
RUN yarn install --frozen-lockfile

# Add source
ADD api/ /app/api

# Launch
CMD ["yarn", "start"]
