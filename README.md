# ☕ Espresso Emporium - Client (MERN Stack)

A full-stack MERN (MongoDB, Express.js, React, Node.js) coffee shop management application with a modern, responsive frontend built with React. This is the client-side repository that connects to an Express.js REST API backend for complete CRUD operations on coffee products.

![React](https://img.shields.io/badge/React-19.2.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![Express](https://img.shields.io/badge/Express.js-Backend-000000)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 About This Project

**Espresso Emporium** is a complete full-stack web application demonstrating modern MERN stack development practices. The project consists of two repositories:

- **Frontend (This Repo)**: React + Vite + Tailwind CSS - Handles UI/UX and client-side logic
- **Backend**: Node.js + Express.js + MongoDB - Provides RESTful API and database management

This repository contains the **client-side application** that communicates with the backend API to perform all coffee management operations.

## 🌟 Features

### Core Functionality
- **Browse Coffee Collection** - View all available coffee products with detailed information
- **Add New Coffee** - Simple form to add new coffee products with validation
- **Update Coffee Details** - Edit existing coffee information seamlessly
- **Delete Coffee** - Remove coffee products with confirmation dialogs
- **View Coffee Details** - Detailed view page for individual coffee products

### User Experience
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Elegant transitions and hover effects
- **Sweet Alerts** - Beautiful custom modals for success/error messages
- **Instagram Gallery** - Showcase coffee photos in a beautiful grid layout

### Design Highlights
- **Custom Typography** - Rancho & Raleway fonts for an artisanal feel
- **Coffee-themed UI** - Warm color palette (#E3B577, #D2B48C, #331A15)
- **Background Images** - Rich textures and coffee-themed backgrounds
- **Icon Integration** - React Icons for intuitive UI elements

## 🛠️ Tech Stack

### MERN Stack Architecture

#### Frontend (This Repository)
- **React 19.2.0** - Modern React with latest features
- **React Router 7.9.6** - Client-side routing with loaders
- **Vite** - Lightning-fast build tool and dev server

#### Backend (Separate Repository)
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework for Node.js
- **MongoDB** - NoSQL database for storing coffee data
- **Mongoose** - MongoDB object modeling for Node.js
- **CORS** - Cross-Origin Resource Sharing enabled

### Styling & UI
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **DaisyUI 5.5.5** - Tailwind CSS component library
- **SweetAlert2 11.26.3** - Beautiful, responsive popup boxes
- **React Icons 5.5.0** - Popular icon library

### Development Tools
- **ESLint** - Code quality and consistency
- **Vite Plugin React** - Fast Refresh for instant feedback
- **Nodemon** - Auto-restart for backend development (Backend)

### API Communication
- **Fetch API** - Native browser API for HTTP requests
- **REST API** - RESTful architecture for client-server communication
- **JSON** - Data interchange format

## 📂 Project Structure

```
src/
├── assets/              # Images and static files
│   ├── cups/           # Coffee cup images
│   ├── icons/          # Feature icons
│   ├── more/           # Background images and logos
│   └── 404/            # Error page assets
│
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Hero section with CTA
│   ├── Features.jsx    # Coffee features showcase
│   ├── PopularProducts.jsx  # Coffee grid display
│   ├── CoffeeCard.jsx  # Individual coffee card
│   ├── Instagram.jsx   # Photo gallery section
│   ├── Header.jsx      # App header with logo
│   ├── Footer.jsx      # App footer with social links
│   ├── CoffeeForm.jsx  # Reusable form component
│   ├── FormBackground.jsx  # Form wrapper with styling
│   └── BackToHomeButton.jsx  # Navigation button
│
├── pages/              # Route pages
│   ├── Home.jsx        # Landing page
│   ├── AddCoffee.jsx   # Add new coffee page
│   ├── UpdateCoffee.jsx # Edit coffee page
│   ├── ViewCoffeeDetails.jsx # Coffee detail view
│   └── NotFound.jsx    # 404 error page
│
├── layout/             # Layout components
│   └── MainLayout.jsx  # App layout wrapper
│
├── routes/             # Routing configuration
│   └── router.jsx      # React Router setup
│
├── App.jsx             # Root component
├── main.jsx            # App entry point
└── index.css           # Global styles and utilities
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** installed and running (for backend)
- **Backend API** running on `http://localhost:3000` (See backend setup below)

### Full Stack Setup

#### 1. Backend Setup (Required First)

```bash
# Clone the backend repository (if available)
git clone https://github.com/Minhajh2o/Espresso-Emporium-Server.git
cd Espresso-Emporium-Server

# Install backend dependencies
npm install

# Create .env file with MongoDB connection
MONGODB_URI=mongodb://localhost:27017/espresso-emporium
PORT=3000

# Start MongoDB service
# Windows: mongod
# Mac/Linux: sudo systemctl start mongod

# Run backend server
npm start
# Backend will run on http://localhost:3000
```

#### 2. Frontend Setup (This Repository)

```bash
# Clone this repository
git clone https://github.com/Minhajh2o/Espresso-Emporium-Client.git
cd Espresso-Emporium-Client

# Install dependencies
npm install

# Start development server
npm run dev
# Frontend will run on http://localhost:5173
```

#### 3. Access the Application

- **Local Development**: `http://localhost:5173`
- **Network Access** (for mobile testing):
  ```bash
  npm run dev -- --host
  # Access via http://192.168.x.x:5173
  ```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Minhajh2o/Espresso-Emporium-Client.git
cd Espresso-Emporium-Client
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Access on mobile/other devices**
```bash
npm run dev -- --host
```

The app will be available at:
- Local: `http://localhost:5173`
- Network: `http://192.168.x.x:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Backend API Integration

### REST API Architecture

The frontend communicates with the Express.js backend through RESTful API endpoints. All data is exchanged in JSON format.

**Base URL**: `http://localhost:3000`

### API Endpoints

```javascript
// Get all coffees (READ)
GET http://localhost:3000/coffees
Response: Array of coffee objects

// Get single coffee by ID (READ)
GET http://localhost:3000/coffees/:id
Response: Single coffee object

// Add new coffee (CREATE)
POST http://localhost:3000/coffees
Body: { name, quantity, supplier, taste, category, details, photo, price }
Response: { insertedId, acknowledged: true }

// Update coffee (UPDATE)
PUT http://localhost:3000/coffees/:id
Body: { name, quantity, supplier, taste, category, details, photo, price }
Response: { modifiedCount: 1, acknowledged: true }

// Delete coffee (DELETE)
DELETE http://localhost:3000/coffees/:id
Response: { deletedCount: 1, acknowledged: true }
```

### MongoDB Database Schema

```javascript
{
  _id: ObjectId,
  name: String,
  quantity: String,
  supplier: String,
  taste: String,
  category: String,
  details: String,
  photo: String,  // Image URL
  price: String
}
```

### Backend Features

- **Express.js Server** - RESTful API with CRUD operations
- **MongoDB Integration** - Mongoose ODM for database operations
- **CORS Enabled** - Cross-origin requests from frontend
- **Error Handling** - Proper HTTP status codes and error messages
- **Data Validation** - Input validation before database operations

## 🔧 Configuration

### Environment Setup
For production or network access, update API endpoints:

1. Create `.env` file:
```env
VITE_API_URL=http://192.168.x.x:3000
```

2. Update fetch URLs in components:
```javascript
fetch(`${import.meta.env.VITE_API_URL}/coffees`)
```

## 📝 Sample Coffee Data

```json
{
  "name": "Arabica Bliss",
  "quantity": "50",
  "supplier": "Coffee Roasters Ltd.",
  "taste": "Smooth & Nutty",
  "category": "Premium",
  "details": "Premium Arabica beans with a mellow flavor and low acidity.",
  "price": "350",
  "photo": "https://i.ibb.co.com/zyrTPPB/1.png"
}
```

## 🐛 Troubleshooting

### Common Issues

**"Failed to fetch" on mobile**
- Ensure backend API is accessible on network
- Replace `localhost` with your computer's IP address
- Check firewall settings

**Images not loading**
- Verify image URLs are accessible
- Check CORS settings on backend
- Ensure image hosting service is active

**Port already in use**
- Change port in `vite.config.js`
- Kill process using port 5173
- Use alternative port: `npm run dev -- --port 3000`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Minhajh2o**
- GitHub: [@Minhajh2o](https://github.com/Minhajh2o)

---

**⭐ Star this repo if you found it helpful!**
