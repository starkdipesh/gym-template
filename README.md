# 🏋️ TITAN FORGE — Master Gym & Fitness Membership Web Template

**TITAN FORGE** is a premium, high-performance, conversion-focused web application template designed specifically for modern fitness clubs, gym owners, personal training studios, and athletic centers. 

Built with **React**, **Vite**, and a **Vanilla CSS Design System**, this template provides a complete solution that bridges **consumer lead generation** with a **gym owner command center**.

---

## 🎯 Purpose of the Template

Most gym templates are simple static landing pages. **TITAN FORGE** is built to function as a complete **revenue engine** and **operational management hub** for gym owners:

1. **Drive High Member Conversions:** Capture leads through 3-Day Free VIP Pass modals, trainer booking flows, and class reservations.
2. **Provide Real-Time Floor Intelligence:** Give prospective and current members real-time visibility into gym floor occupancy and hourly peak times.
3. **Empower Gym Owners & Staff:** Includes an embedded Lead CRM, CSV lead exporter, MRR revenue metrics, and front-desk VIP pass verification tool.
4. **Flawless Multi-Device Experience:** 100% mobile-responsive across all screen ratios (from 320px micro-displays to 4K ultra-wides) with zero layout clipping.

---

## ✨ Key Features & Functionalities

### 1. ⚡ Conversion-Focused Member Experience
- **Interactive 3-Day Free VIP Pass Modal:** Custom dark-themed booking modal with real-time biometric goals selection.
- **Bespoke UI Components:**
  - **`ClockTimePicker.jsx`:** Custom hour/minute clock face spinner with AM/PM toggle and preset morning/evening time slots.
  - **`CustomDatePicker.jsx`:** Custom calendar widget for date selection without native browser styling inconsistencies.
  - **`BeforeAfterSlider.jsx`:** Drag-to-compare 12-week body transformation image slider with metrics breakdown.
- **Class Booking & Master Coach Consultation Modals:** Streamlined forms to book group classes or 1-on-1 personal training.
- **WhatsApp Floating Lead Widget:** Direct 1-tap messaging widget for instant prospect inquiries.

### 2. 📊 Gym Owner Command Center (`/admin`)
*Accessible via the `MORE ▾` navigation header or footer button.*
- **Lead CRM Table:** Track incoming website leads with status updates (`New` ➔ `Contacted` ➔ `Trial Scheduled` ➔ `Converted to Member`).
- **One-Click CSV Export:** Export lead records directly to CSV for staff CRM integration and phone call follow-ups.
- **Front Desk Pass Verification Tool:** Front-desk staff can scan or enter a prospect's 6-digit VIP Pass ID (e.g. `TF-801` or `TF-VIP-849201`) to grant access.
- **Business KPI Metrics:** Real-time overview of Monthly Recurring Revenue (MRR), total active memberships, and trial conversion rates.

### 3. 📈 Real-Time Gym Floor Occupancy & Peak Heatmap
- **Live Crowd Density Telemetry:** Displays current gym floor crowd level (e.g., `44% Occupancy - Moderate`).
- **Hourly Peak Hours Heatmap (5 AM – 10 PM):** Interactive color-coded bar chart (*Quiet*, *Moderate*, *Peak*) allowing members to plan workouts around quiet hours.

### 4. 🎨 Design System & Visuals
- **Dark Aesthetic Palette:** High-contrast neon lime accents (`#c6ff00`), deep midnight backgrounds (`#0b0d0f`), glassmorphism cards, and sleek typography (`Outfit` + `Plus Jakarta Sans`).
- **Audited Gender-Matched Transformation Profiles:** Verified male/female portrait pairing across before/after transformation galleries.

---

## 🛠️ Technology Stack

