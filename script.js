const portfolioData = [
    {
        sectionId: "simulations",
        sectionTitle: "HOIST Project (Simservices GmbH)",
        projects: [
            {
                title: "European Rotors 2025: Full-Body Interactive Hoist Simulator",
                tech: "UE5, C++, LiDAR Suit, HIL Controls",
                challenge: "LiDAR & Sensor Integration: Interfaced real-time Unreal Engine 5 simulation with a wearable operator suit equipped with body-mounted LiDAR trackers.",
                solution: "Full-Body SAR Kinematics: Enabled operators to step onto the helicopter skid, control hoist speed with handheld throttles, and stabilize descent cables.",
                matrix: "Aerodynamics: Simulated pendulum physics, cable mass distribution, rotor downwash, and wind gust dynamics for SAR training.",
                mediaLinks: [
                    { type: "youtube", label: "Hoist Simulator Demo", url: "https://www.youtube.com/shorts/fckOn0dhpa8" },
                    { type: "facebook", label: "Project Reel Showcase", url: "https://www.facebook.com/reel/4325082611060709" },
                    { type: "facebook", label: "Storm SAR Operations", url: "https://www.facebook.com/watch/?v=1533172971224999&rdid=Dfnbd1gSopVBphJc" }
                ]
            },
            {
                title: "Deep Fisher Extreme Maritime Storm SAR Simulation",
                tech: "UE5, C++, HLSL Shaders, Niagara VFX",
                challenge: "Asset Reference: Distressed Commercial Fishing Vessel (Deep Fisher / Savannah, GA).",
                solution: "Ocean Swell Physics & Niagara VFX: Implemented dynamic ocean physics, volumetric fire/smoke simulations on a burning vessel, and custom camera rain-droplet shaders.",
                matrix: "Precision Hover & Hoist Controls: Tuned low-latency helicopter hover physics and synchronized rescue cable dynamics under severe storm weather.",
                imageUrls: [
                    "Images/0d712ed4-92be-4d84-9a9e-707af8041783_1.png",
                    "Images/0d712ed4-92be-4d84-9a9e-707af8041783_2.png",
                    "Images/0d712ed4-92be-4d84-9a9e-707af8041783_3.png",
                    "Images/0d712ed4-92be-4d84-9a9e-707af8041783_4.png",
                    "Images/0d712ed4-92be-4d84-9a9e-707af8041783_5.png"
                ]
            },
            {
                title: "Offshore Pipelaying Vessel & SAR Flight Operations",
                tech: "UE5, Kinematic Rigging, Marine PBR",
                challenge: "Industrial Marine Flight Sim:",
                solution: "Kinematically rigged a heavy offshore pipelaying vessel and Swiss rescue helicopter (Rega 1414 livery).",
                matrix: "Incorporated ground-effect aerodynamics and deck landing constraints.",
                imageUrls: [
                    "Images/fb9da301-1d09-478d-bad3-0601ef73d344_1.png",
                    "Images/fb9da301-1d09-478d-bad3-0601ef73d344_2.png",
                    "Images/fb9da301-1d09-478d-bad3-0601ef73d344_3.png",
                    "Images/fb9da301-1d09-478d-bad3-0601ef73d344_4.png",
                    "Images/fb9da301-1d09-478d-bad3-0601ef73d344_5.png"
                ]
            }
        ]
    },
    {
        sectionId: "digital-twins",
        sectionTitle: "Digital Twins & Cloud Rendering",
        projects: [
            {
                title: "RTA Dubai Virtual Museum & Interactive Digital Twin",
                tech: "UE, Pixel Streaming, WebRTC, GIS",
                challenge: "GIS Navigation: Built macro-to-micro camera fast-travel covering major Dubai transit infrastructure.",
                solution: "3D Inspection Engine: Multi-axis orbital asset inspector with dynamic directional lighting adjustment for fleet models (Dubai Bus, eVTOL air taxis, Infinity Bridge).",
                matrix: "Bilingual RTL/LTR UI: Real-time Arabic and English localization across interactive 2D/3D floorplans, data cards, and video walls.",
                mediaLinks: [
                    { type: "youtube", label: "Macro-to-Micro Camera Fast-Travel (Rashidiya Depot)", url: "https://www.youtube.com/watch?v=BfXqCMl6VGw" },
                    { type: "youtube", label: "Multi-axis Orbital Asset Inspection Engine", url: "https://www.youtube.com/watch?v=WrGm5SZ8QtI" }
                ]
            },
            {
                title: "Enterprise Pixel Streaming & Virtual Production Pipeline (Creative Motion)",
                tech: "Pixel Streaming, Aximmetry, VIVE Mars",
                challenge: "Cloud Streaming & Tracking:",
                solution: "Distributed GPU-rendered 3D applications via WebRTC to web browsers.",
                matrix: "Cut studio production turnaround by 25% integrating Aximmetry and VIVE Mars camera tracking."
            }
        ]
    },
    {
        sectionId: "multiplayer",
        sectionTitle: "Networked Multiplayer Systems",
        projects: [
            {
                title: "The Winning Warriors: Mobile Multiplayer Action Game (Unreal Engine)",
                tech: "Unreal Engine, Mobile (Android/iOS), C++, AWS Dedicated Servers, Sockets",
                challenge: "Cross-Mobile Multiplayer Architecture: Engineered real-time multiplayer combat between mobile devices on Unreal Engine with AWS dedicated server synchronization (~120ms live ping), client prediction, and lag compensation.",
                solution: "Mobile 3D Lobby & Character Selection: Built interactive character roster (Casanova, Stephanie, Edward, Rayan, Max), mobile touch UI controls, weapon loadouts, and matchmaking.",
                matrix: "Optimized mobile GPU rendering, frame pacing, touch latency, and server bandwidth for mobile devices.",
                imageUrls: [
                    "Images/WiningWorieros_1.png",
                    "Images/WiningWorieros_2.png",
                    "Images/WiningWorieros_3.png",
                    "Images/WiningWorieros_4.png",
                    "Images/WiningWorieros_5.png",
                    "Images/WiningWorieros_6.png",
                    "Images/WiningWorieros_7.png"
                ],
                mediaLinks: [
                    { type: "apkpure", label: "Ticoners Developer Catalog & Published Games on APKPure", url: "https://apkpure.com/developer/Ticoners%20for%20information%20technology" }
                ]
            }
        ]
    },
    {
        sectionId: "mobile-ar",
        sectionTitle: "Commercial Mobile AR",
        projects: [
            {
                title: "Ticoners Jungle: Interactive AR Animal Kingdom",
                icon: "Images/ticoners/jungle_icon.png",
                tech: "Unity, Vuforia / AR Foundation, C#, Trilingual Phonetics",
                challenge: "Planar Target Detection & Tracking: Built multi-card planar image tracking for physical flashcard decks with dynamic occlusion handling.",
                solution: "Trilingual Educational AR Interaction: Animated 3D animal models with realistic skeletal animations, authentic creature sounds, and interactive speech phonetics in 3 languages (English, Arabic, French).",
                matrix: "Stable 60 FPS mobile shader optimization and touch responsiveness across target Android and iOS devices.",
                imageUrls: [
                    "Images/ticoners/jungle_screen_1.png",
                    "Images/ticoners/jungle_screen_2.png",
                    "Images/ticoners/jungle_screen_3.png",
                    "Images/ticoners/jungle_screen_4.png",
                    "Images/27e959a9-42ad-4e9d-b785-9e855d134e5b_1.png",
                    "Images/27e959a9-42ad-4e9d-b785-9e855d134e5b_2.png"
                ],
                mediaLinks: [
                    { type: "youtube", label: "Ticoners Jungle Game Demo", url: "https://www.youtube.com/watch?v=izRM2ONdyQg" },
                    { type: "apkpure", label: "View Ticoners Jungle on APKPure", url: "https://apkpure.com/developer/Ticoners%20for%20information%20technology" }
                ]
            },
            {
                title: "Ticoners Alphabets: Trilingual AR Phonics & Letters",
                icon: "Images/ticoners/alphabet_icon.png",
                tech: "Unity, AR Foundation, C#, 3D Phonics",
                challenge: "Interactive Early-Childhood Phonics: Designed an intuitive AR flashcard system educating children in Arabic, English, and French alphabets.",
                solution: "Interactive 3D Letter Modeling: Each card triggers a corresponding 3D animated object, trilingual audio pronunciation, and interactive touch responses.",
                matrix: "Memory-optimized asset loading and texture compression for rapid card swapping in educational environments.",
                imageUrls: [
                    "Images/ticoners/alphabet_screen_1.png",
                    "Images/ticoners/alphabet_screen_2.png",
                    "Images/ticoners/alphabet_screen_3.png",
                    "Images/ticoners/alphabet_screen_4.png",
                    "Images/fe6a5b5b-70b1-4910-aa78-293f11e079ad_1.png",
                    "Images/fe6a5b5b-70b1-4910-aa78-293f11e079ad_2.png"
                ],
                mediaLinks: [
                    { type: "youtube", label: "Ticoners Alphabet Game Demo", url: "https://www.youtube.com/watch?v=cNu1BnJa02g" },
                    { type: "apkpure", label: "View Ticoners Alphabets on APKPure", url: "https://apkpure.com/developer/Ticoners%20for%20information%20technology" }
                ]
            },
            {
                title: "Ticoners Space: Planetary Exploration AR",
                icon: "Images/ticoners/space_icon.png",
                tech: "Unity, AR Tracking, Shader FX, 3D Orbital Dynamics",
                challenge: "Spatial Astronomy Simulation: Simulated solar system celestial bodies at mobile AR scale with accurate planetary textures and lighting estimation.",
                solution: "Interactive Orbital Exploration: Children point mobile cameras at cards to explore 3D planets, observe orbital paths, and learn astronomy facts in real time.",
                matrix: "Custom mobile unlit/PBR hybrid shaders to maintain high framerate during complex multi-body space rendering.",
                imageUrls: [
                    "Images/ticoners/space_screen_1.png",
                    "Images/ticoners/space_screen_2.png",
                    "Images/ticoners/space_screen_3.png",
                    "Images/ticoners/space_screen_4.png",
                    "Images/fe6a5b5b-70b1-4910-aa78-293f11e079ad_3.png"
                ],
                mediaLinks: [
                    { type: "youtube", label: "Ticoners Space Game Demo", url: "https://www.youtube.com/watch?v=hNVyeS81gl4" },
                    { type: "apkpure", label: "View Ticoners Space on APKPure", url: "https://apkpure.com/developer/Ticoners%20for%20information%20technology" }
                ]
            },
            {
                title: "Taj 51 Interactive Educational AR Curriculum Companion",
                tech: "Unity, AR Tracking, Skeletal Rigging",
                challenge: "Curriculum Integration:",
                solution: "Animated 3D human presenter (*Noura*), anatomy, and chemistry models integrated with digital textbook companions.",
                matrix: "Integrated AR curriculum companion modules.",
                mediaLinks: [
                    { type: "youtube", label: "Taj 51 Educational AR Demo", url: "https://www.youtube.com/watch?v=zemk-L0TeSE" }
                ]
            }
        ]
    },
    {
        sectionId: "extra-gallery",
        sectionTitle: "Extra Gallery",
        projects: [
            {
                title: "Additional Simulation & Media Showcases",
                tech: "Various Projects",
                challenge: "Video Archives:",
                solution: "Directly embedded technical showcases and operation demonstrations from the video archives.",
                matrix: "Review these clips for extended gameplay, physics simulations, and XR interaction footage.",
                mediaLinks: [
                    { type: "drive", label: "Showcase Video 1", url: "https://drive.google.com/file/d/12MhuYyc-Cw2igHg2_hMldZ_5fcKanEKC/view?usp=sharing" },
                    { type: "drive", label: "Showcase Video 2", url: "https://drive.google.com/file/d/18yWdmqLaQKtYvMheIH6LS552TKB1WPb3/view?usp=sharing" },
                    { type: "drive", label: "Showcase Video 3", url: "https://drive.google.com/file/d/189gXUxSx5-I5sgeO-PDs0w_-8p5rugeM/view?usp=sharing" },
                    { type: "drive", label: "Showcase Video 4", url: "https://drive.google.com/file/d/1kvs7dvRchoScyxHKC_H-WH3HHzPCU4LF/view?usp=sharing" },
                    { type: "drive", label: "Showcase Video 5", url: "https://drive.google.com/file/d/1etSH2DJsd_KPV39QG6TrDk-rI-pkFplZ/view?usp=sharing" }
                ]
            }
        ]
    }
];

