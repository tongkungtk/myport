export const portfolioData = {
    personalInfo: {
        name: 'ธีรนันท์ เพชรสุข',
        englishName: 'Theeranan Phetsuk',
        tagline: 'Business Systems & AI Automation Specialist',
        bio: 'ออกแบบและพัฒนาเว็บไซต์ ระบบ Automation และ AI workflow ที่ช่วยลดงานซ้ำ จัดการคอนเทนต์ ข้อมูล และกระบวนการทำงานได้เร็วขึ้น ผ่าน WordPress, Web Board, Telegram Bot และ AI Tools',
        contact: 'theeranan.p.work@gmail.com',
        phone: '062-423-3673',
        role: 'Business Systems & AI Automation Specialist',
        location: 'สงขลา'
    },
    socialLinks: {
        github: 'https://github.com/tongkungtk',
        email: 'theeranan.p.work@gmail.com',
        portfolio: 'https://myport-tk.vercel.app/'
    },
    highlights: [
        {
            value: 'AI + Automation',
            label: 'ออกแบบ workflow และเครื่องมือช่วยลดงานซ้ำ'
        },
        {
            value: 'WordPress',
            label: 'ดูแลเว็บบอร์ดและพัฒนาปลั๊กอินใช้งานจริง'
        },
        {
            value: 'IT + Training',
            label: 'ประสานงานโครงการ อบรม และดูแลระบบ IT'
        }
    ],
    skillGroups: [
        {
            title: 'Programming',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL']
        },
        {
            title: 'Web / CMS',
            skills: ['WordPress', 'Plugin Development', 'Web Board Management', 'Next.js', 'React', 'Tailwind CSS']
        },
        {
            title: 'AI / Automation',
            skills: ['Codex', 'ChatGPT', 'Google Gemini', 'Google Flow', 'n8n', 'OpenClaw', 'Telegram Automation']
        },
        {
            title: 'Tools',
            skills: ['Git', 'GitHub', 'VS Code', 'Google Antigravity', 'Framer Motion']
        }
    ],
    experiences: [
        {
            role: 'แอดมินดูแลเว็บบอร์ด / Automation Developer',
            company: 'Web Board Project',
            period: 'ก.พ. 2569 - ปัจจุบัน',
            description: 'ดูแลเว็บบอร์ด WordPress สร้างปลั๊กอิน และพัฒนาโปรแกรม Automation สำหรับงานคอนเทนต์หลายแพลตฟอร์ม',
            items: [
                'ดูแลเว็บบอร์ด WordPress และปรับปรุงระบบให้เหมาะกับการใช้งานจริง',
                'พัฒนา AutoMultiPost สำหรับโพสต์จาก Telegram ไปยัง Facebook, Instagram, X และ Telegram',
                'พัฒนา ForumBot สำหรับลงคอนเทนต์บนเว็บบอร์ดหลายบัญชีพร้อมกัน',
                'พัฒนาระบบ ATGX AI สำหรับวิเคราะห์และวางแผนการเทรด'
            ]
        },
        {
            role: 'นักวิชาการคอมพิวเตอร์ และวิทยากรอีสปอร์ต',
            company: 'สำนักงานนวัตกรรมดิจิทัลและระบบอัจฉริยะ มหาวิทยาลัยสงขลานครินทร์',
            period: 'ส.ค. 2567 - พ.ค. 2568',
            description: 'ประสานงานโครงการอีสปอร์ต เป็นวิทยากรอบรม และดูแลระบบ IT Helpdesk ภายในองค์กร',
            items: [
                'ประสานงานโครงการอีสปอร์ตและอบรมหลักสูตรอีสปอร์ตกับ IT พื้นฐาน',
                'ดูแลแก้ไขปัญหาคอมพิวเตอร์ ระบบโสตทัศนูปกรณ์ และอุปกรณ์ภายในองค์กร',
                'ดูแลระบบเครือข่ายคอมพิวเตอร์ผ่านระบบ Fox Project'
            ]
        },
        {
            role: 'หัวหน้าทีมฝึกงาน',
            company: 'สมาคมกีฬาอีสปอร์ตแห่งประเทศไทย (TESF)',
            period: 'มี.ค. 2564 - พ.ค. 2564',
            description: 'สนับสนุนการจัดการแข่งขัน Esports ดูแลเว็บไซต์ และรับผิดชอบงานถ่ายทอดสดกับสื่อประชาสัมพันธ์',
            items: [
                'จัดการการแข่งขันทัวร์นาเมนต์ Esports และแก้ไขปัญหาเฉพาะหน้า',
                'ดูแลระบบถ่ายทอดสดและตัดต่อวิดีโอประชาสัมพันธ์',
                'ดูแลและอัปเดตข้อมูลข่าวสารบนเว็บไซต์หลักของสมาคม'
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: 'AutoMultiPost',
            description: 'Telegram bot สำหรับเลือกปลายทางและส่งคอนเทนต์จากจุดเดียว รองรับโพสต์ข้อความ รูปภาพ และวิดีโอไปยัง Facebook Page, Channel และ X',
            techStack: ['Telegram Bot', 'Facebook API', 'X API', 'Python', 'Automation'],
            category: 'Automation',
            status: 'Telegram bot',
            preview: 'autopost',
            accent: 'from-cyan-400 to-blue-500'
        },
        {
            id: 2,
            title: 'ForumBot',
            description: 'Desktop app สำหรับจัดการบอทหลายบัญชี ตั้งเวลาโพสต์และคอมเมนต์ จัดการ Forum URL ตรวจผลลัพธ์ และดู logs จากหน้าจอเดียว',
            techStack: ['Python', 'PyQt', 'SQLite', 'Playwright', 'Automation'],
            category: 'Automation',
            status: 'Desktop app v1.3.7',
            preview: 'forumbot',
            accent: 'from-emerald-400 to-teal-500'
        },
        {
            id: 3,
            title: 'ATGX AI Trading Analysis',
            description: 'เว็บ AI สำหรับช่วยวิเคราะห์ภาพรวมตลาด วางแผนการเทรด และจัดระเบียบข้อมูลประกอบการตัดสินใจเชิงกลยุทธ์',
            techStack: ['AI Analysis', 'Trading Plan', 'Data Workflow', 'Web App'],
            category: 'AI System',
            status: 'AI project',
            demo: 'https://atgx.pages.dev/',
            preview: 'trading',
            accent: 'from-amber-300 to-orange-500'
        },
        {
            id: 4,
            title: 'DashBoardMini',
            description: 'Mini BI dashboard builder สำหรับสร้าง workspace, sheet, dashboard canvas และ chart builder พร้อมระบบ mapping fields, preview chart, save/export และ share workflow',
            techStack: ['React', 'Vite', 'ECharts', 'Chart.js', 'Zustand', 'Dashboard'],
            category: 'BI Tool',
            status: 'Dashboard builder',
            preview: 'dashboardmini',
            accent: 'from-sky-400 to-indigo-500'
        },
        {
            id: 5,
            title: 'LexFlow CRM',
            description: 'CRM mockup สำหรับงานกฎหมายและบัญชี รวม pipeline ลูกค้า งานเอกสาร งานบัญชี AI brief และ automation workflow เช่น website form to CRM, email attachment to checklist และ invoice import',
            techStack: ['CRM', 'HTML', 'CSS', 'JavaScript', 'Workflow Automation', 'AI Operations'],
            category: 'Business System',
            status: 'Internal CRM mockup',
            demo: '/tkcrm/index.html',
            image: '/images/tkcrm.png'
        },
        {
            id: 6,
            title: 'เว็บไซต์ Rotaract',
            description: 'เว็บไซต์ชมรม Rotaract มหาวิทยาลัยสงขลานครินทร์ พร้อมระบบจัดการข้อมูลและภาพกิจกรรม',
            techStack: ['Next.js', 'Prisma', 'Tailwind CSS', 'AWS S3'],
            github: 'https://github.com/tongkungtk/rotaractpsu',
            demo: 'https://rotaractpsu.com',
            image: '/images/rotaract.png',
            category: 'Web App',
            status: 'Live website'
        },
        {
            id: 7,
            title: 'เว็บช่วยเหลือน้ำท่วมหาดใหญ่',
            description: 'เว็บสำหรับรวบรวมข้อมูลช่วยเหลือน้ำท่วมและสนับสนุนการสื่อสารข้อมูลที่จำเป็นในช่วงสถานการณ์เร่งด่วน',
            techStack: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
            github: 'https://github.com/tongkungtk/hatyai-flood-relief',
            demo: 'https://hatyai-flood-relief.vercel.app/',
            image: '/images/hatyai-flood-relief.png',
            category: 'Public Utility',
            status: 'Live website'
        },
        {
            id: 8,
            title: 'BasePilates Landing Page',
            description: 'Landing Page สำหรับสตูดิโอพิลาทิส BasePilates เน้นการนำเสนอสินค้าและบริการแบบเรียบง่าย ทันสมัย และใช้งานได้จริง',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/tongkungtk/basepilates',
            demo: 'https://basepilates.vercel.app/',
            image: '/images/basepilates.jpg',
            category: 'Landing Page',
            status: 'Live website'
        }
    ],
    education: {
        degree: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
        school: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่',
        period: '2563 - 2567'
    }
};
