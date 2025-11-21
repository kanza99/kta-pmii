FROM node:18-alpine

WORKDIR /app

# copy only package.json first for faster builds
COPY package.json package-lock.json* ./
RUN npm ci --only=production

COPY . .
RUN chmod +x ./start.sh || true

EXPOSE 4000
CMD ["./start.sh"]
