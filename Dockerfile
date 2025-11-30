# Multi-stage Dockerfile for an optimized NestJS TypeScript app
# Build: installs dev deps and builds JS in /app/dist
# Runtime: small image with only production deps and compiled dist

FROM node:18-alpine AS deps
WORKDIR /app

# Add build tools for possible native modules during install
RUN apk add --no-cache python3 make g++ bash

COPY package*.json ./
# Install all deps (including dev) so we can build
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app

# Reuse installed node_modules to avoid reinstalling
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build TypeScript to /app/dist
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only what's needed for runtime
COPY --from=builder /app/dist ./dist
COPY package*.json ./
COPY --from=deps /app/node_modules ./node_modules

# Remove dev dependencies to keep image small
RUN npm prune --production

EXPOSE 3000

# Run the compiled app
CMD ["node", "dist/main"]
