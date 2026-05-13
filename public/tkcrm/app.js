const tasks = [
  {
    icon: "file-check-2",
    title: "ตรวจเอกสาร BOI และหนังสือมอบอำนาจ",
    text: "AI พบว่าไฟล์ passport scan ยังขาดหน้าวีซ่าล่าสุด ควรขอลูกค้าก่อน 14:00",
    badge: "Legal",
  },
  {
    icon: "receipt-text",
    title: "ปิดรอบบัญชีรายเดือนสำหรับ Villa Group",
    text: "Automation ดึง invoice จากอีเมลแล้ว 38/42 รายการ เหลือ 4 รายการรอตรวจซ้ำ",
    badge: "Accounting",
  },
  {
    icon: "globe-2",
    title: "อัปเดตหน้า WordPress: Thai company setup",
    text: "คอนเทนต์ภาษาอังกฤษพร้อม publish หลัง partner approve",
    badge: "Website",
  },
  {
    icon: "plug-zap",
    title: "ตรวจ webhook LINE lead intake",
    text: "มี 2 lead ที่ข้อมูลเบอร์โทรซ้ำ ระบบเสนอ merge contact อัตโนมัติ",
    badge: "Urgent",
    urgent: true,
  },
];

const cases = [
  {
    stage: "New Lead",
    name: "Anderson Property Co.",
    type: "legal",
    summary: "Foreign ownership consultation, Phuket property transfer",
    owner: "Nicha",
    due: "วันนี้",
    value: "THB 85k",
    urgent: true,
  },
  {
    stage: "Document Review",
    name: "Blue Marina Hotel",
    type: "accounting",
    summary: "Monthly VAT, withholding tax, payroll documents",
    owner: "Krit",
    due: "พรุ่งนี้",
    value: "Retainer",
  },
  {
    stage: "Document Review",
    name: "Nomad Founder Ltd.",
    type: "legal",
    summary: "Company registration and work permit checklist",
    owner: "Mali",
    due: "15 May",
    value: "THB 120k",
  },
  {
    stage: "Partner Review",
    name: "Lagoon Spa Group",
    type: "accounting",
    summary: "Year-end closing, audit prep, missing receipts",
    owner: "Krit",
    due: "16 May",
    value: "THB 64k",
  },
  {
    stage: "Follow-up",
    name: "Sato Family Office",
    type: "legal",
    summary: "Visa renewal and Thai tax residency question",
    owner: "Nicha",
    due: "วันนี้",
    value: "THB 42k",
  },
  {
    stage: "Follow-up",
    name: "Harbor Bistro",
    type: "accounting",
    summary: "POS integration and weekly sales import",
    owner: "Mali",
    due: "17 May",
    value: "Retainer",
  },
];

const automations = [
  {
    title: "Website form -> CRM -> LINE notification",
    text: "รับ lead จาก WordPress, สร้าง contact, แจ้งทีมขาย พร้อมแปลข้อความลูกค้าต่างชาติเป็นไทย",
    enabled: true,
  },
  {
    title: "Email attachments -> document checklist",
    text: "สแกนไฟล์แนบจาก Gmail/Outlook, จัดหมวดเอกสาร, แจ้งรายการที่ขาดให้ผู้รับผิดชอบ",
    enabled: true,
  },
  {
    title: "Invoice import -> accounting task",
    text: "ดึง invoice เข้า queue บัญชี, ตรวจเลขผู้เสียภาษี, สร้าง reminder ก่อนวันยื่นภาษี",
    enabled: true,
  },
  {
    title: "AI weekly management report",
    text: "สรุปงานค้าง, SLA risk, revenue pipeline และข้อเสนอปรับปรุง workflow ทุกวันศุกร์",
    enabled: false,
  },
];

const briefs = {
  visa: {
    title: "Visa renewal - Phuket villa owner",
    bullets: [
      "ลูกค้าต้องต่อวีซ่าภายใน 18 May และยังขาด passport page ล่าสุด",
      "เคสมีความเสี่ยง SLA เพราะเอกสารที่พักยังไม่ได้รับการยืนยันจาก landlord",
      "แนะนำให้ส่ง follow-up ภาษาอังกฤษแบบสุภาพ พร้อมแนบ secure upload link",
    ],
    message: "Dear Mr. Anderson, our team is preparing your visa renewal file. Could you please upload the latest visa stamp page and the signed accommodation confirmation today?",
  },
  tax: {
    title: "Monthly tax filing - hospitality group",
    bullets: [
      "Automation ตรวจพบ invoice ครบ 90% แต่มี 4 รายการชื่อ vendor ไม่ตรงฐานข้อมูล",
      "ควรให้ทีมบัญชีตรวจ VAT category ก่อนยื่น",
      "แนะนำสร้าง rule mapping vendor เพื่อไม่ต้องแก้ซ้ำในเดือนถัดไป",
    ],
    message: "ทีมบัญชีสามารถปิดรอบได้เร็วขึ้นถ้าอนุมัติ vendor mapping ใหม่ 4 รายการก่อน 15:00 วันนี้",
  },
  company: {
    title: "Company registration - foreign founder",
    bullets: [
      "ลูกค้าส่ง passport แล้ว แต่ยังขาด proposed company objectives ภาษาไทย",
      "ควรให้ partner review โครงสร้างผู้ถือหุ้นก่อนส่ง DBD",
      "AI แนะนำ checklist ไทย/อังกฤษ เพื่อให้ founder เข้าใจขั้นตอนและ timeline",
    ],
    message: "Your company registration checklist is almost complete. The next step is confirming the Thai business objectives and shareholder structure for partner review.",
  },
};

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function renderTasks() {
  const taskList = document.querySelector("#taskList");
  taskList.innerHTML = tasks
    .map(
      (task) => `
        <article class="task-row">
          <div class="task-icon">${icon(task.icon)}</div>
          <div>
            <h3>${task.title}</h3>
            <p>${task.text}</p>
          </div>
          <span class="badge ${task.urgent ? "urgent" : task.badge.toLowerCase()}">${task.badge}</span>
        </article>
      `,
    )
    .join("");
}

