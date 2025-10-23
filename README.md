# Real Estate Property Management System

A full-stack application for managing real estate properties, leases, and tenants. Built with .NET Core backend and React frontend.

## 🏗️ Architecture

### Backend (.NET Core)
- **API Layer** - REST API endpoints using ASP.NET Core
- **Business Layer (BL)** - Business logic and services
- **Data Layer (DL)** - Database operations and models
- **Authentication** - JWT-based authentication

### Frontend (React)
- Modern React with functional components
- React Router for navigation
- CSS modules for styling
- Protected routes and authentication

## 🚀 Features

- 🏠 Property Management
  - Add/Update/Remove properties
  - Property details and images
  - Property listing and search

- 📋 Lease Management
  - Create and manage lease agreements
  - Track lease status and terms
  - Lease history

- 👥 Tenant Management
  - Tenant registration and profiles
  - Issue reporting system
  - Tenant communication

- 🔐 Authentication & Authorization
  - User registration and login
  - Role-based access control
  - Secure API endpoints

## 🛠️ Technologies

### Backend
- ASP.NET Core 8.0
- Entity Framework Core
- SQL Server
- JWT Authentication
- Repository Pattern
- Unit of Work Pattern

### Frontend
- React 18
- React Router
- CSS Modules
- LocalStorage for state persistence

## 🏃‍♂️ Getting Started

### Backend Setup
1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Update the database:
   ```bash
   dotnet ef database update
   ```
4. Run the application:
   ```bash
   dotnet run --project Api
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd my-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🔧 Configuration

### Backend
- Update connection string in `appsettings.json`
- Configure JWT settings in `appsettings.json`
- Set up CORS policies as needed

### Frontend
- Update API base URL in environment files
- Configure authentication endpoints

## 📁 Project Structure

### Backend
```
Backend/
├── Api/                 # API Layer
│   ├── Controllers/     # API endpoints
│   └── Properties/      # Configuration
├── BL/                  # Business Layer
│   ├── DTO/            # Data transfer objects
│   ├── Interfaces/     # Service interfaces
│   ├── Repositories/   # Data repositories
│   ├── Services/       # Business logic
│   └── Utilities/      # Helper classes
└── DL/                 # Data Layer
    ├── Context/        # Database context
    ├── Migrations/     # EF migrations
    └── Models/         # Data models
```

### Frontend
```
my-app/
├── public/          # Static files
├── src/            # Source code
│   ├── components/ # Reusable components
│   ├── css/        # Stylesheets
│   ├── helper/     # Utility functions
│   ├── middleware/ # Auth middleware
│   ├── pages/      # Page components
│   └── shared/     # Shared components
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Ahmed Elshewemy
- Fathy Ahmed
