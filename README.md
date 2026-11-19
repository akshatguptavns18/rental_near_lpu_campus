# rental_near_lpu_campus
i make a website which help to people to get most affortable room with good quality without any broker.


RentNest — PG/Room Finder Near LPU 🏨
A simple, fast, and transparent web app that helps LPU (Lovely Professional University) students find PGs, hostels, and rooms in nearby areas — without dealing with scattered WhatsApp groups, broker fees, or hidden charges.
Built by Chetna, Akshat, and Roohani
📌 The Problem
Students moving to LPU struggle to find genuine PGs:
Listings are scattered across WhatsApp groups, brokers, and word-of-mouth
Hidden charges and unclear pricing
No clarity on AC vs Non-AC rooms
No easy way to compare areas or contact owners directly
💡 Our Solution
RentNest puts rental listings from 5 areas near LPU in one place with:
✅ Transparent rent (monthly, in ₹)
✅ Direct owner contact via Call or WhatsApp
✅ Clear AC / Non-AC filtering
✅ Amenities listed upfront
✅ Ratings to help compare options
✅ Photos for each PG
🗺️ Areas Covered
Area	Listings
Lawgate
Green Valley	
Phagwara	
Jalandhar	
Haridaspur	

✨ Features
🔍 Smart Search & Filters
Search by PG name or amenity (e.g., "Wi-Fi", "Backup light")
Filter by location (area dropdown)
Filter by room type — AC, Non-AC, or both
Sort by price (low→high / high→low) or rating

🏠 PG Cards
Each listing shows:
Photo (with graceful fallback if image fails)
AC / Non-AC badge
Location
Monthly rent
Amenity chips
Star rating

📞 Call and 💬 WhatsApp buttons (pre-filled message with PG name & area)

➕ Add Your Own PG
Users can submit a new listing via a modal form with:
PG name, location, rent, room type
Owner phone (validated: 10 digits)
Photo upload or photo URL
Amenities (comma-separated)
Live photo preview before saving
New listings are saved to localStorage and persist across sessions.

🌙 Dark Mode
Auto-detects system preference
Manual toggle (🌙 / ☀️) with preference saved

📱 Responsive Design
Works on mobile, tablet, and desktop
Single-column grid on small screens

🛠️ Tech Stack
Layer	Technology
Markup	HTML5
Styling	CSS3 (custom properties, grid, flexbox)
Logic	Vanilla JavaScript (ES6+)
Storage	localStorage (no backend needed)
Icons	Emoji + inline SVG
Photos	Remote image URLs with lazy loading
No frameworks. No build step. No dependencies. Just open index.html in a browser.



📁 Project Structure
rentnest/
├── index.html      # Page structure, dialog form, layout
├── style.css       # Theme, cards, controls, responsive styles
└── rental.js       # Data (DB + IMG), rendering, filters, form logic

🧭 How to Use
Find a PG
Type a PG name or amenity in the search box.
Pick a location, AC filter, and sort order.
Browse cards and tap Call or WhatsApp to contact the owner.
Add a PG
Click + Add PG.
Fill in the details (all required fields are validated).
Upload a photo or paste a link (optional).
Click Save PG — it appears immediately and persists in your browser.

🎨 Design Notes
Light theme: vibrant magenta gradient background with soft cards
Dark theme: deep navy tones with blue accents
Rounded, friendly UI — 14–28px radii throughout
Hover micro-interactions — card lift and image zoom
Accessibility touches — aria-labels, role="status" toast, aria-live region

⚠️ Limitations & Notes
Data is stored per-browser via localStorage — listings added by one user aren't visible to others.
No backend or database — this is a front-end-only prototype.
Owner phone numbers are sample data; verify before contacting.
Images are loaded from third-party URLs and may occasionally fail (the card handles this gracefully).

🔮 Future Roadmap
□ Backend + database so listings are shared across all users
□ User accounts (students vs. owners)
□ Photo uploads to cloud storage (e.g., Cloudinary / S3)
□ Map view with area pins
□ Verified / unverified owner badges
□ Reviews and ratings from real students
□ Distance-from-LPU indicator
□ Gender-specific PG filters (boys / girls / co-ed)
□ PWA support for offline browsing
👥 Team
Name	Role
Chetna	Frontend, UI/UX
Akshat	Data, logic, features
Roohani	Content, listings, testing
📄 License
This project was built for educational and community purposes to help LPU students find better housing. Feel free to fork, learn from, and improve it.

🙌 Acknowledgements
LPU student community for the real-world problem
All PG owners and students who inspire transparent listings
Everyone tired of "broker uncle" calls ☎️😅
Find your PG. Skip the broker. Move in with confidence. 🏡✨
