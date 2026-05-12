'use client';
import { motion } from 'framer-motion';
import { BarChart3, Bot, Database, ExternalLink, Github, LayoutDashboard, LineChart, Workflow } from 'lucide-react';
import Image from 'next/image';

export default function ProjectCard({ project, index }) {
    const hasLinks = project.demo || project.github;

    return (
        <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: index * 0.05 }}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950/95 shadow-2xl shadow-black/20 transition-colors hover:border-cyan-500/50"
        >
            <div className="relative h-72 overflow-hidden border-b border-neutral-800 bg-neutral-900">
                <CardMedia project={project} />

                {hasLinks && (
                    <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {project.github && (
                            <IconLink href={project.github} label={`Open GitHub for ${project.title}`}>
                                <Github className="h-4 w-4" />
                            </IconLink>
                        )}
                        {project.demo && (
                            <IconLink href={project.demo} label={`Open demo for ${project.title}`}>
                                <ExternalLink className="h-4 w-4" />
                            </IconLink>
                        )}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                        {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.status}</span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-7 text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-neutral-700 bg-black/60 px-3 py-1.5 text-xs font-medium text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {hasLinks && (
                    <div className="mt-5 flex flex-wrap gap-3">
                        {project.demo && (
                            <ActionLink href={project.demo} primary>
                                เปิดเว็บไซต์
                                <ExternalLink className="h-3.5 w-3.5" />
                            </ActionLink>
                        )}
                        {project.github && (
                            <ActionLink href={project.github}>
                                GitHub
                                <Github className="h-3.5 w-3.5" />
                            </ActionLink>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    );
}

function IconLink({ href, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/60 text-white backdrop-blur hover:bg-white/15"
        >
            {children}
        </a>
    );
}

function ActionLink({ href, primary = false, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={
                primary
                    ? 'inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition-colors hover:bg-cyan-100'
                    : 'inline-flex items-center gap-2 rounded-md border border-neutral-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200'
            }
        >
            {children}
        </a>
    );
}

function CardMedia({ project }) {
    if (project.preview === 'autopost') {
        return <AutoPostPreview />;
    }

    if (project.preview === 'forumbot') {
        return <ForumBotPreview />;
    }

    if (project.preview === 'trading') {
        return <TradingPreview />;
    }

    if (project.preview === 'dashboardmini') {
        return <DashboardMiniPreview />;
    }

    const media = project.image ? (
        <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
    ) : (
        <GenericPreview project={project} />
    );

    if (!project.demo) {
        return media;
    }

    return (
        <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open demo for ${project.title}`}
            className="block h-full"
        >
            {media}
        </a>
    );
}

function GenericPreview({ project }) {
    return (
        <div className={`h-full bg-gradient-to-br ${project.accent || 'from-cyan-400 to-blue-500'} p-6`}>
            <div className="flex h-full flex-col justify-between rounded-lg border border-black/10 bg-white/10 p-5 text-black backdrop-blur">
                <div className="flex items-center justify-between text-black/70">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">{project.category}</span>
                    {project.category?.includes('AI') ? <Bot className="h-7 w-7" /> : <Workflow className="h-7 w-7" />}
                </div>
                <div>
                    <p className="mb-2 text-sm text-black/70">{project.status}</p>
                    <p className="text-3xl font-bold leading-tight text-black">{project.title}</p>
                </div>
            </div>
        </div>
    );
}

function AutoPostPreview() {
    return (
        <div className="h-full overflow-hidden bg-[#0b1522] p-4 text-white">
            <div className="mx-auto h-full max-w-[360px] rounded-[18px] border border-[#24394f] bg-[#101d2b] p-3 shadow-xl">
                <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 text-sm font-bold text-black">
                        A
                    </div>
                    <div>
                        <p className="text-sm font-semibold">AutoPost Bot</p>
                        <p className="text-xs text-cyan-200">Telegram workflow</p>
                    </div>
                </div>

                <div className="mb-2 flex justify-end">
                    <div className="rounded-2xl rounded-tr-md bg-[#2f6090] px-4 py-2 text-sm text-blue-50">
                        /start <span className="ml-2 text-blue-200">17:39</span>
                    </div>
                </div>

                <div className="rounded-2xl rounded-tl-md bg-[#1b2d3e] p-4">
                    <p className="mb-3 text-base font-semibold">AutoPost Bot</p>
                    <p className="mb-3 text-sm">สวัสดีครับ Theeranan!</p>
                    <div className="space-y-1 text-sm leading-5 text-gray-100">
                        <p>จะโพสต์ไป:</p>
                        <p>Facebook Page, Channel, X</p>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-cyan-100">เลือกปลายทางและรูปแบบโพสต์</p>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-semibold">
                    <TelegramButton className="col-span-2">Facebook</TelegramButton>
                    <TelegramButton>Channel</TelegramButton>
                    <TelegramButton>X</TelegramButton>
                    <TelegramButton className="col-span-2">โพสต์ข้อความ</TelegramButton>
                    <TelegramButton className="col-span-2">โพสต์รูป/วิดีโอ</TelegramButton>
                </div>
            </div>
        </div>
    );
}

function TelegramButton({ children, className = '' }) {
    return (
        <div className={`rounded-lg bg-[#223649] px-3 py-2 text-center text-cyan-50 ${className}`}>
            {children}
        </div>
    );
}

function ForumBotPreview() {
    const rows = [
        ['90', 'Phuri', 'บทวิเคราะห์ราคาทองคำ', 'Done'],
        ['88', 'Phuri', 'บทวิเคราะห์ Bitcoin', 'Done'],
        ['13', 'Jann', 'คอมเมนต์ตอบกลับ', 'Idle'],
        ['7', 'Tanafx', 'ตั้งเวลาโพสต์', 'Idle']
    ];

    return (
        <div className="h-full overflow-hidden bg-[#071120] text-white">
            <div className="flex h-8 items-center gap-2 bg-neutral-100 px-3 text-[10px] text-black">
                <span className="h-3 w-3 rounded-sm bg-[#15233a]" />
                <span className="truncate font-medium">Forum Bot - โพสต์กระทู้ v1.3.7</span>
            </div>
            <div className="flex h-10 items-center gap-1.5 border-b border-[#203553] bg-[#0b1628] px-3">
                {['สร้างบอท', 'สร้างกระทู้', 'คอมเมนต์', 'URI', 'Logs'].map((tab, index) => (
                    <span
                        key={tab}
                        className={`rounded-md border border-[#274365] px-2.5 py-1 text-[9px] font-semibold ${index === 1 ? 'bg-[#7fb2ff] text-black' : 'bg-[#0d1b30] text-white'}`}
                    >
                        {tab}
                    </span>
                ))}
            </div>
            <div className="grid h-[calc(100%-72px)] grid-cols-[35%_1fr] gap-3 p-3">
                <div className="rounded-md border border-[#274365] bg-[#13233a] p-3">
                    <div className="mb-4 inline-block rounded-md bg-[#21395b] px-3 py-1 text-[10px] font-bold">
                        ตั้งเวลาโพสต์
                    </div>
                    <div className="space-y-2">
                        <PreviewInput label="เลือกบอท" value="ATGX." />
                        <PreviewInput label="Forum URL" value="thaiforextrading.com" />
                        <div className="h-14 rounded-md border border-[#36577e] bg-[#071120]" />
                        <div className="grid grid-cols-3 gap-1.5">
                            {['ตอนนี้', '+5', '+30'].map((button) => (
                                <span key={button} className="rounded-md bg-[#7fb2ff] py-1 text-center text-[9px] font-bold text-black">
                                    {button}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rounded-md border border-[#274365] bg-[#0a1526] p-3">
                    <div className="mb-3 inline-block rounded-md bg-[#21395b] px-3 py-1 text-[10px] font-bold">
                        ตารางงานล่วงหน้า
                    </div>
                    <div className="overflow-hidden rounded-sm border border-[#263e5d]">
                        <div className="grid grid-cols-[34px_52px_1fr_54px] bg-[#1b304d] text-[9px] font-bold">
                            {['ID', 'Bot', 'Title', 'Status'].map((head) => (
                                <span key={head} className="border-r border-[#314a68] px-2 py-2 last:border-r-0">
                                    {head}
                                </span>
                            ))}
                        </div>
                        {rows.map((row) => (
                            <div key={row.join('-')} className="grid grid-cols-[34px_52px_1fr_54px] border-t border-[#203553] text-[9px]">
                                {row.map((cell) => (
                                    <span key={cell} className="truncate px-2 py-2">
                                        {cell}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TradingPreview() {
    return (
        <a
            href="https://atgx.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ATGX AI Trading Analysis"
            className="block h-full"
        >
            <div className="h-full overflow-hidden bg-[#070b14] text-white">
                <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#080d18] px-4">
                    <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-400 text-sm font-black text-black">
                            AT
                        </span>
                        <span className="text-lg font-bold">
                            AT<span className="text-yellow-300">GX</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3 text-yellow-300">
                        <LineChart className="h-5 w-5" />
                        <span className="rounded-full border border-red-400/30 bg-red-500/10 px-2 py-1 text-[10px] font-bold text-red-300">
                            SELL
                        </span>
                    </div>
                </div>

                <div className="p-4">
                    <div className="mb-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <div className="mb-3 flex items-center justify-between">
                            <p className="text-sm font-bold text-gray-100">Premium Setup</p>
                            <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-bold text-red-300">
                                SELL
                            </span>
                        </div>

                        <div className="mb-3 flex flex-wrap gap-2">
                            <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-[11px] font-bold text-yellow-200">
                                Breakout Acceptance
                            </span>
                            <span className="rounded-full border border-gray-500/30 bg-gray-500/10 px-3 py-1 text-[11px] font-bold text-gray-200">
                                Bias: bearish
                            </span>
                            <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-[11px] font-bold text-green-300">
                                Score: 83/100
                            </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <TradeBox label="ENTRY" value="4513.37" />
                            <TradeBox label="TP" value="4491.38" tone="green" />
                            <TradeBox label="SL" value="4525.69" tone="red" />
                        </div>
                    </div>

                    <div className="grid gap-3">
                        <InfoPanel label="TRIGGER">
                            Accept only if price holds below the breakdown level.
                        </InfoPanel>
                        <InfoPanel label="DECISION">
                            โมเมนตัมขาลงชัดเจนจากแท่งเทียนล่าสุดและแรงขายจาก Microstructure
                        </InfoPanel>
                    </div>
                </div>
            </div>
        </a>
    );
}

function DashboardMiniPreview() {
    const bars = [54, 82, 46, 68, 74, 58];

    return (
        <div className="h-full overflow-hidden bg-[#f6f8fc] text-slate-950">
            <div className="flex h-10 items-center justify-between border-b border-slate-200 bg-white px-4">
                <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#0f172a] text-[10px] font-bold text-white">
                        BI
                    </span>
                    <div>
                        <p className="text-xs font-bold">Mini BI</p>
                        <p className="text-[9px] text-slate-500">Dashboard builder</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-500">
                    <span>Home</span>
                    <span className="text-blue-600">Builder</span>
                </div>
            </div>

            <div className="grid h-[calc(100%-40px)] grid-cols-[64px_1fr_84px]">
                <div className="border-r border-slate-200 bg-[#0f172a] p-2 text-white">
                    <div className="mb-3 rounded-md bg-white/10 p-2">
                        <LayoutDashboard className="mb-1 h-4 w-4 text-blue-300" />
                        <p className="text-[9px] font-semibold">Workspace</p>
                    </div>
                    {['Projects', 'Canvas', 'Builder'].map((item, index) => (
                        <div key={item} className={`mb-1 rounded px-2 py-1 text-[8px] ${index === 2 ? 'bg-blue-500/30 text-blue-100' : 'text-slate-400'}`}>
                            {item}
                        </div>
                    ))}
                </div>

                <div className="p-3">
                    <div className="mb-3 rounded-lg bg-[#16233d] px-3 py-2 text-white">
                        <p className="text-[9px] uppercase tracking-[0.16em] text-blue-200">Chart.js Builder</p>
                        <p className="text-sm font-bold">Build a chart</p>
                    </div>

                    <div className="grid grid-cols-[32%_1fr] gap-3">
                        <div className="rounded-lg border border-slate-200 bg-white p-3">
                            <div className="mb-2 flex items-center gap-1 text-[9px] font-bold text-slate-600">
                                <Database className="h-3 w-3 text-blue-600" />
                                Data Source
                            </div>
                            {['business', 'sales', 'finance', 'geo_data'].map((field, index) => (
                                <div key={field} className={`mb-1 rounded border px-2 py-1 text-[8px] ${index === 1 ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-500'}`}>
                                    {field}
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg border border-slate-200 bg-white p-3">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-[9px] font-bold text-slate-600">Preview</p>
                                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-bold text-emerald-600">READY</span>
                            </div>
                            <div className="h-24 rounded-md border border-slate-200 bg-slate-50 p-3">
                                <div className="flex h-full items-end gap-2">
                                    {bars.map((height, index) => (
                                        <span
                                            key={`${height}-${index}`}
                                            className="flex-1 rounded-t bg-blue-500"
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                                {['Category', 'Value', 'SUM', 'Mapped'].map((chip) => (
                                    <span key={chip} className="rounded bg-[#0f172a] px-2 py-1 text-[8px] font-semibold text-white">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-l border-slate-200 bg-white p-2">
                    <p className="mb-2 text-[9px] font-bold">Settings</p>
                    <div className="mb-2 rounded-lg border border-slate-200 p-2">
                        <BarChart3 className="mb-1 h-4 w-4 text-blue-600" />
                        <p className="text-[8px] font-bold">Chart Type</p>
                        <p className="text-[8px] text-slate-500">Bar</p>
                    </div>
                    {['Save draft', 'Export', 'Share'].map((action) => (
                        <div key={action} className="mb-1 rounded bg-blue-50 px-2 py-1 text-center text-[8px] font-bold text-blue-700">
                            {action}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TradeBox({ label, value, tone = 'neutral' }) {
    const toneClass = {
        neutral: 'border-white/10 bg-black/30 text-white',
        green: 'border-green-400/20 bg-green-500/10 text-green-300',
        red: 'border-red-400/20 bg-red-500/10 text-red-300'
    }[tone];

    return (
        <div className={`rounded-lg border p-3 text-center ${toneClass}`}>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">{label}</p>
            <p className="mt-2 text-lg font-bold">{value}</p>
        </div>
    );
}

function InfoPanel({ label, children }) {
    return (
        <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">{label}</p>
            <p className="text-sm leading-6 text-gray-100">{children}</p>
        </div>
    );
}

function PreviewInput({ label, value }) {
    return (
        <div>
            <p className="mb-1 text-[9px] font-bold">{label}</p>
            <div className="truncate rounded-md border border-[#36577e] bg-[#071120] px-2 py-1.5 text-[9px] text-gray-300">
                {value}
            </div>
        </div>
    );
}
