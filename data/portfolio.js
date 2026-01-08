
export const portfolioData = {
    personalInfo: {
        name: 'ธีรนันท์ เพชรสุข',
        tagline: 'สร้างสรรค์ประสบการณ์ดิจิทัลที่มีความหมาย',
        bio: 'สวัสดีครับ นี่เป็นเว็ปที่รวบรวมผลงานของผมที่เคยสร้างครับ',
        contact: 'theeranan48@gmail.com',
        role: 'ฟรีแลนด์',
        location: 'สงขลา, ประเทศไทย'
    },
    socialLinks: {
        github: 'https://github.com/tongkungtk',
        email: 'theeranan48@gmail.com'
    },
    skills: [
        'JavaScript', // ภาษาหลักสำหรับเขียน Logic และการทำงานบนหน้าเว็บ
        'TypeScript', // JavaScript ที่เพิ่มระบบ Type ช่วยลดบั๊กและเขียนโค้ดได้แม่นยำขึ้น
        'React', // Library ยอดนิยมสำหรับสร้าง User Interface (UI) แบบ Component
        'Next.js', // Framework บน React ที่ครบเครื่อง ทำ SEO ดี และมีระบบหลังบ้านในตัว
        'Tailwind CSS', // เครื่องมือตกแต่งหน้าเว็บแบบ Utility-first จัดหน้าสวยได้รวดเร็ว
        'Material UI', // UI Kit สำหรับสร้าง UI ที่สวยงามและมีความสอดคล้องกัน
        'bootstrap', // UI Kit สำหรับสร้าง UI ที่สวยงามและมีความสอดคล้องกัน
        'ant design', // UI Kit สำหรับสร้าง UI ที่สวยงามและมีความสอดคล้องกัน
        'Node.js', // Runtime ที่ทำให้ JavaScript รันบน Server ได้ (ใช้ทำ Backend)
        'Git', // ระบบจัดการ Version Control ช่วยเก็บประวัติและทำงานร่วมกันเป็นทีม
        'AWS S3', // บริการ Cloud Storage สำหรับเก็บไฟล์และรูปภาพของเว็บไซต์
        'Prisma', // ORM ช่วยให้เขียนโค้ดติดต่อฐานข้อมูลได้ง่ายและปลอดภัย
        'Framer Motion', // Library สำหรับทำ Animation ให้เว็บดูลื่นไหลและน่าสนใจ
        'Vite' // Build Tool รุ่นใหม่ที่รันโปรเจกต์ React ได้เร็วมาก
    ],
    projects: [
        {
            id: 1,
            title: 'เว็บไซต์ Rotaract',
            description: 'เว็บไซต์ Rotaract มหาวิทยาลัยสงขลานครินทร์',
            techStack: ['Next.js', 'Prisma', 'Tailwind CSS', 'AWS S3'],
            github: 'https://github.com/tongkungtk/rotaractpsu',
            demo: 'https://rotaractpsu.com',
            image: '/images/rotaract.png'
        },
        {
            id: 2,
            title: 'แอพจัดการงาน',
            description: 'เครื่องมือจัดการงานร่วมกันพร้อมฟีเจอร์ลากและวาง และการอัปเดตแบบเรียลไทม์สำหรับทีม',
            techStack: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
            github: 'https://github.com/tongkungtk/hatyai-flood-relief',
            demo: 'https://hatyai-flood-relief.vercel.app/',
            image: '/images/hatyai-flood-relief.png'
        },
        {
            id: 3,
            title: 'BasePilates',
            description: 'เว็บไซต์ Landing Page สำหรับสตูดิโอพิลาทิส BasePilates ที่เน้นความเรียบง่ายและทันสมัย',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/tongkungtk/basepilates',
            demo: 'https://basepilates.vercel.app/',
            image: '/images/basepilates.jpg'
        }
    ]
};
