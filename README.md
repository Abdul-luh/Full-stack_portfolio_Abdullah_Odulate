# Abdullah Odulate - Portfolio

A modern, responsive portfolio website showcasing my work as a full-stack developer. Built with cutting-edge technologies and featuring a sleek, terminal-inspired design with smooth animations and interactive elements.

## 🚀 Live Demo

[View Portfolio](https://pixel-pro-stack.vercel.app/)

## ✨ Features

### 🏠 **Hero Section**
- Dynamic typing animation introducing myself as a "Full Stack Developer"
- Interactive terminal-style header
- Smooth scroll navigation
- Social media links (GitHub, Email)

### 👨‍💻 **About Section**
- Personal introduction and developer journey
- Skills showcase in four key areas:
  - **Frontend Development**: React, TypeScript, Next.js, Tailwind CSS
  - **Backend Development**: Node.js, Python, PostgreSQL, MongoDB
  - **Cloud & DevOps**: AWS, Docker, CI/CD, Kubernetes
  - **Performance**: Optimization, Scalability, Best Practices
- Interactive code-style developer card

### 💼 **Experience Section**
- Professional work history and achievements
- Timeline-style presentation

### 🛠️ **Projects Section**
Showcasing three featured projects:

1. **E-Commerce Platform** - Full-stack food delivery platform
   - Tech: Next.js 14, TypeScript, Zustand, Tailwind CSS, Prisma, NextAuth.js, PostgreSQL, Stripe
   - Features: Role-based access, real-time cart, payment integration

2. **My Gym Planner** - AI-powered workout planning platform
   - Tech: Next.js, TypeScript, Tailwind CSS, Prisma, NextAuth.js, PostgreSQL, Redis, MongoDB
   - Features: AI-tailored workouts, high-performance backend

3. **NovaCart Analytics Dashboard** - Multi-page analytics dashboard
   - Tech: React, Vite, Tailwind CSS, Recharts, TypeScript
   - Features: Glassmorphism design, real-time data visualization

### 📞 **Contact Section**
- Contact form with validation
- Direct contact information

### 🎨 **Design Features**
- Terminal-inspired aesthetic with monospace fonts
- Grid background patterns
- Glowing borders and hover effects
- Responsive design for all devices
- Smooth animations and transitions
- Dark theme optimized

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Animations**: CSS animations, custom keyframes
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd pixel-pro-stack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   ├── Hero.tsx      # Hero section with typing animation
│   ├── About.tsx     # About section with skills
│   ├── Experience.tsx # Work experience timeline
│   ├── Projects.tsx  # Featured projects showcase
│   ├── Contact.tsx   # Contact form and info
│   ├── Footer.tsx    # Site footer
│   └── Navigation.tsx # Responsive navigation bar
├── pages/
│   └── Index.tsx     # Main portfolio page
├── lib/              # Utility functions
└── main.tsx          # Application entry point
```

## 🎨 Customization

### Colors & Themes
The portfolio uses CSS custom properties for easy theme customization. Key variables are defined in the Tailwind config and component styles.

### Adding New Projects
To add new projects, update the `projects` array in `src/components/Projects.tsx` with:
- Title, description, and image
- Technology stack array
- GitHub and live demo URLs

### Modifying Skills
Update the `skills` array in `src/components/About.tsx` to reflect your expertise areas.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Custom domain support included

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📧 Contact

**Abdullah Odulate**
- Email: abdulluhodulate@gmail.com
- GitHub: [@Abdul-luh](https://github.com/Abdul-luh)
- LinkedIn: [Your LinkedIn Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