const openSourceProjects = [
    {
        category: "AI & Machine Learning Systems",
        id: "ai-systems",
        tools: [
            { name: "Qwen3-TTS-Studio-Fine-Tunned", stack: "Python, PyTorch, HuggingFace", focus: "Low-latency neural voice synthesis for dynamic simulation NPCs.", url: "https://github.com/seahmedhassn/Qwen3-TTS-Studio-Fine-Tunned" },
            { name: "AI_HandGestures", stack: "Python, MediaPipe, OpenCV", focus: "Touchless spatial gesture classification for simulation NUI.", url: "https://github.com/seahmedhassn/AI_HandGestures" },
            { name: "BlackWhite_Colorizer_Model", stack: "C#, .NET, ONNX Runtime", focus: "Local deep learning neural model inference in C# desktop app.", url: "https://github.com/seahmedhassn/BlackWhite_Colorizer_Model_C_SharpApplication" },
            { name: "Vesper-AI & maintenance-app", stack: "Fullstack, REST APIs, SQL", focus: "Fullstack web architecture, database persistence, and CRUD services.", url: "https://github.com/seahmedhassn/Vesper-AI-Your-Intelligent-Web-APP-Companion" },
            { name: "MainZombiesAI_Project", stack: "UE / Unity, Behavior Trees", focus: "Cross-platform multi-agent pathfinding and perception trees.", url: "https://github.com/seahmedhassn/MainZombiesAI_Project_Decktop_Mobile" }
        ]
    },
    {
        category: "Graphics, XR & Fullstack Systems",
        id: "other-systems",
        tools: [
            { name: "PhotoModeFX", stack: "UE / Unity, HLSL Shaders", focus: "Modular post-processing, LUT color grading, and viewport export.", url: "https://github.com/seahmedhassn/PhotoModeFX" },
            { name: "Animals-AR-unity", stack: "Unity, AR Foundation, C#", focus: "Plane detection, environmental lighting estimation, and touch NUI.", url: "https://github.com/seahmedhassn/Animals-AR-unity" },
            { name: "Local-File-Share", stack: "C#, Python, TCP/UDP Sockets", focus: "Peer-to-peer asynchronous socket stream and file discovery engine.", url: "https://github.com/seahmedhassn/Local-File-Share" }
        ]
    }
];

