# Stage 1 - Scraper
FROM node:18-slim AS scraper

# Install Chromium
RUN apt-get update && apt-get install -y chromium && apt-get clean

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

WORKDIR /app
COPY package.json ./
RUN npm install
COPY scrape.js ./
ENV SCRAPE_URL=https://example.com
RUN node scrape.js

# Stage 2 - Python Server
FROM python:3.10-slim

WORKDIR /app
COPY --from=scraper /app/scraped_data.json .
COPY server.py requirements.txt ./
RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python", "server.py"]
