🚀 DeployPulse Frontend

A modern React frontend application for managing software feature tracking and deployment status.

This application connects to the DeployPulse Spring Boot backend API to display, create, and manage features in the deployment pipeline.

📌 Project Summary

DeployPulse is a full-stack feature tracking system designed to help teams monitor development, testing, and deployment progress of features.

This repository contains the frontend (React) application.

Live demo:https://deploypulse-frontend.vercel.app/

🏗 Architecture Overview
┌─────────────────────────────────────────────────────────────┐
│                    Frontend (React App)                     │
│                                                             │
│  ├── Feature Dashboard                                      │
│  ├── Add Feature Form                                       │
│  ├── Feature Status Display                                 │
│  └── API Integration Layer                                  │
│                                                             │
│        ↕ REST API Calls (JSON over HTTP)                    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│              Backend (Spring Boot – DeployPulse)            │
│                                                             │
│  ├── Feature REST APIs                                      │
│  ├── Business Logic                                         │
│  ├── JPA/Hibernate                                          │
│  └── H2 Database                                            │
└─────────────────────────────────────────────────────────────┘

🔗 Frontend–Backend Communication
Item	Value
Protocol	REST API
Data Format	JSON
Backend Base URL (Production)	https://deploypulse-backend.onrender.com

Backend Base URL (Local Dev)	http://localhost:8080
⚙️ Technology Stack
Technology	Purpose
React.js	Frontend framework
JavaScript (ES6+)	Application logic
Fetch API	Backend communication
CSS	Styling
Vercel	Frontend deployment
Render	Backend deployment
📁 Project Structure
src/
 ├── components/      # Reusable UI components
 ├── pages/           # Page-level components
 ├── App.js           # Main app component
 ├── index.js         # Entry point
 └── styles/          # CSS files

✨ Features

View all features

Add new features

Display feature build status

Display deployment status

Real-time data from backend API

🛠 Installation & Setup
1️⃣ Clone the Repository
git clone <frontend-repo-url>
cd deploypulse-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run Locally
npm start


App runs at:

👉 http://localhost:3000

🌍 Backend Configuration

The frontend communicates with backend APIs using a base URL.

Recommended Approach (Best Practice)

Create a .env file in the frontend root:

REACT_APP_API_URL=https://deploypulse-backend.onrender.com


Then in code:

fetch(`${process.env.REACT_APP_API_URL}/api/features`)

🚀 Deployment on Vercel
Steps:

Push frontend code to GitHub

Go to vercel.com

Import project

Add environment variable:

Key	Value
REACT_APP_API_URL	https://deploypulse-backend.onrender.com

Click Deploy

🧪 Example API Flow
Frontend Request
GET /api/features

Backend Response
[
  {
    "id": 1,
    "name": "Login Feature",
    "status": "IN_DEVELOPMENT",
    "buildStatus": "PASSED"
  }
]

🧩 Challenges Faced & Solutions
Problem	Cause	Solution
Backend not connecting	Using localhost after deployment	Replaced with Render backend URL
CORS errors	Backend not allowing frontend origin	Enabled CORS in Spring Boot
White Label Error	Wrong URL opened	Correct API endpoint used
Docker port error	Port 8080 already in use	Killed existing process
SonarCloud not computing	Wrong sonar.host.url	Set to https://sonarcloud.io
Docker not running	WSL not installed	Installed WSL + Docker Desktop
📌 Known Limitations

Uses H2 in-memory database (data resets on restart)

No authentication yet

Basic UI styling

📈 Future Improvements

User authentication

Dark mode UI

Pagination

Role-based access
