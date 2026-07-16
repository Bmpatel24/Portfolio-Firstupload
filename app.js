/* ==========================================================================
   GROWWITH AGENCY - CLIENT-SIDE REACT SPA & PERSISTENT CMS DATABASE
   ========================================================================== */

const { useState, useEffect, useRef, useMemo } = React;

// 1. SIMPLE SVG ICON DIRECTORY (SELF-CONTAINED, HIGH PERFORMANCE)
const Icon = ({ name, size = 18, className = "" }) => {
    const paths = {
        star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
        zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
        shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
        sparkles: <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />,
        award: <circle cx="12" cy="8" r="7" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />,
        arrowRight: <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />,
        arrowLeft: <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />,
        menu: <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />,
        x: <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />,
        plus: <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />,
        trash: <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />,
        edit: <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />,
        check: <polyline points="20 6 9 17 4 12" />,
        chevronDown: <polyline points="6 9 12 15 18 9" />,
        chevronUp: <polyline points="18 15 12 9 6 15" />,
        chevronRight: <polyline points="9 18 15 12 9 6" />,
        phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
        messageSquare: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
        mail: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />,
        settings: <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />,
        grid: <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />,
        fileText: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />,
        image: <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />,
        briefcase: <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />,
        users: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />,
        lock: <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />,
        eye: <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />,
        download: <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
        arrowUp: <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />,
        arrowDown: <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />,
        filter: <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />,
        logOut: <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />,
        link: <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide-icon ${className}`}
        >
            {paths[name] || <circle cx="12" cy="12" r="10" />}
        </svg>
    );
};

// 2. MOCK DATABASE SEED DATA
const DEFAULT_BRAND_DATA = {
    primaryColor: "#C9A84C",
    backgroundColor: "#080808",
    textColor: "#E0E0E0",
    accentColor: "#E8D5A3",
    logoUrl: "./assets/logo.jpg",
    faviconUrl: "./assets/logo.jpg",
    agencyName: "GrowWith",
    tagline: "Digital Growth for Local Businesses"
};

const DEFAULT_PAGES_DATA = [
    {
        id: "home",
        title: "Home",
        active: true,
        sections: [
            { id: "hero", title: "Hero Section", active: true, content: { headline: "Igniting Digital Growth For Local", headlineAccent: "Brands", subtext: "A luxury design-led marketing agency in Rajkot. We craft premium profiles, scale Google Business pages, and engineer high-ROI Meta & Google advertising campaigns — with zero middlemen.", ctaText: "Book a Consultation" } },
            { id: "marquee", title: "Services Marquee Scrolling Ticker", active: true, content: { services: ["Brand Management", "High-Converting Reels", "Google Profile SEO", "Seasonal Footfall Campaigns", "Meta & Google Ads", "AI Content Creation", "Premium Profile Design"] } },
            { id: "what_we_do", title: "What We Do Grid", active: true, content: { title: "Crafting Premium Digital Solutions", subtitle: "Our core services built for brands that value excellence." } },
            { id: "why_us", title: "Why GrowWith Key Points", active: true, content: { title: "The GrowWith Edge", subtitle: "Why luxury local brands trust us to run their digital presences.", points: [
                { number: "01", title: "Personal Attention", desc: "No junior account handlers. Work directly with a solo growth partner dedicated to Rajkot's finest brands." },
                { number: "02", title: "Results-First Strategy", desc: "We track calls, footfall, and revenues — not just double taps or impressions." },
                { number: "03", title: "AI-Powered Speed", desc: "Leverage advanced custom LLMs and generation models for content that delivers at speed, with human polishing." }
            ]} },
            { id: "results", title: "Results Numbers Counter", active: true, content: { title: "Our Growth Footprint", subtitle: "Real metrics delivered to premium client partners.", counters: [
                { number: "18", suffix: "+", label: "Premium Client Partners" },
                { number: "40", suffix: "M+", label: "Reels Views Generated" },
                { number: "350", suffix: "%+", label: "Avg GBP Search Growth" },
                { number: "12", suffix: "x+", label: "Meta Ads ROI Generated" }
            ]} },
            { id: "testimonials", title: "Client Testimonials Slider", active: true, content: { title: "Trusted By Gujarat's Visionaries", subtitle: "Hear directly from local business owners who scaled with us." } },
            { id: "final_cta", title: "Final Call To Action", active: true, content: { title: "Ready to Scale Your Brand?", subtext: "Let's align on a growth blueprint that makes your competitors look generic.", ctaText: "Request Consultation" } }
        ]
    },
    {
        id: "services",
        title: "Services",
        active: true,
        sections: [
            { id: "services_hero", title: "Services Hero", active: true, content: { headline: "Expertise That Scales", subtext: "Six high-impact services customized for premium businesses looking to dominate Rajkot and beyond." } }
        ]
    },
    {
        id: "portfolio",
        title: "Portfolio",
        active: true,
        sections: [
            { id: "portfolio_hero", title: "Portfolio Hero", active: true, content: { headline: "Results We've Built", subtext: "A curated look into our high-ROI campaigns, premium content shoots, and localized brand strategies." } }
        ]
    },
    {
        id: "about",
        title: "About",
        active: true,
        sections: [
            { id: "about_hero", title: "About Hero", active: true, content: { headline: "The GrowWith Story", subtext: "A Rajkot-born agency breaking the traditional bloated agency model with AI-enabled efficiency and senior-level execution." } },
            { id: "process", title: "4-Step Process Timeline", active: true, content: { title: "Our Growth Framework", subtitle: "How we align your vision with revenue outcomes.", steps: [
                { title: "Deep Research", desc: "Analyzing your Rajkot local competitors, pricing models, GBP SEO keyword gaps, and customer psychology." },
                { title: "Bespoke Strategy", desc: "Designing target content angles, local festival campaign grids, and customized ad spend funnels." },
                { title: "Flawless Execution", desc: "Executing high-end shoots, writing scripts, designing carousels, and managing daily optimization cycles." },
                { title: "Transparent Reporting", desc: "Bi-weekly WhatsApp logs and monthly reviews mapping traffic and customer conversions." }
            ]} },
            { id: "toolstack", title: "AI Tool Stack Section", active: true, content: { title: "Our Intelligent Stack", subtitle: "Using leading generative systems to drive content velocity and analytical superiority." } }
        ]
    },
    {
        id: "pricing",
        title: "Pricing",
        active: true,
        sections: [
            { id: "pricing_hero", title: "Pricing Hero", active: true, content: { headline: "Simple. Transparent. Results-First.", subtext: "No long lock-in contracts. Premium packages scaled for your business needs." } }
        ]
    },
    {
        id: "blog",
        title: "Blog",
        active: true,
        sections: [
            { id: "blog_hero", title: "Blog Hero", active: true, content: { headline: "Insights & Growth Guides", subtext: "Free, actionable frameworks on how to market your luxury brand, optimize GBP, and run ads locally." } }
        ]
    },
    {
        id: "consultation",
        title: "Consultation",
        active: true,
        sections: [
            { id: "consultation_hero", title: "Consultation Hero", active: true, content: { headline: "Let's Talk About Your Growth", subtext: "Book a direct 30-minute growth review session. Zero sales pitch. All value." } }
        ]
    }
];

const DEFAULT_SERVICES_LIST = [
    { id: 1, icon: "✦", title: "Premium Profile & Brand Management", desc: "Turn generic social pages into luxury digital storefronts. We completely redesign your layouts, set elegant visual guidelines, and establish a high-end Rajkot brand tone that commands premium prices.", tags: ["Brand Identity", "Design Grid", "Tone of Voice", "Visual System"] },
    { id: 2, icon: "◈", title: "Content & Posts", desc: "Custom-made carousels, aesthetic static designs, localized festival posts, and high-conversion offer graphics. High attention to detail, maintaining color palettes and typography rules.", tags: ["Graphic Design", "Festival Creatives", "Offers & Launches", "Carousels"] },
    { id: 3, icon: "▶", title: "Video & Reels", desc: "High-hook video creation designed to hit explorer feeds. Scriptwriting tailored to local trends, professional editing, custom subtitles, and gold color grades. AI video tools are layered for rapid scaling.", tags: ["Scriptwriting", "Pro Video Editing", "AI Scaling", "Hook Design"] },
    { id: 4, icon: "◎", title: "Google Business Profile Management", desc: "Rajkot consumers search local. We optimize your Google Map profile to rank #1 in local keywords, manage authentic reviews, handle citation building, and post updates to drive daily calls and driving directions.", tags: ["Local Map SEO", "Review Campaigns", "Keyword Tuning", "Call Generation"] },
    { id: 5, icon: "❋", title: "Seasonal Campaigns", desc: "Unlock massive footfall during Bridal Seasons, Diwali, Navratri, and shop launches. Dynamic campaign models engineered to align local offline walk-ins with digital hype.", tags: ["Bridal Campaigns", "Festival Grids", "Footfall Events", "Aesthetic Promos"] },
    { id: 6, icon: "⬡", title: "Meta & Google Ads", desc: "Hyper-targeted paid acquisition. We construct custom audiences, write high-conversion copy, and optimize conversion pixels. Ad budgets are kept transparently client-side (no markups on ad spend).", tags: ["Targeting Funnels", "Copywriting", "Pixel Setup", "ROI Dashboards"] }
];

const DEFAULT_PORTFOLIO_LIST = [
    { id: 1, clientName: "Vrajlal & Sons Jewellers", industry: "Jewellery", problem: "Stuck with outdated catalog posts on Instagram and failing to reach millennial bridal shoppers in Gujarat.", solution: "Launched a luxury visual identity with micro-shot Reels, high-end model shoots, and a targeted bridal campaign targeting high-intent pin codes.", result: " Bridal appointment bookings surged, and Reels reached over 1.2M local users.", metrics: { main: "+140%", sub: "Bridal Walk-ins" }, beforeImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=300", afterImage: "./assets/case_study_jewellery.jpg", show: true },
    { id: 2, clientName: "Gir Organic Dairy Farms", industry: "Dairy", problem: "High-quality milk products but perceived as a commodity, resulting in price wars with mass-market milk dairies.", solution: "Re-branded Gir Organic into a luxury lifestyle wellness brand. Focused on high-end glass packaging carousels and organic farm life storytelling.", result: "Drove direct subscription inquiries via WhatsApp, lifting overall premium milk subscriptions by 80%.", metrics: { main: "+80%", sub: "Monthly Subscriptions" }, beforeImage: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300", afterImage: "./assets/case_study_dairy.jpg", show: true },
    { id: 3, clientName: "Chauhan & Co. Interiors", industry: "Interior Design", problem: "Relying purely on word-of-mouth with empty Google Business Profiles and low visual footprint online.", solution: "Optimized local SEO maps for 'luxury interior designers Rajkot' and compiled cinematic walk-through video Reels of completed luxury villa projects.", result: "Ranked #2 on Google Local Map Pack within 45 days, producing premium inbound client design inquiries.", metrics: { main: "22+", sub: "Premium Leads / Mo" }, beforeImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=300", afterImage: "./assets/case_study_interior.jpg", show: true }
];

const DEFAULT_TESTIMONIALS_LIST = [
    { id: 1, clientName: "Dharmesh Shah", business: "Vrajlal Jewellers, Rajkot", quote: "GrowWith transformed our social media from a boring brochure into an active sales machine. We've never had this many walk-ins from online.", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150", show: true, order: 1 },
    { id: 2, clientName: "Amit Patel", business: "Gir Organic Dairies", quote: "The personal attention is outstanding. Since we started working together, we've increased our premium milk orders without running expensive ads.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150", show: true, order: 2 },
    { id: 3, clientName: "Nisha Chauhan", business: "Chauhan Interior Studios", quote: "Ranking on Google Maps has changed our business. We get high-paying villa design inquiries direct to our WhatsApp every single week now.", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150", show: true, order: 3 }
];

const DEFAULT_PACKAGES_LIST = [
    { id: 1, name: "Starter", tagline: "For growing local retailers wanting digital presence.", features: ["3 Premium posts per week", "Basic Grid Layout & Tone", "Google Business Profile Basic setup", "Diwali & New Year creatives", "Monthly WhatsApp reporting"], recommended: false, show: true },
    { id: 2, name: "Growth", tagline: "Our flagship. Best for premium brands scaling presence.", features: ["5 Premium posts & carousel designs/week", "2 Custom video Reels/week (scripted & edited)", "Full Google Business Profile Map SEO optimization", "Diwali, Navratri, and Wedding seasonal grids", "Meta & Google Ads Campaign setup & monitoring", "Bi-weekly progress review & analytics"], recommended: true, show: true },
    { id: 3, name: "Premium", tagline: "Complete digital dominance with zero compromises.", features: ["Daily premium content uploads (posts/carousels)", "4 Cinematic Reels/week (scripted, edited, graded)", "Google Maps Map Pack optimization + reviews campaigns", "Full bridal, store footfall, and launching campaigns", "Advanced Ads (Meta/Google retargeting & lookalikes)", "Real-time Google Analytics & Pixel tracking logs", "Direct 1-on-1 Slack/WhatsApp daily communication"], recommended: false, show: true }
];

const DEFAULT_BLOGS_LIST = [
    { id: 1, title: "How to Optimize Your Google Map Profile for Rajkot Local Search", category: "SEO", thumbnail: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=500", readTime: "5 min read", date: "July 12, 2026", content: `<h2>The Local Map SEO Playbook for Rajkot Businesses</h2><p>When someone in Rajkot searches for "best jewellery store near me" or "interior designer in Rajkot", Google doesn't display web links first. It displays the Google Map Pack.</p><p>If your business isn't in the top 3 spots, you are losing over 70% of local digital inquiries to competitors. Here is the exact framework we use at GrowWith to rank our premium partners.</p><h3>1. Claim and Complete Your Profile</h3><p>Make sure your business name matches your real-world signage exactly. Do not stuff keywords like "Top Jewellery" if it's not your legal name. Fill in business hours, categories, and direct contact numbers.</p><h3>2. Localized Reviews Campaign</h3><p>Google prioritizes active, highly rated listings. Implement a QR-code reviews system at checkout. Do not buy fake reviews — Google filters them out quickly.</p><h3>3. Daily Updates & Images</h3><p>Post updates and high-quality product images to your map profile at least twice a week. Treat it like a secondary Instagram feed. It signals to Google's ranking algorithms that your business is active and operational.</p>`, status: "published" },
    { id: 2, title: "Diwali & Navratri: Scaling Festive Walk-ins for Retail Brands", category: "Seasonal Campaigns", thumbnail: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=500", readTime: "4 min read", date: "June 28, 2026", content: `<h2>Festival Campaign Blueprint: navratri & Diwali</h2><p>Rajkot retailers generate up to 50% of their annual revenues during Navratri and Diwali. Yet, most start advertising just a week before the festival. By then, advertising costs are at peak, and consumer attention is crowded.</p><p>To stand out, premium brands must implement a multi-stage festive funnel.</p><h3>Stage 1: The Teaser & Custom Lists (4 Weeks Before)</h3><p>Build custom audiences. Offer early-bird registrations for bridal collections or festival bookings. Capture names, business names, and WhatsApp numbers.</p><h3>Stage 2: The Aesthetic Narrative (2 Weeks Before)</h3><p>Launch high-concept video Reels highlighting artisan design stories, heritage values, and luxury collections. Focus on brand sentiment over hard discounts.</p><h3>Stage 3: The High-ROI Targeting (1 Week Before)</h3><p>Run targeted ad sets within 5-10 km of your showroom. Push high-urgency CTAs: "Book your showroom visit slot" or "Exclusive collections launching today".</p>`, status: "published" },
    { id: 3, title: "Why Solo Agency Beats Bloated Creative Agencies for Premium Brands", category: "Branding", thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500", readTime: "6 min read", date: "May 15, 2026", content: `<h2>The Solo Agency Model: Speed, Seniority, and Results</h2><p>Traditional creative agencies in India operate on a bloated retainer model. You meet a charismatic founder during the pitch, but once the contract is signed, your account is delegated to a junior intern earning minimum wage.</p><p>This is why luxury brands often experience slow reply times, generic design grids, and disconnect in strategies.</p><h3>Work Directly with a Senior Growth Partner</h3><p>In a solo agency model like GrowWith, there are no account managers, client managers, or junior design layers. You work directly with the founder on strategy, copywriting, video grading, and ads optimization.</p><h3>Lower Overhead, High-End Tools</h3><p>By leveraging advanced AI systems, we eliminate administrative costs. We focus 100% of our resources on strategy and execution, delivering work in hours instead of weeks.</p>`, status: "published" }
];

const DEFAULT_LEADS_LIST = [
    { id: 1, name: "Rajesh Trivedi", businessName: "Trivedi sweets & dairy", whatsappNumber: "+91 98250 12345", service: "Google Profile Optimization", bestTime: "Evening (4 PM - 7 PM)", message: "We want to boost our local organic dairy subscription walk-ins from Maps.", date: "July 15, 2026", status: "new" },
    { id: 2, name: "Meera Heda", businessName: "Heda Bridal Designs", whatsappNumber: "+91 94282 67890", service: "Seasonal Campaigns", bestTime: "Afternoon (1 PM - 4 PM)", message: "Looking to setup bridal booking ads for the upcoming wedding season.", date: "July 14, 2026", status: "contacted" },
    { id: 3, name: "Kunal Dodiya", businessName: "Dodiya Developers", whatsappNumber: "+91 90999 54321", service: "Meta & Google Ads", bestTime: "Morning (10 AM - 12 PM)", message: "Need premium leads for our luxury villa project near Kalawad Road, Rajkot.", date: "July 10, 2026", status: "converted" }
];

const DEFAULT_SETTINGS_DATA = {
    whatsappNumber: "+919876543210",
    contactEmail: "growwith.rajkot@gmail.com",
    instagramUrl: "https://instagram.com/growwith.agency",
    facebookUrl: "https://facebook.com/growwith.agency",
    googleAnalyticsId: "G-XXXXXXXXXX",
    metaPixelId: "PX-YYYYYYYYYY"
};

// 3. DATABASE CONTROLLER HELPER
const DB_VERSION = "growwith_db_v1.0";
const seedDatabase = () => {
    if (!localStorage.getItem(`${DB_VERSION}_brand`)) {
        localStorage.setItem(`${DB_VERSION}_brand`, JSON.stringify(DEFAULT_BRAND_DATA));
        localStorage.setItem(`${DB_VERSION}_pages`, JSON.stringify(DEFAULT_PAGES_DATA));
        localStorage.setItem(`${DB_VERSION}_services`, JSON.stringify(DEFAULT_SERVICES_LIST));
        localStorage.setItem(`${DB_VERSION}_portfolio`, JSON.stringify(DEFAULT_PORTFOLIO_LIST));
        localStorage.setItem(`${DB_VERSION}_testimonials`, JSON.stringify(DEFAULT_TESTIMONIALS_LIST));
        localStorage.setItem(`${DB_VERSION}_packages`, JSON.stringify(DEFAULT_PACKAGES_LIST));
        localStorage.setItem(`${DB_VERSION}_blogs`, JSON.stringify(DEFAULT_BLOGS_LIST));
        localStorage.setItem(`${DB_VERSION}_leads`, JSON.stringify(DEFAULT_LEADS_LIST));
        localStorage.setItem(`${DB_VERSION}_settings`, JSON.stringify(DEFAULT_SETTINGS_DATA));
        localStorage.setItem(`${DB_VERSION}_categories`, JSON.stringify(["SEO", "Seasonal Campaigns", "Branding", "Social Media", "Video & Reels"]));
        localStorage.setItem(`${DB_VERSION}_adminPassword`, "admin123");
    }
};

const getDbData = (key) => JSON.parse(localStorage.getItem(`${DB_VERSION}_${key}`));
const saveDbData = (key, data) => localStorage.setItem(`${DB_VERSION}_${key}`, JSON.stringify(data));

// Dynamic CSS Builder to override HSL variables based on CMS selections
const updateDynamicStyles = (brand) => {
    let styleEl = document.getElementById("dynamic-brand-styles");
    if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "dynamic-brand-styles";
        document.head.appendChild(styleEl);
    }
    styleEl.innerHTML = `
        :root {
            --primary-gold: ${brand.primaryColor || "#C9A84C"};
            --bg-color: ${brand.backgroundColor || "#080808"};
            --text-color: ${brand.textColor || "#E0E0E0"};
            --accent-gold: ${brand.accentColor || "#E8D5A3"};
            --gold-glow: 0 0 20px ${brand.primaryColor}26;
            --gold-glow-intense: 0 0 30px ${brand.primaryColor}59;
        }
        body, html {
            background-color: var(--bg-color);
            color: var(--text-color);
        }
    `;
};

// 4. MAIN APP CONTAINER
function App() {
    // Database State
    const [brand, setBrand] = useState(DEFAULT_BRAND_DATA);
    const [pages, setPages] = useState([]);
    const [services, setServices] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [packages, setPackages] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [leads, setLeads] = useState([]);
    const [categories, setCategories] = useState([]);
    const [settings, setSettings] = useState(DEFAULT_SETTINGS_DATA);
    const [adminPassword, setAdminPassword] = useState("admin123");

    // Routing & UI State
    const [currentRoute, setCurrentRoute] = useState("home"); // home, services, portfolio, about, pricing, blog, consultation, admin, blog-post/:id
    const [selectedBlogPostId, setSelectedBlogPostId] = useState(null);
    const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
    const [toasts, setToasts] = useState([]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Initial Loading & Seeding
    useEffect(() => {
        seedDatabase();
        
        const loadedBrand = getDbData("brand");
        const loadedPages = getDbData("pages");
        const loadedServices = getDbData("services");
        const loadedPortfolio = getDbData("portfolio");
        const loadedTestimonials = getDbData("testimonials");
        const loadedPackages = getDbData("packages");
        const loadedBlogs = getDbData("blogs");
        const loadedLeads = getDbData("leads");
        const loadedCategories = getDbData("categories");
        const loadedSettings = getDbData("settings");
        const loadedPass = localStorage.getItem(`${DB_VERSION}_adminPassword`) || "admin123";

        setBrand(loadedBrand);
        setPages(loadedPages);
        setServices(loadedServices);
        setPortfolio(loadedPortfolio);
        setTestimonials(loadedTestimonials);
        setPackages(loadedPackages);
        setBlogs(loadedBlogs);
        setLeads(loadedLeads);
        setCategories(loadedCategories);
        setSettings(loadedSettings);
        setAdminPassword(loadedPass);

        updateDynamicStyles(loadedBrand);

        // Check if admin is already logged in (session storage)
        if (sessionStorage.getItem("growwith_admin_logged_in") === "true") {
            setIsLoggedIn(true);
        }

        // Listen to hash route updates if any
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === "#admin") {
                setCurrentRoute("admin");
            } else if (hash.startsWith("#blog-post/")) {
                const id = parseInt(hash.replace("#blog-post/", ""), 10);
                setSelectedBlogPostId(id);
                setCurrentRoute("blog-post");
            } else if (hash) {
                const route = hash.replace("#", "");
                setCurrentRoute(route);
            } else {
                setCurrentRoute("home");
            }
            window.scrollTo(0, 0);
        };
        window.addEventListener("hashchange", handleHashChange);
        handleHashChange(); // Run once on startup

        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Sync database edits with state
    const syncDb = (key, data, setter) => {
        saveDbData(key, data);
        setter(data);
    };

    const triggerToast = (message, type = "success") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 3500);
    };

    const handleNavigate = (route, blogId = null) => {
        setMobileMenuOpen(false);
        if (route === "blog-post" && blogId) {
            window.location.hash = `#blog-post/${blogId}`;
        } else {
            window.location.hash = `#${route}`;
        }
    };

    // Filter helper to determine if page is active
    const isPageActive = (pageId) => {
        const p = pages.find(page => page.id === pageId);
        return p ? p.active : false;
    };

    // Filter helper to determine if section is active
    const isSectionActive = (pageId, sectionId) => {
        const p = pages.find(page => page.id === pageId);
        if (!p || !p.active) return false;
        const s = p.sections.find(sect => sect.id === sectionId);
        return s ? s.active : false;
    };

    // CSS styling injector wrapper on brand updates
    const handleSaveBrand = (updatedBrand) => {
        syncDb("brand", updatedBrand, setBrand);
        updateDynamicStyles(updatedBrand);
        triggerToast("Brand settings updated successfully!");
    };

    return (
        <div className="app-container">
            {/* Header: Main site routing wrapper, hide if in admin screen */}
            {currentRoute !== "admin" && (
                <header className="site-header">
                    <div className="header-container">
                        <a href="#home" onClick={() => handleNavigate("home")} className="logo-link">
                            {brand.logoUrl ? (
                                <img src={brand.logoUrl} alt="Logo" className="logo-img" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150"} />
                            ) : null}
                            <span className="logo-text">{brand.agencyName}<span>.</span></span>
                        </a>

                        <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <Icon name={mobileMenuOpen ? "x" : "menu"} size={24} />
                        </button>

                        <nav className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
                            {isPageActive("home") && <li><a href="#home" className={`nav-link ${currentRoute === "home" ? "active" : ""}`} onClick={() => handleNavigate("home")}>Home</a></li>}
                            {isPageActive("services") && <li><a href="#services" className={`nav-link ${currentRoute === "services" ? "active" : ""}`} onClick={() => handleNavigate("services")}>Services</a></li>}
                            {isPageActive("portfolio") && <li><a href="#portfolio" className={`nav-link ${currentRoute === "portfolio" ? "active" : ""}`} onClick={() => handleNavigate("portfolio")}>Portfolio</a></li>}
                            {isPageActive("about") && <li><a href="#about" className={`nav-link ${currentRoute === "about" ? "active" : ""}`} onClick={() => handleNavigate("about")}>About</a></li>}
                            {isPageActive("pricing") && <li><a href="#pricing" className={`nav-link ${currentRoute === "pricing" ? "active" : ""}`} onClick={() => handleNavigate("pricing")}>Pricing</a></li>}
                            {isPageActive("blog") && <li><a href="#blog" className={`nav-link ${currentRoute === "blog" || currentRoute === "blog-post" ? "active" : ""}`} onClick={() => handleNavigate("blog")}>Blog</a></li>}
                            {isPageActive("consultation") && <li><a href="#consultation" className={`nav-link ${currentRoute === "consultation" ? "active" : ""}`} onClick={() => handleNavigate("consultation")}>Consultation</a></li>}
                            
                            {/* Shortcut links inside mobile menu */}
                            <li className="nav-cta">
                                <a href="#consultation" className="btn btn-outline" style={{ padding: "0.5rem 1.2rem", fontSize: "0.75rem" }} onClick={() => handleNavigate("consultation")}>
                                    Book Consult
                                </a>
                            </li>
                        </nav>

                        <div className="nav-cta" style={{ display: mobileMenuOpen ? "none" : "block" }}>
                            <a href="#consultation" className="btn btn-outline" style={{ padding: "0.6rem 1.4rem", fontSize: "0.8rem" }} onClick={() => handleNavigate("consultation")}>
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </header>
            )}

            {/* ROUTING VIEWS */}
            <main style={{ flexGrow: 1 }}>
                {currentRoute === "home" && isPageActive("home") && (
                    <HomePage 
                        pages={pages}
                        services={services}
                        testimonials={testimonials}
                        brand={brand}
                        settings={settings}
                        handleNavigate={handleNavigate}
                        isSectionActive={isSectionActive}
                    />
                )}
                {currentRoute === "services" && isPageActive("services") && (
                    <ServicesPage 
                        pages={pages}
                        services={services}
                        handleNavigate={handleNavigate}
                        isSectionActive={isSectionActive}
                    />
                )}
                {currentRoute === "portfolio" && isPageActive("portfolio") && (
                    <PortfolioPage 
                        pages={pages}
                        portfolio={portfolio}
                        handleNavigate={handleNavigate}
                        isSectionActive={isSectionActive}
                        selectedCaseStudy={selectedCaseStudy}
                        setSelectedCaseStudy={setSelectedCaseStudy}
                    />
                )}
                {currentRoute === "about" && isPageActive("about") && (
                    <AboutPage 
                        pages={pages}
                        handleNavigate={handleNavigate}
                        isSectionActive={isSectionActive}
                    />
                )}
                {currentRoute === "pricing" && isPageActive("pricing") && (
                    <PricingPage 
                        pages={pages}
                        packages={packages}
                        handleNavigate={handleNavigate}
                        isSectionActive={isSectionActive}
                    />
                )}
                {currentRoute === "blog" && isPageActive("blog") && (
                    <BlogPage 
                        pages={pages}
                        blogs={blogs}
                        categories={categories}
                        handleNavigate={handleNavigate}
                        isSectionActive={isSectionActive}
                    />
                )}
                {currentRoute === "blog-post" && isPageActive("blog") && (
                    <BlogPostView 
                        blogId={selectedBlogPostId}
                        blogs={blogs}
                        handleNavigate={handleNavigate}
                    />
                )}
                {currentRoute === "consultation" && isPageActive("consultation") && (
                    <ConsultationPage 
                        pages={pages}
                        settings={settings}
                        leads={leads}
                        setLeads={(updatedLeads) => syncDb("leads", updatedLeads, setLeads)}
                        triggerToast={triggerToast}
                        isSectionActive={isSectionActive}
                    />
                )}
                {currentRoute === "admin" && (
                    <AdminCMS 
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        adminPassword={adminPassword}
                        setAdminPassword={(pass) => {
                            localStorage.setItem(`${DB_VERSION}_adminPassword`, pass);
                            setAdminPassword(pass);
                        }}
                        brand={brand}
                        setBrand={handleSaveBrand}
                        pages={pages}
                        setPages={(updatedPages) => syncDb("pages", updatedPages, setPages)}
                        services={services}
                        setServices={(updatedServices) => syncDb("services", updatedServices, setServices)}
                        portfolio={portfolio}
                        setPortfolio={(updatedPortfolio) => syncDb("portfolio", updatedPortfolio, setPortfolio)}
                        testimonials={testimonials}
                        setTestimonials={(updatedTestimonials) => syncDb("testimonials", updatedTestimonials, setTestimonials)}
                        packages={packages}
                        setPackages={(updatedPackages) => syncDb("packages", updatedPackages, setPackages)}
                        blogs={blogs}
                        setBlogs={(updatedBlogs) => syncDb("blogs", updatedBlogs, setBlogs)}
                        leads={leads}
                        setLeads={(updatedLeads) => syncDb("leads", updatedLeads, setLeads)}
                        categories={categories}
                        setCategories={(updatedCategories) => syncDb("categories", updatedCategories, setCategories)}
                        settings={settings}
                        setSettings={(updatedSettings) => syncDb("settings", updatedSettings, setSettings)}
                        triggerToast={triggerToast}
                        handleNavigate={handleNavigate}
                    />
                )}
            </main>

            {/* Footer, hide if in admin CMS screen */}
            {currentRoute !== "admin" && (
                <footer className="site-footer">
                    <div className="footer-container">
                        <div className="footer-brand">
                            <div className="footer-logo">{brand.agencyName}<span>.</span></div>
                            <p>{brand.tagline}</p>
                            <p style={{ fontSize: "0.85rem", color: "#666" }}>
                                Rajkot, Gujarat, India
                            </p>
                            <div className="footer-socials">
                                {settings.instagramUrl && (
                                    <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <Icon name="link" size={16} />
                                    </a>
                                )}
                                {settings.facebookUrl && (
                                    <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                        <Icon name="messageSquare" size={16} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="footer-column">
                            <h4>Agency</h4>
                            <ul>
                                {isPageActive("about") && <li><a href="#about" onClick={() => handleNavigate("about")}>Our Story</a></li>}
                                {isPageActive("portfolio") && <li><a href="#portfolio" onClick={() => handleNavigate("portfolio")}>Our Case Studies</a></li>}
                                {isPageActive("pricing") && <li><a href="#pricing" onClick={() => handleNavigate("pricing")}>Transparency / pricing</a></li>}
                                {isPageActive("blog") && <li><a href="#blog" onClick={() => handleNavigate("blog")}>Insights Hub</a></li>}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul>
                                <li><span style={{ color: "#8E8E8E", fontSize: "0.9rem" }}>WhatsApp:</span><br/><a href={`https://wa.me/${settings.whatsappNumber.replace("+", "")}`} style={{ color: "#fff" }}>{settings.whatsappNumber}</a></li>
                                <li><span style={{ color: "#8E8E8E", fontSize: "0.9rem" }}>Email:</span><br/><a href={`mailto:${settings.contactEmail}`} style={{ color: "#fff" }}>{settings.contactEmail}</a></li>
                            </ul>
                        </div>

                        <div className="footer-column footer-newsletter">
                            <h4>Subscribe</h4>
                            <p>Get exclusive growth frameworks twice a month directly in your inbox.</p>
                            <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); triggerToast("Thank you for subscribing! Check your email soon."); e.target.reset(); }}>
                                <input type="email" placeholder="Your primary email" required />
                                <button type="submit">
                                    <Icon name="arrowRight" size={16} />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} {brand.agencyName}. All Rights Reserved. Crafted with Gold.</p>
                        <div className="footer-bottom-links">
                            <a href="#admin" onClick={() => handleNavigate("admin")} style={{ opacity: 0.5, fontSize: "0.8rem" }}>Admin Access</a>
                        </div>
                    </div>
                </footer>
            )}

            {/* Render Toasts alerts */}
            <div className="toast-container">
                {toasts.map((t) => (
                    <div key={t.id} className="toast">
                        <Icon name="check" size={16} style={{ color: "#C9A84C" }} />
                        <span>{t.message}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ==========================================================================
   FRONTEND PAGE VIEW MODULES
   ========================================================================== */

// 1. HOME PAGE
function HomePage({ pages, services, testimonials, brand, settings, handleNavigate, isSectionActive }) {
    const pageData = pages.find((p) => p.id === "home");
    const getSection = (sectId) => pageData.sections.find((s) => s.id === sectId);

    return (
        <div>
            {/* HERO SECTION */}
            {isSectionActive("home", "hero") && (
                <section className="hero-section" style={{ backgroundImage: "url('./assets/hero_bg.jpg')" }}>
                    <div className="hero-overlay"></div>
                    <div className="geometric-bg">
                        <svg viewBox="0 0 100 100" fill="none" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="0.1">
                            <circle cx="50" cy="50" r="40" />
                            <circle cx="50" cy="50" r="30" />
                            <rect x="20" y="20" width="60" height="60" transform="rotate(45 50 50)" />
                            <line x1="50" y1="0" x2="50" y2="100" />
                            <line x1="0" y1="50" x2="100" y2="50" />
                        </svg>
                    </div>
                    
                    <div className="hero-container">
                        <div className="hero-text">
                            <div className="hero-agency-tag">
                                <Icon name="sparkles" size={14} /> Based in Rajkot, Gujarat
                            </div>
                            <h1 className="hero-title">
                                {getSection("hero").content.headline}{" "}
                                <span className="accent-serif">{getSection("hero").content.headlineAccent}</span>
                            </h1>
                            <p className="hero-subtitle">
                                {getSection("hero").content.subtext}
                            </p>
                            <div className="hero-ctas">
                                <button className="btn btn-primary" onClick={() => handleNavigate("consultation")}>
                                    {getSection("hero").content.ctaText}
                                </button>
                                <button className="btn btn-secondary" onClick={() => handleNavigate("services")}>
                                    Explore Services
                                </button>
                            </div>
                        </div>
                        
                        <div className="hero-visual-panel">
                            <div className="hero-visual-box">
                                <div className="hero-visual-box-inner">
                                    <img src={brand.logoUrl} className="hero-visual-logo" alt="Agency Logo" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* SERVICES TICKER TICKER */}
            {isSectionActive("home", "marquee") && (
                <div className="marquee-container">
                    <div className="marquee-content">
                        {[...getSection("marquee").content.services, ...getSection("marquee").content.services, ...getSection("marquee").content.services].map((serv, index) => (
                            <span key={index} className="marquee-item">
                                <span className="marquee-star">✦</span>
                                {serv}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* WHAT WE DO GRID */}
            {isSectionActive("home", "what_we_do") && (
                <section className="section">
                    <div className="section-header">
                        <span className="section-tag">Services Overview</span>
                        <h2 className="section-title">{getSection("what_we_do").content.title}</h2>
                        <p className="section-subtitle">{getSection("what_we_do").content.subtitle}</p>
                    </div>
                    
                    <div className="services-grid">
                        {services.map((item) => (
                            <div key={item.id} className="service-card">
                                <div className="service-icon-box">
                                    <span>{item.icon}</span>
                                </div>
                                <h3 className="service-title">{item.title}</h3>
                                <p className="service-desc">{item.desc}</p>
                                <div className="service-tags">
                                    {item.tags.map((tg, i) => (
                                        <span key={i} className="service-tag-item">{tg}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* WHY US KEY POINTS */}
            {isSectionActive("home", "why_us") && (
                <section className="section" style={{ backgroundColor: "#0b0b0b", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
                    <div className="section-header">
                        <span className="section-tag">Our Philosophy</span>
                        <h2 className="section-title">{getSection("why_us").content.title}</h2>
                        <p className="section-subtitle">{getSection("why_us").content.subtitle}</p>
                    </div>
                    
                    <div className="why-container">
                        {getSection("why_us").content.points.map((pt, index) => (
                            <div key={index} className="why-card">
                                <span className="why-number">{pt.number}</span>
                                <h3 className="why-title">{pt.title}</h3>
                                <p className="why-desc">{pt.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* RESULTS STAT COUNTERS */}
            {isSectionActive("home", "results") && (
                <ResultsCountersSection section={getSection("results")} />
            )}

            {/* TESTIMONIALS SLIDER */}
            {isSectionActive("home", "testimonials") && (
                <TestimonialsSliderSection testimonials={testimonials} section={getSection("testimonials")} />
            )}

            {/* FINAL CTA SECTION */}
            {isSectionActive("home", "final_cta") && (
                <section className="section section-dark-gold">
                    <div className="final-cta-container">
                        <h2 className="final-cta-title">{getSection("final_cta").content.title}</h2>
                        <p className="final-cta-desc">{getSection("final_cta").content.subtext}</p>
                        <button className="btn btn-primary" onClick={() => handleNavigate("consultation")}>
                            {getSection("final_cta").content.ctaText}
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
}

// Results Counters Animation Sub-component
function ResultsCountersSection({ section }) {
    const [counts, setCounts] = useState(section.content.counters.map(() => 0));
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                animateCounters();
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, section]);

    const animateCounters = () => {
        const targetNumbers = section.content.counters.map(c => parseInt(c.number, 10));
        const duration = 2000; // ms
        const steps = 50;
        const stepTime = duration / steps;
        
        let step = 0;
        const timer = setInterval(() => {
            step++;
            setCounts(targetNumbers.map(target => {
                const current = Math.floor((target / steps) * step);
                return current > target ? target : current;
            }));
            
            if (step >= steps) {
                clearInterval(timer);
                setCounts(targetNumbers);
            }
        }, stepTime);
    };

    return (
        <section className="section" ref={sectionRef}>
            <div className="section-header">
                <span className="section-tag">Performance Ledger</span>
                <h2 className="section-title">{section.content.title}</h2>
                <p className="section-subtitle">{section.content.subtitle}</p>
            </div>
            
            <div className="results-container">
                {section.content.counters.map((item, index) => (
                    <div key={index} className="result-card">
                        <span className="result-number">
                            {counts[index]}{item.suffix}
                        </span>
                        <span className="result-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Testimonials Slider Sub-component
function TestimonialsSliderSection({ testimonials, section }) {
    const activeTestimonials = testimonials.filter(t => t.show).sort((a, b) => (a.order || 0) - (b.order || 0));
    const [currentIdx, setCurrentIdx] = useState(0);

    const nextSlide = () => {
        setCurrentIdx((prev) => (prev === activeTestimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIdx((prev) => (prev === 0 ? activeTestimonials.length - 1 : prev - 1));
    };

    if (activeTestimonials.length === 0) return null;

    return (
        <section className="section" style={{ backgroundColor: "#050505", borderTop: "1px solid var(--border-color)" }}>
            <div className="section-header">
                <span className="section-tag">Endorsements</span>
                <h2 className="section-title">{section.content.title}</h2>
                <p className="section-subtitle">{section.content.subtitle}</p>
            </div>
            
            <div className="testimonials-slider-container">
                <div className="testimonials-track" style={{ transform: `translateX(-${currentIdx * 100}%)` }}>
                    {activeTestimonials.map((test) => (
                        <div key={test.id} className="testimonial-slide">
                            <p className="testimonial-quote">
                                "{test.quote}"
                            </p>
                            <div className="testimonial-client">
                                <img src={test.photo} alt={test.clientName} className="testimonial-photo" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"} />
                                <div>
                                    <h4 className="testimonial-name">{test.clientName}</h4>
                                    <span className="testimonial-biz">{test.business}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {activeTestimonials.length > 1 && (
                    <div className="slider-controls">
                        <button className="slider-btn" onClick={prevSlide}>
                            <Icon name="arrowLeft" size={16} />
                        </button>
                        <button className="slider-btn" onClick={nextSlide}>
                            <Icon name="arrowRight" size={16} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

// 2. SERVICES PAGE
function ServicesPage({ pages, services, handleNavigate, isSectionActive }) {
    const pageData = pages.find((p) => p.id === "services");
    const heroSection = pageData.sections.find((s) => s.id === "services_hero");

    return (
        <div>
            {/* HERO */}
            {isSectionActive("services", "services_hero") && (
                <section className="page-hero">
                    <div className="page-hero-overlay"></div>
                    <div className="page-hero-content">
                        <span className="section-tag">GrowWith Offerings</span>
                        <h1 className="page-hero-title">{heroSection.content.headline}</h1>
                        <p className="page-hero-sub">{heroSection.content.subtext}</p>
                    </div>
                </section>
            )}

            {/* FULL DETAIL SERVICES SECTIONS */}
            <section className="section">
                <div className="detailed-services-container">
                    {services.map((serv, index) => (
                        <div key={serv.id} className="detail-service-section">
                            <div className="service-left-panel">
                                <div className="service-meta">
                                    <span className="service-num">0{index + 1}</span>
                                    <span style={{ fontSize: "2rem", color: "var(--primary-gold)" }}>{serv.icon}</span>
                                </div>
                                <h2 className="detail-service-title">{serv.title}</h2>
                                <div className="service-tags" style={{ marginTop: "1rem" }}>
                                    {serv.tags.map((t, idx) => (
                                        <span key={idx} className="service-tag-item">{t}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="service-right-content" style={{ marginTop: "1.2rem" }}>
                                <p className="detail-service-desc" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#B8B8B8", marginBottom: "2.5rem" }}>
                                    {serv.desc}
                                </p>
                                
                                <h4 style={{ color: "#fff", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>
                                    Key Focus Areas
                                </h4>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <li style={{ display: "flex", gap: "0.8rem", fontSize: "0.95rem" }}>
                                        <Icon name="check" size={16} style={{ color: "var(--primary-gold)", marginTop: "3px" }} />
                                        <span>Bespoke custom layouts styled matching luxury brand identity guidelines.</span>
                                    </li>
                                    <li style={{ display: "flex", gap: "0.8rem", fontSize: "0.95rem" }}>
                                        <Icon name="check" size={16} style={{ color: "var(--primary-gold)", marginTop: "3px" }} />
                                        <span>Engineered to target high-net-worth customer segments in Rajkot and regional hubs.</span>
                                    </li>
                                    <li style={{ display: "flex", gap: "0.8rem", fontSize: "0.95rem" }}>
                                        <Icon name="check" size={16} style={{ color: "var(--primary-gold)", marginTop: "3px" }} />
                                        <span>Transparent dashboards monitoring clicks, inquiries, and customer feedback.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="section section-dark-gold">
                <div className="final-cta-container">
                    <h2 className="final-cta-title">Require a Custom Digital Auditing?</h2>
                    <p className="final-cta-desc">Let us analyze your Google Maps rank and social layout grid. Completely free consultation call.</p>
                    <button className="btn btn-primary" onClick={() => handleNavigate("consultation")}>
                        Claim Free Audit Session
                    </button>
                </div>
            </section>
        </div>
    );
}

// 3. PORTFOLIO PAGE
function PortfolioPage({ pages, portfolio, handleNavigate, isSectionActive, selectedCaseStudy, setSelectedCaseStudy }) {
    const pageData = pages.find((p) => p.id === "portfolio");
    const heroSection = pageData.sections.find((s) => s.id === "portfolio_hero");
    const [activeTab, setActiveTab] = useState("All");

    // Industry Tabs filter
    const industryTabs = ["All", "Jewellery", "Dairy", "Interior Design"];

    const filteredPortfolio = useMemo(() => {
        let items = portfolio.filter(item => item.show);
        if (activeTab !== "All") {
            items = items.filter(item => item.industry.toLowerCase() === activeTab.toLowerCase());
        }
        return items;
    }, [portfolio, activeTab]);

    return (
        <div>
            {/* HERO */}
            {isSectionActive("portfolio", "portfolio_hero") && (
                <section className="page-hero">
                    <div className="page-hero-overlay"></div>
                    <div className="page-hero-content">
                        <span className="section-tag">Case Ledger</span>
                        <h1 className="page-hero-title">{heroSection.content.headline}</h1>
                        <p className="page-hero-sub">{heroSection.content.subtext}</p>
                    </div>
                </section>
            )}

            {/* FILTER TABS */}
            <section className="section">
                <div className="portfolio-filter-tabs">
                    {industryTabs.map((tab) => (
                        <button 
                            key={tab} 
                            className={`filter-tab ${activeTab === tab ? "active" : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* CASE STUDY CARDS GRID */}
                <div className="portfolio-grid">
                    {filteredPortfolio.map((item) => (
                        <div key={item.id} className="case-study-card" onClick={() => setSelectedCaseStudy(item)}>
                            <div className="case-study-image-box">
                                <span className="case-study-industry-badge">{item.industry}</span>
                                <img src={item.afterImage} alt={item.clientName} className="case-study-img" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300"} />
                            </div>
                            <div className="case-study-info">
                                <h3 className="case-study-client">{item.clientName}</h3>
                                <p className="case-study-problem">
                                    {item.problem.length > 105 ? `${item.problem.substring(0, 105)}...` : item.problem}
                                </p>
                                <div className="case-study-metrics-summary">
                                    <div>
                                        <span className="metric-highlight">{item.metrics.main}</span>
                                        <br/>
                                        <span className="metric-label">{item.metrics.sub}</span>
                                    </div>
                                    <Icon name="arrowRight" size={16} style={{ color: "var(--primary-gold)" }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CASE STUDY MODAL DETAILS */}
            {selectedCaseStudy && (
                <div className="modal-overlay" onClick={() => setSelectedCaseStudy(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedCaseStudy(null)}>
                            <Icon name="x" size={18} />
                        </button>
                        <img src={selectedCaseStudy.afterImage} alt={selectedCaseStudy.clientName} className="modal-hero-image" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500"} />
                        
                        <div className="modal-body">
                            <div className="modal-header-meta">
                                <h2 className="modal-title">{selectedCaseStudy.clientName}</h2>
                                <span className="modal-industry">{selectedCaseStudy.industry}</span>
                            </div>
                            
                            {/* Metric banner */}
                            <div className="modal-metrics-strip">
                                <div className="modal-metric-box">
                                    <span className="modal-metric-num">{selectedCaseStudy.metrics.main}</span>
                                    <span className="modal-metric-lbl">{selectedCaseStudy.metrics.sub}</span>
                                </div>
                                <div className="modal-metric-box">
                                    <span className="modal-metric-num">Rank #1</span>
                                    <span className="modal-metric-lbl">Local GBP Keyword</span>
                                </div>
                                <div className="modal-metric-box">
                                    <span className="modal-metric-num">30 Days</span>
                                    <span className="modal-metric-lbl">Auditing Cycle</span>
                                </div>
                            </div>

                            {/* Details text */}
                            <div className="modal-details-grid">
                                <div className="modal-detail-block">
                                    <h4>The Challenge</h4>
                                    <p>{selectedCaseStudy.problem}</p>
                                </div>
                                <div className="modal-detail-block">
                                    <h4>The Solution</h4>
                                    <p>{selectedCaseStudy.solution}</p>
                                </div>
                                <div className="modal-detail-block" style={{ gridColumn: "span 2" }}>
                                    <h4>The Outcome</h4>
                                    <p>{selectedCaseStudy.result}</p>
                                </div>
                            </div>

                            {/* Before / After comparisons */}
                            {selectedCaseStudy.beforeImage && (
                                <div className="modal-before-after">
                                    <div className="comparison-box">
                                        <span>Initial Grid Presence</span>
                                        <img src={selectedCaseStudy.beforeImage} alt="Before Grid" className="comparison-img" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300"} />
                                    </div>
                                    <div className="comparison-box">
                                        <span>Post-Campaign Redesign</span>
                                        <img src={selectedCaseStudy.afterImage} alt="After Design" className="comparison-img" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300"} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* BOTTOM CTA */}
            <section className="section section-dark-gold">
                <div className="final-cta-container">
                    <h2 className="final-cta-title">Your Brand Could Be Next</h2>
                    <p className="final-cta-desc">Let's craft a luxury campaign structure that targets conversions and elevates visual authority.</p>
                    <button className="btn btn-primary" onClick={() => handleNavigate("consultation")}>
                        Start Your Project
                    </button>
                </div>
            </section>
        </div>
    );
}

// 4. ABOUT PAGE
function AboutPage({ pages, handleNavigate, isSectionActive }) {
    const pageData = pages.find((p) => p.id === "about");
    const heroSection = pageData.sections.find((s) => s.id === "about_hero");

    const tools = [
        { name: "Midjourney", desc: "For cinematic photo prompts and campaign concept boards." },
        { name: "ChatGPT (Custom LLM)", desc: "Tailored brand copywriting & local script guidelines." },
        { name: "Premiere Pro / AI", desc: "Audio synchronization and automatic caption creation." },
        { name: "Figma", desc: "Grid prototype layouts and logo typography testing." }
    ];

    return (
        <div>
            {/* HERO */}
            {isSectionActive("about", "about_hero") && (
                <section className="page-hero">
                    <div className="page-hero-overlay"></div>
                    <div className="page-hero-content">
                        <span className="section-tag">Agency Narrative</span>
                        <h1 className="page-hero-title">{heroSection.content.headline}</h1>
                        <p className="page-hero-sub">{heroSection.content.subtext}</p>
                    </div>
                </section>
            )}

            {/* PROCESS TIMELINE */}
            {isSectionActive("about", "process") && (
                <section className="section">
                    <div className="section-header">
                        <span className="section-tag">Strategic Path</span>
                        <h2 className="section-title">{pageData.sections.find(s=>s.id==="process").content.title}</h2>
                        <p className="section-subtitle">{pageData.sections.find(s=>s.id==="process").content.subtitle}</p>
                    </div>
                    
                    <div className="process-timeline">
                        {pageData.sections.find(s=>s.id==="process").content.steps.map((step, index) => (
                            <div key={index} className="process-step">
                                <div className="process-node"></div>
                                <span className="process-num">Phase 0{index + 1}</span>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* TOOLSTACK STACK */}
            {isSectionActive("about", "toolstack") && (
                <section className="section" style={{ backgroundColor: "#0b0b0b", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
                    <div className="section-header">
                        <span className="section-tag">AI stack</span>
                        <h2 className="section-title">{pageData.sections.find(s=>s.id==="toolstack").content.title}</h2>
                        <p className="section-subtitle">{pageData.sections.find(s=>s.id==="toolstack").content.subtitle}</p>
                    </div>
                    
                    <div className="toolstack-grid">
                        {tools.map((item, index) => (
                            <div key={index} className="tool-card">
                                <div className="tool-logo-placeholder">
                                    <Icon name="zap" size={20} />
                                </div>
                                <h4 className="tool-name">{item.name}</h4>
                                <p className="tool-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* WHY SOLO AGENCY */}
            <section className="section">
                <div className="solo-agency-grid">
                    <div className="solo-left">
                        <h3>Built for Speed & Premium Quality</h3>
                        <p>
                            Traditional agencies delegate design tasks to lower-tier designers, leading to a loss in strategy and premium quality control.
                        </p>
                        <p>
                            At GrowWith, you collaborate directly with the strategist, ensuring that every caption, design grid, and ad configuration aligns perfectly with your revenue outcomes.
                        </p>
                    </div>
                    <div className="solo-points">
                        <div className="solo-point-item">
                            <Icon name="check" className="solo-point-icon" size={20} />
                            <div>
                                <h4 className="solo-point-title">Zero Middlemen</h4>
                                <p className="solo-point-desc">Direct daily communications via private WhatsApp group thread. Immediate feedback cycles.</p>
                            </div>
                        </div>
                        <div className="solo-point-item">
                            <Icon name="check" className="solo-point-icon" size={20} />
                            <div>
                                <h4 className="solo-point-title">Higher Content Velocity</h4>
                                <p className="solo-point-desc">AI tools coupled with premium human aesthetic styling means campaigns launch in 48 hours.</p>
                            </div>
                        </div>
                        <div className="solo-point-item">
                            <Icon name="check" className="solo-point-icon" size={20} />
                            <div>
                                <h4 className="solo-point-title">Rajkot Local Nuances</h4>
                                <p className="solo-point-desc">We understand the local market demographics, regional festival peaks, and consumer retail habits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="section section-dark-gold">
                <div className="final-cta-container">
                    <h2 className="final-cta-title">Experience the Solo Agency Difference</h2>
                    <p className="final-cta-desc">Direct strategic support. Zero sales pitches. Book your review session today.</p>
                    <button className="btn btn-primary" onClick={() => handleNavigate("consultation")}>
                        Claim Direct Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}

// 5. PRICING PAGE
function PricingPage({ pages, packages, handleNavigate, isSectionActive }) {
    const pageData = pages.find((p) => p.id === "pricing");
    const heroSection = pageData.sections.find((s) => s.id === "pricing_hero");

    const faqs = [
        { q: "Is the advertising budget included in these packages?", a: "No. Advertising budgets (Meta, Instagram, Google Ads) are always kept separate and paid directly by the client using their card. This ensures 100% transparency. GrowWith only charges a fixed execution retainer fee." },
        { q: "Do you require long-term contracts?", a: "We work on a simple month-to-month agreement. You can pause or cancel our retainer at any time with a 15-day notice. We believe in earning our spot every single month." },
        { q: "Will you work with our direct business competitors?", a: "To ensure maximum impact and data ethics, we offer complete industry exclusivity in Rajkot. If we sign a premium jewellery brand as partner, we will not partner with another retail jeweler in Rajkot during the campaign lifecycle." },
        { q: "Who conducts the photo & reels video shoots?", a: "For video shoots, we coordinate high-definition capture sessions at your showroom. If you prefer to capture raw footage, we supply customized script prompts and editing services." },
        { q: "What happens after I submit a consultation booking?", a: "We will review your digital profiles and Maps layout, and contact you via WhatsApp in 24 hours to schedule a 30-minute call. No commitment required." }
    ];

    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <div>
            {/* HERO */}
            {isSectionActive("pricing", "pricing_hero") && (
                <section className="page-hero">
                    <div className="page-hero-overlay"></div>
                    <div className="page-hero-content">
                        <span className="section-tag">Investment Guide</span>
                        <h1 className="page-hero-title">{heroSection.content.headline}</h1>
                        <p className="page-hero-sub">{heroSection.content.subtext}</p>
                    </div>
                </section>
            )}

            {/* PRICING GRIDS */}
            <section className="section">
                <div className="pricing-grid">
                    {packages.filter(pkg => pkg.show).map((pkg) => (
                        <div key={pkg.id} className={`pricing-card ${pkg.recommended ? "recommended" : ""}`}>
                            {pkg.recommended && (
                                <span className="recommended-badge">Recommended</span>
                            )}
                            <div className="pricing-header">
                                <h3 className="package-name">{pkg.name}</h3>
                                <p className="package-tagline">{pkg.tagline}</p>
                                <div className="pricing-price-mock">Get Quote</div>
                            </div>
                            
                            <ul className="features-list">
                                {pkg.features.map((feat, index) => (
                                    <li key={index} className="feature-item">
                                        <Icon name="check" className="feature-icon-check" size={16} />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <button 
                                className={`btn ${pkg.recommended ? "btn-primary" : "btn-outline"}`}
                                onClick={() => handleNavigate("consultation")}
                            >
                                Request custom quote
                            </button>
                        </div>
                    ))}
                </div>

                <div className="pricing-disclaimer">
                    <Icon name="shield" size={14} style={{ color: "var(--primary-gold)", marginRight: "5px", verticalAlign: "middle" }} />
                    <strong>Disclaimer:</strong> Media and advertising budgets are always client-side and billed directly by Meta/Google.
                </div>
            </section>

            {/* FAQS ACCORDION */}
            <section className="section" style={{ backgroundColor: "#0b0b0b", borderTop: "1px solid var(--border-color)" }}>
                <div className="section-header">
                    <span className="section-tag">Common Inquiries</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">Transparent answers about how we execute campaigns.</p>
                </div>
                
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeFaq === index ? "active" : ""}`}
                        >
                            <button 
                                className="faq-question-btn"
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            >
                                <span>{faq.q}</span>
                                <Icon name="chevronDown" className="faq-icon-arrow" size={18} />
                            </button>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

// 6. BLOG PAGE
function BlogPage({ pages, blogs, categories, handleNavigate, isSectionActive }) {
    const pageData = pages.find((p) => p.id === "blog");
    const heroSection = pageData.sections.find((s) => s.id === "blog_hero");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredBlogs = useMemo(() => {
        let items = blogs.filter(b => b.status === "published");
        if (selectedCategory !== "All") {
            items = items.filter(b => b.category.toLowerCase() === selectedCategory.toLowerCase());
        }
        return items;
    }, [blogs, selectedCategory]);

    return (
        <div>
            {/* HERO */}
            {isSectionActive("blog", "blog_hero") && (
                <section className="page-hero">
                    <div className="page-hero-overlay"></div>
                    <div className="page-hero-content">
                        <span className="section-tag">GrowWith Library</span>
                        <h1 className="page-hero-title">{heroSection.content.headline}</h1>
                        <p className="page-hero-sub">{heroSection.content.subtext}</p>
                    </div>
                </section>
            )}

            {/* FILTER CATEGORIES */}
            <section className="section">
                <div className="blog-filter-tabs">
                    <button 
                        className={`filter-tab ${selectedCategory === "All" ? "active" : ""}`}
                        onClick={() => setSelectedCategory("All")}
                    >
                        All Articles
                    </button>
                    {categories.map((cat) => (
                        <button 
                            key={cat} 
                            className={`filter-tab ${selectedCategory === cat ? "active" : ""}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* BLOG GRID */}
                <div className="blog-grid">
                    {filteredBlogs.map((post) => (
                        <div key={post.id} className="blog-card" style={{ cursor: "pointer" }} onClick={() => handleNavigate("blog-post", post.id)}>
                            <img src={post.thumbnail} alt={post.title} className="blog-card-image" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300"} />
                            <div className="blog-card-body">
                                <div className="blog-card-meta">
                                    <span className="blog-card-category">{post.category}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <div className="blog-card-btn">
                                    <span>Read Article</span>
                                    <Icon name="arrowRight" size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* NEWSLETTER SIGNUP */}
            <section className="section section-dark-gold">
                <div className="final-cta-container" style={{ padding: "2rem 0" }}>
                    <h2 className="final-cta-title" style={{ fontSize: "2.5rem" }}>Get Free Growth Frameworks</h2>
                    <p className="final-cta-desc">Join local founders reading our private marketing logs. Delivered twice a month. Unsubscribe anytime.</p>
                    
                    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                        <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert("Subscription successful!"); e.target.reset(); }}>
                            <input type="email" placeholder="Your best email address" required style={{ borderRight: "none" }} />
                            <button type="submit" className="btn btn-primary" style={{ padding: "0 1.5rem" }}>
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Single Blog Post Reader View
function BlogPostView({ blogId, blogs, handleNavigate }) {
    const post = blogs.find(b => b.id === blogId);

    if (!post) {
        return (
            <div className="single-blog-container" style={{ textAlign: "center", padding: "10rem 2rem" }}>
                <h2>Article Not Found</h2>
                <a href="#blog" onClick={() => handleNavigate("blog")} className="btn btn-outline" style={{ marginTop: "2rem" }}>Back to Blog</a>
            </div>
        );
    }

    return (
        <article className="single-blog-container">
            <a href="#blog" onClick={() => handleNavigate("blog")} className="single-blog-back-btn">
                <Icon name="arrowLeft" size={14} style={{ verticalAlign: "middle", marginRight: "5px" }} />
                Back to Blog
            </a>
            
            <div className="single-blog-header">
                <span className="single-blog-category">{post.category}</span>
                <h1 className="single-blog-title">{post.title}</h1>
                <div className="single-blog-meta">
                    <span>Published: {post.date || "July 2026"}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
            </div>
            
            <img src={post.thumbnail} alt={post.title} className="single-blog-hero-image" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800"} />
            
            {/* Render blog markup body */}
            <div 
                className="single-blog-content" 
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}

// 7. BOOK A CONSULTATION PAGE
function ConsultationPage({ pages, settings, leads, setLeads, triggerToast, isSectionActive }) {
    const pageData = pages.find((p) => p.id === "consultation");
    const heroSection = pageData.sections.find((s) => s.id === "consultation_hero");

    const [formData, setFormData] = useState({
        fullName: "",
        businessName: "",
        whatsappNumber: "",
        service: "Content & Posts",
        bestTime: "Morning (10 AM - 12 PM)",
        message: ""
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Push lead to simulated database
        const newLead = {
            id: Date.now(),
            name: formData.fullName,
            businessName: formData.businessName,
            whatsappNumber: formData.whatsappNumber,
            service: formData.service,
            bestTime: formData.bestTime,
            message: formData.message,
            date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
            status: "new"
        };

        const updatedLeads = [newLead, ...leads];
        setLeads(updatedLeads);

        triggerToast("Consultation request submitted! We will call you within 24 hours.");

        // Clear form
        setFormData({
            fullName: "",
            businessName: "",
            whatsappNumber: "",
            service: "Content & Posts",
            bestTime: "Morning (10 AM - 12 PM)",
            message: ""
        });
    };

    return (
        <div>
            {/* HERO */}
            {isSectionActive("consultation", "consultation_hero") && (
                <section className="page-hero">
                    <div className="page-hero-overlay"></div>
                    <div className="page-hero-content">
                        <span className="section-tag">Growth Consulting</span>
                        <h1 className="page-hero-title">{heroSection.content.headline}</h1>
                        <p className="page-hero-sub">{heroSection.content.subtext}</p>
                    </div>
                </section>
            )}

            {/* FORM LAYOUT */}
            <section className="section">
                <div className="consultation-layout">
                    <div className="consultation-form-panel">
                        <h3>Tell Us About Your Brand</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input 
                                        type="text" 
                                        required 
                                        className="form-input"
                                        placeholder="Rajesh Patel"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Business Name</label>
                                    <input 
                                        type="text" 
                                        required 
                                        className="form-input"
                                        placeholder="Patel Jewellers"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">WhatsApp Number</label>
                                    <input 
                                        type="tel" 
                                        required 
                                        className="form-input"
                                        placeholder="+91 XXXXX XXXXX"
                                        value={formData.whatsappNumber}
                                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Service Interested In</label>
                                    <select 
                                        className="form-select"
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option>Premium Profile & Brand Management</option>
                                        <option>Content & Posts</option>
                                        <option>Video & Reels</option>
                                        <option>Google Business Profile Optimization</option>
                                        <option>Seasonal Campaigns</option>
                                        <option>Meta & Google Ads</option>
                                    </select>
                                </div>
                                <div className="form-group form-group-full">
                                    <label className="form-label">Best Time To Call</label>
                                    <select 
                                        className="form-select"
                                        value={formData.bestTime}
                                        onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                                    >
                                        <option>Morning (10 AM - 12 PM)</option>
                                        <option>Afternoon (12 PM - 4 PM)</option>
                                        <option>Evening (4 PM - 7 PM)</option>
                                    </select>
                                </div>
                                <div className="form-group form-group-full">
                                    <label className="form-label">Message / Brand Brief</label>
                                    <textarea 
                                        className="form-textarea"
                                        placeholder="Describe your goals, competitor brands you admire, or current bottlenecks..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>
                            
                            <div className="form-submit-row">
                                <button type="submit" className="btn btn-primary">
                                    Submit Consultation Review
                                </button>
                                
                                <a 
                                    href={`https://wa.me/${settings.whatsappNumber.replace("+", "")}?text=Hi%20GrowWith%20Agency%2C%20I'd%20like%20to%20book%20a%20free%20consultation%20for%20my%20business.`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="direct-whatsapp-cta"
                                >
                                    <Icon name="phone" size={16} style={{ color: "#25D366" }} />
                                    <span>Direct WhatsApp Book</span>
                                </a>
                            </div>
                        </form>
                    </div>

                    {/* STEPS & TRUST CARD */}
                    <div className="consultation-info-panel">
                        <div className="info-block">
                            <h4>What Happens Next?</h4>
                            <div className="consultation-steps">
                                <div className="consultation-step-item">
                                    <span className="c-step-num">01</span>
                                    <div className="c-step-info">
                                        <h5>Details Review</h5>
                                        <p>We review your active Instagram layout grids, local competitors, and Google Map pack positions.</p>
                                    </div>
                                </div>
                                <div className="consultation-step-item">
                                    <span className="c-step-num">02</span>
                                    <div className="c-step-info">
                                        <h5>Discovery Message</h5>
                                        <p>We send you a WhatsApp text within 24 hours suggesting a slot for our 30-minute review call.</p>
                                    </div>
                                </div>
                                <div className="consultation-step-item">
                                    <span className="c-step-num">03</span>
                                    <div className="c-step-info">
                                        <h5>Bespoke Blueprint</h5>
                                        <p>On the call, we share a free 30-day marketing layout custom designed for your local business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TRUST SIGNALS */}
                        <div className="info-block">
                            <h4>Trust Signposts</h4>
                            <div className="trust-signals-grid">
                                <div className="trust-signal-card">
                                    <Icon name="zap" className="trust-signal-icon" size={20} />
                                    <span className="trust-signal-title">24Hr Reply</span>
                                </div>
                                <div className="trust-signal-card">
                                    <Icon name="sparkles" className="trust-signal-icon" size={20} />
                                    <span className="trust-signal-title">Free call</span>
                                </div>
                                <div className="trust-signal-card">
                                    <Icon name="shield" className="trust-signal-icon" size={20} />
                                    <span className="trust-signal-title">No locking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* ==========================================================================
   ADMIN PANEL MODULE
   ========================================================================== */
function AdminCMS({ 
    isLoggedIn, setIsLoggedIn, adminPassword, setAdminPassword,
    brand, setBrand, pages, setPages, services, setServices,
    portfolio, setPortfolio, testimonials, setTestimonials,
    packages, setPackages, blogs, setBlogs, leads, setLeads,
    categories, setCategories, settings, setSettings,
    triggerToast, handleNavigate 
}) {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [adminActiveTab, setAdminActiveTab] = useState("dashboard"); // dashboard, pages, content, blog, portfolio, testimonials, leads, packages, settings

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (loginUsername === "admin" && loginPass === adminPassword) {
            setIsLoggedIn(true);
            sessionStorage.setItem("growwith_admin_logged_in", "true");
            triggerToast("Admin authentication successful!");
        } else {
            alert("Invalid administrative credentials!");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem("growwith_admin_logged_in");
        triggerToast("Logged out from admin panel.");
    };

    // 1. ADMIN LOGIN VIEW
    if (!isLoggedIn) {
        return (
            <section className="admin-login-layout" style={{ backgroundImage: "url('./assets/hero_bg.jpg')" }}>
                <div className="hero-overlay"></div>
                <div className="admin-login-card">
                    <h2 className="admin-login-title">{brand.agencyName} CMS</h2>
                    <p className="admin-login-sub">Administrative Access Only</p>
                    
                    <form className="admin-login-form" onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <input 
                                type="text" 
                                required 
                                className="form-input"
                                placeholder="Username (default: admin)"
                                value={loginUsername}
                                onChange={(e) => setLoginUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input 
                                type="password" 
                                required 
                                className="form-input"
                                placeholder="Password"
                                value={loginPass}
                                onChange={(e) => setLoginPass(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
                            Authenticate Access
                        </button>
                        
                        <a href="#home" onClick={() => handleNavigate("home")} style={{ textAlign: "center", fontSize: "0.85rem", opacity: 0.5 }}>
                            Back to Public Website
                        </a>
                    </form>
                </div>
            </section>
        );
    }

    // 2. ADMIN DASHBOARD VIEW
    return (
        <div className="admin-shell">
            {/* Sidebar Navigation */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-header">
                    <img src={brand.logoUrl} className="admin-sidebar-logo" alt="Logo" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150"} />
                    <h1 className="admin-sidebar-title">{brand.agencyName}<span>.</span></h1>
                </div>
                
                <ul className="admin-nav">
                    <li className={`admin-nav-item ${adminActiveTab === "dashboard" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("dashboard")}>
                            <Icon name="grid" size={16} /> Dashboard Home
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "pages" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("pages")}>
                            <Icon name="fileText" size={16} /> Pages Manager
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "content" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("content")}>
                            <Icon name="edit" size={16} /> Content Editor
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "brand" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("brand")}>
                            <Icon name="image" size={16} /> Brand Settings
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "blog" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("blog")}>
                            <Icon name="fileText" size={16} /> Blog Manager
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "portfolio" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("portfolio")}>
                            <Icon name="briefcase" size={16} /> Portfolio Manager
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "testimonials" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("testimonials")}>
                            <Icon name="users" size={16} /> Testimonials
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "leads" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("leads")}>
                            <Icon name="messageSquare" size={16} /> Leads ({leads.filter(l=>l.status==="new").length})
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "packages" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("packages")}>
                            <Icon name="zap" size={16} /> Package Manager
                        </button>
                    </li>
                    <li className={`admin-nav-item ${adminActiveTab === "settings" ? "active" : ""}`}>
                        <button onClick={() => setAdminActiveTab("settings")}>
                            <Icon name="settings" size={16} /> System Settings
                        </button>
                    </li>
                </ul>
                
                <div className="admin-sidebar-footer">
                    <button className="admin-logout-btn" onClick={handleLogout}>
                        <Icon name="logOut" size={16} /> Log Out
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="admin-viewport">
                <header className="admin-viewport-header">
                    <div className="admin-viewport-title">
                        <h2>CMS Control Center</h2>
                    </div>
                    <div className="admin-user-badge">
                        <span>Role: Super Admin</span>
                        <div className="admin-avatar">A</div>
                    </div>
                </header>
                
                <main className="admin-content-area">
                    {adminActiveTab === "dashboard" && (
                        <AdminDashboardHome 
                            leads={leads}
                            blogs={blogs}
                            pages={pages}
                            setAdminActiveTab={setAdminActiveTab}
                            handleNavigate={handleNavigate}
                        />
                    )}
                    {adminActiveTab === "pages" && (
                        <AdminPagesManager 
                            pages={pages}
                            setPages={setPages}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "content" && (
                        <AdminContentEditor 
                            pages={pages}
                            setPages={setPages}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "brand" && (
                        <AdminBrandSettings 
                            brand={brand}
                            setBrand={setBrand}
                        />
                    )}
                    {adminActiveTab === "blog" && (
                        <AdminBlogManager 
                            blogs={blogs}
                            setBlogs={setBlogs}
                            categories={categories}
                            setCategories={setCategories}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "portfolio" && (
                        <AdminPortfolioManager 
                            portfolio={portfolio}
                            setPortfolio={setPortfolio}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "testimonials" && (
                        <AdminTestimonialsManager 
                            testimonials={testimonials}
                            setTestimonials={setTestimonials}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "leads" && (
                        <AdminLeadsManager 
                            leads={leads}
                            setLeads={setLeads}
                            settings={settings}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "packages" && (
                        <AdminPackageManager 
                            packages={packages}
                            setPackages={setPackages}
                            triggerToast={triggerToast}
                        />
                    )}
                    {adminActiveTab === "settings" && (
                        <AdminSystemSettings 
                            settings={settings}
                            setSettings={(s) => syncDb("settings", s, setSettings)}
                            adminPassword={adminPassword}
                            setAdminPassword={setAdminPassword}
                            triggerToast={triggerToast}
                        />
                    )}
                </main>
            </div>
        </div>
    );
}

/* ==========================================================================
   ADMIN PANEL MODULES (SUB-COMPONENTS)
   ========================================================================== */

// 1. DASHBOARD HOME
function AdminDashboardHome({ leads, blogs, pages, setAdminActiveTab, handleNavigate }) {
    const newLeadsCount = leads.filter(l => l.status === "new").length;
    const activePagesCount = pages.filter(p => p.active).length;

    return (
        <div>
            {/* Stat counts row */}
            <div className="admin-stats-grid">
                <div className="admin-stat-card">
                    <div className="admin-stat-info">
                        <h4>Total Leads</h4>
                        <span className="admin-stat-num">{leads.length}</span>
                    </div>
                    <Icon name="messageSquare" size={32} className="admin-stat-icon" />
                </div>
                <div className="admin-stat-card">
                    <div className="admin-stat-info">
                        <h4>New Leads Today</h4>
                        <span className="admin-stat-num" style={{ color: newLeadsCount > 0 ? "var(--primary-gold)" : "#8E8E8E" }}>
                            {newLeadsCount}
                        </span>
                    </div>
                    <Icon name="zap" size={32} className="admin-stat-icon" />
                </div>
                <div className="admin-stat-card">
                    <div className="admin-stat-info">
                        <h4>Blog Articles</h4>
                        <span className="admin-stat-num">{blogs.length}</span>
                    </div>
                    <Icon name="fileText" size={32} className="admin-stat-icon" />
                </div>
                <div className="admin-stat-card">
                    <div className="admin-stat-info">
                        <h4>Active Pages</h4>
                        <span className="admin-stat-num">{activePagesCount} / 7</span>
                    </div>
                    <Icon name="grid" size={32} className="admin-stat-icon" />
                </div>
            </div>

            {/* Quick Actions & Recent leads */}
            <div className="admin-dashboard-widgets">
                <div className="admin-panel-card">
                    <h3>
                        <span>Recent Consultation Inbound</span>
                        <button className="btn btn-outline" style={{ padding: "0.4rem 1rem", fontSize: "0.75rem" }} onClick={() => setAdminActiveTab("leads")}>
                            View All Log
                        </button>
                    </h3>
                    
                    {leads.length === 0 ? (
                        <p style={{ color: "#666" }}>No consultation entries yet.</p>
                    ) : (
                        <div className="leads-table-container">
                            <table className="leads-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Business</th>
                                        <th>Service</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.slice(0, 4).map((lead) => (
                                        <tr key={lead.id}>
                                            <td>{lead.name}</td>
                                            <td>{lead.businessName}</td>
                                            <td>{lead.service}</td>
                                            <td>{lead.date}</td>
                                            <td>
                                                <span className={`status-badge ${lead.status}`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="admin-panel-card">
                    <h3>Quick Shortcuts</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <button className="btn btn-secondary" style={{ width: "100%", textAlign: "left", justifyContent: "flex-start" }} onClick={() => setAdminActiveTab("brand")}>
                            <Icon name="image" size={16} style={{ marginRight: "10px" }} /> Edit Brand Palette
                        </button>
                        <button className="btn btn-secondary" style={{ width: "100%", textAlign: "left", justifyContent: "flex-start" }} onClick={() => setAdminActiveTab("content")}>
                            <Icon name="edit" size={16} style={{ marginRight: "10px" }} /> Edit Hero Headline
                        </button>
                        <button className="btn btn-secondary" style={{ width: "100%", textAlign: "left", justifyContent: "flex-start" }} onClick={() => setAdminActiveTab("blog")}>
                            <Icon name="plus" size={16} style={{ marginRight: "10px" }} /> Create New Blog Post
                        </button>
                        <button className="btn btn-primary" style={{ width: "100%" }} onClick={() => handleNavigate("home")}>
                            <Icon name="eye" size={16} style={{ marginRight: "10px" }} /> View Public Website
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 2. PAGES MANAGER
function AdminPagesManager({ pages, setPages, triggerToast }) {
    const [expandedPage, setExpandedPage] = useState(null);

    const togglePageStatus = (pageId) => {
        const updated = pages.map((p) => p.id === pageId ? { ...p, active: !p.active } : p);
        setPages(updated);
        triggerToast("Page status toggled.");
    };

    const toggleSectionStatus = (pageId, sectionId) => {
        const updated = pages.map((p) => {
            if (p.id === pageId) {
                const updatedSect = p.sections.map((s) => s.id === sectionId ? { ...s, active: !s.active } : s);
                return { ...p, sections: updatedSect };
            }
            return p;
        });
        setPages(updated);
        triggerToast("Section visibility status updated.");
    };

    const moveSection = (pageId, index, direction) => {
        const p = pages.find((page) => page.id === pageId);
        if (!p) return;
        
        const newSects = [...p.sections];
        const newIdx = direction === "up" ? index - 1 : index + 1;
        
        if (newIdx < 0 || newIdx >= newSects.length) return; // Out of bounds
        
        // Swap sections
        const temp = newSects[index];
        newSects[index] = newSects[newIdx];
        newSects[newIdx] = temp;

        const updated = pages.map((page) => page.id === pageId ? { ...page, sections: newSects } : page);
        setPages(updated);
        triggerToast("Section order updated.");
    };

    return (
        <div>
            <div className="manager-header-row">
                <h3>Page Toggles & Section Hierarchy</h3>
            </div>
            
            <div className="pages-manager-list">
                {pages.map((p) => (
                    <div key={p.id} className="page-row-card">
                        <div className="page-row-header" onClick={() => setExpandedPage(expandedPage === p.id ? null : p.id)}>
                            <div className="page-row-header-left">
                                <Icon name={expandedPage === p.id ? "chevronDown" : "chevronRight"} size={18} style={{ color: "var(--primary-gold)" }} />
                                <span className="page-row-title">{p.title} Page</span>
                            </div>
                            
                            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }} onClick={(e) => e.stopPropagation()}>
                                <span style={{ fontSize: "0.8rem", color: p.active ? "var(--primary-gold)" : "#555" }}>
                                    {p.active ? "PUBLIC ACTIVE" : "DRAFT HIDDEN"}
                                </span>
                                <label className="switch">
                                    <input 
                                        type="checkbox" 
                                        checked={p.active} 
                                        onChange={() => togglePageStatus(p.id)}
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>

                        {expandedPage === p.id && (
                            <div className="sections-expand-panel">
                                <h4 style={{ color: "#fff", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.2rem" }}>
                                    Structure Sections & Ordering
                                </h4>
                                
                                <div className="sections-drag-list">
                                    {p.sections.map((sect, idx) => (
                                        <div key={sect.id} className="section-drag-item">
                                            <div className="section-drag-item-left">
                                                <span style={{ color: "#666", fontSize: "0.8rem", width: "25px" }}>0{idx + 1}</span>
                                                <span style={{ color: sect.active ? "#fff" : "#555", fontWeight: 500 }}>{sect.title}</span>
                                            </div>
                                            
                                            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                                                {/* Move up / down controls */}
                                                <div className="section-order-controls">
                                                    <button 
                                                        className="order-btn" 
                                                        disabled={idx === 0} 
                                                        onClick={() => moveSection(p.id, idx, "up")}
                                                    >
                                                        <Icon name="arrowUp" size={12} />
                                                    </button>
                                                    <button 
                                                        className="order-btn" 
                                                        disabled={idx === p.sections.length - 1} 
                                                        onClick={() => moveSection(p.id, idx, "down")}
                                                    >
                                                        <Icon name="arrowDown" size={12} />
                                                    </button>
                                                </div>

                                                <label className="switch">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={sect.active} 
                                                        onChange={() => toggleSectionStatus(p.id, sect.id)}
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

// Helper to convert Local Image file to Base64 String URL
const useBase64ImageUpload = (onUploadSuccess) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onUploadSuccess(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return handleFileChange;
};

// 3. BRAND SETTINGS
function AdminBrandSettings({ brand, setBrand }) {
    const [agencyName, setAgencyName] = useState(brand.agencyName);
    const [tagline, setTagline] = useState(brand.tagline);
    const [primaryColor, setPrimaryColor] = useState(brand.primaryColor);
    const [backgroundColor, setBackgroundColor] = useState(brand.backgroundColor);
    const [textColor, setTextColor] = useState(brand.textColor);
    const [logoUrl, setLogoUrl] = useState(brand.logoUrl);

    const handleLogoUpload = useBase64ImageUpload((base64) => {
        setLogoUrl(base64);
    });

    const handleSave = (e) => {
        e.preventDefault();
        setBrand({
            ...brand,
            agencyName,
            tagline,
            primaryColor,
            backgroundColor,
            textColor,
            logoUrl,
            faviconUrl: logoUrl // Match logo for demo simplicity
        });
    };

    return (
        <form onSubmit={handleSave} className="admin-panel-card" style={{ maxWidth: "800px" }}>
            <h3>Brand Palette & Asset Settings</h3>
            
            <div className="admin-editor-grid">
                <div className="admin-form-group">
                    <label>Agency Name</label>
                    <input 
                        type="text" 
                        className="admin-form-control" 
                        value={agencyName}
                        onChange={(e) => setAgencyName(e.target.value)}
                    />
                </div>
                <div className="admin-form-group">
                    <label>Agency Tagline</label>
                    <input 
                        type="text" 
                        className="admin-form-control" 
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </div>

                <div className="admin-form-group">
                    <label>Brand Logo Asset</label>
                    <div className="admin-image-upload-wrapper">
                        <div className="admin-image-preview">
                            <img src={logoUrl} alt="Logo" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150"} />
                        </div>
                        <div className="admin-file-input-btn btn btn-secondary">
                            <span>Upload Image Asset</span>
                            <input type="file" accept="image/*" onChange={handleLogoUpload} />
                        </div>
                    </div>
                </div>

                <h4 style={{ color: "#fff", borderBottom: "1px solid #222", paddingBottom: "0.5rem", marginTop: "1rem" }}>Colors Override</h4>
                <div className="color-pickers-grid">
                    <div className="color-picker-box">
                        <label className="form-label">Primary Gold</label>
                        <input 
                            type="color" 
                            className="color-picker-input" 
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                        />
                        <code style={{ fontSize: "0.85rem" }}>{primaryColor}</code>
                    </div>
                    <div className="color-picker-box">
                        <label className="form-label">Deep Background</label>
                        <input 
                            type="color" 
                            className="color-picker-input" 
                            value={backgroundColor}
                            onChange={(e) => setBackgroundColor(e.target.value)}
                        />
                        <code style={{ fontSize: "0.85rem" }}>{backgroundColor}</code>
                    </div>
                    <div className="color-picker-box">
                        <label className="form-label">Off-white Text</label>
                        <input 
                            type="color" 
                            className="color-picker-input" 
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                        />
                        <code style={{ fontSize: "0.85rem" }}>{textColor}</code>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: "2.5rem" }}>
                Save Brand Configuration
            </button>
        </form>
    );
}

// 4. CONTENT EDITOR
function AdminContentEditor({ pages, setPages, triggerToast }) {
    const [selectedPage, setSelectedPage] = useState("home");
    const pageData = pages.find((p) => p.id === selectedPage);

    const handleFieldChange = (sectionId, fieldKey, val) => {
        const updatedPages = pages.map((p) => {
            if (p.id === selectedPage) {
                const updatedSects = p.sections.map((s) => {
                    if (s.id === sectionId) {
                        return { ...s, content: { ...s.content, [fieldKey]: val } };
                    }
                    return s;
                });
                return { ...p, sections: updatedSects };
            }
            return p;
        });
        setPages(updatedPages);
    };

    const handleSave = (e) => {
        e.preventDefault();
        triggerToast("Content modifications saved live!");
    };

    return (
        <div style={{ maxWidth: "900px" }}>
            <div className="manager-header-row">
                <h3>Editorial CMS Editor</h3>
                <select 
                    className="form-select" 
                    style={{ background: "#080808", color: "#fff", borderColor: "var(--border-color)", padding: "0.5rem 1rem" }}
                    value={selectedPage} 
                    onChange={(e) => setSelectedPage(e.target.value)}
                >
                    {pages.map((p) => (
                        <option key={p.id} value={p.id}>{p.title} Editorial</option>
                    ))}
                </select>
            </div>

            <form onSubmit={handleSave}>
                {pageData.sections.map((sect) => (
                    <div key={sect.id} className="admin-panel-card">
                        <h4 style={{ color: "var(--primary-gold)", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
                            {sect.title} Fields
                        </h4>
                        
                        {Object.keys(sect.content || {}).map((key) => {
                            const val = sect.content[key];
                            
                            // Render array of tickers/points in a readable list format
                            if (Array.isArray(val)) {
                                return (
                                    <div key={key} className="admin-form-group">
                                        <label>{key} (comma separated list)</label>
                                        <input 
                                            type="text" 
                                            className="admin-form-control" 
                                            value={val.join(", ")}
                                            onChange={(e) => handleFieldChange(sect.id, key, e.target.value.split(",").map(s => s.trim()))}
                                        />
                                    </div>
                                );
                            }

                            // Render objects e.g points or steps
                            if (typeof val === "object" && val !== null) {
                                return null; // We manage nested structured tools in separate managers
                            }

                            return (
                                <div key={key} className="admin-form-group">
                                    <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                                    {key === "subtext" || key === "desc" || key === "message" ? (
                                        <textarea 
                                            className="admin-form-control admin-textarea"
                                            value={val}
                                            onChange={(e) => handleFieldChange(sect.id, key, e.target.value)}
                                        ></textarea>
                                    ) : (
                                        <input 
                                            type="text" 
                                            className="admin-form-control" 
                                            value={val}
                                            onChange={(e) => handleFieldChange(sect.id, key, e.target.value)}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}

                <button type="submit" className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </div>
    );
}

// 5. BLOG MANAGER (CRUD)
function AdminBlogManager({ blogs, setBlogs, categories, setCategories, triggerToast }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editPostId, setEditPostId] = useState(null);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("SEO");
    const [thumbnail, setThumbnail] = useState("");
    const [readTime, setReadTime] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("published");

    const [newCategoryName, setNewCategoryName] = useState("");

    const handleThumbnailUpload = useBase64ImageUpload((base64) => {
        setThumbnail(base64);
    });

    const startAdd = () => {
        setIsEditing(true);
        setEditPostId(null);
        setTitle("");
        setCategory(categories[0] || "SEO");
        setThumbnail("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=500");
        setReadTime("5 min read");
        setContent("");
        setStatus("published");
    };

    const startEdit = (post) => {
        setIsEditing(true);
        setEditPostId(post.id);
        setTitle(post.title);
        setCategory(post.category);
        setThumbnail(post.thumbnail);
        setReadTime(post.readTime);
        setContent(post.content);
        setStatus(post.status);
    };

    const handleDelete = (id) => {
        if (confirm("Delete this blog article?")) {
            const updated = blogs.filter(b => b.id !== id);
            setBlogs(updated);
            triggerToast("Article deleted successfully.");
        }
    };

    const handleSavePost = (e) => {
        e.preventDefault();
        
        if (editPostId) {
            // Edit existing
            const updated = blogs.map((b) => b.id === editPostId ? {
                ...b, title, category, thumbnail, readTime, content, status
            } : b);
            setBlogs(updated);
            triggerToast("Article updated successfully!");
        } else {
            // Create new
            const newPost = {
                id: Date.now(),
                title, category, thumbnail, readTime, content, status,
                date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
            };
            setBlogs([newPost, ...blogs]);
            triggerToast("New article created successfully!");
        }
        setIsEditing(false);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (newCategoryName && !categories.includes(newCategoryName)) {
            const updated = [...categories, newCategoryName];
            setCategories(updated);
            setNewCategoryName("");
            triggerToast("Category added.");
        }
    };

    const handleRemoveCategory = (catToRemove) => {
        if (confirm(`Remove the "${catToRemove}" category?`)) {
            const updated = categories.filter(c => c !== catToRemove);
            setCategories(updated);
            triggerToast("Category removed.");
        }
    };

    if (isEditing) {
        return (
            <form onSubmit={handleSavePost} className="admin-panel-card" style={{ maxWidth: "850px" }}>
                <h3>{editPostId ? "Modify Blog Article" : "Create New Blog Article"}</h3>
                
                <div className="admin-editor-grid">
                    <div className="admin-form-group">
                        <label>Article Title</label>
                        <input 
                            type="text" 
                            required 
                            className="admin-form-control" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>Category</label>
                            <select 
                                className="admin-form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div className="admin-form-group">
                            <label>Estimated Read Time</label>
                            <input 
                                type="text" 
                                required 
                                className="admin-form-control" 
                                value={readTime}
                                onChange={(e) => setReadTime(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Article Thumbnail Image</label>
                        <div className="admin-image-upload-wrapper">
                            <div className="admin-image-preview">
                                <img src={thumbnail} alt="Thumbnail preview" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=300"} />
                            </div>
                            <div className="admin-file-input-btn btn btn-secondary">
                                <span>Upload Thumbnail</span>
                                <input type="file" accept="image/*" onChange={handleThumbnailUpload} />
                            </div>
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Status</label>
                        <select 
                            className="admin-form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="published">Published</option>
                            <option value="draft">Draft / Hidden</option>
                        </select>
                    </div>

                    <div className="admin-form-group">
                        <label>Content Body Markup (HTML Supported)</label>
                        <textarea 
                            required
                            className="admin-form-control admin-textarea"
                            style={{ height: "300px" }}
                            placeholder="Write your article markup here..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
                    <button type="submit" className="btn btn-primary">Save Article</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </form>
        );
    }

    return (
        <div>
            <div className="manager-header-row">
                <h3>Blog Hub & Categories Manager</h3>
                <button className="btn btn-primary" onClick={startAdd}>
                    <Icon name="plus" size={14} style={{ marginRight: "5px" }} /> Write New Post
                </button>
            </div>

            {/* Category manager */}
            <div className="admin-panel-card" style={{ marginBottom: "3rem" }}>
                <h4>Topic Categories</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", margin: "1.5rem 0" }}>
                    {categories.map((c) => (
                        <span key={c} className="service-tag-item" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            {c}
                            <button 
                                type="button" 
                                style={{ background: "none", border: "none", color: "#ff5f6d", cursor: "pointer", display: "inline-flex" }}
                                onClick={() => handleRemoveCategory(c)}
                            >
                                <Icon name="x" size={12} />
                            </button>
                        </span>
                    ))}
                </div>
                <form onSubmit={handleAddCategory} style={{ display: "flex", gap: "1rem", maxWidth: "450px" }}>
                    <input 
                        type="text" 
                        placeholder="Add new topic..." 
                        required 
                        className="admin-form-control"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                    />
                    <button type="submit" className="btn btn-outline" style={{ padding: "0.5rem 1.2rem" }}>
                        Add Category
                    </button>
                </form>
            </div>

            {/* Blog list grid */}
            <div className="grid-manager-list">
                {blogs.map((b) => (
                    <div key={b.id} className="manager-card-item">
                        <img src={b.thumbnail} alt={b.title} className="manager-card-header-img" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=300"} />
                        <div className="manager-card-body">
                            <span className="manager-card-meta">{b.category} • {b.date || "July 2026"}</span>
                            <h4 className="manager-card-title">{b.title}</h4>
                            <span style={{ fontSize: "0.75rem", color: b.status === "published" ? "var(--primary-gold)" : "#666" }}>
                                STATUS: {b.status.toUpperCase()}
                            </span>
                            
                            <div className="manager-card-actions">
                                <div className="manager-card-actions-left">
                                    <button className="btn-icon" onClick={() => startEdit(b)}>
                                        <Icon name="edit" size={14} />
                                    </button>
                                    <button className="btn-icon btn-icon-danger" onClick={() => handleDelete(b.id)}>
                                        <Icon name="trash" size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 6. PORTFOLIO MANAGER (CRUD)
function AdminPortfolioManager({ portfolio, setPortfolio, triggerToast }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [clientName, setClientName] = useState("");
    const [industry, setIndustry] = useState("Jewellery");
    const [problem, setProblem] = useState("");
    const [solution, setSolution] = useState("");
    const [result, setResult] = useState("");
    const [metricValue, setMetricValue] = useState("");
    const [metricLabel, setMetricLabel] = useState("");
    const [beforeImage, setBeforeImage] = useState("");
    const [afterImage, setAfterImage] = useState("");
    const [show, setShow] = useState(true);

    const handleBeforeUpload = useBase64ImageUpload((base64) => setBeforeImage(base64));
    const handleAfterUpload = useBase64ImageUpload((base64) => setAfterImage(base64));

    const startAdd = () => {
        setIsEditing(true);
        setEditId(null);
        setClientName("");
        setIndustry("Jewellery");
        setProblem("");
        setSolution("");
        setResult("");
        setMetricValue("+120%");
        setMetricLabel("Conversion Boost");
        setBeforeImage("https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=300");
        setAfterImage("./assets/case_study_jewellery.jpg");
        setShow(true);
    };

    const startEdit = (cs) => {
        setIsEditing(true);
        setEditId(cs.id);
        setClientName(cs.clientName);
        setIndustry(cs.industry);
        setProblem(cs.problem);
        setSolution(cs.solution);
        setResult(cs.result);
        setMetricValue(cs.metrics.main);
        setMetricLabel(cs.metrics.sub);
        setBeforeImage(cs.beforeImage);
        setAfterImage(cs.afterImage);
        setShow(cs.show);
    };

    const toggleVisibility = (id) => {
        const updated = portfolio.map((item) => item.id === id ? { ...item, show: !item.show } : item);
        setPortfolio(updated);
        triggerToast("Portfolio item visibility status toggled.");
    };

    const handleDelete = (id) => {
        if (confirm("Delete this case study?")) {
            const updated = portfolio.filter(item => item.id !== id);
            setPortfolio(updated);
            triggerToast("Case study removed.");
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        const metrics = { main: metricValue, sub: metricLabel };

        if (editId) {
            const updated = portfolio.map((cs) => cs.id === editId ? {
                ...cs, clientName, industry, problem, solution, result, metrics, beforeImage, afterImage, show
            } : cs);
            setPortfolio(updated);
            triggerToast("Case study updated!");
        } else {
            const newCs = {
                id: Date.now(), clientName, industry, problem, solution, result, metrics, beforeImage, afterImage, show
            };
            setPortfolio([newCs, ...portfolio]);
            triggerToast("Case study added successfully!");
        }
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <form onSubmit={handleSave} className="admin-panel-card" style={{ maxWidth: "800px" }}>
                <h3>{editId ? "Modify Case Study" : "Add New Case Study"}</h3>
                
                <div className="admin-editor-grid">
                    <div className="admin-form-group">
                        <label>Client Name</label>
                        <input 
                            type="text" required className="admin-form-control"
                            value={clientName} onChange={(e) => setClientName(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>Industry</label>
                            <select 
                                className="admin-form-control"
                                value={industry} onChange={(e) => setIndustry(e.target.value)}
                            >
                                <option value="Jewellery">Jewellery</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Interior Design">Interior Design</option>
                                <option value="Food">Food</option>
                                <option value="Retail">Retail</option>
                            </select>
                        </div>
                        
                        <div className="admin-form-group">
                            <label>Visible on Site</label>
                            <select className="admin-form-control" value={show ? "yes" : "no"} onChange={(e) => setShow(e.target.value === "yes")}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>Highlight Metric Value</label>
                            <input 
                                type="text" placeholder="+150% or 10k+" required className="admin-form-control"
                                value={metricValue} onChange={(e) => setMetricValue(e.target.value)}
                            />
                        </div>
                        <div className="admin-form-group">
                            <label>Metric Label</label>
                            <input 
                                type="text" placeholder="Leads Generated / ROI" required className="admin-form-control"
                                value={metricLabel} onChange={(e) => setMetricLabel(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Before Presence Image</label>
                        <div className="admin-image-upload-wrapper">
                            <div className="admin-image-preview">
                                <img src={beforeImage} alt="Before Preview" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150"} />
                            </div>
                            <div className="admin-file-input-btn btn btn-secondary">
                                <span>Upload Before</span>
                                <input type="file" accept="image/*" onChange={handleBeforeUpload} />
                            </div>
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>After Redesign Image</label>
                        <div className="admin-image-upload-wrapper">
                            <div className="admin-image-preview">
                                <img src={afterImage} alt="After Preview" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150"} />
                            </div>
                            <div className="admin-file-input-btn btn btn-secondary">
                                <span>Upload After</span>
                                <input type="file" accept="image/*" onChange={handleAfterUpload} />
                            </div>
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Client Problem Brief</label>
                        <textarea 
                            required className="admin-form-control admin-textarea"
                            value={problem} onChange={(e) => setProblem(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="admin-form-group">
                        <label>Solution Framework</label>
                        <textarea 
                            required className="admin-form-control admin-textarea"
                            value={solution} onChange={(e) => setSolution(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="admin-form-group">
                        <label>Campaign Outcome Description</label>
                        <textarea 
                            required className="admin-form-control admin-textarea"
                            value={result} onChange={(e) => setResult(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
                    <button type="submit" className="btn btn-primary">Save Case Study</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </form>
        );
    }

    return (
        <div>
            <div className="manager-header-row">
                <h3>Case Studies Hub</h3>
                <button className="btn btn-primary" onClick={startAdd}>
                    <Icon name="plus" size={14} style={{ marginRight: "5px" }} /> Add Case Study
                </button>
            </div>

            <div className="grid-manager-list">
                {portfolio.map((cs) => (
                    <div key={cs.id} className="manager-card-item">
                        <img src={cs.afterImage} alt={cs.clientName} className="manager-card-header-img" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=300"} />
                        <div className="manager-card-body">
                            <span className="manager-card-meta">{cs.industry} • {cs.metrics.main}</span>
                            <h4 className="manager-card-title">{cs.clientName}</h4>
                            <span style={{ fontSize: "0.75rem", color: cs.show ? "var(--primary-gold)" : "#555" }}>
                                STATUS: {cs.show ? "VISIBLE ON FRONTEND" : "HIDDEN IN ARCHIVE"}
                            </span>
                            
                            <div className="manager-card-actions">
                                <div className="manager-card-actions-left">
                                    <button className="btn-icon" onClick={() => startEdit(cs)}>
                                        <Icon name="edit" size={14} />
                                    </button>
                                    <button className="btn-icon" onClick={() => toggleVisibility(cs.id)}>
                                        <Icon name="eye" size={14} style={{ color: cs.show ? "var(--primary-gold)" : "inherit" }} />
                                    </button>
                                    <button className="btn-icon btn-icon-danger" onClick={() => handleDelete(cs.id)}>
                                        <Icon name="trash" size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 7. TESTIMONIALS MANAGER
function AdminTestimonialsManager({ testimonials, setTestimonials, triggerToast }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [clientName, setClientName] = useState("");
    const [business, setBusiness] = useState("");
    const [quote, setQuote] = useState("");
    const [photo, setPhoto] = useState("");
    const [show, setShow] = useState(true);

    const handlePhotoUpload = useBase64ImageUpload((base64) => setPhoto(base64));

    const startAdd = () => {
        setIsEditing(true);
        setEditId(null);
        setClientName("");
        setBusiness("");
        setQuote("");
        setPhoto("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150");
        setShow(true);
    };

    const startEdit = (t) => {
        setIsEditing(true);
        setEditId(t.id);
        setClientName(t.clientName);
        setBusiness(t.business);
        setQuote(t.quote);
        setPhoto(t.photo);
        setShow(t.show);
    };

    const handleDelete = (id) => {
        if (confirm("Delete this client testimonial?")) {
            setTestimonials(testimonials.filter(t => t.id !== id));
            triggerToast("Testimonial removed.");
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (editId) {
            const updated = testimonials.map((t) => t.id === editId ? {
                ...t, clientName, business, quote, photo, show
            } : t);
            setTestimonials(updated);
            triggerToast("Testimonial updated!");
        } else {
            const newT = {
                id: Date.now(), clientName, business, quote, photo, show, order: testimonials.length + 1
            };
            setTestimonials([...testimonials, newT]);
            triggerToast("Testimonial added!");
        }
        setIsEditing(false);
    };

    const moveOrder = (index, direction) => {
        const updated = [...testimonials];
        const newIdx = direction === "up" ? index - 1 : index + 1;
        if (newIdx < 0 || newIdx >= updated.length) return;
        
        const temp = updated[index];
        updated[index] = updated[newIdx];
        updated[newIdx] = temp;

        // Reassign indices
        const final = updated.map((t, idx) => ({ ...t, order: idx + 1 }));
        setTestimonials(final);
        triggerToast("Slider sequence reordered.");
    };

    if (isEditing) {
        return (
            <form onSubmit={handleSave} className="admin-panel-card" style={{ maxWidth: "700px" }}>
                <h3>{editId ? "Modify Testimonial" : "Add Testimonial"}</h3>
                
                <div className="admin-editor-grid">
                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>Client Name</label>
                            <input type="text" required className="admin-form-control" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                        </div>
                        <div className="admin-form-group">
                            <label>Business / Role</label>
                            <input type="text" required className="admin-form-control" value={business} onChange={(e) => setBusiness(e.target.value)} />
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Client Profile Picture</label>
                        <div className="admin-image-upload-wrapper">
                            <div className="admin-image-preview" style={{ borderRadius: "50%" }}>
                                <img src={photo} alt="Client Avatar" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"} />
                            </div>
                            <div className="admin-file-input-btn btn btn-secondary">
                                <span>Upload Photo</span>
                                <input type="file" accept="image/*" onChange={handlePhotoUpload} />
                            </div>
                        </div>
                    </div>

                    <div className="admin-form-group">
                        <label>Testimonial Quote</label>
                        <textarea required className="admin-form-control admin-textarea" value={quote} onChange={(e) => setQuote(e.target.value)}></textarea>
                    </div>

                    <div className="admin-form-group">
                        <label>Visible in Slider</label>
                        <select className="admin-form-control" value={show ? "yes" : "no"} onChange={(e) => setShow(e.target.value === "yes")}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
                    <button type="submit" className="btn btn-primary">Save Testimonial</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </form>
        );
    }

    return (
        <div>
            <div className="manager-header-row">
                <h3>Client Testimonials Manager</h3>
                <button className="btn btn-primary" onClick={startAdd}>
                    <Icon name="plus" size={14} style={{ marginRight: "5px" }} /> Add Testimonial
                </button>
            </div>

            <div className="admin-panel-card">
                <div className="leads-table-container">
                    <table className="leads-table">
                        <thead>
                            <tr>
                                <th>Sequence</th>
                                <th>Avatar</th>
                                <th>Client Name</th>
                                <th>Business Info</th>
                                <th>Status</th>
                                <th>Order Adjust</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map((t, idx) => (
                                <tr key={t.id}>
                                    <td>0{idx + 1}</td>
                                    <td>
                                        <img src={t.photo} alt={t.clientName} style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "1px solid #333" }} onError={(e) => e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"} />
                                    </td>
                                    <td>{t.clientName}</td>
                                    <td>{t.business}</td>
                                    <td>
                                        <span style={{ fontSize: "0.8rem", color: t.show ? "var(--primary-gold)" : "#555" }}>
                                            {t.show ? "ACTIVE SLIDE" : "MUTED"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="section-order-controls">
                                            <button className="order-btn" disabled={idx === 0} onClick={() => moveOrder(idx, "up")}>
                                                <Icon name="arrowUp" size={12} />
                                            </button>
                                            <button className="order-btn" disabled={idx === testimonials.length - 1} onClick={() => moveOrder(idx, "down")}>
                                                <Icon name="arrowDown" size={12} />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: "0.5rem" }}>
                                            <button className="btn-icon" onClick={() => startEdit(t)}>
                                                <Icon name="edit" size={12} />
                                            </button>
                                            <button className="btn-icon btn-icon-danger" onClick={() => handleDelete(t.id)}>
                                                <Icon name="trash" size={12} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// 8. LEADS / CONSULTATIONS MANAGER
function AdminLeadsManager({ leads, setLeads, settings, triggerToast }) {
    const [selectedLead, setSelectedLead] = useState(null);

    const updateLeadStatus = (id, newStatus) => {
        const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
        setLeads(updated);
        triggerToast("Lead status updated.");
        if (selectedLead && selectedLead.id === id) {
            setSelectedLead({ ...selectedLead, status: newStatus });
        }
    };

    const deleteLead = (id) => {
        if (confirm("Permanently delete this lead logging?")) {
            setLeads(leads.filter(l => l.id !== id));
            setSelectedLead(null);
            triggerToast("Lead log removed.");
        }
    };

    // Client-side CSV download generator
    const exportToCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Date,Name,Business Name,WhatsApp Number,Service Interested,Best Call Time,Status,Message\n";
        
        leads.forEach((l) => {
            const row = [
                `"${l.date}"`,
                `"${l.name.replace(/"/g, '""')}"`,
                `"${l.businessName.replace(/"/g, '""')}"`,
                `"${l.whatsappNumber}"`,
                `"${l.service}"`,
                `"${l.bestTime}"`,
                `"${l.status.toUpperCase()}"`,
                `"${(l.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`
            ].join(",");
            csvContent += row + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `GrowWith_Leads_Report_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        triggerToast("Leads list exported to CSV!");
    };

    return (
        <div style={{ position: "relative" }}>
            <div className="manager-header-row">
                <h3>Consultation Logs Ledger</h3>
                <button className="btn btn-outline" onClick={exportToCSV}>
                    <Icon name="download" size={14} style={{ marginRight: "5px" }} /> Export All to CSV
                </button>
            </div>

            <div className="admin-panel-card">
                <div className="leads-table-container">
                    <table className="leads-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Business Name</th>
                                <th>WhatsApp</th>
                                <th>Service Interst</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((l) => (
                                <tr key={l.id}>
                                    <td>{l.date}</td>
                                    <td><strong>{l.name}</strong></td>
                                    <td>{l.businessName}</td>
                                    <td>{l.whatsappNumber}</td>
                                    <td>{l.service}</td>
                                    <td>
                                        <select 
                                            className="form-select"
                                            style={{ background: "#050505", color: "#fff", border: "1px solid #222", padding: "0.2rem 0.5rem", fontSize: "0.75rem" }}
                                            value={l.status}
                                            onChange={(e) => updateLeadStatus(l.id, e.target.value)}
                                        >
                                            <option value="new">New</option>
                                            <option value="contacted">Contacted</option>
                                            <option value="converted">Converted</option>
                                            <option value="not_interested">Not Interested</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div style={{ display: "flex", gap: "0.5rem" }}>
                                            <button className="btn-icon" title="View details" onClick={() => setSelectedLead(l)}>
                                                <Icon name="eye" size={12} />
                                            </button>
                                            <a 
                                                href={`https://wa.me/${l.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(l.name)}%2C%20this%20is%20from%20GrowWith%20Agency.%20Thank%20you%20for%20your%20interest%20in%20our%20${encodeURIComponent(l.service)}%20service...`}
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn-icon" 
                                                title="WhatsApp Reply"
                                                style={{ color: "#25D366" }}
                                            >
                                                <Icon name="messageSquare" size={12} />
                                            </a>
                                            <button className="btn-icon btn-icon-danger" title="Delete" onClick={() => deleteLead(l.id)}>
                                                <Icon name="trash" size={12} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* DETAIL MODAL VIEW */}
            {selectedLead && (
                <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
                    <div className="modal-content" style={{ maxWidth: "600px" }} onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setSelectedLead(null)}>
                            <Icon name="x" size={18} />
                        </button>
                        
                        <div className="modal-body" style={{ padding: "2.5rem" }}>
                            <h3 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "1.5rem", borderBottom: "1px solid #222", paddingBottom: "1rem" }}>
                                Lead Details Log
                            </h3>
                            
                            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", fontSize: "0.95rem" }}>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>Submit Date</span>
                                    <p style={{ color: "#fff" }}>{selectedLead.date}</p>
                                </div>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>Full Name</span>
                                    <p style={{ color: "#fff" }}>{selectedLead.name}</p>
                                </div>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>Business / Shop Name</span>
                                    <p style={{ color: "#fff" }}>{selectedLead.businessName}</p>
                                </div>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>WhatsApp Link / Number</span>
                                    <p><a href={`tel:${selectedLead.whatsappNumber}`} style={{ color: "var(--primary-gold)" }}>{selectedLead.whatsappNumber}</a></p>
                                </div>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>Service Interested</span>
                                    <p style={{ color: "#fff" }}>{selectedLead.service}</p>
                                </div>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>Preferred Time to Call</span>
                                    <p style={{ color: "#fff" }}>{selectedLead.bestTime}</p>
                                </div>
                                <div>
                                    <span style={{ color: "#666", fontSize: "0.8rem", textTransform: "uppercase" }}>Brief Message</span>
                                    <p style={{ color: "#fff", whiteSpace: "pre-wrap", background: "#050505", border: "1px solid #222", padding: "1rem", marginTop: "0.3rem" }}>
                                        {selectedLead.message || "(No message brief provided)"}
                                    </p>
                                </div>
                                <div style={{ borderTop: "1px solid #222", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span className={`status-badge ${selectedLead.status}`}>{selectedLead.status}</span>
                                    
                                    <div style={{ display: "flex", gap: "1rem" }}>
                                        <a 
                                            href={`https://wa.me/${selectedLead.whatsappNumber.replace(/[^0-9]/g, "")}`} 
                                            className="btn btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.75rem" }}
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            Quick WhatsApp Reply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// 9. PACKAGE MANAGER
function AdminPackageManager({ packages, setPackages, triggerToast }) {
    const [editPkgId, setEditPkgId] = useState(null);
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [recommended, setRecommended] = useState(false);
    const [features, setFeatures] = useState("");

    const startEdit = (pkg) => {
        setEditPkgId(pkg.id);
        setName(pkg.name);
        setTagline(pkg.tagline);
        setRecommended(pkg.recommended);
        setFeatures(pkg.features.join("\n"));
    };

    const toggleRecommendedBadge = (id) => {
        const updated = packages.map((pkg) => pkg.id === id ? { ...pkg, recommended: !pkg.recommended } : pkg);
        setPackages(updated);
        triggerToast("Package recommendation flag toggled.");
    };

    const handleSave = (e) => {
        e.preventDefault();
        const updated = packages.map((pkg) => {
            if (pkg.id === editPkgId) {
                return {
                    ...pkg,
                    name,
                    tagline,
                    recommended,
                    features: features.split("\n").map(f => f.trim()).filter(Boolean)
                };
            }
            return pkg;
        });
        setPackages(updated);
        setEditPkgId(null);
        triggerToast("Package details saved successfully!");
    };

    if (editPkgId) {
        return (
            <form onSubmit={handleSave} className="admin-panel-card" style={{ maxWidth: "700px" }}>
                <h3>Configure Package ({name})</h3>
                
                <div className="admin-editor-grid">
                    <div className="admin-form-group">
                        <label>Package Title</label>
                        <input type="text" required className="admin-form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="admin-form-group">
                        <label>Tagline</label>
                        <input type="text" required className="admin-form-control" value={tagline} onChange={(e) => setTagline(e.target.value)} />
                    </div>
                    <div className="admin-form-group">
                        <label>Set as Recommended (Gold Border)</label>
                        <select className="admin-form-control" value={recommended ? "yes" : "no"} onChange={(e) => setRecommended(e.target.value === "yes")}>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="admin-form-group">
                        <label>Features List (one item per line)</label>
                        <textarea 
                            required className="admin-form-control admin-textarea" style={{ height: "200px" }}
                            value={features} onChange={(e) => setFeatures(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem" }}>
                    <button type="submit" className="btn btn-primary">Save Package details</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditPkgId(null)}>Cancel</button>
                </div>
            </form>
        );
    }

    return (
        <div>
            <div className="manager-header-row">
                <h3>Package Offerings Settings</h3>
            </div>
            
            <div className="grid-manager-list" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                {packages.map((pkg) => (
                    <div key={pkg.id} className={`manager-card-item ${pkg.recommended ? "recommended" : ""}`} style={{ border: pkg.recommended ? "1px solid var(--primary-gold)" : "1px solid var(--border-color)" }}>
                        <div className="manager-card-body" style={{ padding: "2.5rem" }}>
                            <h4 className="package-name" style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.5rem" }}>
                                {pkg.name}
                            </h4>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                                {pkg.tagline}
                            </p>
                            
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem", borderTop: "1px solid #111", paddingTop: "1rem" }}>
                                {pkg.features.slice(0, 3).map((f, i) => (
                                    <li key={i} style={{ fontSize: "0.85rem", display: "flex", gap: "0.5rem" }}>
                                        <Icon name="check" size={14} style={{ color: "var(--primary-gold)" }} />
                                        <span style={{ color: "#aaa" }}>{f}</span>
                                    </li>
                                ))}
                                {pkg.features.length > 3 && <li style={{ fontSize: "0.8rem", color: "#666", fontStyle: "italic" }}>+ {pkg.features.length - 3} more features</li>}
                            </ul>

                            <div className="manager-card-actions">
                                <div className="manager-card-actions-left">
                                    <button className="btn-icon" onClick={() => startEdit(pkg)}>
                                        <Icon name="edit" size={14} />
                                    </button>
                                    <button className="btn-icon" onClick={() => toggleRecommendedBadge(pkg.id)} title="Recommended Badge Toggle">
                                        <Icon name="star" size={14} style={{ color: pkg.recommended ? "var(--primary-gold)" : "inherit" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// 10. SYSTEM SETTINGS
function AdminSystemSettings({ settings, setSettings, adminPassword, setAdminPassword, triggerToast }) {
    const [whatsappNumber, setWhatsappNumber] = useState(settings.whatsappNumber);
    const [contactEmail, setContactEmail] = useState(settings.contactEmail);
    const [instagramUrl, setInstagramUrl] = useState(settings.instagramUrl);
    const [facebookUrl, setFacebookUrl] = useState(settings.facebookUrl);
    const [googleAnalyticsId, setGoogleAnalyticsId] = useState(settings.googleAnalyticsId);
    const [metaPixelId, setMetaPixelId] = useState(settings.metaPixelId);

    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleSaveSettings = (e) => {
        e.preventDefault();
        setSettings({
            whatsappNumber,
            contactEmail,
            instagramUrl,
            facebookUrl,
            googleAnalyticsId,
            metaPixelId
        });
        triggerToast("System and Analytics Settings updated!");
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (currentPass !== adminPassword) {
            alert("Current password does not match!");
            return;
        }
        if (newPass !== confirmPass) {
            alert("New passwords do not match!");
            return;
        }
        if (newPass.length < 5) {
            alert("Password must be at least 5 characters long!");
            return;
        }
        setAdminPassword(newPass);
        setCurrentPass("");
        setNewPass("");
        setConfirmPass("");
        triggerToast("Administrative password updated successfully!");
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "3rem" }}>
            <form onSubmit={handleSaveSettings} className="admin-panel-card">
                <h3>Contact & Integrations</h3>
                
                <div className="admin-editor-grid">
                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>WhatsApp Contact Number</label>
                            <input type="text" className="admin-form-control" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} />
                        </div>
                        <div className="admin-form-group">
                            <label>Contact Email Address</label>
                            <input type="email" className="admin-form-control" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>Instagram URL</label>
                            <input type="text" className="admin-form-control" value={instagramUrl} onChange={(e) => setInstagramUrl(e.target.value)} />
                        </div>
                        <div className="admin-form-group">
                            <label>Facebook URL</label>
                            <input type="text" className="admin-form-control" value={facebookUrl} onChange={(e) => setFacebookUrl(e.target.value)} />
                        </div>
                    </div>

                    <h4 style={{ color: "#fff", borderBottom: "1px solid #222", paddingBottom: "0.5rem", marginTop: "1.5rem" }}>Tracking Pixels Integration</h4>
                    <div className="form-grid">
                        <div className="admin-form-group">
                            <label>Google Analytics Tracking ID</label>
                            <input type="text" className="admin-form-control" placeholder="G-XXXXXXXXXX" value={googleAnalyticsId} onChange={(e) => setGoogleAnalyticsId(e.target.value)} />
                        </div>
                        <div className="admin-form-group">
                            <label>Meta Pixel tracking ID</label>
                            <input type="text" className="admin-form-control" placeholder="PX-YYYYYYYYYY" value={metaPixelId} onChange={(e) => setMetaPixelId(e.target.value)} />
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: "2.5rem" }}>
                    Save Integrations Settings
                </button>
            </form>

            <form onSubmit={handlePasswordChange} className="admin-panel-card">
                <h3>Admin Credentials</h3>
                
                <div className="admin-editor-grid">
                    <div className="admin-form-group">
                        <label>Current Password</label>
                        <input type="password" required className="admin-form-control" value={currentPass} onChange={(e) => setCurrentPass(e.target.value)} />
                    </div>
                    <div className="admin-form-group">
                        <label>New Password</label>
                        <input type="password" required className="admin-form-control" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
                    </div>
                    <div className="admin-form-group">
                        <label>Confirm New Password</label>
                        <input type="password" required className="admin-form-control" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    </div>
                </div>

                <button type="submit" className="btn btn-outline" style={{ marginTop: "1.8rem", width: "100%" }}>
                    Update Admin Password
                </button>
            </form>
        </div>
    );
}

// 5. MOUNT REACT SPA APPLICATION TO ELEMENT
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