const credentials = [
    { title: "Game Development and Prototyping", type: "Epic Games (Mar 2025)", url: "#" },
    { title: "Blueprint Scripting", type: "Epic Games (Mar 2025)", url: "#" },
    { title: "Machine Learning with Python", type: "IBM (Mar 2025)", url: "#" },
    { title: "Building Generative AI Apps with Python", type: "IBM (Mar 2025)", url: "#" },
    { title: "Bachelor of Science in Computer Science", type: "Helwan University (2015 – 2020)", url: "#" }
];

function renderPortfolio() {
    const main = document.getElementById("portfolio-content");
    
    // Render About
    const aboutSec = document.createElement("section");
    aboutSec.id = "about";
    aboutSec.innerHTML = `
        <h2 class="section-title">Executive Profile</h2>
        <div class="project-card" style="padding: 30px;">
            <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-main);">
                Senior Software Engineer and XR Developer with over <strong>6 years of professional experience</strong> delivering enterprise-grade simulations, real-time 3D applications, computer vision tools, and multiplayer systems across <strong>Unreal Engine (C++, Blueprints), Unity (C#), and Python</strong>.<br><br>
                Specialized in high-fidelity VR flight/rescue simulators with realistic aerodynamic physics, hardware-in-the-loop synchronization, and low-latency rendering. Experienced across cloud-based <strong>Pixel Streaming</strong> architectures, virtual production workflows (<strong>Aximmetry, VIVE Mars</strong>), dedicated server replication (AWS), and custom C++ engine plugin development.<br><br>
                Actively engineering multimodal AI tools, including fine-tuned Text-to-Speech (TTS) pipelines, gesture-based spatial interactions, and edge machine learning systems.
            </p>
        </div>
    `;
    main.appendChild(aboutSec);

    // Render Experience
    const expSec = document.createElement("section");
    expSec.id = "experience";
    expSec.innerHTML = `
        <h2 class="section-title">Professional Experience</h2>
        
        <div class="project-card" style="padding: 30px;">
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Simservices GmbH <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Software Engineer / Simulation Specialist</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Nov 2023 – Present | Düren, NRW, Germany (On-site / Hybrid)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Architect and engineer enterprise VR flight and rescue operation simulators for helicopters and aircraft using Unreal Engine and C++.</li>
                <li>Implement aerodynamic physics modeling, control dynamics, and cockpit instrument replication to maximize flight training realism.</li>
                <li>Develop multi-user networked environments enabling synchronized collaborative VR crew training and rescue simulations.</li>
                <li>Interface real-time Unreal Engine simulation software with physical cockpit controls, tensioned cable/hoist systems, and hardware sensors.</li>
                <li>Represent Simservices at international aviation expos, delivering live simulation demonstrations at <strong>EURO ROTORS 2025</strong> in Cologne.</li>
            </ul>
        </div>
        
        <div class="project-card" style="padding: 30px;">
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Creative Motion <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Unreal Engine Developer</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Mar 2023 – Apr 2024 | Cairo, Egypt / UAE (Remote & On-site)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Engineered interactive high-fidelity 3D architectural visualization software deployed globally via <strong>Unreal Pixel Streaming</strong>.</li>
                <li>Reduced virtual production turnaround time by <strong>25%</strong> by integrating and calibrating Aximmetry and VIVE Mars camera tracking systems.</li>
                <li>Programmed modular Unreal Engine C++ plugins to automate lighting setups, asset pipelines, and cinematic scene composition.</li>
            </ul>
        </div>
        
        <div class="project-card" style="padding: 30px;">
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Techno &lt;Vision&gt; <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Senior Unreal Engine Developer</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Apr 2021 – Mar 2023 | Giza, Egypt (Hybrid)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Led development of interactive VR simulations and digital twins for rescue training and enterprise architectural marketing.</li>
                <li>Configured Pixel Streaming server infrastructure, allowing clients to stream high-fidelity 3D applications to low-spec browsers.</li>
            </ul>
        </div>
        
        <div class="project-card" style="padding: 30px;">
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Ticnors <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Unreal Engine &amp; Unity Developing Team Leader</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Feb 2020 – May 2021 | Cairo, Egypt (On-site)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Supervised a technical engineering team developing multiplayer VR games, interactive virtual expos, and commercial mobile AR applications.</li>
                <li>Built server-client and dedicated multiplayer architectures using AWS cloud backend services for matchmaking and state synchronization.</li>
                <li>Integrated custom C# scripts in Unity, C++/Blueprints in Unreal Engine, and optimized 3D assets in Blender.</li>
                <li>Published commercial games and AR suites: <a href="https://apkpure.com/developer/Ticoners%20for%20information%20technology" target="_blank" style="color: var(--accent); font-weight: 600;">View Published Games on APKPure ↗</a></li>
            </ul>
        </div>
    `;
    main.appendChild(expSec);
    
    // Render Projects
    portfolioData.forEach(section => {
        const secEl = document.createElement("section");
        secEl.id = section.sectionId;
        
        const h2 = document.createElement("h2");
        h2.className = "section-title";
        h2.textContent = section.sectionTitle;
        secEl.appendChild(h2);
        
        section.projects.forEach((proj, idx) => {
            const card = document.createElement("div");
            card.className = "project-card";
            
            const hasMedia = (proj.mediaLinks && proj.mediaLinks.length > 0) || (proj.imageUrls && proj.imageUrls.length > 0);
            
            const content = document.createElement("div");
            content.className = "project-content" + (hasMedia ? "" : " no-media");
            
            // Text Details
            const details = document.createElement("div");
            details.className = "project-details";
            
            const headerHtml = proj.icon ? `
                <div style="display:flex; align-items:center; gap:16px; margin-bottom:12px;">
                    <img src="${proj.icon}" alt="${proj.title} Icon" style="width:58px; height:58px; border-radius:14px; box-shadow:0 4px 14px rgba(0,0,0,0.4); border:1px solid var(--border-color); flex-shrink:0; object-fit:cover;" />
                    <h3 style="margin-bottom:0;">${proj.title}</h3>
                </div>
            ` : `<h3>${proj.title}</h3>`;

            details.innerHTML = `
                ${headerHtml}
                <div class="tech-stack">${proj.tech}</div>
                <div class="detail-section">
                    <h4>The Engineering Challenge</h4>
                    <p>${proj.challenge}</p>
                </div>
                <div class="detail-section">
                    <h4>Architectural Solution</h4>
                    <p>${proj.solution}</p>
                </div>
                <div class="detail-section">
                    <h4>Technology Matrix</h4>
                    <p>${proj.matrix}</p>
                </div>
            `;
            
            // Media Gallery
            const media = document.createElement("div");
            media.className = "media-gallery";
            
            if (proj.mediaLinks && proj.mediaLinks.length > 0) {
                let linksHtml = `<div class="media-links" style="display:flex; flex-direction:column; gap:15px; margin-bottom:15px;">`;
                proj.mediaLinks.forEach(link => {
                    if (link.type === 'youtube') {
                        // Extract video ID from any format
                        let videoId = link.url.split('/').pop().split('?')[0];
                        if (link.url.includes('watch?v=')) {
                            videoId = new URL(link.url).searchParams.get('v');
                        }
                        
                        linksHtml += `
                            <div class="media-item youtube-thumbnail" style="position:relative;">
                                <a href="${link.url}" target="_blank" style="display:block; text-decoration:none;">
                                    <div style="padding:10px; background:var(--bg-color); color:var(--text-main); font-weight:600; border-top-left-radius:8px; border-top-right-radius:8px; border:1px solid var(--border-color); border-bottom:none;">
                                        🎬 ${link.label}
                                    </div>
                                    <div style="position:relative;">
                                        <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="${link.label}" style="width:100%; border-bottom-left-radius:8px; border-bottom-right-radius:8px; display:block; border:1px solid var(--border-color);" />
                                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); background:rgba(0,0,0,0.8); border-radius:50%; width:60px; height:60px; display:flex; align-items:center; justify-content:center; border: 2px solid white;">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `;
                    } else if (link.type === 'drive') {
                        // Embed Google Drive video
                        const embedUrl = link.url.replace('/view?usp=sharing', '/preview');
                        linksHtml += `
                            <div class="media-item" style="position:relative; margin-bottom: 10px;">
                                <div style="padding:10px; background:var(--bg-color); color:var(--text-main); font-weight:600; border-top-left-radius:8px; border-top-right-radius:8px; border:1px solid var(--border-color); border-bottom:none;">
                                    📁 ${link.label}
                                </div>
                                <iframe src="${embedUrl}" width="100%" height="320" style="border:1px solid var(--border-color); border-bottom-left-radius:8px; border-bottom-right-radius:8px;" allow="autoplay"></iframe>
                            </div>
                        `;
                    } else {
                        // APKPure, Facebook, Drive, etc.
                        const icon = link.type === 'apkpure' ? '🎮' : '🔗';
                        linksHtml += `
                            <a href="${link.url}" target="_blank" class="external-link-btn" style="display:block; padding:15px; background:var(--bg-color); color:var(--accent); text-decoration:none; border-radius:8px; border:1px solid var(--border-color); text-align:center; font-weight:600; transition:background 0.2s;">
                                ${icon} ${link.label} ↗
                            </a>
                        `;
                    }
                });
                linksHtml += `</div>`;
                media.innerHTML += linksHtml;
            }
            
            if (proj.imageUrls && proj.imageUrls.length > 0) {
                let imgHtml = `<div class="media-item image-scroll-container">`;
                proj.imageUrls.forEach(url => {
                    imgHtml += `<img src="${url}" alt="${proj.title}" onerror="this.style.display='none'" />`;
                });
                imgHtml += `</div>`;
                media.innerHTML += imgHtml;
            }
            
            content.appendChild(details);
            content.appendChild(media);
            card.appendChild(content);
            secEl.appendChild(card);
        });
        
        main.appendChild(secEl);
    });
    
    // Render Open-Source Projects
    const gitSec = document.createElement("section");
    gitSec.id = "open-source";
    gitSec.innerHTML = `<h2 class="section-title">Open-Source Github Directory</h2>`;
    
    openSourceProjects.forEach(category => {
        gitSec.innerHTML += `<h3 style="margin: 20px 0 10px 0; color: var(--text-muted); font-size: 1.2rem;">${category.category}</h3>`;
        let tableHtml = `<table class="ai-table">
            <thead><tr><th>Repository & System</th><th>Tech Stack</th><th>Architectural Focus</th></tr></thead><tbody>`;
        category.tools.forEach(tool => {
            tableHtml += `<tr>
                <td><a href="${tool.url}" target="_blank">${tool.name}</a></td>
                <td>${tool.stack}</td>
                <td>${tool.focus}</td>
            </tr>`;
        });
        tableHtml += `</tbody></table>`;
        gitSec.innerHTML += tableHtml;
    });
    main.appendChild(gitSec);
    
    // Render Credentials
    const credSec = document.createElement("section");
    credSec.id = "credentials";
    credSec.innerHTML = `<h2 class="section-title">Verified Credentials</h2>`;
    
    let credHtml = `<table class="ai-table">
        <thead><tr><th>Credential Title</th><th>Issuing Body / Type</th></tr></thead><tbody>`;
    credentials.forEach(cred => {
        const titleHtml = cred.url && cred.url !== "#" ? `<a href="${cred.url}" target="_blank">${cred.title}</a>` : cred.title;
        credHtml += `<tr><td>${titleHtml}</td><td>${cred.type}</td></tr>`;
    });
    credHtml += `</tbody></table>`;
    credSec.innerHTML += credHtml;
    main.appendChild(credSec);
}

document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio();
});
