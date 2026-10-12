FROM node:20-slim

WORKDIR /app

# Prebuilt, self-contained artifacts (no npm install needed at deploy time)
COPY server.cjs ./
COPY dist ./dist
COPY _big ./_big

# Reassemble the few large bundle files that were split for upload limits
RUN sh _big/reassemble.sh && rm -rf _big

ENV NODE_ENV=production

# Render injects PORT; the app reads process.env.PORT
EXPOSE 10000

CMD ["node", "server.cjs"]
