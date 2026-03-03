# Elderly Care — Compassionate Health & Safety Management 🩺

### Empowering families through expert in-home nursing and intuitive care coordination.

---

## 🌟 Product Vision
Elderly Care is a high-fidelity platform designed to bridge the gap between professional nursing services and family peace of mind. Our mission is to transform the complex logistics of home-based senior care into a seamless, dignified experience for both the patient and their loved ones.

---

## 📱 Mobile Command Center (New Dashboard Redesign)
Our most recent sprint focused on a **User-Centric Mobile Dashboard** that transforms the application from a website into a functional digital caretaker companion.

### Key Product Features:
*   **Centralized Care Dashboard**: A high-priority "Ongoing Appointment" module with real-time caretaker status and a one-click **SOS Help System**.
*   **Intuitive Health Grids**: Rapid access to Vitals, Medication Schedules, and Video Consultations—designed with a high-contrast white-theme interface for maximum visibility.
*   **Smart Location Intelligence**: Dynamic location-aware dispatching that ensures local expertise is always assigned to your home.
*   **Integrated Wallet & Payments**: Streamlined transaction management for transparent billing and insurance claims coordination.
*   **Native App Experience**: Built as a hybrid React Native solution to provide a seamless, high-performance interface on iPhone and Android devices.

---

## 🎨 Design Philosophy — "Premium Simplicity"
Applying a Product Manager's eye for detail, we pivoted the mobile UI to a **Light Mode Professional Aesthetic**:
*   **Accessibility First**: Switched to a high-legibility light theme to ensure ease of use for elder users and vision-impaired family members.
*   **Modern Aesthetics**: Utilizing subtle gray elevations and a clean typography system (Lora & Source Sans 3) to maintain a premium, trustworthy medical brand identity.
*   **Action-Oriented UX**: Reduced "tap friction" by implementing a bottom navigation bar for secondary tools and a prominent top-level AI/Action area.

---

## 🛠 Tech Stack & Engineering
*   **Web Core**: React 18 + TypeScript + Vite
*   **Mobile Wrapper**: Expo / React Native (WebView Hybrid)
*   **Styling**: Tailwind CSS for cross-platform visual consistency
*   **Iconography**: Lucide React for consistent, lightweight UI elements
*   **Design Tokens**: Custom-defined color palettes for Medical Trust and Urgent Actions (SOS)

---

## 📂 Architecture Overview
```text
.
├── src/
│   ├── components/       # Component-driven development (Navbar, Dashboard, Grids)
│   ├── pages/            # Core routing and page layouts
│   ├── hooks/            # Performance & UX behavior hooks
│   └── assets/           # Optimized media and brand identity
├── mobile-app-v2/        # React Native wrapper for native mobile deployment
├── pwa-version/          # Fully responsive Web App implementation
└── tailwind.config.ts    # Centralized design system tokens
```

---

## 🏁 Development Setup
1.  **Clone & Install**: `git clone https://github.com/sharaddd/elderly-care.git` && `npm install`
2.  **Launch Web**: `npm run dev`
3.  **Launch Mobile**: Navigate to `mobile-app-v2` and run `npx expo start`

---

### **"Expert Care for Them. Peace of Mind for You."**
*Elderly Care — Redefining how the world looks after its seniors.*
