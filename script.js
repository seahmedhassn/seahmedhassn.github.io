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
        sectionId: "creative-motion",
        sectionTitle: "Creative Motion — Enterprise Pixel Streaming & RTA Dubai",
        projects: [
            {
                title: "RTA Dubai Virtual Museum & Interactive Digital Twin (Creative Motion)",
                tech: "Unreal Engine, Cloud Pixel Streaming, WebRTC, GIS, Bilingual Localization",
                challenge: "High-Density Urban GIS Navigation: Engineered macro-to-micro camera fast-travel spanning major Dubai public transit infrastructure (Rashidiya Depot, Dubai Metro, Dubai Bus fleet, eVTOL air taxis, and Infinity Bridge) with zero client-side installation requirements.",
                solution: "Multi-Axis Interactive Inspection Engine: Built orbital asset inspection with dynamic real-time sun positioning, directional lighting controls, and bilingual (Arabic RTL / English LTR) localized UI across interactive 2D/3D floorplans, telemetric data cards, and interactive video walls.",
                optimization: "Enterprise Cloud Streaming Deployment: Streamed photorealistic 3D visuals directly to low-spec web browsers via custom WebRTC signalling, allowing municipal stakeholders to inspect transport infrastructure in real time without local workstation hardware.",
                matrix: "Bilingual localization engine, dynamic asset streaming, sub-second level streaming transitions, and zero-install client deployment.",
                mediaLinks: [
                    { type: "youtube", label: "Macro-to-Micro Fast-Travel (Rashidiya Depot)", url: "https://www.youtube.com/watch?v=BfXqCMl6VGw" },
                    { type: "youtube", label: "Multi-Axis Orbital Asset Inspection Engine", url: "https://www.youtube.com/watch?v=WrGm5SZ8QtI" }
                ]
            },
            {
                title: "Enterprise Cloud Pixel Streaming Architecture & Virtual Production (Creative Motion)",
                tech: "Pixel Streaming, WebRTC, Coturn STUN/TURN, AWS EC2 (G4dn/G5), NVENC H.264, Docker, Aximmetry, VIVE Mars",
                challenge: "The Pixel Streaming Engineering Challenge: Delivering photorealistic, uncompressed 3D Unreal Engine applications to browsers worldwide while overcoming core bottlenecks: strict enterprise corporate firewalls and symmetric NATs blocking direct peer connections, client network jitter, high cloud GPU cost scaling per concurrent user (CCU), and input latency.",
                solution: "Architecting the End-to-End Pixel Streaming Infrastructure:\n- Custom Signalling & Matchmaking: Engineered a scalable Node.js WebSocket matchmaking and signalling cluster negotiating SDP handshakes and dynamically assigning users to dedicated GPU instances.\n- Firewall Traversal via Coturn: Deployed distributed, multi-region Coturn STUN/TURN relays to guarantee 100% WebRTC connection traversal through restrictive corporate VPNs and enterprise firewalls.\n- Cloud GPU Orchestration & Auto-Scaling: Automated Dockerized headless Unreal Engine container instances on AWS EC2 (G4dn/G5 with NVIDIA T4/A10G GPUs). Configured auto-scaling pools that spin up instances upon user demand and immediately terminate idle instances, minimizing cloud compute costs.\n- Bidirectional WebRTC DataChannels: Implemented zero-lag client touch manipulation, camera orbits, UI event passing, and custom HTML/JS overlay data interchange without taxing GPU render threads.\n- Hardware Encoder Tuning: Tuned NVENC H.264 CBR/VBR parameters inside Unreal Engine (bitrate target clamping 8-15 Mbps, adaptive QP compensation) to maintain sub-50ms glass-to-glass latency.",
                matrix: "Sub-50ms glass-to-glass streaming latency, 100% enterprise firewall traversal via custom TURN, auto-scaling AWS GPU fleet management, and Aximmetry virtual studio integration cutting production turnaround by 25%."
            }
        ]
    },
    {
        sectionId: "techno-vision",
        sectionTitle: "Techno Vision — Infrastructure Digital Twins & Real Estate Metaverse",
        projects: [
            {
                title: "Mobile Interactive Real Estate Digital Twins & Touch Apps (Techno Vision)",
                tech: "Unreal Engine, Mobile (iOS / Android / Tablets), Touch NUI, ASTC Compression, C++",
                challenge: "Standalone Mobile 3D Masterplan Navigation: Engineered standalone mobile architectural walkthrough applications for real estate sales teams and buyers to interactively tour entire compounds and masterplans on tablets and smartphones with zero cloud latency.",
                solution: "Mobile Touch NUI & Dynamic Real-time Customization: Programmed custom mobile gesture controls (pinch-to-zoom, dual-finger orbital camera rotation, interactive floorplan minimaps, and point-of-interest touch hotspots), paired with real-time material/finishes customizers and interactive unit selectors.",
                optimization: "Mobile Hardware Optimization: Applied rigorous mobile engine performance tuning: converted massive CAD/BIM assets into low-draw-call mobile meshes (<100 draw calls per frame), baked high-resolution mobile lightmaps, compressed textures to ASTC format with dynamic Mipmap streaming, and clamped peak runtime memory under 400MB RAM to ensure locked 60 FPS on iOS and Android devices.",
                matrix: "Standalone mobile APK/IPA deployment, custom touch gesture recognition, memory footprint capped under 400MB RAM, and locked 60 FPS mobile framerate.",
                mediaLinks: [
                    { type: "youtube", label: "Mobile Real Estate Digital Reality Tour", url: "https://www.youtube.com/watch?v=9mSJo6saKeA" },
                    { type: "youtube", label: "New Capital Interactive Mobile Masterplan Twin", url: "https://www.youtube.com/watch?v=H7_xWeUp3k0" },
                    { type: "youtube", label: "Mobile Interactive Features & Options Demo", url: "https://www.youtube.com/watch?v=D_-rmRa1JRc" }
                ]
            },
            {
                title: "LRT (Light Rail Transit) Network & Urban Infrastructure Digital Twin (Techno Vision)",
                tech: "Unreal Engine, GIS Urban Infrastructure, Rail Simulation, Level Streaming, Custom Shaders",
                challenge: "Large-Scale Transport Network Simulation: Modeled the regional Light Rail Transit (LRT) network and New Administrative Capital infrastructure, requiring simultaneous macro-scale urban spatial navigation and precise mechanical train simulation.",
                solution: "Interactive Rail Kinematics & Urban Streaming: Built realistic train car physics, automated station approach sequences, switch gear kinematics, dynamic passenger flow, and high-performance LOD/streaming hierarchies maintaining high framerates across complex urban geometry.",
                matrix: "GIS spatial accuracy, real-time railway kinematics, dynamic passenger flow, and large-scale open-world level streaming.",
                mediaLinks: [
                    { type: "youtube", label: "LRT Digital Twin Transit Simulation", url: "https://www.youtube.com/watch?v=zw-K6CQe-Cg" }
                ]
            },
            {
                title: "Photorealistic Architectural Digital Twins & Interactive Metaverse Tours (Techno Vision)",
                tech: "Unreal Engine 5, Lumen / Ray Tracing, MetaHuman Creator, Real-time Configurator, PBR Shaders",
                challenge: "Enterprise Real Estate Metaverse Twins: Developing interactive real-time digital twins for premier real estate developers (such as the Lake-West Compound in Sheikh Zayed) with cinematic architectural visualization and real-time configurability.",
                solution: "Interactive Architectural Reality Engine: Engineered real-time architectural walkthroughs featuring dynamic time-of-day sun/shadow simulation, dynamic interior material/finishes switching, orbital masterplan camera navigation, architectural floorplan fast-travel, and MetaHuman interactive virtual guides.",
                matrix: "Lumen real-time global illumination, dynamic material instancing, MetaHuman virtual guides, and photorealistic PBR rendering.",
                mediaLinks: [
                    { type: "youtube", label: "Lake-West Compound Sheikh Zayed Cinematic Tour", url: "https://www.youtube.com/watch?v=NoNnJi4eGPY" },
                    { type: "youtube", label: "Techno Vision Digital Twins Showcase Tour", url: "https://www.youtube.com/watch?v=FrR3FsioJYw" },
                    { type: "youtube", label: "Master Architectural Visualization & Interaction", url: "https://www.youtube.com/watch?v=qZTstP0c9og" }
                ]
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
                optimization: "Mobile Gaming & Performance Optimization: Strictly capped draw calls (<120 per frame) via mobile mesh batching, Hierarchical Instanced Static Meshes (HISM), and aggressive LOD clustering. Implemented mobile Forward Shading, ASTC texture compression with runtime Mipmap streaming (keeping runtime RAM under 350MB for low-spec 2GB/3GB Android devices), Dynamic Resolution Scaling (DRS) to eliminate thermal throttling and battery drain, and custom UDP packet delta-compression resilient to erratic mobile LTE/Wi-Fi transitions.",
                matrix: "Optimized mobile GPU rendering (Mali, Adreno, PowerVR), frame pacing locked at 60 FPS, touch latency tuning, and server bandwidth optimization.",
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
                optimization: "Mobile Engine & Thermal Optimization: Multi-threaded Vuforia computer vision processing onto background worker threads, freeing the main render thread to sustain locked 60 FPS. Eliminated C# runtime heap allocations in update loops (Zero-GC) to prevent frame stutters, stripped unused shader variants to reduce APK download size by 45%, and implemented battery-friendly screen throttling during idle AR states.",
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
                optimization: "Mobile Asset & Memory Footprint Optimization: Implemented lightweight mobile unlit and vertex-lit shaders, compressed audio assets with Vorbis streaming, and designed a lightweight object-pooling architecture for instantaneous card recognition and 3D letter swapping without Garbage Collection hitches.",
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
                optimization: "Mobile Space Shader & Performance Tuning: Authored custom single-pass mobile shaders combining planetary atmosphere rim-lighting with unlit procedural textures, avoiding costly multi-pass calculations and maintaining smooth 60 FPS on low-to-mid range mobile GPUs.",
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
                Senior Software Engineer and XR Developer with over <strong>7 years of professional experience</strong> delivering enterprise-grade simulations, real-time 3D applications, computer vision tools, and cross-platform multiplayer systems across <strong>Unreal Engine (C++, Blueprints), Unity (C#), and Python</strong>.<br><br>
                Specialized in high-fidelity VR flight/rescue simulators with realistic aerodynamic physics, hardware-in-the-loop synchronization, and low-latency rendering. Deep expertise in <strong>Mobile Game & Engine Optimization</strong> (profiling draw calls, ASTC texture streaming, Dynamic Resolution Scaling, thermal/battery budgeting, and low-latency netcode for mobile devices). Experienced across cloud-based <strong>Pixel Streaming</strong> architectures, virtual production workflows (<strong>Aximmetry, VIVE Mars</strong>), dedicated server replication (AWS), and custom C++ engine plugin development.<br><br>
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
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Creative Motion <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Senior Unreal Engine Developer &amp; Streaming Specialist</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Mar 2023 – Apr 2024 | Cairo, Egypt / UAE (Remote &amp; On-site)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Delivered the <strong>RTA Dubai Virtual Museum &amp; Digital Twin</strong>: engineered macro-to-micro GIS camera traversal across Dubai transit networks, interactive fleet asset inspection (Dubai Bus, eVTOL air taxis, Infinity Bridge), and full bilingual (Arabic/English) localized UI.</li>
                <li><strong>Enterprise Cloud Pixel Streaming Architecture:</strong> Overcame enterprise firewall/symmetric NAT obstacles by engineering a custom Node.js WebSocket signalling cluster paired with distributed Coturn STUN/TURN relays, enabling 100% traversal on restricted corporate VPNs.</li>
                <li>Orchestrated auto-scaling headless Unreal Engine container instances on AWS EC2 (G4dn/G5 GPUs) with NVENC H.264 bitrate clamping and bidirectional DataChannels, achieving sub-50ms glass-to-glass latency in web browsers.</li>
                <li>Reduced virtual production turnaround time by <strong>25%</strong> through Aximmetry virtual studio and VIVE Mars camera tracking integration.</li>
            </ul>
        </div>
        
        <div class="project-card" style="padding: 30px;">
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Techno &lt;Vision&gt; <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Senior Unreal Engine Developer</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Apr 2021 – Mar 2023 | Giza, Egypt (Hybrid)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Engineered large-scale urban infrastructure digital twins, including the regional <strong>Light Rail Transit (LRT)</strong> network and <strong>New Administrative Capital</strong> transit projects.</li>
                <li><strong>Mobile 3D Platform Architecture:</strong> Engineered standalone interactive mobile 3D digital twins and real estate apps for iOS, Android, and tablets, featuring customized touch gestures, floorplan navigators, ASTC texture streaming, and low memory footprints (&lt;400MB RAM) for 60 FPS performance.</li>
                <li>Developed cinematic architectural digital twins and real estate metaverse walkthroughs (including <strong>Lake-West Compound, Sheikh Zayed</strong>), integrating dynamic time-of-day lighting, material configurators, and MetaHuman guides.</li>
                <li>Configured Pixel Streaming and WebRTC servers allowing corporate clients to inspect complex 3D masterplans directly inside low-spec web browsers.</li>
            </ul>
        </div>
        
        <div class="project-card" style="padding: 30px;">
            <h3 style="color: var(--accent); margin-bottom: 5px; font-size: 1.4rem;">Ticnors <span style="color: var(--text-muted); font-size: 1.1rem; font-weight: 400;">— Unreal Engine &amp; Unity Developing Team Leader</span></h3>
            <p style="color: var(--text-muted); margin-bottom: 15px; font-style: italic;">Feb 2020 – May 2021 | Cairo, Egypt (On-site)</p>
            <ul style="color: var(--text-main); line-height: 1.7; margin-left: 20px;">
                <li>Supervised a technical engineering team developing cross-platform multiplayer mobile games and commercial mobile AR applications.</li>
                <li><strong>Mobile Performance &amp; Engine Optimization:</strong> Led mobile optimization pipelines across Unreal Engine &amp; Unity: strictly managed draw-call budgets (&lt;120), streamlined ASTC texture streaming, profile-guided optimization for mid/low-tier mobile GPUs (Mali, Adreno, PowerVR), and maintained 60 FPS stability without thermal throttling.</li>
                <li>Built server-client and dedicated multiplayer architectures using AWS cloud backend services for matchmaking and state synchronization.</li>
                <li>Integrated custom C# scripts in Unity, C++/Blueprints in Unreal Engine, and optimized 3D assets in Blender.</li>
                <li>Published commercial games and AR suites: <a href="https://apkpure.com/developer/Ticoners%20for%20information%20technology" target="_blank" style="color: var(--accent); font-weight: 600;">View Published Games on APKPure &#8599;</a></li>
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

            const optHtml = proj.optimization ? `
                <div class="detail-section">
                    <h4 style="color: var(--accent);">Mobile Gaming &amp; Performance Optimization</h4>
                    <p>${proj.optimization}</p>
                </div>
            ` : '';

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
                ${optHtml}
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
                                        ${link.label}
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
                                    ${link.label}
                                </div>
                                <iframe src="${embedUrl}" width="100%" height="320" style="border:1px solid var(--border-color); border-bottom-left-radius:8px; border-bottom-right-radius:8px;" allow="autoplay"></iframe>
                            </div>
                        `;
                    } else {
                        // APKPure, Facebook, Drive, etc.
                        linksHtml += `
                            <a href="${link.url}" target="_blank" class="external-link-btn" style="display:block; padding:15px; background:var(--bg-color); color:var(--accent); text-decoration:none; border-radius:8px; border:1px solid var(--border-color); text-align:center; font-weight:600; transition:background 0.2s;">
                                ${link.label} &#8599;
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