function renderPipeline(filter = "all") {
  const stages = ["New Lead", "Document Review", "Partner Review", "Follow-up"];
  const board = document.querySelector("#pipelineBoard");
  const visibleCases = cases.filter((item) => filter === "all" || item.type === filter || (filter === "urgent" && item.urgent));

  board.innerHTML = stages
    .map((stage) => {
      const stageCases = visibleCases.filter((item) => item.stage === stage);
      return `
        <section class="stage">
          <div class="stage-title"><span>${stage}</span><span>${stageCases.length}</span></div>
          ${stageCases
            .map(
              (item) => `
                <article class="case-card">
                  <header>
                    <h3>${item.name}</h3>
                    <span class="badge ${item.urgent ? "urgent" : item.type}">${item.type}</span>
                  </header>
                  <p>${item.summary}</p>
                  <footer>
                    <span>${item.owner} • ${item.due}</span>
                    <strong>${item.value}</strong>
                  </footer>
                </article>
              `,
            )
            .join("")}
        </section>
      `;
    })
    .join("");
}

function renderAutomations() {
  const list = document.querySelector("#automationList");
  list.innerHTML = automations
    .map(
      (item, index) => `
        <article class="automation-item">
          <div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
          <label class="switch" title="เปิด/ปิด automation">
            <input type="checkbox" data-automation="${index}" ${item.enabled ? "checked" : ""} />
            <span></span>
          </label>
        </article>
      `,
    )
    .join("");
}

function renderStatusFeed() {
  const feed = document.querySelector("#statusFeed");
  const items = [
    "10:12 CRM received 3 new website leads",
    "10:18 AI classified 2 legal leads and 1 accounting lead",
    "10:24 WordPress draft queued for partner approval",
  ];
  feed.innerHTML = items.map((item) => `<div class="status-item">${item}</div>`).join("");
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function generateBrief() {
  const key = document.querySelector("#caseSelect").value;
  const brief = briefs[key];
  document.querySelector("#briefOutput").innerHTML = `
    <p class="eyebrow">Generated CRM brief</p>
    <h3>${brief.title}</h3>
    <ul>${brief.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
    <h3>Suggested message</h3>
    <p>${brief.message}</p>
  `;
  showToast("AI brief generated from CRM mock data");
}

function applySearch() {
  const query = document.querySelector("#globalSearch").value.trim().toLowerCase();
  if (!query) {
    renderTasks();
    renderPipeline(document.querySelector(".segmented button.active")?.dataset.filter || "all");
    return;
  }

  const filteredTasks = tasks.filter((task) => `${task.title} ${task.text} ${task.badge}`.toLowerCase().includes(query));
  document.querySelector("#taskList").innerHTML = filteredTasks
    .map(
      (task) => `
        <article class="task-row">
          <div class="task-icon">${icon(task.icon)}</div>
          <div>
            <h3>${task.title}</h3>
            <p>${task.text}</p>
          </div>
          <span class="badge ${task.urgent ? "urgent" : task.badge.toLowerCase()}">${task.badge}</span>
        </article>
      `,
    )
    .join("");

  const matchedCase = cases.find((item) => `${item.name} ${item.summary}`.toLowerCase().includes(query));
  if (matchedCase) {
    switchView("pipeline");
  }
  if (window.lucide) lucide.createIcons();
}

function init() {
  renderTasks();
  renderPipeline();
  renderAutomations();
  renderStatusFeed();

  document.querySelectorAll(".nav-item").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
  document.querySelectorAll(".segmented button").forEach((button) =>
    button.addEventListener("click", () => {
      document.querySelectorAll(".segmented button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderPipeline(button.dataset.filter);
      if (window.lucide) lucide.createIcons();
    }),
  );

  document.querySelector("#generateBriefBtn").addEventListener("click", generateBrief);
  document.querySelector("#runAutomationBtn").addEventListener("click", () => {
    renderStatusFeed();
    showToast("Demo automation completed: lead, checklist, and report steps updated");
  });
  document.querySelector("#newCaseBtn").addEventListener("click", () => {
    switchView("pipeline");
    showToast("New case form would open here in a production CRM");
  });
  document.querySelector("#globalSearch").addEventListener("input", applySearch);

  if (window.lucide) lucide.createIcons();
}

window.addEventListener("DOMContentLoaded", init);
