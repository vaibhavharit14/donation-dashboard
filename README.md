
# Donation Tracking Dashboard

A responsive donation tracking dashboard built with **React (Vite)**, **Tailwind CSS v3**, and **Chart.js**.  
This project demonstrates frontend development, data visualization, and recruiter‑ready UI design.

## Live Demo
 [View on Vercel](https://donation-dashboard-ten.vercel.app/)  


## Features
- **Summary Stats**: Total donations received, unique donor count, average per donation  
- **Trend Chart**: Line chart showing donation trends over time  
- **Donor Table**: Responsive table listing recent donations with donor name, amount, date, and channel  
- **Responsive Layout**: Works seamlessly across mobile, tablet, and desktop  
- **Scalable Design**: Dummy data now, but easily extendable to real APIs or backend integration  

---

##  Tech Stack
- **Frontend**: React + Vite  
- **Styling**: Tailwind CSS v3  
- **Charts**: Chart.js with react-chartjs-2  
- **Deployment**: Vercel  


## Project Structure

donation-dashboard/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/donations.ts
    ├── utils/stats.ts
    ├── components/
    │   ├── StatCard.tsx
    │   ├── DonorTable.tsx
    │   └── DonationChart.tsx
    └── pages/
        └── Dashboard.tsx

