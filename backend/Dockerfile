FROM node:20-alpine AS builder


WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

# Copy the rest of the application source code
COPY . .


FROM node:20-alpine AS production


WORKDIR /app


RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs


COPY --from=builder --chown=nodejs:nodejs /app/package*.json ./
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app .

EXPOSE 5000

CMD ["npm", "start"]