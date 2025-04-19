🛠 DevOps Assignment - Web Scraper with Node.js & Python Flask
This project demonstrates a multi-stage Docker setup to:

Scrape a webpage using Node.js with Puppeteer.

Serve the scraped data using Python with Flask.

Optimize the Docker image using a multi-stage build.

📂 Project Structure
devops-assignment/
├── scrape.js          # Node.js script for web scraping
├── package.json       # Node.js dependencies
├── server.py          # Flask server for displaying JSON
├── requirements.txt   # Python dependencies
├── Dockerfile         # Multi-stage Docker build
└── README.md          # Project documentation
⚙️ Prerequisites
Make sure you have:

Docker installed

Internet access to scrape a live website

🔨 Setup Instructions
Step 1: Clone the Repository
bash
git clone https://github.com/<your-username>/assignment-1.git
cd assignment-1/devops-assignment
Step 2: Update the URL to Scrape (Optional)
Pass any URL using the SCRAPE_URL environment variable when running the container.

🏗️ Build and Run Instructions
Step 1: Build the Docker Image
bash
docker build -t scraper-flask-app .
This will:

Scrape a webpage using Node.js and Puppeteer.

Copy the scraped data into a lightweight Python image.

Set up a Flask server to host the data.

Step 2: Run the Container
bash
docker run -p 5000:5000 -e SCRAPE_URL=https://example.com scraper-flask-app
Replace https://example.com with the URL you want to scrape.

🌐 Access the Scraped Data
If running locally:
Visit: http://localhost:5000

If running on a remote server (e.g., AWS EC2):
Visit: http://<your-ec2-public-ip>:5000 > ⚠️ Make sure port 5000 is open in your firewall/security group!

💡 Example Output
json
{
  "title": "Example Domain",
  "heading": "Example Domain"
}
🧰 Technologies Used
Node.js + Puppeteer – Headless browser for web scraping

Python + Flask – Backend for serving scraped data

Docker – Containerization with multi-stage builds

📢 Tips
The scraper runs once during the build process.

Flask serves the scraped output (static content).

Ensure the target URL is publicly accessible.
