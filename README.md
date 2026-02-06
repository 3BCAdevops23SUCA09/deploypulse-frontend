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

sonar analysis done:
<img width="1391" height="290" alt="image" src="https://github.com/user-attachments/assets/11cdae2f-176e-42cd-b110-3e8ee0fc2510" />


🚧 Challenges Faced During Frontend Development 

Building the DeployPulse frontend and integrating it with a live Spring Boot backend was not straightforward. Multiple real-world DevOps and integration problems were encountered and solved.

1️⃣ Backend API Not Reachable from Frontend

Issue
Frontend showed:

Blank data

Network errors in browser console

Failed to fetch errors

Cause
Frontend was calling:

http://localhost:8080/api/features


But once deployed, localhost refers to the user’s own computer, not the backend server.

How We Faced It

App worked locally

After deployment → API calls failed

Console showed network/CORS errors

Solution
Replaced all localhost URLs with the live backend URL from Render:

https://deploypulse-backend.onrender.com/api/features


Lesson Learned:
Frontend must always point to a public backend URL in production.

2️⃣ CORS Errors Blocking Requests

Issue
Browser console showed:

Access to fetch at 'backend-url' from origin 'frontend-url' has been blocked by CORS policy


Cause
Spring Boot backend did not allow requests from frontend domain.

Solution (Backend Fix)

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}


3️⃣ Vercel Build Failed

Issue
Deployment on Vercel failed with build errors.

Cause

Wrong Node version

Missing dependencies

Wrong build command

Solution

Verified package.json

Ensured build script exists:

"scripts": {
  "build": "react-scripts build"
}


Set Vercel build command to:

npm run build


Lesson Learned:
Cloud deployments require correct build scripts and dependency setup.

4️⃣ API Returning Empty Array []

Issue
Frontend worked but showed no data.

Cause
Backend database (H2 in-memory) was empty after restart.

Solution

Added test data manually via API

Understood that H2 resets on every restart

Lesson Learned:
In-memory databases do not store data permanently.

5️⃣ Docker Confusion (Frontend vs Backend)

Issue
Uncertainty about whether frontend should be inside backend container.

Understanding Gained

Backend = API service

Frontend = Static app

Both are deployed separately

Lesson Learned:
Frontend and backend are separate deployable services.

6️⃣ Hardcoded URLs Everywhere

Issue
Backend URL written in many files → difficult to update.

Better Practice (Learned Later)

Create .env file:

REACT_APP_API_URL=https://deploypulse-backend.onrender.com


Use in code:

fetch(`${process.env.REACT_APP_API_URL}/api/features`)


Lesson Learned:
Never hardcode URLs — use environment variables.

7️⃣ White Label Error Page Confusion

Issue
Opening backend root URL showed Spring Boot “Whitelabel Error Page”.

Cause
Backend has APIs only, not a homepage.

Understanding
Correct endpoint is:

/api/features


Lesson Learned:
Backend servers don't always have UI pages.

8️⃣ Deployment Order Problem

Issue
Frontend deployed before backend was live → API failures.

Solution
Deployment order learned:

Deploy backend

Get backend public URL

Update frontend API URL

Deploy frontend


📌 Known Limitations

Uses H2 in-memory database (data resets on restart)

No authentication yet

Basic UI styling

📈 Future Improvements

User authentication

Dark mode UI

Pagination

Role-based access