- **Frontend Framework:** [React 18+](https://react.dev/)
- **Build Tool & Dev Server:** [Vite 8](https://vitejs.dev/)
- **Icon Suite:** [Lucide React](https://lucide.react.dev/)
- **Styling:** Custom Vanilla CSS Design System with CSS variables and responsive media queries (`src/index.css`)

---

## 📁 Project Architecture & Directory Structure

```
gym-management/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable UI & Modal Components
│   │   ├── AnnouncementBar.jsx    # Top promo ticker bar
│   │   ├── ArticleModal.jsx       # Fitness blog reader modal
│   │   ├── BeforeAfterSlider.jsx  # Drag-to-compare transformation slider
│   │   ├── ClassBookingModal.jsx  # Class reservation modal
│   │   ├── ClockTimePicker.jsx    # Custom clock face time picker
│   │   ├── CustomDatePicker.jsx   # Custom calendar date picker
│   │   ├── Footer.jsx             # Comprehensive multi-column footer
│   │   ├── FreeTrialModal.jsx     # 3-Day VIP Pass registration modal
│   │   ├── LightboxModal.jsx      # High-res gallery photo viewer
│   │   ├── Navbar.jsx             # Responsive glassmorphism header
│   │   ├── OccupancyHeatmap.jsx   # Live crowd telemetry & hourly peak chart
│   │   ├── TrainerModal.jsx       # Master coach biography & booking modal
│   │   └── WhatsAppWidget.jsx     # Floating lead generation widget
│   ├── data/
│   │   └── gymData.js             # Master data (plans, stats, classes, trainers)
│   ├── views/                # Modular Page Views
│   │   ├── AboutView.jsx          # Facility story & philosophy
│   │   ├── AdminDashboardView.jsx # Gym Owner Command Center & Lead CRM
│   │   ├── BlogView.jsx           # Fitness guides & nutrition articles
│   │   ├── ClassesView.jsx        # Group workout catalog
│   │   ├── ContactView.jsx        # Location map & inquiry form
│   │   ├── FacilitiesView.jsx     # Equipment arsenal & occupancy telemetry
│   │   ├── FaqView.jsx            # Accordion FAQ guide
│   │   ├── GalleryView.jsx        # Visual facility photo grid
│   │   ├── HomeView.jsx           # Conversion landing page
│   │   ├── MembershipView.jsx     # Pricing tiers & feature breakdown
│   │   ├── PersonalTrainingView.jsx # 1-on-1 coaching details
│   │   ├── ProgramsView.jsx       # 12-week body shred & hypertrophy programs
│   │   ├── ScheduleView.jsx       # Weekly class timetable
│   │   ├── TransformationsView.jsx# Member body transformation stories
│   │   └── TrainersView.jsx       # Master coach roster
│   ├── App.jsx                # Core view router & modal coordinator
│   ├── main.jsx               # React DOM entrypoint
│   └── index.css              # Design tokens, utilities & media queries
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dipeshMahakali/gym-template.git
   cd gym-template
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` (or port indicated in terminal).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.

---

## 📱 Navigation & View Routing

The application uses an in-memory view router orchestrated by `src/App.jsx`. Available views include:

| View Key | Title | Description |
| :--- | :--- | :--- |
| `home` | **Home Page** | Conversion hero, stats, why choose us, facility preview |
| `about` | **About Facility** | Gym story, core values, equipment standard |
| `programs` | **Fitness Programs** | 12-week body shred, hypertrophy blueprint, strength matrix |
| `membership` | **Membership Pricing** | Core, Plus, and Elite VIP pricing tiers |
| `classes` | **Group Classes** | MetCon, Heavy Iron, Power Mobility class catalog |
| `schedule` | **Weekly Schedule** | Interactive daily class timetable |
| `transformations` | **Transformations** | Before/after body composition success stories |
| `trainers` | **Master Coaches** | Trainer bios, certifications, ratings, booking |
| `facilities` | **Facilities Tour** | 25,000 sq. ft. zone breakdown + Live Occupancy Telemetry |
| `admin` | **Gym Owner Portal** | Business KPIs, Lead CRM table, CSV exporter, QR validator |
| `contact` | **Contact & Location** | Map, contact form, parking & operating hours |

---

## 📄 License & Usage

Created for **TITAN FORGE Fitness Club**. Feel free to use and adapt this template for single or multi-location fitness centers, health clubs, and personal training studios.
