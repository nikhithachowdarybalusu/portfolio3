# 💼 Personal Portfolio Website

A full-stack, responsive portfolio website built using **Angular** for the frontend and **ASP.NET Core Web API** for the backend. This site showcases personal projects, contact functionality with real-time email support, and resume upload/download features. Hosted using Azure Static Web Apps and Azure App Service.

---

## 🌐 Live Demo

🔗 [Visit My Portfolio](https://your-live-link.com)

---

## 🧩 Features

- 🔥 Scrollable single-page Angular frontend
- 💬 Contact form with real-time email notification via SMTP
- 📄 Resume upload/download from the .NET backend
- 💅 Enhanced UI with modern CSS and animations
- 📱 Responsive across devices
- ☁️ Hosted using Azure services

---

## 🛠️ Tech Stack

### Frontend (Angular)
- Angular 15+
- TypeScript
- HTML5 / SCSS / CSS3
- Angular Services, Routing, Directives

### Backend (ASP.NET Core API)
- ASP.NET Core 7
- Entity Framework Core
- SQL Server
- CORS and RESTful APIs
- SMTP Mail Support

### Hosting
- **Frontend**: Azure Static Web Apps
- **Backend**: Azure App Service
- **Database**: Azure SQL

---

## 📂 Project Structure

![image](https://github.com/user-attachments/assets/e4e5effa-d75c-4d49-9423-3989f006404f)


---

## 🚀 Getting Started

### Prerequisites
- Node.js and Angular CLI
- .NET 7 SDK
- SQL Server
- Azure Account

### Frontend

```bash
cd portfolio-frontend
npm install
ng serve
```

### Backend

```cd PortfolioAPI
dotnet restore
dotnet run
```

### ✉️ Email Configuration

```"EmailSettings": {
  "SmtpServer": "smtp.gmail.com",
  "Port": 587,
  "SenderEmail": "your-email@gmail.com",
  "SenderPassword": "your-app-password",
  "ReceiverEmail": "your-email@gmail.com"
}
```

⚠️ Use an App Password if you’re using Gmail.

### 📄 Resume Download

```
Use /api/resume/download for downloading
```

### 🛡️ Security

CORS enabled for frontend-backend communication

SMTP credentials stored securely via appsettings

### 📸 Screenshots

### 📬 Contact

If you'd like to get in touch, just use the contact form on the site or connect via LinkedIn.

### ⭐ Credits

Designed & Developed by Chandra Nikitha Balusu

Powered by Angular, .NET, Azure

### 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.
