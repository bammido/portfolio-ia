FROM node:20-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY portfolio-ia-backend/package*.json ./
RUN npm ci

COPY --chown=node:node . .
WORKDIR /home/node/portfolio-ia-backend
RUN npx prisma generate \
    && npm run build \
    && npm prune --omit-dev

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/portfolio-ia-backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/portfolio-ia-backend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/portfolio-ia-backend/dist/ ./dist/

CMD ["node", "dist/portfolio-ia-backend/src/main.js"]