# ☕ Espresso Emporium - Client (MERN Stack)

A full-stack MERN (MongoDB, Express.js, React, Node.js) coffee shop management application with a modern, responsive frontend built with React. This is the client-side repository that connects to an Express.js REST API backend for complete CRUD operations on coffee products.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![Express](https://img.shields.io/badge/Express.js-Backend-000000)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC)

## 🌟 Features

- **Browse Coffee Collection** - View all available coffee products
- **Add New Coffee** - Create new coffee products with validation
- **Update Coffee** - Edit existing coffee information
- **Delete Coffee** - Remove coffee products with confirmation
- **View Details** - Detailed view page for individual coffees
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Sweet Alerts** - Beautiful custom modals for user feedback

## 🛠️ Tech Stack

### Frontend
- React 19.2.0
- React Router 7.9.6
- Vite
- Tailwind CSS 4.1.17
- DaisyUI 5.5.5
- SweetAlert2 11.26.3
- React Icons 5.5.0

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB
- Backend API running on `http://localhost:3000`

### Installation

```bash
# Clone repository
git clone https://github.com/Minhajh2o/Espresso-Emporium-Client.git
cd Espresso-Emporium-Client

# Install dependencies
npm install

# Create .env file
VITE_API_URL=http://localhost:3000

# Start development server
npm run dev
```

### Access
- Local: `http://localhost:5173`
- Network: `npm run dev -- --host`

## 🎯 API Endpoints

```javascript
GET    /coffees          // Get all coffees
GET    /coffees/:id      // Get single coffee
POST   /coffees          // Add new coffee
PUT    /coffees/:id      // Update coffee
DELETE /coffees/:id      // Delete coffee
```

## 📝 Sample Coffee Data

```json
{
  "name": "Arabica Bliss",
  "quantity": "50",
  "supplier": "Coffee Roasters Ltd.",
  "taste": "Smooth & Nutty",
  "category": "Premium",
  "details": "Premium Arabica beans with a mellow flavor.",
  "price": "350",
  "photo": "https://i.ibb.co.com/zyrTPPB/1.png"
}
```

## 👨‍💻 Author

**Minhajh2o**
- GitHub: [@Minhajh2o](https://github.com/Minhajh2o)

---

**⭐ Star this repo if you found it helpful!**
