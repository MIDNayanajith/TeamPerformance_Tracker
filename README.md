# TeamPulse – Team Performance Tracker

## Overview

TeamPulse is a full-stack web application designed to help managers monitor and manage team member performance efficiently. It provides an interactive dashboard to track scores, update performance, and manage team members in real time.

---

## Core Functionalities

### View Team Members

Displays all members with:

- Name
- Role
- Performance Score (0–100)

### Add New Member

- Form to create a new team member

### Update Score

- Increase or decrease score by ±5
- Score is limited between **0 and 100**

### Delete Member

- Remove a team member from the system

---

## Tech Stack

### Frontend

- React.js (Hooks)
- React Router
- Tailwind CSS
- Lucide Icons

### Backend

- Node.js
- Express.js

### Database

- MongoDB (Mongoose)

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/MIDNayanajith/TeamPerformance_Tracker.git
cd TeamPerformance_Tracker

2. Backend Setup
cd backend
npm install

Create .env file:

PORT=5500
DB_URI=your_mongodb_connection_string

Run Backend:

npm run dev

Server will run on:

http://localhost:5500
3. Frontend Setup
cd performance_track
npm install
npm run dev

Frontend will run on:

http://localhost:5173
```
