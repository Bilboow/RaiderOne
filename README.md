# 🚗 RaiderOne — Real-Time Ride Coordination Platform

RaiderOne is a full-stack ride coordination system that connects **Users** and **Captains** in real time using proximity-based matching, optimized routing, and an interactive map-centric interface.

## 🚀 Tech Stack
- **Frontend:** React.js, TailwindCSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (Role-based: User/Captain)  
- **Maps & Geolocation:** Leaflet + Geoapify APIs

---

## 📌 Features

### 🔹 Real-Time Ride Coordination  
Users create trips and Captains dynamically receive ride requests based on distance, availability, and optimized matching logic.

### 🔹 Intelligent Backend System  
- Dynamic fare estimation  
- Route optimization  
- Location-aware captain matching  
All powered by Node.js, Express, and optimized MongoDB schemas.

### 🌍 Maps & Geolocation (Leaflet + Geoapify)  
A complete shift from Google Maps to **Leaflet + Geoapify** for a lightweight, open-source mapping experience:
- Interactive map rendering via Leaflet  
- Routing and distance calculation using Geoapify Routing API  
- Autocomplete location search via Geoapify Geocoding API  
- Smooth map-based pickup/drop selection  
- Faster, cost-effective alternative to Google Maps  

### 🔹 Secure Role-Based Authentication  
Implemented using **JWT**, with separate access flows for Users and Captains and scalable MongoDB data models.

### 🔹 Modern, Responsive UI  
Built with React.js and TailwindCSS, featuring a clean, map-first interface optimized for real-time interactions.

---

## ⚙️ Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/yourusername/RaiderOne.git
cd RaiderOne
```

## Install Dependencies

### Frontend
```bash
cd client
npm install
```
### Backend
```bash
cd ../server
npm install
```

## Add Environment Variables

Create a .env file inside /server:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEOAPIFY_API_KEY=your_api_key
```

## 🧩 Future Enhancements

- WebSocket-based real-time ride updates
- Payment integration
- Captain dashboard & analytics
- Trip history & reports
- Push notifications

### ScreenShot
