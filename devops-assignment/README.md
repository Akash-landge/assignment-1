# 🛠 DevOps Assignment - Web Scraper with Node.js & Python Flask

This project demonstrates a multi-stage Docker setup that:
- Uses **Node.js with Puppeteer** to scrape a webpage.
- Uses **Python with Flask** to serve the scraped data.
- Keeps the final Docker image lean using a multi-stage build.

---

## 📁 Project Structure

devops-assignment/ ├── scrape.js # Node.js script using Puppeteer ├── package.json # Node.js dependencies ├── server.py # Flask server to display JSON ├── requirements.txt # Python dependencies ├── Dockerfile # Multi-stage Docker build └── README.md # Project documentation


---

## ⚙️ Prerequisites

Before you begin, make sure you have:

- [Docker installed](https://docs.docker.com/get-docker/)
- Internet access (to scrape a live website)

---

## 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/assignment-1.git
   cd assignment-1/devops-assignment
---

2. Update the URL to Scrape (Optional)
You can pass any URL using an environment variable when running the container.

## 🏗️ Build the Docker Image
Use the Dockerfile to create a multi-stage image:
```bash
docker build -t scraper-flask-app .

This will:

-Use Node.js to scrape a webpage using Puppeteer.

-Copy the scraped data (JSON) into a lightweight Python image.

-Set up a Flask server to host the data.


🚀 Run the Container
Run the container and specify the URL to scrape:

```bash
docker run -p 5000:5000 -e SCRAPE_URL=https://example.com scraper-flask-app

-Replace https://example.com with any URL you'd like to scrape.

🌐 Access the Scraped Data
If you're running locally:
-Open your browser and visit: http://localhost:5000


If you're running on a remote server (like AWS EC2):
Open:
```bash
http://<your-ec2-public-ip>:5000

### ⚠️ Make sure port 5000 is open in your firewall/security group!

### 💡 Example Output
{
  "title": "Example Domain",
  "heading": "Example Domain"
}

### 🧰 Technologies Used
-Node.js + Puppeteer – for headless browser scraping

-Python + Flask – for serving the data

-Docker – for containerization and multi-stage build


✅ Tips
This setup runs the scraper once during the build.

The Flask server simply displays the scraped output (static content).

Make sure the target URL is publicly accessible.

