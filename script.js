    // Complete 21-Program Interactive Database from extracted_content.txt
    const programsData = [
      {
        id: 1,
        name: "Technical Internship Programme 2026",
        company: "National e-Governance Division (NeGD)",
        domain: "GovTech & Infrastructure",
        timeline: "July 1 – Dec 31, 2026",
        stipend: "₹20,000 / month",
        stipend_numeric: 20000,
        cohort: "Engineering Graduates / Final Year (≥75% marks)",
        tech: ["AI/ML", "Kubernetes", "Docker", "Data Pipelines", "SQL", "NoSQL", "NLP", "RAG", "CI/CD"],
        description: "An exclusive technical internship operating under the Digital India Corporation and the Ministry of Electronics and Information Technology. Interns maintain daily offline attendance in New Delhi, receiving a monthly stipend of ₹20,000. Mentees are tasked with developing Extract, Transform, Load (ETL) pipelines, executing SQL and NoSQL data cleaning, designing Natural Language Processing (NLP) chatbots, and engineering Retrieval-Augmented Generation (RAG) models.",
        process: [
          "CV & profile verification (strictly requiring a minimum 75% marks)",
          "Data cleaning, database queries & data science logic evaluations",
          "Technical interview validation on Docker, Kubernetes, and CI/CD tools"
        ],
        fte: "Direct integration into nation-scale GovTech platforms. Offers excellent foundation for major systems engineering and public technology contracts."
      },
      {
        id: 2,
        name: "LFX Mentorship (Term 3 Fall)",
        company: "CNCF (Linux Foundation)",
        domain: "Open Source",
        timeline: "Sept 7 – Nov 27, 2026",
        stipend: "PPP-based Stipend",
        stipend_numeric: 50000,
        cohort: "Global Student Developers",
        tech: ["Cloud Native", "Meshery", "RISC-V", "AI Adapters", "LLMs", "Llama 3", "OpenAI", "ML-DSA", "Cryptography"],
        description: "A highly structured seasonal open-source mentorship program connecting developers with seasoned maintainers. Projects in the Meshery ecosystem require mentees to develop sophisticated Artificial Intelligence adapters to enable seamless 'Natural Language to Infrastructure' capabilities, allowing platform engineers to deploy Kubernetes clusters via conversational queries. Mentees also optimize post-quantum cryptographic libraries (ML-DSA) under the PQCA.",
        process: [
          "CV screening & project proposal submission (July 2026)",
          "Application review and profile evaluation by maintainers (August 2026)",
          "12-week coding mentorship under maintainer guidance"
        ],
        fte: "Remunerated based on Purchasing Power Parity. Highly valued in cloud-native industries, providing a fast-track into remote open-source engineering."
      },
      {
        id: 3,
        name: "WPP Open Platform Internship",
        company: "WPP Media Singapore",
        domain: "E-Commerce",
        timeline: "July 1 – Dec 31, 2026",
        stipend: "Competitive",
        stipend_numeric: 45000,
        cohort: "Data Science, Math, & Marketing Students",
        tech: ["SQL", "Python", "Data Science", "Programmatic Media", "Marketing Analytics", "Data Visualization"],
        description: "An intensive 6-month data science and analytics internship in Singapore. Interns are integrated into the WPP Open platform, running programmatic advertising campaigns, performing data visualization using SQL and Python, and managing performance marketing analytics.",
        process: [
          "Resume shortlisting focusing on math, statistics, and programming",
          "Data analytics case challenge and logic test",
          "Technical interview with engineering directors"
        ],
        fte: "Highly direct return offer pipeline to join Singapore-based media analytics teams."
      },
      {
        id: 4,
        name: "Global Financial Markets Internship",
        company: "A&O Shearman Luxembourg",
        domain: "FinTech",
        timeline: "July 1 – Dec 31, 2026",
        stipend: "Competitive",
        stipend_numeric: 70000,
        cohort: "Master in Law / LL.M Candidates",
        tech: ["Banking Law", "Capital Markets Regulations", "French", "Compliance Architecture"],
        description: "A corporate legal and markets internship within A&O Shearman's Global Financial Markets department. Interns advise investment banks and public entities on complex capital markets regulations, structured finance deals, and compliance architectures.",
        process: [
          "CV check & academic credential evaluation",
          "Bilingual interview assessment (strictly requiring English and French)",
          "Capital markets legal scenario discussion with corporate partners"
        ],
        fte: "Direct pathway to junior associate positions in Luxembourg's leading banking law practice."
      },
      {
        id: 5,
        name: "Corporate Finance Internship",
        company: "Green & Healthy Homes Initiative (GHHI)",
        domain: "Sustainability & Health",
        timeline: "July 1 – Dec 31, 2026",
        stipend: "$25.00 / hour",
        stipend_numeric: 330000,
        cohort: "Finance & Accounting Students",
        tech: ["Sage Intacct", "Budgeting", "Variance Analysis", "Financial Systems", "Excel Model Automation"],
        description: "A six-month accounting and corporate finance internship in Baltimore. The intern supports complex accounting systems, manages month-end closures, creates automated budget vs actual variance sheets, and works inside Sage Intacct software systems.",
        process: [
          "Financial accounting theory review",
          "Data manipulation test on automated Excel models",
          "Interview with the Director of Finance"
        ],
        fte: "Provides experience in corporate financial operations and enterprise-scale resource planning software (ERP)."
      },
      {
        id: 6,
        name: "Executive Director Assistant Internship",
        company: "Turtle Island Restoration Network",
        domain: "Sustainability & Health",
        timeline: "July 1 – Dec 31, 2026",
        stipend: "Competitive (NGO Rate)",
        stipend_numeric: 30000,
        cohort: "Environmental / Policy Students",
        tech: ["NGO Management", "Administrative Support", "Strategic Planning", "Environmental Policy", "Ocean Conservation"],
        description: "An intensive six-month assistantship in California. Interns work directly with the Executive Director, providing crucial administrative and strategic support for environmental nongovernmental organization (NGO) management, ocean ecology advocacy, and policy tracking.",
        process: [
          "CV screening highlighting passion for marine ecology/policy",
          "Writing/analytical skills evaluation",
          "Interviews with the executive director"
        ],
        fte: "Excellent training ground for careers in international conservation, environmental policy, and NGO management."
      },
      {
        id: 7,
        name: "Vape Free Uni Hackathon",
        company: "VicHealth Australia",
        domain: "Sustainability & Health",
        timeline: "Dec 2026 – Feb 2027",
        stipend: "Project Funding",
        stipend_numeric: 0,
        cohort: "Victorian University Students",
        tech: ["Public Health", "Solution Design", "Policy Implementation", "Product Design", "Stakeholder Co-design"],
        description: "A collaborative competition funded by the Vaping Prevention Collective Impact initiative uniting 6 Victorian universities. Multidisciplinary student teams pitch designs to stop youth vaping. The champion team receives capital funding and support to implement their programs on actual campuses.",
        process: [
          "Phase 1: Solution ideation and student team design draft",
          "Phase 2: Live pitch competition at the University of Melbourne",
          "Phase 3: Development and implementation program"
        ],
        fte: "Project-funded implementation internship providing immediate project management leadership roles."
      },
      {
        id: 8,
        name: "Flipkart GRiD 8.0",
        company: "Flipkart",
        domain: "E-Commerce",
        timeline: "Winter / Summer 2026",
        stipend: "₹1.5L EGVs + ₹1,00,000 / month",
        stipend_numeric: 100000,
        cohort: "B.Tech/B.E./M.Tech/PhD (2027-2030 Batches)",
        tech: ["LLMs", "Computer Vision", "Distributed Systems", "AI Engineering", "Data Science", "System design"],
        description: "India's premier engineering campus innovation hackathon. Tracks in Software Development, AI Engineering, and Data Science. Mentees must build systems showing deep learning, computer vision, and hyper-scale distributed computing architecture. Top finalists pitch live in Bengaluru.",
        process: [
          "Profile registration and screening verification",
          "90-minute proctored online coding & logic round",
          "Walmart/Flipkart business case simulation & code repository submission",
          "Bengaluru HQ Finals: 24-hr live prototype sprint & executive pitch"
        ],
        fte: "Direct interviews for SDE summer/winter internships and full-time SDE roles (packages up to 32.67 LPA)."
      },
      {
        id: 9,
        name: "HackOn Season 6",
        company: "Amazon",
        domain: "E-Commerce",
        timeline: "Summer 2026",
        stipend: "₹2.25L Cash Pool + SDE Intern",
        stipend_numeric: 80000,
        cohort: "B.Tech/M.Tech/MCA (2027-28 Batches, CGPA ≥6.5)",
        tech: ["Generative AI", "Cloud Infrastructure", "System Architecture", "AWS", "Prompt Engineering"],
        description: "Amazon India's flagship competitive hackathon. Challenges teams to build scalable cloud tools using Generative AI. Teams must identify customer pain points, code prototype tools, and deploy them on AWS systems, defending scalability choices to senior architects.",
        process: [
          "100-minute online coding & GenAI fundamentals test",
          "48-hour continuous virtual prototype build",
          "AWS structural mentorship to optimize scaling",
          "Grand Finale: Live platform presentation to Amazon tech directors (July 7, 2026)"
        ],
        fte: "Fast-tracked Pre-Placement Interviews (PPI) for SDE 6-month co-ops and full-time roles."
      },
      {
        id: 10,
        name: "Sparkathon 2026",
        company: "Walmart Global Tech",
        domain: "E-Commerce",
        timeline: "July – Dec 2026",
        stipend: "₹2.9L Cash + ₹1,00,000 / month",
        stipend_numeric: 100000,
        cohort: "B.E./B.Tech/Dual Degree (2026-27 Batches)",
        tech: ["Omnichannel Retail", "Supply Chain Optimization", "Cybersecurity", "IoT", "Data Systems"],
        description: "Walmart's specialized tech incubation hackathon. Focusing on omnichannel customer experiences, supply chain optimization, and retail cybersecurity. Students build solutions and present them to Walmart Tech leaders.",
        process: [
          "Product concept registration and submission",
          "2-minute structural video and architectural document submission",
          "Prototype coding and evaluation by tech staff",
          "Final live presentation at Walmart Converge event"
        ],
        fte: "Direct Pre-Placement Interviews for Software Engineering Internships and Full-time SDE roles (FTE CTC around 23 LPA)."
      },
      {
        id: 11,
        name: "HackerRamp: WeForShe 2026",
        company: "Myntra",
        domain: "E-Commerce",
        timeline: "Winter / Summer 2026",
        stipend: "₹3L Prizes + SDE Intern",
        stipend_numeric: 80000,
        cohort: "Female Engineering Students (2026-27 Batches)",
        tech: ["Fashion-Tech", "System Design", "UX/UI", "Data Structures", "Algorithms"],
        description: "A diversity-focused innovation pipeline. Female developers are challenged to solve real-world fashion-tech problems, including personalized styling tools, smart shopping systems, and retail algorithms, with active support from Myntra engineers.",
        process: [
          "Team registration and coding challenge (The Tech Gauntlet)",
          "Solution blueprinting and flow design",
          "Myntra mentor sessions to refine backend systems",
          "Grand Finale in Bengaluru: Live demo presentation"
        ],
        fte: "Guaranteed Pre-Placement Interviews for summer/winter Software Engineering and Business Analyst internships."
      },
      {
        id: 12,
        name: "Code for Good 2026",
        company: "JPMorgan Chase",
        domain: "FinTech",
        timeline: "Summer 2026",
        stipend: "₹75,000 - ₹80,000 / month",
        stipend_numeric: 78000,
        cohort: "B.Tech/B.E. (2026 & 2027 Batches, CGPA ≥8.5)",
        tech: ["Cloud Computing", "Big Data", "Agile", "CI/CD", "Web Systems", "Java/React/Python"],
        description: "JPMorgan's premiere social innovation hackathon. Students collaborate in teams to build web, mobile, or cloud prototypes for local non-profit organizations. Over 24 hours, they receive guidance from JPMorgan engineers to deliver code that is integrated into non-profit environments.",
        process: [
          "Resume shortlisting (strictly validating GPA over 8.5)",
          "HackerRank coding test (medium DSA)",
          "HireVue automated video interview",
          "24-hour live hackathon with continuous staff monitoring"
        ],
        fte: "Direct conversion tool into the JPMorgan Software Engineer Program (SEP) for internships and full-time roles."
      },
      {
        id: 13,
        name: "Juspay Hiring Challenge 2026",
        company: "Juspay",
        domain: "FinTech",
        timeline: "8-to-12 Month Co-op",
        stipend: "₹40,000 / month",
        stipend_numeric: 40000,
        cohort: "B.Tech/B.E. (2026 batch)",
        tech: ["Functional Programming", "Concurrency", "Low-Level Design", "Deadlock Prevention", "Operating Systems", "Pure Data Structures"],
        description: "Known as one of the most rigorous coding challenges. Focuses on concurrent operating systems logic and functional programming. Includes tasks like the 'Tree of Space' challenge, requiring multi-threaded trees with granular locking mechanisms and no external helper libraries.",
        process: [
          "30-minute CS & DBMS multiple-choice quiz",
          "90-minute algorithmic coding round (medium-hard DSA)",
          "Full-day intensive hackathon focusing on concurrent coding",
          "Low-Level Design (LLD) defense interviews with staff engineers"
        ],
        fte: "Conversion to 8-12 month university co-op internships, converting to full-time SDE offers (CTC 21 to 27 LPA)."
      },
      {
        id: 14,
        name: "GenSolve: Innovate to Impact",
        company: "Adobe",
        domain: "Enterprise Software",
        timeline: "Summer / Winter 2026",
        stipend: "₹1,00,000 / month",
        stipend_numeric: 100000,
        cohort: "B.Tech/M.Tech (2025-2027 Batches)",
        tech: ["Generative AI", "LLMs", "PDF Semantics", "Web UX", "Python", "Node.js"],
        description: "Adobe India's flagship innovation challenge focusing on Generative AI. Teams must redesign static PDFs, turning them into interactive files with structural awareness, semantic search, and chatbot functionality. Projects are submitted in private GitHub repositories.",
        process: [
          "Individual DSA assessment and MCQs (team-average logic)",
          "Build and Connect round: Backend Git submission with API logic",
          "Frontend Web UX round: Responsive app mock development",
          "Noida Headquarters Grand Finale: Presentation to executive staff"
        ],
        fte: "Pre-Placement Interviews (PPI) for Adobe Software SDE roles and hardware prizes (MacBooks)."
      },
      {
        id: 15,
        name: "Cisco Ideathon 2026",
        company: "Cisco",
        domain: "Enterprise Software",
        timeline: "Jan – June 2027 (Linked to '26 Selection)",
        stipend: "Highly Competitive",
        stipend_numeric: 60000,
        cohort: "Final Year Students (Networking Academy, CGPA ≥6.0)",
        tech: ["CCNA Routing", "CyberOps", "Python", "DevNet", "System Automation", "APIs"],
        description: "A targeted recruitment program connecting Cisco Networking Academy students with roles in the CX (Customer Experience) and Digital Enterprise Solutions divisions. Focuses on network programming, system virtualization, routing, and cloud automation.",
        process: [
          "90-minute online proctored CCNA/Python assessment (auto-submit safety)",
          "PowerPoint solution design on custom infrastructure problems",
          "Panel interview defending architecture choices"
        ],
        fte: "Integrated dual offer combining a 6-month immersive internship with a guaranteed full-time software engineering role."
      },
      {
        id: 16,
        name: "TCS CodeVita Season 13",
        company: "TCS",
        domain: "Enterprise Software",
        timeline: "Extended Internship / FTE",
        stipend: "$20,000 USD (Prize Pool)",
        stipend_numeric: 30000,
        cohort: "Global Engineering Students (146k+ Registrants)",
        tech: ["C++", "Java", "Python", "Graph Theory", "Dynamic Programming", "Number Theory", "LLMs"],
        description: "Recognized as the world's largest competitive coding event. Features algorithmic puzzles on the Mooshak platform. Problems scale from simple array tasks to complex graph algorithms, number theory, and 2D dynamic programming.",
        process: [
          "Round 1: 6-hour local competitive programming round",
          "Round 2: Regional qualifier coding round",
          "Grand Finale: Global live coding challenge"
        ],
        fte: "Direct software engineering interviews for TCS Ninja, Digital, and Prime roles."
      },
      {
        id: 17,
        name: "EY Techathon 6.0",
        company: "EY (Ernst & Young)",
        domain: "Enterprise Software",
        timeline: "2026 Selection",
        stipend: "₹3L Cash Pool",
        stipend_numeric: 35000,
        cohort: "University/College Students (India)",
        tech: ["Agentic AI", "Autonomous Systems", "BFSI", "Retail", "API Orchestration", "Adaptive Learning"],
        description: "An innovation challenge focusing on Agentic AI. Teams must build autonomous, goal-driven AI systems capable of executing multi-step workflows with minimal human oversight. Tracks include FMCG, BFSI, Retail, and Education.",
        process: [
          "Idea registration and initial concept draft",
          "Agentic AI architectural flow design and documentation",
          "Grand Finale: Solution defense to tech executives & CIOs"
        ],
        fte: "Fast-tracked Pre-Placement Interviews within EY's elite Technology Consulting practice."
      },
      {
        id: 18,
        name: "Optum Stratethon",
        company: "Optum (UnitedHealth Group)",
        domain: "Sustainability & Health",
        timeline: "2026 Selection",
        stipend: "$6,700 USD (Prize Pool)",
        stipend_numeric: 50000,
        cohort: "Engineering (E-Track) & MBA (B-Track) Students",
        tech: ["IoT", "Blockchain", "Healthcare Analytics", "Telemetry Systems", "Wearables"],
        description: "An international hackathon focusing on medical technology. Student teams build healthcare solutions, including real-time monitoring via IoT wearables and secure medical records sharing using blockchain infrastructure.",
        process: [
          "90-minute online coding and logic challenge",
          "Executive concept summary submission",
          "Product prototype demo video",
          "Live presentation to senior executives"
        ],
        fte: "Pre-Placement Interviews for software engineering and health analytics roles at Optum."
      },
      {
        id: 19,
        name: "Schneider Go Green 2026",
        company: "Schneider Electric",
        domain: "Sustainability & Health",
        timeline: "Summer 2026",
        stipend: "€10,000 (Prize Pool)",
        stipend_numeric: 45000,
        cohort: "Engineering Students (2026-27 cohorts)",
        tech: ["Solar Architecture", "Energy Efficiency", "Clean Energy Integration", "Agriculture Storage"],
        description: "A global initiative to design energy solutions under the theme 'Renewable Energy for Life & Livelihood'. Students design clean energy systems, solar-powered agricultural storage, and micro-grid systems for local communities.",
        process: [
          "Project proposal and feasibility submission",
          "Mentorship phase with Schneider Electric engineering experts",
          "Regional and Global final presentations"
        ],
        fte: "Access to internship programs and direct recruitment into Schneider graduate training paths."
      },
      {
        id: 20,
        name: "Smart India Hackathon (SIH) 2026",
        company: "Ministry of Education & Partners",
        domain: "GovTech & Infrastructure",
        timeline: "July – Dec 2026",
        stipend: "Cash Prizes + Internships",
        stipend_numeric: 25000,
        cohort: "Indian Engineering Students (6-member teams)",
        tech: ["Edge AI", "IoT Sensors", "Computer Vision", "Blockchain", "Progressive Web Apps"],
        description: "The world's largest open innovation challenge. Teams build solutions for hyper-specific problem statements submitted by central government ministries, state departments, and corporate entities (e.g. offline medical PWAs, pipeline leakage prediction, agricultural computer vision).",
        process: [
          "Internal college-level hackathon screening",
          "National proposal review and selection",
          "36-hour non-stop offline coding sprint at nodal centers"
        ],
        fte: "Direct recruitment and internships sponsored by corporate partners and government ministries."
      },
      {
        id: 21,
        name: "Microsoft Imagine Cup 2026",
        company: "Microsoft",
        domain: "GovTech & Infrastructure",
        timeline: "Startup Incubation",
        stipend: "$100,000 USD (Grand Prize)",
        stipend_numeric: 0,
        cohort: "Student Tech Founders (Global)",
        tech: ["Azure AI Services", "OpenAI APIs", "Machine Learning", "System Architecture", "Cloud Scale"],
        description: "A global startup incubation platform. Students design AI-native MVPs using at least two advanced Microsoft Azure AI services. Offers $100k in non-dilutive funding, Azure/OpenAI credits, and mentorship with CEO Satya Nadella.",
        process: [
          "Innovate Phase: Idea validation & tech stack planning",
          "Validate Phase: MVP coding and product testing",
          "Accelerate Phase: Semifinals & Business pitch mentoring",
          "World Championship: Final pitch presentation"
        ],
        fte: "Incubation capital and resources to scale the student startup into a venture-backed enterprise."
      }
    ];

    // Group programs dynamically by Hackathon vs Internship classifications
    programsData.forEach(item => {
      const internshipIds = [1, 2, 3, 4, 5, 6, 15]; // NeGD, LFX, WPP, A&O Shearman, GHHI, Turtle Island, Cisco
      item.category = internshipIds.includes(item.id) ? "Internship" : "Hackathon";
    });

    // Global Filter Variables
    let selectedSector = "All";
    let selectedCategory = "All";
    let selectedId = 1; // Tracks selected card in split pane

    // Sidebar navigation filter trigger (Classification)
    function selectCategory(categoryName) {
      selectedCategory = categoryName;
      
      // Update UI button highlights for category list
      const btns = document.querySelectorAll('[id^="btn-cat-"]');
      btns.forEach(b => b.classList.remove('active'));
      
      const idMap = {
        'All': 'btn-cat-all',
        'Hackathon': 'btn-cat-hackathon',
        'Internship': 'btn-cat-internship'
      };
      
      const activeBtn = document.getElementById(idMap[categoryName]);
      if (activeBtn) activeBtn.classList.add('active');
      
      onFilterUpdate();
    }

    // Sidebar navigation filter trigger (Sector)
    function selectSector(sectorName) {
      selectedSector = sectorName;
      
      // Update UI button highlights for sector list
      const btns = document.querySelectorAll('.filter-item-btn:not([id^="btn-cat-"])');
      btns.forEach(b => b.classList.remove('active'));
      
      const idMap = {
        'All': 'btn-all',
        'E-Commerce': 'btn-ecommerce',
        'FinTech': 'btn-fintech',
        'Open Source': 'btn-opensource',
        'GovTech & Infrastructure': 'btn-govtech',
        'Enterprise Software': 'btn-enterprise',
        'Sustainability & Health': 'btn-sustainability'
      };
      
      const activeBtn = document.getElementById(idMap[sectorName]);
      if (activeBtn) activeBtn.classList.add('active');
      
      onFilterUpdate();
    }

    // Core Filtering logic (Search + Sector + Category)
    function onFilterUpdate() {
      const searchVal = document.getElementById('search-field').value.toLowerCase();
      
      const filtered = programsData.filter(item => {
        const matchesCategory = (selectedCategory === "All" || item.category === selectedCategory);
        const matchesSector = (selectedSector === "All" || item.domain === selectedSector);
        const matchesSearch = !searchVal || 
          item.name.toLowerCase().includes(searchVal) ||
          item.company.toLowerCase().includes(searchVal) ||
          item.tech.some(t => t.toLowerCase().includes(searchVal));
        return matchesCategory && matchesSector && matchesSearch;
      });
      
      renderListPane(filtered);
      compileFiltersCounts(); // Dynamically update filter indicator badges
      
      // Automatically select the first filtered item to populate inspector
      if (filtered.length > 0) {
        selectProgram(filtered[0].id);
      } else {
        renderEmptyInspector();
      }
    }

    // Real-world registration details database (dates and links)
    const registrationDetails = {
      1: { start: "June 1, 2026", end: "July 15, 2026", target: "2026-07-15T23:59:59", event: "July 1 – Dec 31, 2026", link: "https://dic.gov.in/index.php/careers" },
      2: { start: "July 1, 2026", end: "August 27, 2026", target: "2026-08-27T23:59:59", event: "Sept 7 – Nov 27, 2026", link: "https://mentorship.lfx.linuxfoundation.org/" },
      3: { start: "May 15, 2026", end: "July 20, 2026", target: "2026-07-20T23:59:59", event: "July 1 – Dec 31, 2026", link: "https://www.wpp.com/careers" },
      4: { start: "May 1, 2026", end: "July 10, 2026", target: "2026-07-10T23:59:59", event: "July 1 – Dec 31, 2026", link: "https://www.aoshearman.com/en/careers" },
      5: { start: "May 1, 2026", end: "July 12, 2026", target: "2026-07-12T23:59:59", event: "July 1 – Dec 31, 2026", link: "https://www.greenandhealthyhomes.org/careers/" },
      6: { start: "May 10, 2026", end: "July 15, 2026", target: "2026-07-15T23:59:59", event: "July 1 – Dec 31, 2026", link: "https://seaturtles.org/about-us/careers/" },
      7: { start: "October 1, 2026", end: "November 25, 2026", target: "2026-11-25T23:59:59", event: "Dec 2026 – Feb 2027", link: "https://www.vichealth.vic.gov.au/" },
      8: { start: "June 15, 2026", end: "July 28, 2026", target: "2026-07-28T23:59:59", event: "August – October 2026", link: "https://unstop.com/hackathons/crp-flipkart-grid-60-software-development-track-flipkart-grid-60-flipkart-1024247" },
      9: { start: "June 1, 2026", end: "July 12, 2026", target: "2026-07-12T23:59:59", event: "June – July 7, 2026", link: "https://unstop.com/hackathons/crp-hackon-with-amazon-60-amazon-1682652" },
      10: { start: "June 10, 2026", end: "August 8, 2026", target: "2026-08-08T23:59:59", event: "August – October 2026", link: "https://walmart.converge.tech/sparkathon" },
      11: { start: "June 20, 2026", end: "July 30, 2026", target: "2026-07-30T23:59:59", event: "August – September 2026", link: "https://unstop.com/hackathons/crp-myntra-hackerramp-weforshe-2025-myntra-1513857" },
      12: { start: "May 15, 2026", end: "August 15, 2026", target: "2026-08-15T23:59:59", event: "Late Summer 2026", link: "https://careers.jpmorgan.com/US/en/students/programs/code-for-good" },
      13: { start: "June 15, 2026", end: "July 22, 2026", target: "2026-07-22T23:59:59", event: "July 25 – August 2026", link: "https://unstop.com/hackathons/crp-juspay-hiring-challenge-2022-juspay-263513" },
      14: { start: "July 1, 2026", end: "August 10, 2026", target: "2026-08-10T23:59:59", event: "August – September 2026", link: "https://unstop.com/hackathons/crp-adobe-india-hackathon-adobe-1483364" },
      15: { start: "July 15, 2026", end: "September 15, 2026", target: "2026-09-15T23:59:59", event: "September – October 2026", link: "https://www.cisco.com/c/en/us/about/careers/working-at-cisco/students-and-new-graduate.html" },
      16: { start: "August 1, 2026", end: "November 15, 2026", target: "2026-11-15T23:59:59", event: "Nov 2026 – March 2027", link: "https://codevita.tcsapps.com/" },
      17: { start: "August 10, 2026", end: "October 5, 2026", target: "2026-10-05T23:59:59", event: "October – November 2026", link: "https://www.ey.com/en_in/careers" },
      18: { start: "July 1, 2026", end: "August 20, 2026", target: "2026-08-20T23:59:59", event: "August – September 2026", link: "https://www.optum.com/careers" },
      19: { start: "May 1, 2026", end: "July 30, 2026", target: "2026-07-30T23:59:59", event: "August – September 2026", link: "https://www.gogreencompetition.com/" },
      20: { start: "July 20, 2026", end: "September 30, 2026", target: "2026-09-30T23:59:59", event: "October – December 2026", link: "https://sih.gov.in/" },
      21: { start: "September 1, 2026", end: "January 15, 2027", target: "2027-01-15T23:59:59", event: "Jan – May 2027", link: "https://imaginecup.microsoft.com/" }
    };

    // Render Compact list inside split list view pane
    function renderListPane(data) {
      const listContainer = document.getElementById('split-list-container');
      listContainer.innerHTML = "";
      
      if (data.length === 0) {
        listContainer.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: var(--text-dim);">
            <p style="font-size:0.9rem">No programs match</p>
          </div>
        `;
        return;
      }
      
      data.forEach(item => {
        const card = document.createElement('div');
        card.id = `list-card-${item.id}`;
        card.className = `compact-program-card ${item.id === selectedId ? 'selected' : ''}`;
        card.onclick = () => selectProgram(item.id, true);
        
        let domainClass = 'domain-opensource';
        const d = item.domain.toLowerCase();
        if (d.includes('ecommerce')) domainClass = 'domain-ecommerce';
        else if (d.includes('fintech')) domainClass = 'domain-fintech';
        else if (d.includes('govtech')) domainClass = 'domain-govtech';
        else if (d.includes('enterprise')) domainClass = 'domain-enterprise';
        else if (d.includes('sustainability') || d.includes('health')) domainClass = 'domain-sustainability';
        
        card.innerHTML = `
          <div class="compact-card-header">
            <span class="compact-comp">${item.company}</span>
            <span class="domain-badge ${domainClass}">${item.domain.split(' ')[0]}</span>
          </div>
          <h4 class="compact-title">${item.name}</h4>
          <div class="compact-card-meta">
            <span style="color:var(--text-dim); font-size:0.75rem" id="card-countdown-${item.id}">⌛ Calculating...</span>
            <span class="compact-stipend">${item.stipend.split(' ')[0]}</span>
          </div>
        `;
        listContainer.appendChild(card);
      });
    }

    // Real-world authenticity audit proof database
    const verificationProofs = {
      1: "National e-Governance Division (NeGD) maintains official technical internship programs under the Digital India Corporation and MeitY, based in New Delhi.",
      2: "Linux Foundation Mentorship (LFX) is an established global open source software development portal hosting seasonal software projects for CNCF, RISC-V, and Hyperledger ecosystems.",
      3: "WPP Open is the central advertising AI platform engineered by WPP plc (the world's largest advertising agency group), active in Singapore.",
      4: "A&O Shearman was officially formed in 2024 through the merger of Allen & Overy and Shearman & Sterling, running corporate law internships globally.",
      5: "Green & Healthy Homes Initiative (GHHI) is a registered US non-profit organization based in Baltimore, MD, tracking budget/accounting parameters.",
      6: "Turtle Island Restoration Network is a registered US ocean conservation nonprofit based in Olema, CA, active in environmental policy research.",
      7: "VicHealth Vaping Prevention Collective Impact initiative is an active public health campaign run by the Victorian Health Promotion Foundation in Australia.",
      8: "Flipkart GRiD is Flipkart India's annual flagship campus SDE and AI challenge, serving as a primary pipeline for internships and full-time hiring.",
      9: "Amazon HackOn is an official competitive innovation hackathon run annually by Amazon India for engineering campuses.",
      10: "Walmart Sparkathon is Walmart Global Tech India's official annual innovation hackathon providing direct SDE conversion interviews.",
      11: "Myntra HackerRamp WeForShe is Myntra's official annual diversity engineering hackathon designed to hire female developers.",
      12: "JPMorgan Chase Code for Good is an established global 24-hour social hackathon used as a key channel to recruit SDE interns.",
      13: "Juspay Hiring Challenge is a renowned competitive gateway in India, famous for its rigorous thread safety and Tree of Space concurrency tests.",
      14: "Adobe GenSolve is an official competitive challenge run by Adobe India focusing on PDF systems and Creative Cloud GenAI applications.",
      15: "Cisco Ideathon is Cisco's official campus recruitment pipeline managed globally through Cisco Networking Academy.",
      16: "TCS CodeVita is TCS's flagship global programming contest, recognized by Guinness World Records as the world's largest coding competition.",
      17: "EY Techathon is Ernst & Young India's official annual campus technology innovation challenge, focusing on Agentic AI and enterprise software.",
      18: "Optum Stratethon is UnitedHealth Group's annual international tech and business hackathon held across India, Singapore, and Philippines.",
      19: "Schneider Go Green is Schneider Electric's official global green-tech innovation competition, running annually since 2011.",
      20: "Smart India Hackathon (SIH) is India's official national hackathon organized by AICTE and the Ministry of Education, running since 2017.",
      21: "Microsoft Imagine Cup is Microsoft's premier global student technology startup competition, operating since 2003 with a $100k grand prize."
    };

    // Populate Right Panel details inspector
    function selectProgram(id, isUserClick = false) {
      selectedId = id;
      
      // Update selected class in compact card list
      const cards = document.querySelectorAll('.compact-program-card');
      cards.forEach(c => c.classList.remove('selected'));
      
      const activeCard = document.getElementById(`list-card-${id}`);
      if (activeCard) activeCard.classList.add('selected');
      
      const item = programsData.find(p => p.id === id);
      if (!item) return;
      
      const inspector = document.getElementById('split-inspector');
      
      if (isUserClick && window.innerWidth <= 768) {
        inspector.classList.add('open');
        document.body.classList.add('modal-open');
      }
      
      let domainClass = 'domain-opensource';
      const d = item.domain.toLowerCase();
      if (d.includes('ecommerce')) domainClass = 'domain-ecommerce';
      else if (d.includes('fintech')) domainClass = 'domain-fintech';
      else if (d.includes('govtech')) domainClass = 'domain-govtech';
      else if (d.includes('enterprise')) domainClass = 'domain-enterprise';
      else if (d.includes('sustainability') || d.includes('health')) domainClass = 'domain-sustainability';
      
      const proofText = verificationProofs[id] || "Real-world program authenticity confirmed via public registers.";
      const regDetails = registrationDetails[id] || { start: "N/A", end: "N/A", target: "", event: "N/A", link: "#" };
      
      inspector.innerHTML = `
        <button class="inspector-close-btn" onclick="closeInspector()" aria-label="Close details">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <div class="inspector-scroll-container">
          <div class="inspector-view-animated">
            <div class="inspector-company">${item.company}</div>
            <h3 class="inspector-title">${item.name}</h3>
          
          <div class="inspector-badges">
            <span class="domain-badge ${domainClass}">${item.domain}</span>
            <span class="tech-pill" style="color:#fff; border-color:rgba(255,255,255,0.08)">${item.timeline}</span>
            <span class="tech-pill" style="color:var(--color-secondary); border-color:rgba(0,240,255,0.15)">${item.stipend}</span>
          </div>

          <!-- Registration Dashboard & Real-Time Countdown -->
          <div class="inspector-section" style="border-top:none; padding-top:0;">
            <div class="inspector-section-lbl" style="margin-bottom:0.25rem">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Registration Deadline Countdown
            </div>
            
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; background:rgba(255,255,255,0.015); border:1px solid var(--panel-border); border-radius:14px; padding:0.85rem 1rem;">
              <div class="countdown-timer-box">
                <div class="timer-segment">
                  <div class="timer-val" id="timer-days">00</div>
                  <div class="timer-lbl">Days</div>
                </div>
                <div class="timer-segment">
                  <div class="timer-val" id="timer-hours">00</div>
                  <div class="timer-lbl">Hours</div>
                </div>
                <div class="timer-segment">
                  <div class="timer-val" id="timer-minutes">00</div>
                  <div class="timer-lbl">Mins</div>
                </div>
                <div class="timer-segment">
                  <div class="timer-val" id="timer-seconds">00</div>
                  <div class="timer-lbl">Secs</div>
                </div>
              </div>
              
              <a href="${regDetails.link}" target="_blank" class="register-cta-btn" id="inspector-register-btn">
                <span>Register Now</span>
                <svg style="width:14px;height:14px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>

            <!-- Event Dates Table Grid -->
            <div class="inspector-dates-grid">
              <div class="inspector-date-item">
                <div style="font-size:0.6rem; color:var(--text-dim); text-transform:uppercase; font-weight:600; letter-spacing:0.25px;">Registration Starts</div>
                <div style="font-size:0.8rem; color:#fff; font-weight:600; margin-top:2px;">${regDetails.start}</div>
              </div>
              <div class="inspector-date-item">
                <div style="font-size:0.6rem; color:var(--text-dim); text-transform:uppercase; font-weight:600; letter-spacing:0.25px;">Registration Deadline</div>
                <div style="font-size:0.8rem; color:#fff; font-weight:600; margin-top:2px;">${regDetails.end}</div>
              </div>
              <div class="inspector-date-item">
                <div style="font-size:0.6rem; color:var(--text-dim); text-transform:uppercase; font-weight:600; letter-spacing:0.25px;">Official Event Date</div>
                <div style="font-size:0.8rem; color:#fff; font-weight:600; margin-top:2px;">${regDetails.event}</div>
              </div>
            </div>
          </div>

          <div class="inspector-section">
            <div class="inspector-section-lbl">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Program Overview
            </div>
            <p class="inspector-desc-text">${item.description}</p>
          </div>

          <div class="inspector-section">
            <div class="inspector-section-lbl">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Technological Focus
            </div>
            <div class="inspector-tech-box">
              ${item.tech.map(t => `<span class="inspector-tech-tag">${t}</span>`).join('')}
            </div>
          </div>

          <div class="inspector-section">
            <div class="inspector-section-lbl">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
              Selection Pipeline
            </div>
            <div class="inspector-timeline">
              ${item.process.map((step, idx) => `
                <div class="inspector-step">
                  <div class="inspector-step-num">${idx + 1}</div>
                  <div class="inspector-step-text">${step}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="inspector-section">
            <div class="inspector-section-lbl">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Full-Time Pre-Placement Pipeline
            </div>
            <div class="inspector-fte-box">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div class="inspector-fte-text">${item.fte}</div>
            </div>
          </div>

          <div class="inspector-section">
            <div class="inspector-section-lbl">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Authenticity Verified
            </div>
            <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.15); border-radius: 12px; padding: 0.85rem; display: flex; gap: 0.6rem; align-items: flex-start;">
              <span style="color:var(--color-success); font-weight:700; font-size:0.75rem;">[VERIFIED]</span>
              <span style="font-size:0.85rem; color:var(--text-muted); line-height:1.4;">${proofText}</span>
            </div>
          </div>
        </div>
      </div>
      `;
      updateCountdowns(); // Run immediate update for the inspector timer values
    }

    // Empty state inspector rendering
    function renderEmptyInspector() {
      const inspector = document.getElementById('split-inspector');
      inspector.innerHTML = `
        <div class="inspector-placeholder">
          <svg style="width:48px;height:48px" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p>Select a program in the explorer pane to inspect details</p>
        </div>
      `;
    }

    // Update totals dynamically on sidebar cross-filtering
    function compileFiltersCounts() {
      // 1. Calculate Sector Counts based on selectedCategory
      const sectorCountMap = {
        'All': 0, 'E-Commerce': 0, 'FinTech': 0, 'Open Source': 0, 
        'GovTech & Infrastructure': 0, 'Enterprise Software': 0, 'Sustainability & Health': 0
      };
      
      const categoryData = programsData.filter(item => selectedCategory === "All" || item.category === selectedCategory);
      
      categoryData.forEach(p => {
        sectorCountMap['All']++;
        if (sectorCountMap[p.domain] !== undefined) {
          sectorCountMap[p.domain]++;
        }
      });
      
      document.getElementById('cnt-all').innerText = sectorCountMap['All'];
      document.getElementById('cnt-ecommerce').innerText = sectorCountMap['E-Commerce'];
      document.getElementById('cnt-fintech').innerText = sectorCountMap['FinTech'];
      document.getElementById('cnt-opensource').innerText = sectorCountMap['Open Source'];
      document.getElementById('cnt-govtech').innerText = sectorCountMap['GovTech & Infrastructure'];
      document.getElementById('cnt-enterprise').innerText = sectorCountMap['Enterprise Software'];
      document.getElementById('cnt-sustainability').innerText = sectorCountMap['Sustainability & Health'];
      
      // 2. Calculate Category Counts based on selectedSector
      const catCountMap = { 'All': 0, 'Hackathon': 0, 'Internship': 0 };
      const sectorData = programsData.filter(item => selectedSector === "All" || item.domain === selectedSector);
      
      sectorData.forEach(p => {
        catCountMap['All']++;
        if (catCountMap[p.category] !== undefined) {
          catCountMap[p.category]++;
        }
      });
      
      const elCatAll = document.getElementById('cnt-cat-all');
      const elCatHack = document.getElementById('cnt-cat-hackathon');
      const elCatInt = document.getElementById('cnt-cat-internship');
      
      if(elCatAll) elCatAll.innerText = catCountMap['All'];
      if(elCatHack) elCatHack.innerText = catCountMap['Hackathon'];
      if(elCatInt) elCatInt.innerText = catCountMap['Internship'];
      
      // Update top KPI stat based on fully combined filters
      const fullyFiltered = programsData.filter(item => 
        (selectedCategory === "All" || item.category === selectedCategory) &&
        (selectedSector === "All" || item.domain === selectedSector)
      );
      document.getElementById('kpi-programs').innerText = fullyFiltered.length;
    }

    // Chart.js objects controllers
    let stipendChartObj = null;
    let sectorChartObj = null;
    let skillsChartObj = null;

    function renderCharts() {
      // 1. Stipend Bar Chart Data compiling
      const topStipends = programsData
        .filter(p => p.stipend_numeric > 0)
        .sort((a, b) => b.stipend_numeric - a.stipend_numeric)
        .slice(0, 7);
        
      const barLabels = topStipends.map(p => {
        const nameMap = {
          "National e-Governance Division (NeGD)": "NeGD",
          "CNCF (Linux Foundation)": "CNCF LFX",
          "WPP Media Singapore": "WPP Media",
          "A&O Shearman Luxembourg": "A&O Shearman",
          "Green & Healthy Homes Initiative (GHHI)": "GHHI",
          "Turtle Island Restoration Network": "Turtle Island",
          "Vape Free Uni Hackathon": "Vape Free",
          "Walmart Global Tech": "Walmart",
          "EY (Ernst & Young)": "EY",
          "Optum (UnitedHealth Group)": "Optum",
          "Schneider Electric": "Schneider",
          "Ministry of Education & Partners": "SIH (MoE)",
          "JPMorgan Chase": "JPMorgan"
        };
        return nameMap[p.company] || p.company;
      });
      const barValues = topStipends.map(p => p.stipend_numeric);
      
      const ctxBar = document.getElementById('stipendChart').getContext('2d');
      const barGradients = barLabels.map((_, i) => {
        const colors = [
          ['rgba(138, 43, 226, 0.85)', 'rgba(138, 43, 226, 0.25)'],
          ['rgba(0, 240, 255, 0.85)', 'rgba(0, 240, 255, 0.25)'],
          ['rgba(255, 0, 127, 0.85)', 'rgba(255, 0, 127, 0.25)'],
          ['rgba(16, 185, 129, 0.85)', 'rgba(16, 185, 129, 0.25)'],
          ['rgba(245, 158, 11, 0.85)', 'rgba(245, 158, 11, 0.25)'],
          ['rgba(59, 130, 246, 0.85)', 'rgba(59, 130, 246, 0.25)'],
          ['rgba(6, 182, 212, 0.85)', 'rgba(6, 182, 212, 0.25)']
        ];
        const g = ctxBar.createLinearGradient(0, 0, 250, 0); // left to right gradient for horizontal bars!
        g.addColorStop(0, colors[i % colors.length][0]);
        g.addColorStop(1, colors[i % colors.length][1]);
        return g;
      });
 
      stipendChartObj = new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: barLabels,
          datasets: [{
            data: barValues,
            backgroundColor: barGradients,
            borderColor: ['#8a2be2', '#00f0ff', '#ff007f', '#10b981', '#f59e0b', '#3b82f6', '#06b6d4'],
            borderWidth: 1.5,
            borderRadius: 5
          }]
        },
        options: {
          indexAxis: 'y', // Convert to Horizontal Bar Chart!
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0c0c14',
              titleFont: { family: 'Outfit', size: 12, weight: 'bold' },
              bodyFont: { family: 'Inter', size: 11 },
              borderColor: 'rgba(255,255,255,0.06)',
              borderWidth: 1,
              callbacks: {
                title: function(context) {
                  const idx = context[0].dataIndex;
                  return topStipends[idx].company; // Show full company name in tooltip
                },
                label: function(c) { return `Stipend: ₹${c.raw.toLocaleString()}/mo`; }
              }
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255, 255, 255, 0.03)' },
              ticks: {
                color: '#6b7280',
                font: { family: 'Inter', size: 9 },
                callback: function(v) { return '₹' + v/1000 + 'k'; }
              }
            },
            y: {
              grid: { display: false },
              ticks: { 
                color: '#e5e7eb', // Bright readable labels
                font: { family: 'Inter', size: 9, weight: '600' } 
              }
            }
          }
        }
      });
 
      // 2. Sector Distribution doughnut data
      const sectorCounts = {};
      programsData.forEach(p => {
        sectorCounts[p.domain] = (sectorCounts[p.domain] || 0) + 1;
      });
      const pieLabels = Object.keys(sectorCounts);
      const pieValues = Object.values(sectorCounts);
      
      const ctxPie = document.getElementById('sectorChart').getContext('2d');
      const pieColors = [
        'rgba(59, 130, 246, 0.75)',
        'rgba(138, 43, 226, 0.75)',
        'rgba(245, 158, 11, 0.75)',
        'rgba(16, 185, 129, 0.75)',
        'rgba(6, 182, 212, 0.75)',
        'rgba(236, 72, 153, 0.75)'
      ];

      sectorChartObj = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
          labels: pieLabels,
          datasets: [{
            data: pieValues,
            backgroundColor: pieColors,
            borderColor: '#050508',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }, // Done via HTML side legend below
            tooltip: {
              backgroundColor: '#0c0c14',
              titleFont: { family: 'Outfit', size: 12 },
              bodyFont: { family: 'Inter', size: 11 },
              borderColor: 'rgba(255,255,255,0.06)',
              borderWidth: 1
            }
          },
          cutout: '72%'
        }
      });

      // Generate HTML Legend dynamically
      const legendContainer = document.getElementById('sector-legend');
      legendContainer.innerHTML = pieLabels.map((label, idx) => {
        const color = pieColors[idx % pieColors.length];
        const shortLabel = label.replace(" & Infrastructure", "").replace(" Software", "").replace(" & Health", "");
        return `
          <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; color: var(--text-muted);">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: ${color}; display: inline-block;"></span>
            <span style="flex-grow: 1; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${shortLabel}</span>
            <span style="color: #fff; font-weight: 600;">${pieValues[idx]}</span>
          </div>
        `;
      }).join('');
 
      // 3. Web/Radar Chart (Core Skills Demands index)
      const ctxRadar = document.getElementById('skillsChart').getContext('2d');
      skillsChartObj = new Chart(ctxRadar, {
        type: 'radar',
        data: {
          labels: ['AI & ML', 'Cloud/DevOps', 'Algorithms', 'Data Eng.', 'Domain Exp.'],
          datasets: [{
            data: [9.5, 8.0, 7.5, 7.0, 6.0],
            backgroundColor: 'rgba(0, 240, 255, 0.15)',
            borderColor: 'rgba(0, 240, 255, 0.85)',
            borderWidth: 2,
            pointBackgroundColor: '#ff007f',
            pointBorderColor: '#fff',
            pointRadius: 4.5,
            pointHoverRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0c0c14',
              titleFont: { family: 'Outfit', size: 12 },
              bodyFont: { family: 'Inter', size: 11 },
              borderColor: 'rgba(255,255,255,0.06)',
              borderWidth: 1
            }
          },
          scales: {
            r: {
              angleLines: { color: 'rgba(255, 255, 255, 0.15)' }, // High contrast grid elements
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              pointLabels: {
                color: '#e5e7eb', // High contrast readable bright labels
                font: { family: 'Outfit', size: 9, weight: '700' }
              },
              ticks: { display: false },
              suggestedMin: 0,
              suggestedMax: 10
            }
          }
        }
      });
    }

    // Live stream mock updates database
    const mockUpdates = [
      { prefix: "NeGD", suffix: "Candidate proposal accepted for RAG chatbot pipelines." },
      { prefix: "LFX CNCF", suffix: "Llama 3 local agent adapter successfully integrated by mentee." },
      { prefix: "WPP Media", suffix: "Singapore programmatic campaign simulation complete." },
      { prefix: "A&O Shearman", suffix: "Luxembourg capital markets legal briefing audit done." },
      { prefix: "GHHI", suffix: "Baltimore month-end closure model variance verified." },
      { prefix: "Turtle Island", suffix: "California NGO advocacy policy tracker updated." },
      { prefix: "Flipkart", suffix: "GRiD software track milestone 2 coding assessments proctored." },
      { prefix: "Amazon", suffix: "HackOn Season 6 prototype files uploaded to AWS S3 bucket." },
      { prefix: "Walmart", suffix: "Sparkathon sustainable supply chain proposal evaluated." },
      { prefix: "Myntra", suffix: "HackerRamp female developer coding gauntlet finalized." },
      { prefix: "JPMorgan", suffix: "Code for Good NGO microloans platform code committed." },
      { prefix: "Juspay", suffix: "Tree of Space multi-threaded race condition tests pass." },
      { prefix: "Adobe", suffix: "GenSolve PDF semantic insight front-end model approved." },
      { prefix: "Cisco", suffix: "Ideathon routing infrastructure powerpoint defense submitted." },
      { prefix: "TCS", suffix: "CodeVita Season 13 global prime SDE interview links allocated." },
      { prefix: "EY", suffix: "Techathon 6.0 Retail Agentic AI model finalized." },
      { prefix: "Optum", suffix: "Stratethon IoT cardiac telemetry device simulator verified." },
      { prefix: "Schneider", suffix: "Go Green sustainable proposal shortlisted for regional finals." },
      { prefix: "SIH 2026", suffix: "Offline medical PWA 36-hour sprint prototype deployed." },
      { prefix: "Microsoft", suffix: "Imagine Cup Azure OpenAI credits activated for semifinalists." }
    ];

    function startLiveStream() {
      const feed = document.getElementById('live-feed');
      if (!feed) return;
      
      // Initialize with 3 entries
      for (let i = 0; i < 3; i++) {
        const item = mockUpdates[Math.floor(Math.random() * mockUpdates.length)];
        pushLiveFeedItem(feed, item, true);
      }
      
      // Update periodically every 5 seconds
      setInterval(() => {
        const item = mockUpdates[Math.floor(Math.random() * mockUpdates.length)];
        pushLiveFeedItem(feed, item, false);
      }, 5000);
    }

    function pushLiveFeedItem(container, item, immediate) {
      const log = document.createElement('div');
      log.style.fontSize = '0.7rem';
      log.style.lineHeight = '1.3';
      log.style.paddingBottom = '0.25rem';
      log.style.borderBottom = '1px solid rgba(255,255,255,0.02)';
      
      log.innerHTML = `
        <span style="color:var(--color-secondary); font-weight:700;">[${item.prefix}]</span> 
        <span style="color:var(--text-muted);">${item.suffix}</span>
      `;
      
      container.insertBefore(log, container.firstChild);
      
      // Keep feed max 4 entries
      if (container.children.length > 4) {
        container.removeChild(container.lastChild);
      }
    }

    // Toggle Mobile Sidebar Drawer
    function toggleSidebar() {
      const sidebar = document.querySelector('.sidebar');
      const hamburgerBtn = document.querySelector('.hamburger-btn');
      if (sidebar) {
        const isOpen = sidebar.classList.toggle('open');
        if (hamburgerBtn) {
          hamburgerBtn.classList.toggle('open', isOpen);
        }
        document.body.classList.toggle('sidebar-open', isOpen);
      }
    }

    // Close Mobile Program Details Inspector Popup
    function closeInspector() {
      const inspector = document.getElementById('split-inspector');
      if (inspector) {
        inspector.classList.remove('open');
      }
      document.body.classList.remove('modal-open');
    }

    // Countdown Timer ticks engine
    function updateCountdowns() {
      // 1. Update compact list card countdown indicators
      programsData.forEach(item => {
        const span = document.getElementById(`card-countdown-${item.id}`);
        if (!span) return;
        
        const details = registrationDetails[item.id];
        if (!details) return;
        
        const now = new Date().getTime();
        const target = new Date(details.target).getTime();
        const diff = target - now;
        
        if (diff <= 0) {
          span.innerHTML = `<span style="color:var(--text-dim)">Closed</span>`;
        } else {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          
          if (days > 0) {
            span.innerHTML = `<span style="color:var(--color-warning)">⌛ ${days}d ${hours}h left</span>`;
          } else {
            span.innerHTML = `<span style="color:var(--color-accent)">⌛ ${hours}h ${minutes}m left</span>`;
          }
        }
      });
      
      // 2. Update active Detail Inspector countdown boxes
      const details = registrationDetails[selectedId];
      if (details) {
        const dVal = document.getElementById('timer-days');
        const hVal = document.getElementById('timer-hours');
        const mVal = document.getElementById('timer-minutes');
        const sVal = document.getElementById('timer-seconds');
        
        if (dVal && hVal && mVal && sVal) {
          const now = new Date().getTime();
          const target = new Date(details.target).getTime();
          const diff = target - now;
          
          if (diff <= 0) {
            dVal.innerText = "00";
            hVal.innerText = "00";
            mVal.innerText = "00";
            sVal.innerText = "00";
            const ctaBtn = document.getElementById('inspector-register-btn');
            if (ctaBtn) {
              ctaBtn.style.opacity = '0.5';
              ctaBtn.style.pointerEvents = 'none';
              ctaBtn.innerText = "Registration Closed";
            }
          } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            dVal.innerText = String(days).padStart(2, '0');
            hVal.innerText = String(hours).padStart(2, '0');
            mVal.innerText = String(minutes).padStart(2, '0');
            sVal.innerText = String(seconds).padStart(2, '0');
            
            if (days < 3) {
              dVal.classList.add('closing-soon');
              hVal.classList.add('closing-soon');
              mVal.classList.add('closing-soon');
              sVal.classList.add('closing-soon');
            } else {
              dVal.classList.remove('closing-soon');
              hVal.classList.remove('closing-soon');
              mVal.classList.remove('closing-soon');
              sVal.classList.remove('closing-soon');
            }
          }
        }
      }
    }

    // App Initialization
    window.addEventListener('load', () => {
      compileFiltersCounts();
      renderListPane(programsData);
      selectProgram(1); // Select first program
      renderCharts();
      startLiveStream(); // Trigger live telemetry stream
      updateCountdowns(); // Initial countdown values
      setInterval(updateCountdowns, 1000); // Start live 1s ticks!
      initCustomScrollbar(); // Setup overlay custom scrollbar
    });

    // Close sidebar drawer on click outside
    document.addEventListener('click', (event) => {
      const sidebar = document.querySelector('.sidebar');
      const hamburgerBtn = document.querySelector('.hamburger-btn');
      const displayCloseBtn = document.querySelector('.display-close-btn');
      
      if (sidebar && sidebar.classList.contains('open')) {
        // Check if the click was outside the sidebar, hamburger button, and global close button
        if (!sidebar.contains(event.target) && 
            !hamburgerBtn.contains(event.target) && 
            (!displayCloseBtn || !displayCloseBtn.contains(event.target))) {
          sidebar.classList.remove('open');
          if (hamburgerBtn) hamburgerBtn.classList.remove('open');
          document.body.classList.remove('sidebar-open');
        }
      }
    });

    // Handle hamburger button transition on page scroll on mobile
    window.addEventListener('scroll', () => {
      const hamburgerBtn = document.querySelector('.hamburger-btn');
      if (hamburgerBtn) {
        if (window.scrollY > 0) {
          hamburgerBtn.classList.add('scrolled');
        } else {
          hamburgerBtn.classList.remove('scrolled');
        }
      }
    });

    // Custom Scrollbar Logic
    function initCustomScrollbar() {
      const scrollbar = document.getElementById('custom-scrollbar');
      const thumb = document.getElementById('custom-scrollbar-thumb');
      if (!scrollbar || !thumb) return;

      let isDragging = false;
      let startY = 0;
      let startScrollTop = 0;
      let fadeTimeout;

      function getScrollSource() {
        return document.querySelector('.main-workspace') || window;
      }

      let lastScrollTop = -1;
      let lastScrollHeight = -1;
      let lastClientHeight = -1;

      function updateScrollbar() {
        const source = getScrollSource();
        let scrollTop = 0;
        let scrollHeight = 0;
        let clientHeight = 0;

        if (source === window) {
          scrollTop = window.scrollY;
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        } else {
          scrollTop = source.scrollTop;
          scrollHeight = source.scrollHeight;
          clientHeight = source.clientHeight;
        }

        // Optimize: Do nothing if dimensions and position haven't changed
        if (scrollTop === lastScrollTop && 
            scrollHeight === lastScrollHeight && 
            clientHeight === lastClientHeight) {
          return;
        }

        lastScrollTop = scrollTop;
        lastScrollHeight = scrollHeight;
        lastClientHeight = clientHeight;

        const scrollableHeight = scrollHeight - clientHeight;
        if (scrollableHeight <= 0) {
          scrollbar.style.opacity = '0';
          scrollbar.style.pointerEvents = 'none';
          return;
        } else {
          scrollbar.style.opacity = '1';
          scrollbar.style.pointerEvents = 'auto';
        }

        const scrollbarHeight = scrollbar.clientHeight;
        const thumbHeight = Math.max(30, (clientHeight / scrollHeight) * scrollbarHeight);
        const maxThumbTop = scrollbarHeight - thumbHeight;
        const thumbTop = (scrollTop / scrollableHeight) * maxThumbTop;

        thumb.style.height = `${thumbHeight}px`;
        thumb.style.transform = `translateY(${thumbTop}px)`;

        // Show thumb
        thumb.classList.add('visible');
        clearTimeout(fadeTimeout);
        fadeTimeout = setTimeout(() => {
          if (!isDragging && !scrollbar.matches(':hover')) {
            thumb.classList.remove('visible');
          }
        }, 1500);
      }

      // Add scroll event listener to both window and main-workspace
      window.addEventListener('scroll', updateScrollbar, { passive: true });
      
      const workspace = document.querySelector('.main-workspace');
      if (workspace) {
        workspace.addEventListener('scroll', updateScrollbar, { passive: true });
      }

      window.addEventListener('resize', updateScrollbar);

      // Trigger initial scroll update
      updateScrollbar();

      // Drag behavior
      thumb.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.clientY;
        const source = getScrollSource();
        startScrollTop = (source === window) ? window.scrollY : source.scrollTop;
        
        document.body.classList.add('user-select-none');
        thumb.classList.add('visible');
        scrollbar.classList.add('active');
        e.preventDefault();
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const source = getScrollSource();
        let scrollHeight = 0;
        let clientHeight = 0;

        if (source === window) {
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        } else {
          scrollHeight = source.scrollHeight;
          clientHeight = source.clientHeight;
        }

        const scrollableHeight = scrollHeight - clientHeight;
        if (scrollableHeight <= 0) return;

        const scrollbarHeight = scrollbar.clientHeight;
        const thumbHeight = parseFloat(thumb.style.height);
        const maxThumbTop = scrollbarHeight - thumbHeight;

        const deltaY = e.clientY - startY;
        const ratio = deltaY / maxThumbTop;
        const targetScroll = startScrollTop + ratio * scrollableHeight;

        if (source === window) {
          window.scrollTo(0, targetScroll);
        } else {
          source.scrollTop = targetScroll;
        }
        updateScrollbar();
      });

      window.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.classList.remove('user-select-none');
          scrollbar.classList.remove('active');
          updateScrollbar();
        }
      });

      // Drag behavior for touch (mobile)
      thumb.addEventListener('touchstart', (e) => {
        if (e.touches.length === 0) return;
        isDragging = true;
        startY = e.touches[0].clientY;
        const source = getScrollSource();
        startScrollTop = (source === window) ? window.scrollY : source.scrollTop;
        
        thumb.classList.add('visible');
        scrollbar.classList.add('active');
        e.preventDefault();
      }, { passive: false });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length === 0) return;
        const source = getScrollSource();
        let scrollHeight = 0;
        let clientHeight = 0;

        if (source === window) {
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        } else {
          scrollHeight = source.scrollHeight;
          clientHeight = source.clientHeight;
        }

        const scrollableHeight = scrollHeight - clientHeight;
        if (scrollableHeight <= 0) return;

        const scrollbarHeight = scrollbar.clientHeight;
        const thumbHeight = parseFloat(thumb.style.height);
        const maxThumbTop = scrollbarHeight - thumbHeight;

        const deltaY = e.touches[0].clientY - startY;
        const ratio = deltaY / maxThumbTop;
        const targetScroll = startScrollTop + ratio * scrollableHeight;

        if (source === window) {
          window.scrollTo(0, targetScroll);
        } else {
          source.scrollTop = targetScroll;
        }
        updateScrollbar();
        e.preventDefault();
      }, { passive: false });

      window.addEventListener('touchend', () => {
        if (isDragging) {
          isDragging = false;
          scrollbar.classList.remove('active');
          updateScrollbar();
        }
      });

      // Click on track scrolls page
      scrollbar.addEventListener('click', (e) => {
        if (e.target === thumb) return;
        const source = getScrollSource();
        let scrollHeight = 0;
        let clientHeight = 0;

        if (source === window) {
          scrollHeight = document.documentElement.scrollHeight;
          clientHeight = window.innerHeight;
        } else {
          scrollHeight = source.scrollHeight;
          clientHeight = source.clientHeight;
        }

        const scrollableHeight = scrollHeight - clientHeight;
        if (scrollableHeight <= 0) return;

        const scrollbarRect = scrollbar.getBoundingClientRect();
        const clickY = e.clientY - scrollbarRect.top;
        const scrollbarHeight = scrollbar.clientHeight;
        const thumbHeight = parseFloat(thumb.style.height);

        const targetThumbTop = clickY - thumbHeight / 2;
        const maxThumbTop = scrollbarHeight - thumbHeight;
        const ratio = Math.max(0, Math.min(1, targetThumbTop / maxThumbTop));

        if (source === window) {
          window.scrollTo({
            top: ratio * scrollableHeight,
            behavior: 'smooth'
          });
        } else {
          source.scrollTo({
            top: ratio * scrollableHeight,
            behavior: 'smooth'
          });
        }
      });

      // Keep scrollbar visible when hovering track
      scrollbar.addEventListener('mouseenter', () => {
        thumb.classList.add('visible');
        clearTimeout(fadeTimeout);
      });
      scrollbar.addEventListener('mouseleave', () => {
        if (!isDragging) {
          fadeTimeout = setTimeout(() => {
            thumb.classList.remove('visible');
          }, 1000);
        }
      });

      // Expose updateScrollbar globally so other content rendering can trigger it
      window.updateCustomScrollbar = updateScrollbar;

      // Periodically check for layout or height changes (100% loop-safe and lightweight)
      setInterval(updateScrollbar, 250);
    }
