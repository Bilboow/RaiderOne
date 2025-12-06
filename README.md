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

## ScreenShot

### User

<img width="1440" height="810" alt="Screenshot 2025-12-06 at 11 01 23 PM" src="https://github.com/user-attachments/assets/954cdb1e-c0f5-4d53-87b1-1e804ac4fc90" />
<img width="1440" height="810" alt="Screenshot 2025-12-06 at 11 00 28 PM" src="https://github.com/user-attachments/assets/e4cea0ee-f416-4c83-8468-fe697ad3555a" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 54 43 PM" src="https://github.com/user-attachments/assets/0d2c9310-b567-44e9-aaea-86badab0f0d7" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 54 27 PM" src="https://github.com/user-attachments/assets/f6ea4ec7-d019-4dc9-9f71-c21ccf47266d" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 54 16 PM" src="https://github.com/user-attachments/assets/0f48ed5a-a740-42c1-9056-9338ea1471f8" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 53 53 PM" src="https://github.com/user-attachments/assets/76930d58-77ae-408f-aea3-4c9939f3ff5c" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 52 27 PM" src="https://github.com/user-attachments/assets/28e07ded-a0af-4abf-9078-a7df183b0f69" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 52 00 PM" src="https://github.com/user-attachments/assets/d2042889-7fad-4067-8361-43af1509aa4c" />


### Captain

<img width="1440" height="810" alt="Screenshot 2025-12-06 at 11 01 33 PM" src="https://github.com/user-attachments/assets/b18a91f5-286b-4aad-933d-4eaeaafa8081" />
<img width="1440" height="810" alt="Screenshot 2025-12-06 at 11 00 51 PM" src="https://github.com/user-attachments/assets/369bfda2-8497-4499-9684-083c9d0c13a1" />
<img width="1440" height="810" alt="Screenshot 2025-12-06 at 11 00 18 PM" src="https://github.com/user-attachments/assets/753b1bf7-85e0-412e-bf4a-e95170ae7e10" />
<img width="1440" height="810" alt="Screenshot 2025-12-06 at 11 00 07 PM" src="https://github.com/user-attachments/assets/629bce20-ed97-4a5b-a035-d15f75ed6eaa" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 55 12 PM" src="https://github.com/user-attachments/assets/71effc21-1586-453a-8799-f7aba2cbbb62" />
<img width="1365" height="755" alt="Screenshot 2025-12-06 at 10 55 04 PM" src="https://github.com/user-attachments/assets/ad6bf1fa-d026-4d2e-9995-dbe21a5451be" />


