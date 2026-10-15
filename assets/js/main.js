/**
 * MYKOLA ZOZUL — INTERACTIVE LUXURY CORE JS
 * Features:
 * - Magnetic Cursor Physics
 * - Atmospheric Spotlight Follower
 * - 4-Pane Interactive Slit Gallery
 * - Tactile Web Audio Synthesizer
 * - Bilingual Language Switcher (UA / EN)
 * - Pure SVG QR Code Generator
 * - Copy-to-Clipboard & Toast Feedback
 */

(function () {
  'use strict';

  // --- 1. Multilingual Content Matrix (7 Languages: UK, EN, DE, PL, ES, FR, RU) ---
  const translations = {
  "uk": {
    "nav_about": "Про мене",
    "nav_exp": "Досвід & COO",
    "nav_projects": "Проєкти",
    "nav_dream": "Принципи",
    "nav_skills": "Скіли",
    "nav_contact": "Контакти",
    "nav_links_btn": "Особисті лінки ↗",
    "hero_status": "В АКТИВНОМУ ПОШУКУ РОБОТИ // 100% REMOTE • ГОТОВИЙ ДО РЕЛОКАЦІЇ",
    "hero_title_sr": "МИКОЛА ЗОЗУЛЬ",
    "hero_title_prefix": "МИКОЛА",
    "hero_title_suffix": "ЗОЗУЛЬ",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 роки. Екс-керівник операційної діяльності (Ex-COO) з 2-річним досвідом масштабування міжнародних партнерств і гуманітарних місій, а також продуктовий дизайнер. Зараз в активному пошуку роботи та амбітних викликів (Operations Lead / COO / Founding Designer / Chief of Staff). Поєдную системний операційний менеджмент, продуктове мислення та естетику високого рівня. Працюю дистанційно • Готовий до релокації при потребі.",
    "hero_cta_tg": "Написати в Telegram →",
    "hero_cta_work": "Дивитись кейси ↓",
    "hero_cta_links": "Особисті лінки ↗",
    "hero_badge_loc": "SWISS ALPS // МАСШТАБ ВІЗІЇ",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "МИКОЛА ЗОЗУЛЬ",
    "hud_mode": "OPERATIONS PROFILE // OPEN TO WORK",
    "hud_comm_exp": "REMOTE WORLDWIDE • РЕЛОКАЦІЯ",
    "hud_kicker": "KYIV — WARSAW — GLOBAL REMOTE",
    "hud_intel_desc": "Ex-COO: 2 роки операційного керівництва завершено. Шукаю нову роль — повністю дистанційно або з релокацією. Партнерства зі 100+ організаціями, продуктовий UI/UX, SaaS. Онбординг 24–48 год.",
    "hud_status_badge": "АКТИВНИЙ ПОШУК",
    "hud_remote_badge": "REMOTE • РЕЛОКАЦІЯ",
    "hud_map_loc": "KYIV / WARSAW / GLOBAL",
    "hud_map_sla": "SLA: 24–48H ОНБОРДИНГ",
    "hud_map_tz": "EU CET + US EST OVERLAP (4–6H)",
    "hud_advice_title": "OPERATIONS BRIEF",
    "hud_advice_text": "Потрібна швидкість без агентської бюрократії — прямий контракт: досвід Ex-COO + продуктовий дизайн. Full-time або retainer. Remote / релокація. Онбординг 24–48 год.",
    "stat_exp_val": "2 РОКИ",
    "stat_exp_lbl": "Ex-COO досвід (завершено)",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Міст та компаній-партнерів",
    "stat_age_val": "OPEN",
    "stat_age_lbl": "Remote Worldwide • Ready to Relocate",
    "slits_tag": "МУЛЬТИВІЗУАЛЬНИЙ ПРОСТІР",
    "slits_title": "ГРАНІ ВІЗІЇ ТА ДИСЦИПЛІНИ",
    "slits_sub": "Кожна грань мого шляху формує характер: від операційного масштабу та витривалості до естетики кожної лінії інтерфейсу.",
    "slit1_title": "ВАРШАВА / СТІЙКІСТЬ",
    "slit1_desc": "2.5 роки життя в Польщі, розуміння європейської культури та ритму міжнародних процесів.",
    "slit2_title": "АЛЬПИ / МАСШТАБ ВІЗІЇ",
    "slit2_desc": "Чистота мислення, висота стратегічних цілей та внутрішній спокій у кризових ситуаціях.",
    "slit3_title": "VERTEX / ПРОДУКТ",
    "slit3_desc": "Цифрове ремесло, дизайн-системи нового покоління та втілення складних рішень.",
    "slit4_title": "ФОКУС / ДИСЦИПЛІНА",
    "slit4_desc": "Щоденна концентрація, відповідальність за команду та доведення ідей до бездоганного фіналу.",
    "exp_tag": "КАР'ЄРНИЙ ШЛЯХ",
    "exp_title": "СИСТЕМНИЙ ДОСВІД ТА УПРАВЛІННЯ",
    "exp_sub": "Акцент на операційному керівництві (COO), розбудові партнерських екосистем та авторських цифрових онлайн-продуктах.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Міжнародна Благодійна Організація «Небайдужі» (Not Indifferent Squad)",
    "coo_period": "2 роки досвіду • Завершено",
    "coo_desc": "Повне керівництво операційними процесами благодійної організації міжнародного масштабу. Стратегічне планування, логістика допомоги та координація масштабної допомоги дитячим центрам і Збройним Силам України.",
    "coo_bullet_1": "Координація рекрутингу та довгострокової співпраці з сотнями міст, муніципалітетами та десятками великих компаній-донорів.",
    "coo_bullet_2": "Розробка стратегічних планів розвитку та пряме керування міждисциплінарними командами.",
    "coo_bullet_3": "Ведення системного обліку, фінансової прозорості та підготовка звітів для партнерів.",
    "vertex_role": "Founder & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digital Agency)",
    "vertex_period": "2024 — Зараз",
    "vertex_desc": "Заснування та розвиток цифрової студії: дизайн високого класу, веброзробка на Next.js, WebGL та автоматизація бізнес-процесів за допомогою ШІ для клієнтів по всьому світу.",
    "englishflow_role": "Product Creator & Developer",
    "englishflow_org": "English Flow (Notion-Integrated SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Створення вебдодатку для вивчення слів за методом інтервальних повторень із прямою синхронізацією з персональною таблицею Notion користувача.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Розробка призначених для користувача інтерфейсів вебсайтів і мобільних застосунків, створення комплексних дизайн-систем, прототипування, презентацій та айдентики брендів.",
    "volunteer_role": "Graphic Designer (Volunteer)",
    "volunteer_org": "Шлях Волонтера UA (Дистанційно)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Створення графічних та інформаційних матеріалів для українських волонтерських ініціатив на безоплатній основі.",
    "motion_role": "Video Editing & Motion Design",
    "motion_org": "Social Media Channels & Agencies",
    "motion_period": "2020 — 2021",
    "motion_desc": "Монтаж відео, моушн-дизайн та виробництво динамічного медіаконтенту (Premiere Pro, After Effects, KinoMaster).",
    "warehouse_note": "<strong>Досвід роботи в Польщі (Warehouse work, 2024):</strong> Пройшов через складські процеси у Польщі (комплектація, розміщення, навчання нового персоналу). Це сформувало залізну фізичну витривалість, розуміння базової складської логістики та дисципліну праці.",
    "exp_tag_coo_lead": "COO лідерство",
    "exp_tag_crisis_log": "Кризова логістика",
    "exp_tag_strat_alliances": "Стратегічні партнерства",
    "exp_tag_cross_scale": "Крос-функціональне масштабування",
    "exp_tag_fin_rep": "Фінансова звітність",
    "exp_tag_agency_founder": "Засновник агенції",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "UI/UX системи",
    "exp_tag_ai_auto": "ШІ-автоматизація",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Продуктова архітектура",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Інтервальні повторення",
    "exp_tag_fullstack_proto": "Full-Stack прототип",
    "exp_tag_figma_tok": "Figma токени",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Мобільні додатки",
    "exp_tag_wireframing": "Вайрфрейми",
    "proj_tag": "ВИБРАНІ ПРОЄКТИ",
    "proj_title": "ЦИФРОВІ АКТИВИ ТА ПРОДУКТИ",
    "proj_sub": "Практичне втілення системної роботи: власна digital-агенція та персональний інноваційний SaaS-продукт.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITAL AGENCY // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Елітна цифрова студія. Створюємо сучасні сайти, дизайн-системи та вебплатформи з використанням ШІ. Повна клієнтська лінія від концепту до публікації.",
    "proj1_btn": "Відвідати сайт ↗",
    "proj2_title": "English Flow — Notion-Integrated Learning",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Вебсервіс для вивчення іноземних слів з інтеграцією Notion. Кожен користувач може підключити власну Notion-таблицю зі словами та тренувати пам'ять за алгоритмом інтервальних повторень (Spaced Repetition).",
    "proj2_btn": "Відкрити бета-версію ↗",
    "proj2_beta_badge": "Рання бета",
    "dream_tag": "ОПЕРАЦІЙНА ФІЛОСОФІЯ",
    "dream_title": "МАТРИЦЯ ПРИНЦИПІВ: D.R.E.A.M.",
    "dream_sub": "Фундамент, на якому будується кожен проєкт і будь-яка системна команда:",
    "dream_d_title": "Discipline (Дисципліна)",
    "dream_d_desc": "Система завжди перемагає хаос. Стабільність щоденних процесів гарантує передбачуваний результат.",
    "dream_r_title": "Routine & Resilience (Стійкість)",
    "dream_r_desc": "Здатність адаптуватися до кризових умов, вирішувати нестандартні логістичні завдання без паніки.",
    "dream_e_title": "Execution & Empathy (Виконання)",
    "dream_e_desc": "Командне лідерство через підтримку людей та чіткий контроль якості кожного етапу.",
    "dream_a_title": "Adaptability (Гнучкість)",
    "dream_a_desc": "Швидке освоєння нових інструментів (ШІ, сучасні фреймворки, міжнародні стандарти комунікації).",
    "dream_m_title": "Mentality (Менталітет переможця)",
    "dream_m_desc": "Stay Hungry. Постійний рух уперед, амбітність та прагнення до досконалості.",
    "slit1_num": "// 01 СТІЙКІСТЬ",
    "slit2_num": "// 02 МАСШТАБ",
    "slit3_num": "// 03 РЕМЕСЛО",
    "slit4_num": "// 04 ДИСЦИПЛІНА",
    "proj1_status_tag": "● НАЖИВО В МЕРЕЖІ",
    "dream_hungry_tag": "// ВІЗІЯ ТА РУХ",
    "dream_hungry_title": "ЗАВЖДИ ГОЛОДНИЙ.",
    "dream_hungry_desc": "Ніколи не зупинятися на досягнутому. Кожен виклик — це можливість побудувати масштабнішу систему.",
    "skills_tag": "НАВИЧКИ ТА СТЕК",
    "skills_title": "ПРОФЕСІЙНИЙ АРСЕНАЛ",
    "skills_sub": "Синтез операційного управління, продуктового дизайну та сучасних веб-технологій.",
    "skill_c1_badge": "01 // ОПЕРАЦІЇ",
    "skill_c1_title": "Операційне лідерство (COO)",
    "skill_c1_s1": "Стратегічне планування",
    "skill_c1_b1": "Експерт",
    "skill_c1_s2": "Масштабування & Партнерства",
    "skill_c1_b2": "100+ установ",
    "skill_c1_s3": "Кризова логістика & Аудит",
    "skill_c1_b3": "2 роки COO",
    "skill_c2_badge": "02 // ДИЗАЙН",
    "skill_c2_title": "Продуктовий UI/UX дизайн",
    "skill_c2_s1": "Figma (Дизайн-системи)",
    "skill_c2_b1": "Майстер",
    "skill_c2_s2": "Веб & мобільні продукти",
    "skill_c2_b2": "Повний цикл",
    "skill_c2_s3": "Прототипування & Motion",
    "skill_c2_b3": "Просунутий",
    "skill_c3_badge": "03 // ТЕХНОЛОГІЇ",
    "skill_c3_title": "Технології & ШІ",
    "skill_c3_s1": "Екосистема Notion та API",
    "skill_c3_b1": "Творець SaaS",
    "skill_c3_s2": "Next.js & Веб-стек",
    "skill_c3_b2": "Практик",
    "skill_c3_s3": "ШІ-процеси & Автоматизація",
    "skill_c3_b3": "Щодня",
    "skill_c4_badge": "04 // КОМУНІКАЦІЯ",
    "skill_c4_title": "Мови & Комунікація",
    "skill_c4_s1": "Українська",
    "skill_c4_b1": "Рідна",
    "skill_c4_s2": "Polish (Польська, 2.5 р. в ЄС)",
    "skill_c4_b2": "B2",
    "skill_c4_s3": "English (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "ПРЯМИЙ ЗВ'ЯЗОК",
    "contact_status_pill": "В АКТИВНОМУ ПОШУКУ РОБОТИ // 100% REMOTE",
    "contact_title": "ГОТОВІ ДО СПІВПРАЦІ?",
    "contact_sub": "No drama. Just results",
    "contact_matrix_rights": "All rights reserved",
    "contact_matrix_status": "OPEN TO WORK // READY TO ONBOARD",
    "contact_matrix_loc": "100% REMOTE // WORLDWIDE",
    "contact_matrix_direct_lbl": "DIRECT DISPATCH",
    "contact_matrix_direct_desc": "Швидкий прямий вихід без зайвих кроків:",
    "tg_title": "Написати в Telegram",
    "tg_sub": "Швидкий прямий зв'язок: @mikolazozul",
    "mail_title": "Написати на Email",
    "mail_sub": "Детальні пропозиції: mikolazozul@gmail.com",
    "links_title": "Особисті лінки та QR",
    "links_sub": "Швидкий хаб контактів і соціальних мереж",
    "copy_btn": "Копіювати ⧉",
    "copied_tg": "Telegram @mikolazozul скопійовано!",
    "copied_mail": "Email mikolazozul@gmail.com скопійовано!",
    "qr_btn_text": "Показати QR-код сторінки",
    "footer_links": "Особисті лінки",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Відскануйте смартфоном для миттєвого збереження контактів",
    "qr_modal_close": "Закрити вікно",
    "form_name_lbl": "Name",
    "form_name_ph": "Олександр / Tech Agency",
    "form_name_hint": "Ім'я або назва компанії чи стартапу",
    "form_phone_lbl": "Phone",
    "form_opt_tag": "OPTIONAL",
    "form_phone_ph": "+380... або @username",
    "form_phone_hint": "Для швидкого прямого контакту в месенджері",
    "form_email_lbl": "Email",
    "form_email_ph": "alex@company.com",
    "form_email_hint": "Пряма доставка особисто Миколі",
    "form_msg_lbl": "What I can help you?",
    "form_msg_ph": "Розкажіть про ваш проєкт чи пропозицію...",
    "form_msg_hint": "Опишіть завдання або проєкт",
    "form_submit_btn": "Let’s ride",
    "form_submit_meta": "NO DRAMA. JUST RESULTS.",
    "matrix_tag_col1": "// 01 AVAILABILITY",
    "matrix_status_title": "OPEN TO ROLES",
    "matrix_role_title": "Operations Lead & Lead Designer",
    "matrix_status_desc": "Онбординг за 24–48 год • 100% Remote • Готовий до релокації. Швидкий старт без бюрократії.",
    "matrix_avail_meta": "● FULL-TIME & B2B RETAINER",
    "matrix_tag_name": "02 // YOUR NAME",
    "matrix_tag_phone": "03 // PHONE / TELEGRAM",
    "matrix_tag_email": "04 // WORK EMAIL",
    "matrix_tag_direct": "// DIRECT DISPATCH",
    "matrix_sla_tag": "SLA 2-4H",
    "matrix_direct_tg": "Telegram: @mikolazozul ↗",
    "matrix_direct_mail": "Email: mikolazozul@gmail.com ↗",
    "matrix_direct_note": "Прямий зв'язок без посередників і HR-фільтрів",
    "matrix_tag_msg": "// 05 SCOPE & MESSAGE",
    "matrix_tag_formats": "// ENGAGEMENT MODELS",
    "matrix_format_1_title": "Operations Lead / COO",
    "matrix_format_1_sub": "Повна зайнятість • Кризове масштабування",
    "matrix_format_2_title": "Lead Product & UI/UX Designer",
    "matrix_format_2_sub": "Дизайн-системи, SaaS та веб-додатки",
    "matrix_format_3_title": "B2B Retainer & Спринти",
    "matrix_format_3_sub": "Фракційне лідерство • Швидкий результат",
    "matrix_format_hint": "Асинхронний режим + live sync",
    "matrix_tag_submit": "// DISPATCH TRIGGER",
    "matrix_motto": "NO DRAMA. JUST RESULTS.",
    "matrix_submit_note": "Миттєвий запит без реєстрації • 1 клік",
    "copied_toast": "Скопійовано в буфер обміну!",
    "footer_copy": "© 2026 Микола Зозуль. Всі права захищено. Дистанційно • Готовий до релокації."
  },
  "en": {
    "nav_about": "About",
    "nav_exp": "Experience & COO",
    "nav_projects": "Projects",
    "nav_dream": "Principles",
    "nav_skills": "Skills",
    "nav_contact": "Contact",
    "nav_links_btn": "Personal Links ↗",
    "hero_status": "OPEN TO WORK // ACTIVELY SEEKING NEW ROLES • REMOTE WORLDWIDE",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 years old. Former Chief Operating Officer (Ex-COO) with 2 years of executive leadership scaling international humanitarian partnerships and cross-border operations, as well as a Lead Product Designer. Currently actively seeking full-time roles & high-impact opportunities (Operations Lead / COO / Founding Designer / Chief of Staff). 100% Remote • Open to Relocation.",
    "hero_cta_tg": "Message on Telegram →",
    "hero_cta_work": "Explore Projects ↓",
    "hero_cta_links": "Personal Links ↗",
    "hero_badge_loc": "SWISS ALPS // VISION & SCALE",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "MYKOLA ZOZUL",
    "hud_mode": "OPERATIONS PROFILE // OPEN TO WORK",
    "hud_comm_exp": "REMOTE WORLDWIDE • RELOCATION READY",
    "hud_kicker": "KYIV — WARSAW — GLOBAL REMOTE",
    "hud_intel_desc": "Ex-COO: 2 years of executive operations completed. Actively seeking a new role — fully remote or open to relocation. Partnerships across 100+ orgs, product UI/UX, SaaS. Onboarding within 24–48h.",
    "hud_status_badge": "ACTIVE SEARCH",
    "hud_remote_badge": "REMOTE • RELOCATION",
    "hud_map_loc": "KYIV / WARSAW / GLOBAL",
    "hud_map_sla": "SLA: 24–48H ONBOARDING",
    "hud_map_tz": "EU CET + US EST OVERLAP (4–6H)",
    "hud_advice_title": "OPERATIONS BRIEF",
    "hud_advice_text": "Need speed without agency overhead — direct engagement: Ex-COO leadership + product design. Full-time or retainer. Remote / relocation. Onboarding in 24–48 hours.",
    "stat_exp_val": "2 YEARS",
    "stat_exp_lbl": "Ex-COO Tenure (Completed)",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Partner Municipalities & Orgs",
    "stat_age_val": "OPEN",
    "stat_age_lbl": "Remote Worldwide • Ready to Relocate",
    "slits_tag": "PERSPECTIVES // MULTI-VISUAL",
    "slits_title": "FACETS OF VISION & DISCIPLINE",
    "slits_sub": "Every facet of my path shapes character: from operational scale and physical grit to the refined precision of interface craftsmanship.",
    "slit1_title": "WARSAW / RESILIENCE",
    "slit1_desc": "2.5 years living in Poland, embracing European work culture and fast-paced international coordination.",
    "slit2_title": "ALPS / ELEVATION",
    "slit2_desc": "Mental clarity, strategic altitude, and calm execution during high-stakes situations.",
    "slit3_title": "VERTEX / CRAFT",
    "slit3_desc": "Digital craftsmanship, next-gen design systems, and deploying mission-critical web experiences.",
    "slit4_title": "FOCUS / DISCIPLINE",
    "slit4_desc": "Daily rigor, team accountability, and carrying bold visions through to flawless execution.",
    "exp_tag": "CAREER TRAJECTORY",
    "exp_title": "SYSTEMIC LEADERSHIP & EXPERTISE",
    "exp_sub": "Focus on Chief Operating Officer (COO) responsibilities, partnership ecosystems, and digital online products.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "International Charitable Organization “Not Indifferent Squad”",
    "coo_period": "2 Years of Leadership • Completed",
    "coo_desc": "Comprehensive operational leadership of a large-scale international charitable foundation. Strategic roadmap design, crisis response logistics, and delivering aid to children's centers and the Armed Forces of Ukraine.",
    "coo_bullet_1": "Coordinating recruitment and strategic alliances with hundreds of municipal authorities and dozens of corporate donors.",
    "coo_bullet_2": "Developing operational scaling roadmaps and leading cross-functional teams.",
    "coo_bullet_3": "Maintaining rigorous financial accounting, transparent oversight, and executive reporting for partners.",
    "vertex_role": "Founder & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digital Agency)",
    "vertex_period": "2024 — Present",
    "vertex_desc": "Founding and directing a modern digital studio: high-performance websites on Next.js, design systems, and AI-powered business workflow automation.",
    "englishflow_role": "Product Creator & Developer",
    "englishflow_org": "English Flow (Notion-Integrated SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Building a vocabulary learning web application utilizing spaced repetition with custom user Notion database sync.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Crafting bespoke web & mobile UI/UX designs, component design systems, prototypes, and brand identities for international clients.",
    "volunteer_role": "Graphic Designer (Volunteer)",
    "volunteer_org": "Shliakh Volontera UA (Remote)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Designing visual campaigns and public digital materials for Ukrainian volunteer initiatives pro bono.",
    "motion_role": "Video Editing & Motion Design",
    "motion_org": "Social Media Channels & Agencies",
    "motion_period": "2020 — 2021",
    "motion_desc": "Video editing, motion graphics, and content production using Premiere Pro, After Effects, and KinoMaster.",
    "warehouse_note": "<strong>Experience in Poland (Warehouse work, 2024):</strong> Hands-on warehouse logistics in Poland (picking, packing, inventory placement, and training new staff). This instilled enduring physical resilience, operational ground-truth, and disciplined work ethic.",
    "exp_tag_coo_lead": "COO Leadership",
    "exp_tag_crisis_log": "Crisis Logistics",
    "exp_tag_strat_alliances": "Strategic Alliances",
    "exp_tag_cross_scale": "Cross-Functional Scaling",
    "exp_tag_fin_rep": "Financial Reporting",
    "exp_tag_agency_founder": "Agency Founder",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "UI/UX Systems",
    "exp_tag_ai_auto": "AI Automation",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Product Architecture",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Spaced Repetition",
    "exp_tag_fullstack_proto": "Full-Stack Prototype",
    "exp_tag_figma_tok": "Figma Tokens",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Mobile Apps",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "FEATURED WORK",
    "proj_title": "DIGITAL ASSETS & PRODUCTS",
    "proj_sub": "Tangible execution: proprietary digital agency and an innovative educational SaaS platform.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITAL AGENCY // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Premium digital agency. Building high-speed websites, design systems, and AI-enabled platforms from strategic roadmap to live deployment.",
    "proj1_btn": "Visit Website ↗",
    "proj2_title": "English Flow — Notion-Integrated Learning",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Vocabulary learning tool with seamless Notion integration. Every user connects their own custom Notion vocabulary table to study with smart Spaced Repetition algorithms.",
    "proj2_btn": "Open Early Beta ↗",
    "proj2_beta_badge": "Early Beta",
    "dream_tag": "OPERATIONAL PHILOSOPHY",
    "dream_title": "THE D.R.E.A.M. FRAMEWORK",
    "dream_sub": "The foundational principles governing my workflow and team leadership:",
    "dream_d_title": "Discipline",
    "dream_d_desc": "Systems consistently outperform motivation. Predictable routines produce exceptional outputs.",
    "dream_r_title": "Routine & Resilience",
    "dream_r_desc": "Navigating chaos, solving crisis logistics calmly, and thriving under complex pressure.",
    "dream_e_title": "Execution & Empathy",
    "dream_e_desc": "Leading teams through empowerment and unwavering standards for craftsmanship.",
    "dream_a_title": "Adaptability",
    "dream_a_desc": "Instant mastery of emerging tech (AI models, modern frontend, cross-border business workflows).",
    "dream_m_title": "Mentality",
    "dream_m_desc": "Stay Hungry. Relentless growth, ambitious vision, and commitment to master-level results.",
    "slit1_num": "// 01 RESILIENCE",
    "slit2_num": "// 02 ELEVATION",
    "slit3_num": "// 03 CRAFTSMANSHIP",
    "slit4_num": "// 04 DISCIPLINE",
    "proj1_status_tag": "● LIVE PRODUCTION",
    "dream_hungry_tag": "// VISION & DRIVE",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Never settle. Every operational challenge is an opportunity to build a more resilient and scalable system.",
    "skills_tag": "CAPABILITIES",
    "skills_title": "PROFESSIONAL MATRIX",
    "skills_sub": "The intersection of executive operations, product design, and modern technology.",
    "skill_c1_badge": "01 // OPERATIONS",
    "skill_c1_title": "Operations Leadership (COO)",
    "skill_c1_s1": "Strategic Planning",
    "skill_c1_b1": "Expert",
    "skill_c1_s2": "Scaling & Partnerships",
    "skill_c1_b2": "100+ Orgs",
    "skill_c1_s3": "Crisis Logistics & Audits",
    "skill_c1_b3": "2 Years COO",
    "skill_c2_badge": "02 // PRODUCT CRAFT",
    "skill_c2_title": "Product & UI/UX Design",
    "skill_c2_s1": "Figma (Design Systems)",
    "skill_c2_b1": "Master",
    "skill_c2_s2": "Web & Mobile Products",
    "skill_c2_b2": "Full Cycle",
    "skill_c2_s3": "Prototyping & Motion",
    "skill_c2_b3": "Advanced",
    "skill_c3_badge": "03 // TECH & AI",
    "skill_c3_title": "Tech & AI Integration",
    "skill_c3_s1": "Notion Ecosystem & APIs",
    "skill_c3_b1": "SaaS Creator",
    "skill_c3_s2": "Next.js & Modern Web Stack",
    "skill_c3_b2": "Practitioner",
    "skill_c3_s3": "AI Workflows & Automation",
    "skill_c3_b3": "Daily",
    "skill_c4_badge": "04 // GLOBAL COMMS",
    "skill_c4_title": "Languages & Comms",
    "skill_c4_s1": "Ukrainian",
    "skill_c4_b1": "Native",
    "skill_c4_s2": "Polish (2.5 yrs in EU)",
    "skill_c4_b2": "B2 Working",
    "skill_c4_s3": "English (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "DIRECT DISPATCH",
    "contact_status_pill": "OPEN TO WORK // 100% REMOTE • RELOCATION READY",
    "contact_title": "READY TO COLLABORATE?",
    "contact_sub": "No drama. Just results",
    "contact_matrix_rights": "All rights reserved",
    "contact_matrix_status": "OPEN TO WORK // READY TO ONBOARD",
    "contact_matrix_loc": "100% REMOTE // WORLDWIDE",
    "contact_matrix_direct_lbl": "DIRECT DISPATCH",
    "contact_matrix_direct_desc": "Fast-track communication channels:",
    "tg_title": "Message on Telegram",
    "tg_sub": "Instant direct line: @mikolazozul",
    "mail_title": "Send an Email",
    "mail_sub": "Detailed inquiries: mikolazozul@gmail.com",
    "links_title": "Personal Links & QR",
    "links_sub": "Quick mobile contact hub & social profiles",
    "copy_btn": "Copy ⧉",
    "copied_tg": "Telegram @mikolazozul copied!",
    "copied_mail": "Email mikolazozul@gmail.com copied!",
    "qr_btn_text": "Show Page QR Code",
    "footer_links": "Personal Links",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Scan with your phone to instantly save verified contact details",
    "qr_modal_close": "Close Window",
    "form_name_lbl": "Name",
    "form_name_ph": "Alex / Tech Venture",
    "form_name_hint": "Your name or company / startup",
    "form_phone_lbl": "Phone",
    "form_opt_tag": "OPTIONAL",
    "form_phone_ph": "+1... or @username",
    "form_phone_hint": "For direct rapid contact via messenger",
    "form_email_lbl": "Email",
    "form_email_ph": "alex@company.com",
    "form_email_hint": "Direct dispatch straight to Mykola",
    "form_msg_lbl": "What I can help you?",
    "form_msg_ph": "Describe your project or operational scope...",
    "form_msg_hint": "Describe your challenge or project scope",
    "form_submit_btn": "Let’s ride",
    "form_submit_meta": "NO DRAMA. JUST RESULTS.",
    "matrix_tag_col1": "// 01 AVAILABILITY",
    "matrix_status_title": "OPEN TO ROLES",
    "matrix_role_title": "Operations Lead & Lead Designer",
    "matrix_status_desc": "24–48h Onboarding • 100% Remote • Open to Relocation. Rapid execution without bureaucracy.",
    "matrix_avail_meta": "● FULL-TIME & B2B RETAINER",
    "matrix_tag_name": "02 // YOUR NAME",
    "matrix_tag_phone": "03 // PHONE / TELEGRAM",
    "matrix_tag_email": "04 // WORK EMAIL",
    "matrix_tag_direct": "// DIRECT DISPATCH",
    "matrix_sla_tag": "SLA 2-4H",
    "matrix_direct_tg": "Telegram: @mikolazozul ↗",
    "matrix_direct_mail": "Email: mikolazozul@gmail.com ↗",
    "matrix_direct_note": "Direct line without intermediaries or HR filters",
    "matrix_tag_msg": "// 05 SCOPE & MESSAGE",
    "matrix_tag_formats": "// ENGAGEMENT MODELS",
    "matrix_format_1_title": "Operations Lead / COO",
    "matrix_format_1_sub": "Full-time • Crisis scaling & logistics",
    "matrix_format_2_title": "Lead Product & UI/UX Designer",
    "matrix_format_2_sub": "Design systems, SaaS & web apps",
    "matrix_format_3_title": "B2B Retainer & Sprints",
    "matrix_format_3_sub": "Fractional leadership • Rapid velocity",
    "matrix_format_hint": "Async-first execution + live sync",
    "matrix_tag_submit": "// DISPATCH TRIGGER",
    "matrix_motto": "NO DRAMA. JUST RESULTS.",
    "matrix_submit_note": "Instant outreach without sign-up • 1 click",
    "copied_toast": "Copied to clipboard!",
    "footer_copy": "© 2026 Mykola Zozul. All rights reserved. 100% Remote • Open to Relocation."
  },
  "de": {
    "nav_about": "Über mich",
    "nav_exp": "Erfahrung & COO",
    "nav_projects": "Projekte",
    "nav_dream": "Prinzipien",
    "nav_skills": "Skills",
    "nav_contact": "Kontakt",
    "nav_links_btn": "Persönliche Links ↗",
    "hero_status": "AUF JOBSUCHE // OFFEN FÜR NEUE POSITIONEN • REMOTE WELTWEIT",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 Jahre alt. Ehemaliger Chief Operating Officer (Ex-COO) mit 2 Jahren Führungserfahrung in Krisenlogistik und internationalem Partnerschaftsaufbau, sowie Senior Product Designer. Derzeit aktiv auf der Suche nach neuen Führungs- und Produktrollen (Operations Lead / COO / Founding Designer). 100% Remote • Bei Bedarf umzugsbereit.",
    "hero_cta_tg": "Auf Telegram schreiben →",
    "hero_cta_work": "Cases ansehen ↓",
    "hero_cta_links": "Persönliche Links ↗",
    "hero_badge_loc": "SCHWEIZER ALPEN // STRATEGISCHE WEITSICHT",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "MYKOLA ZOZUL",
    "stat_exp_val": "2 JAHRE",
    "stat_exp_lbl": "Ex-COO Führungserfahrung",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Städte & Partnerorganisationen",
    "stat_age_val": "23 JAHRE",
    "stat_age_lbl": "GEB. 2003 / Remote • Umzugsbereit",
    "slits_tag": "MULTIVISUELLER RAUM",
    "slits_title": "FACETTEN VON VISION & DISZIPLIN",
    "slits_sub": "Jede Station meines Weges prägt meinen Charakter: von operativer Krisenfestigkeit bis zur pixelgenauen Ästhetik moderner digitaler Schnittstellen.",
    "slit1_title": "WARSCHAU / WIDERSTANDSKRAFT",
    "slit1_desc": "2,5 Jahre Leben in Polen, tiefes Verständnis europäischer Geschäftskultur und internationaler Arbeitsabläufe.",
    "slit2_title": "ALPEN / STRATEGISCHE WEITSICHT",
    "slit2_desc": "Klarheit im Denken, Weite des Horizonts und unerschütterliche Ruhe in komplexen Krisensituationen.",
    "slit3_title": "VERTEX / PRODUKTHANDWERK",
    "slit3_desc": "Digitale Exzellenz, Design-Systeme der nächsten Generation und schlüsselfertige Software-Lieferung.",
    "slit4_title": "FOKUS / DISZIPLIN",
    "slit4_desc": "Tägliche Konzentration, Verantwortung für das Team und das Führen von Ideen bis zur kompromisslosen Reife.",
    "exp_tag": "BERUFLICHER WEG",
    "exp_title": "SYSTEMATISCHE ERFAHRUNG & FÜHRUNG",
    "exp_sub": "Fokus auf operative Leitung (COO), strategische Partnerschaften und digitale Eigenprodukte.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Internationale Hilfsorganisation «Not Indifferent Squad»",
    "coo_period": "2 Jahre Führung • Abgeschlossen",
    "coo_desc": "Gesamtleitung der operativen Prozesse einer internationalen humanitären Organisation. Strategische Planung, Notfall-Logistik und Steuerung großangelegter Hilfsmissionen für Kinderzentren und die ukrainischen Streitkräfte.",
    "coo_bullet_1": "Koordination von Allianzen mit über 100 Kommunen, Institutionen und führenden Unternehmensspendern.",
    "coo_bullet_2": "Entwicklung strategischer Skalierungspläne und direkte Führung interdisziplinärer Teams.",
    "coo_bullet_3": "Systematische Rechenschaftslegung, Finanztransparenz und Berichterstattung für institutionelle Partner.",
    "vertex_role": "Gründer & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digitalagentur)",
    "vertex_period": "2024 — Heute",
    "vertex_desc": "Gründung und Leitung einer Digitalagentur: High-End-Webdesign, Entwicklung mit Next.js & WebGL sowie KI-gestützte Prozessautomatisierung für globale Kunden.",
    "englishflow_role": "Product Creator & Developer",
    "englishflow_org": "English Flow (Notion-integriertes SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Vokabeltrainer mit nativer Notion-Integration und Spaced-Repetition-Algorithmen. Nutzer synchronisieren ihre eigenen Notion-Datenbanken.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Gestaltung von Web- und Mobile-Oberflächen, Design-Systemen, interaktiven Prototypen und Markenidentitäten für Tech-Startups.",
    "volunteer_role": "Graphic Designer (Ehrenamtlich)",
    "volunteer_org": "Shliakh Volontera UA (Remote)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Gestaltung visueller Kampagnen und digitaler Medien für ukrainische Freiwilligeninitiativen auf ehrenamtlicher Basis.",
    "motion_role": "Video Editing & Motion Design",
    "motion_org": "Social Media Kanäle & Agenturen",
    "motion_period": "2020 — 2021",
    "motion_desc": "Videoschnitt, Motion Graphics und dynamische Medienproduktion mit Premiere Pro, After Effects und modernen Schnittwerkzeugen.",
    "warehouse_note": "<strong>Erfahrung in Polen (Logistikzentrum, 2024):</strong> Praktische Arbeit in der physischen Warenlogistik in Polen (Kommissionierung, Lagerung, Einarbeitung neuer Mitarbeiter). Dies schuf eiserne physische Ausdauer, Demut und fundamentale Arbeitsdisziplin.",
    "exp_tag_coo_lead": "COO Führung",
    "exp_tag_crisis_log": "Krisenlogistik",
    "exp_tag_strat_alliances": "Strategische Allianzen",
    "exp_tag_cross_scale": "Bereichsübergreifende Skalierung",
    "exp_tag_fin_rep": "Finanzberichterstattung",
    "exp_tag_agency_founder": "Agenturgründer",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "UI/UX Systeme",
    "exp_tag_ai_auto": "KI-Automatisierung",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Produktarchitektur",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Spaced Repetition",
    "exp_tag_fullstack_proto": "Full-Stack Prototyp",
    "exp_tag_figma_tok": "Figma Tokens",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Mobile Apps",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "AUSGEWÄHLTE PROJEKTE",
    "proj_title": "DIGITALE ASSETS & PRODUKTE",
    "proj_sub": "Konkrete Resultate: eine eigenständige Digitalagentur und eine innovative EdTech-SaaS-Plattform.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITALAGENTUR // NEXT.JS // KI // BRANDING",
    "proj1_desc": "Premium-Digitalagentur. Schnelle Webseiten, ganzheitliche Design-Systeme und KI-gestützte Plattformen von der Strategie bis zum Go-Live.",
    "proj1_btn": "Website besuchen ↗",
    "proj2_title": "English Flow — Notion-Integriertes Lernen",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "SaaS für intelligentes Vokabellernen via Notion. Jeder Nutzer verknüpft seine eigene Notion-Tabelle und lernt nach optimierten Intervall-Wiederholungen.",
    "proj2_btn": "Beta öffnen ↗",
    "proj2_beta_badge": "Early Beta",
    "dream_tag": "OPERATIVE PHILOSOPHIE",
    "dream_title": "DAS D.R.E.A.M. FRAMEWORK",
    "dream_sub": "Die Leitprinzipien meiner Arbeitsweise und Teamführung:",
    "dream_d_title": "Discipline (Disziplin)",
    "dream_d_desc": "Systeme schlagen Motivation dauerhaft. Vorhersehbare Routinen führen zu verlässlichen Spitzenleistungen.",
    "dream_r_title": "Routine & Resilience (Widerstandskraft)",
    "dream_r_desc": "Fähigkeit, im Chaos die Ruhe zu bewahren und Krisenlogistik strukturiert zu bewältigen.",
    "dream_e_title": "Execution & Empathy (Umsetzung & Empathie)",
    "dream_e_desc": "Teamführung durch Unterstützung und kompromisslose Qualitätsstandards in jeder Phase.",
    "dream_a_title": "Adaptability (Anpassungsfähigkeit)",
    "dream_a_desc": "Blitzschnelles Meistern neuer Tools (KI-Modelle, moderne Frontend-Stacks, globale Geschäftsprozesse).",
    "dream_m_title": "Mentality (Siegermentalität)",
    "dream_m_desc": "Stay Hungry. Unermüdlicher Vorwärtsdrang, Ambition und das Streben nach Meisterklasse.",
    "slit1_num": "// 01 WIDERSTANDSKRAFT",
    "slit2_num": "// 02 WEITSICHT",
    "slit3_num": "// 03 HANDWERK",
    "slit4_num": "// 04 DISZIPLIN",
    "proj1_status_tag": "● LIVE IN PRODUKTION",
    "dream_hungry_tag": "// VISION & ANTRIEB",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Niemals stehenbleiben. Jede operative Hürde ist das Fundament für ein noch skalierbareres System.",
    "skills_tag": "KOMPETENZEN & STACK",
    "skills_title": "PROFESSIONELLES ARSENAL",
    "skills_sub": "Die Schnittmenge aus operativer Führung (COO), Produktdesign und moderner Webtechnologie.",
    "skill_c1_badge": "01 // OPERATIONEN",
    "skill_c1_title": "Operative Führung (COO)",
    "skill_c1_s1": "Strategische Planung",
    "skill_c1_b1": "Experte",
    "skill_c1_s2": "Skalierung & Partnerschaften",
    "skill_c1_b2": "100+ Institutionen",
    "skill_c1_s3": "Krisenlogistik & Audits",
    "skill_c1_b3": "2 Jahre COO",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "Product & UI/UX Design",
    "skill_c2_s1": "Figma (Design-Systeme)",
    "skill_c2_b1": "Meister",
    "skill_c2_s2": "Web & Mobile Produkte",
    "skill_c2_b2": "Full Cycle",
    "skill_c2_s3": "Prototyping & Motion",
    "skill_c2_b3": "Fortgeschritten",
    "skill_c3_badge": "03 // TECHNOLOGIE",
    "skill_c3_title": "Technologie & KI",
    "skill_c3_s1": "Notion Ökosystem & APIs",
    "skill_c3_b1": "SaaS-Schöpfer",
    "skill_c3_s2": "Next.js & Web-Stack",
    "skill_c3_b2": "Praktiker",
    "skill_c3_s3": "KI-Workflows & Automatisierung",
    "skill_c3_b3": "Täglich",
    "skill_c4_badge": "04 // KOMMUNIKATION",
    "skill_c4_title": "Sprachen & Kommunikation",
    "skill_c4_s1": "Ukrainisch",
    "skill_c4_b1": "Muttersprache",
    "skill_c4_s2": "Polnisch (2,5 J. in EU)",
    "skill_c4_b2": "B2 Fließend",
    "skill_c4_s3": "Englisch (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "DIREKTER KONTAKT",
    "contact_title": "BEREIT FÜR DIE ZUSAMMENARBEIT?",
    "contact_sub": "Offen für operative Führungspositionen (COO), Product-Design-Lead und globale Remote-Projekte. Schreiben Sie mir direkt:",
    "tg_title": "Auf Telegram schreiben",
    "tg_sub": "Direkter Draht: @mikolazozul",
    "mail_title": "E-Mail senden",
    "mail_sub": "Detaillierte Anfragen: mikolazozul@gmail.com",
    "links_title": "Persönliche Links & QR",
    "links_sub": "Schneller Kontakt-Hub & Social-Profile",
    "copy_btn": "Kopieren ⧉",
    "copied_tg": "Telegram @mikolazozul kopiert!",
    "copied_mail": "E-Mail mikolazozul@gmail.com kopiert!",
    "qr_btn_text": "QR-Code der Seite anzeigen",
    "footer_links": "Persönliche Links",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Mit dem Smartphone scannen, um Kontaktdaten direkt zu speichern",
    "qr_modal_close": "Fenster schließen",
    "form_name_lbl": "Ihr Name / Unternehmen",
    "form_name_ph": "Alexander / Tech Venture",
    "form_email_lbl": "E-Mail oder Telegram-Handle",
    "form_email_ph": "alex@company.com oder @username",
    "form_msg_lbl": "Nachricht / Projektanfrage",
    "form_msg_ph": "Beschreiben Sie Ihr Projekt oder Ihr Vorhaben...",
    "form_submit_btn": "Anfrage senden →",
    "copied_toast": "In die Zwischenablage kopiert!",
    "footer_copy": "© 2026 Mykola Zozul. Alle Rechte vorbehalten. 100% Remote • Umzugsbereit."
  },
  "pl": {
    "nav_about": "O mnie",
    "nav_exp": "Doświadczenie & COO",
    "nav_projects": "Projekty",
    "nav_dream": "Zasady",
    "nav_skills": "Umiejętności",
    "nav_contact": "Kontakt",
    "nav_links_btn": "Osobiste linki ↗",
    "hero_status": "AKTYWNIE SZUKAM PRACY // OTWARTY NA NOWE WYZWANIA • REMOTE",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 lata. Były Chief Operating Officer (Ex-COO) z 2-letnim doświadczeniem w zarządzaniu operacjami kryzysowymi i skalowaniu partnerstw międzynarodowych, a także Senior Product Designer. Obecnie aktywnie poszukuję nowych wyzwań i ról (Operations Lead / COO / Founding Designer). Pracuję w 100% zdalnie • Gotowy do relokacji.",
    "hero_cta_tg": "Napisz na Telegramie →",
    "hero_cta_work": "Zobacz projekty ↓",
    "hero_cta_links": "Osobiste linki ↗",
    "hero_badge_loc": "SZWAJCARSKIE ALPY // SKALA WIZJI",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "MYKOLA ZOZUL",
    "stat_exp_val": "2 LATA",
    "stat_exp_lbl": "Doświadczenie Ex-COO / Operacje",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Miast i firm partnerskich",
    "stat_age_val": "23 LATA",
    "stat_age_lbl": "UR. 2003 / Zdalnie • Relokacja",
    "slits_tag": "PRZESTRZEŃ WIZUALNA",
    "slits_title": "OBLICZA WIZJI I DYSCYPLINY",
    "slits_sub": "Każdy etap mojej drogi kształtuje charakter: od operacyjnej odporności po perfekcję każdego piksela interfejsu.",
    "slit1_title": "WARSZAWA / ODPORNOŚĆ",
    "slit1_desc": "2.5 roku życia w Polsce, dogłębne zrozumienie europejskiej kultury pracy i rytmu międzynarodowych procesów.",
    "slit2_title": "ALPY / SKALA WIZJI",
    "slit2_desc": "Przejrzystość myślenia, strategiczny rozmach i niezłomny spokój w kryzysowych momentach.",
    "slit3_title": "VERTEX / RZEMIOSŁO",
    "slit3_desc": "Cyfrowe rzemiosło, systemy designu nowej generacji i wdrażanie zaawansowanych platform.",
    "slit4_title": "SKUPIENIE / DYSCYPLINA",
    "slit4_desc": "Codzienna koncentracja, odpowiedzialność za zespół i doprowadzanie idei do bezbłędnego finału.",
    "exp_tag": "ŚCIEŻKA KARIERY",
    "exp_title": "DOŚWIADCZENIE OPERACYJNE I ZARZĄDZANIE",
    "exp_sub": "Nacisk na przywództwo operacyjne (COO), budowanie ekosystemów partnerskich oraz autorskie produkty cyfrowe.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Międzynarodowa Organizacja Humanitarna «Not Indifferent Squad»",
    "coo_period": "2 lata przywództwa • Zakończono",
    "coo_desc": "Pełne zarządzanie procesami operacyjnymi międzynarodowej organizacji. Planowanie strategiczne, logistyka kryzysowa oraz koordynacja pomocy dla ośrodków dziecięcych i Sił Zbrojnych Ukrainy.",
    "coo_bullet_1": "Koordynacja współpracy z ponad 100 miastami, samorządami oraz kluczowymi darczyńcami korporacyjnymi.",
    "coo_bullet_2": "Tworzenie strategicznych planów rozwoju i bezpośrednie kierowanie zespołami interdyscyplinarnymi.",
    "coo_bullet_3": "Prowadzenie ewidencji systemowej, pełna transparentność finansowa i raportowanie dla partnerów.",
    "vertex_role": "Założyciel & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Agencja Cyfrowa)",
    "vertex_period": "2024 — Obecnie",
    "vertex_desc": "Założenie i rozwój agencji cyfrowej: projektowanie klasy premium, programowanie w Next.js i WebGL oraz automatyzacja AI dla klientów na całym świecie.",
    "englishflow_role": "Twórca Produktu & Programista",
    "englishflow_org": "English Flow (SaaS zintegrowany z Notion)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Aplikacja do nauki słownictwa metodą powtórek interwałowych z bezpośrednią synchronizacją z prywatną bazą Notion użytkownika.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Projektowanie interfejsów webowych i mobilnych, tworzenie kompleksowych systemów designu, prototypowanie i identyfikacja wizualna.",
    "volunteer_role": "Projektant Graficzny (Wolontariat)",
    "volunteer_org": "Shliakh Volontera UA (Zdalnie)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Tworzenie kampanii wizualnych i cyfrowych materiałów informacyjnych pro bono dla ukraińskich inicjatyw pomocowych.",
    "motion_role": "Montaż Wideo & Motion Design",
    "motion_org": "Kanały Społecznościowe & Agencje",
    "motion_period": "2020 — 2021",
    "motion_desc": "Montaż wideo, grafika animowana i produkcja dynamicznych treści z użyciem Premiere Pro, After Effects i narzędzi montażowych.",
    "warehouse_note": "<strong>Doświadczenie w Polsce (Praca magazynowa, 2024):</strong> Praktyczne doświadczenie w logistyce magazynowej w Polsce (kompletacja, składowanie, wdrażanie nowych pracowników). Ukształtowało to żelazną odporność fizyczną, pokorę i dyscyplinę pracy.",
    "exp_tag_coo_lead": "Przywództwo COO",
    "exp_tag_crisis_log": "Logistyka kryzysowa",
    "exp_tag_strat_alliances": "Sojusze strategiczne",
    "exp_tag_cross_scale": "Skalowanie procesów",
    "exp_tag_fin_rep": "Raportowanie finansowe",
    "exp_tag_agency_founder": "Założyciel agencji",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Systemy UI/UX",
    "exp_tag_ai_auto": "Automatyzacja AI",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Architektura produktu",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Spaced Repetition",
    "exp_tag_fullstack_proto": "Prototyp Full-Stack",
    "exp_tag_figma_tok": "Tokeny Figma",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Aplikacje mobilne",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "WYBRANE PROJEKTY",
    "proj_title": "PRODUKTY I ASSETY CYFROWE",
    "proj_sub": "Realne wdrożenia: własna agencja cyfrowa oraz innowacyjna platforma EdTech SaaS.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "AGENCJA CYFROWA // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Ekskluzywna agencja cyfrowa. Tworzymy szybkie strony, systemy designu i platformy wspierane przez AI od strategii po wdrożenie produkcyjne.",
    "proj1_btn": "Odwiedź stronę ↗",
    "proj2_title": "English Flow — Nauka zintegrowana z Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Narzędzie do nauki słownictwa zintegrowane z Notion. Użytkownik podłącza własną tabelę Notion i uczy się z algorytmem powtórek interwałowych.",
    "proj2_btn": "Otwórz wersję beta ↗",
    "proj2_beta_badge": "Wczesna Beta",
    "dream_tag": "FILOZOFIA OPERACYJNA",
    "dream_title": "RAMY D.R.E.A.M.",
    "dream_sub": "Fundamentalne zasady kierujące moją pracą i przywództwem:",
    "dream_d_title": "Discipline (Dyscyplina)",
    "dream_d_desc": "System zawsze wygrywa z motywacją. Przewidywalne procedury generują wybitne rezultaty.",
    "dream_r_title": "Routine & Resilience (Odporność)",
    "dream_r_desc": "Opanowanie chaosu, bezstresowe rozwiązywanie kryzysów logistycznych pod presją czasu.",
    "dream_e_title": "Execution & Empathy (Egzekucja & Empatia)",
    "dream_e_desc": "Kierowanie ludźmi poprzez wsparcie oraz bezkompromisowe standardy jakości na każdym etapie.",
    "dream_a_title": "Adaptability (Adaptacja)",
    "dream_a_desc": "Błyskawiczne opanowywanie nowych technologii (modele AI, nowoczesny frontend, procesy międzynarodowe).",
    "dream_m_title": "Mentality (Mentalność mistrza)",
    "dream_m_desc": "Stay Hungry. Ciągły rozwój, ambicja i dążenie do doskonałości bez spoczywania na laurach.",
    "slit1_num": "// 01 ODPORNOŚĆ",
    "slit2_num": "// 02 ROZMACH",
    "slit3_num": "// 03 RZEMIOSŁO",
    "slit4_num": "// 04 DYSCYPLINA",
    "proj1_status_tag": "● PRODUKCJA NA ŻYWO",
    "dream_hungry_tag": "// WIZJA I NAPĘD",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Nigdy nie osiadać na laurach. Każde wyzwanie to okazja do zbudowania bardziej odpornego systemu.",
    "skills_tag": "KOMPETENCJE I STOS",
    "skills_title": "ARSENAŁ PROFESJONALNY",
    "skills_sub": "Synteza zarządzania operacyjnego (COO), projektowania produktów i technologii webowych.",
    "skill_c1_badge": "01 // OPERACJE",
    "skill_c1_title": "Przywództwo operacyjne (COO)",
    "skill_c1_s1": "Planowanie strategiczne",
    "skill_c1_b1": "Ekspert",
    "skill_c1_s2": "Skalowanie & Partnerstwa",
    "skill_c1_b2": "100+ Instytucji",
    "skill_c1_s3": "Logistyka kryzysowa & Audyt",
    "skill_c1_b3": "2 lata COO",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "Product & UI/UX Design",
    "skill_c2_s1": "Figma (Systemy designu)",
    "skill_c2_b1": "Mistrz",
    "skill_c2_s2": "Produkty webowe i mobilne",
    "skill_c2_b2": "Pełen cykl",
    "skill_c2_s3": "Prototypowanie & Motion",
    "skill_c2_b3": "Zaawansowany",
    "skill_c3_badge": "03 // TECHNOLOGIE",
    "skill_c3_title": "Technologia & AI",
    "skill_c3_s1": "Ekosystem Notion & API",
    "skill_c3_b1": "Twórca SaaS",
    "skill_c3_s2": "Next.js & Web Stack",
    "skill_c3_b2": "Praktyk",
    "skill_c3_s3": "Procesy AI & Automatyzacja",
    "skill_c3_b3": "Codziennie",
    "skill_c4_badge": "04 // KOMUNIKACJA",
    "skill_c4_title": "Języki & Komunikacja",
    "skill_c4_s1": "Ukraiński",
    "skill_c4_b1": "Ojczysty",
    "skill_c4_s2": "Polski (2.5 roku w UE)",
    "skill_c4_b2": "B2 Biegły",
    "skill_c4_s3": "Angielski (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "BEZPOŚREDNI KONTAKT",
    "contact_title": "GOTOWI DO WSPÓŁPRACY?",
    "contact_sub": "Otwarty na strategiczne role operacyjne (COO), kierownictwo designu produktu oraz globalne wyzwania zdalne. Skontaktuj się bezpośrednio:",
    "tg_title": "Napisz na Telegramie",
    "tg_sub": "Błyskawiczny kontakt: @mikolazozul",
    "mail_title": "Napisz wiadomość Email",
    "mail_sub": "Oficjalne zapytania: mikolazozul@gmail.com",
    "links_title": "Osobiste linki i kod QR",
    "links_sub": "Mobilne centrum kontaktu i profile społecznościowe",
    "copy_btn": "Kopiuj ⧉",
    "copied_tg": "Telegram @mikolazozul skopiowany!",
    "copied_mail": "Email mikolazozul@gmail.com skopiowany!",
    "qr_btn_text": "Pokaż kod QR strony",
    "footer_links": "Osobiste linki",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Zeskanuj telefonem, aby natychmiast zapisać zweryfikowane dane kontaktowe",
    "qr_modal_close": "Zamknij okno",
    "form_name_lbl": "Twoje imię / Firma",
    "form_name_ph": "Aleksander / Tech Venture",
    "form_email_lbl": "Email lub nick Telegram",
    "form_email_ph": "alex@company.com lub @username",
    "form_msg_lbl": "Wiadomość / Zapytanie",
    "form_msg_ph": "Opisz swój projekt, ofertę lub wizję współpracy...",
    "form_submit_btn": "Wyślij wiadomość →",
    "copied_toast": "Skopiowano do schowka!",
    "footer_copy": "© 2026 Mykola Zozul. Wszelkie prawa zastrzeżone. 100% Zdalnie • Gotowy do relokacji."
  },
  "es": {
    "nav_about": "Sobre mí",
    "nav_exp": "Experiencia & COO",
    "nav_projects": "Proyectos",
    "nav_dream": "Principios",
    "nav_skills": "Habilidades",
    "nav_contact": "Contacto",
    "nav_links_btn": "Enlaces personales ↗",
    "hero_status": "EN BÚSQUEDA ACTIVA DE EMPLEO // REMOTO • ABIERTO A RELOCALIZACIÓN",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 años. Ex Chief Operating Officer (Ex-COO) con 2 años de experiencia liderando logística en crisis y alianzas internacionales, además de Senior Product Designer. Actualmente en búsqueda activa de nuevos retos ejecutivos y de producto (Operations Lead / COO / Founding Designer). 100% Remoto • Dispuesto a reubicación.",
    "hero_cta_tg": "Escribir en Telegram →",
    "hero_cta_work": "Ver proyectos ↓",
    "hero_cta_links": "Enlaces personales ↗",
    "hero_badge_loc": "ALPES SUIZOS // ESCALA DE VISIÓN",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "MYKOLA ZOZUL",
    "stat_exp_val": "2 AÑOS",
    "stat_exp_lbl": "Experiencia de liderazgo Ex-COO",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Ciudades y entidades socias",
    "stat_age_val": "23 AÑOS",
    "stat_age_lbl": "NAC. 2003 / Remoto • Reubicación",
    "slits_tag": "ESPACIO MULTIVISUAL",
    "slits_title": "FACETAS DE VISIÓN Y DISCIPLINA",
    "slits_sub": "Cada etapa de mi trayectoria forja mi carácter: desde la resiliencia operativa hasta la perfección estética de cada interfaz.",
    "slit1_title": "VARSOVIA / RESILIENCIA",
    "slit1_desc": "2.5 años viviendo en Polonia, comprensión profunda de la cultura empresarial europea y ritmos internacionales.",
    "slit2_title": "ALPES / ESCALA DE VISIÓN",
    "slit2_desc": "Claridad mental, amplitud estratégica y serenidad inquebrantable en situaciones complejas de crisis.",
    "slit3_title": "VERTEX / MAESTRÍA DIGITAL",
    "slit3_desc": "Artesanía digital, sistemas de diseño de última generación y entrega de software llave en mano.",
    "slit4_title": "ENFOQUE / DISCIPLINA",
    "slit4_desc": "Concentración diaria, responsabilidad ante el equipo y ejecución de ideas hasta un resultado impecable.",
    "exp_tag": "TRAYECTORIA PROFESIONAL",
    "exp_title": "EXPERIENCIA OPERATIVA Y GESTIÓN",
    "exp_sub": "Enfoque en dirección de operaciones (COO), alianzas estratégicas y productos digitales propios.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Organización Humanitaria Internacional «Not Indifferent Squad»",
    "coo_period": "2 años de liderazgo • Concluido",
    "coo_desc": "Gestión total de los procesos operativos de una organización humanitaria de escala internacional. Planificación estratégica, logística de crisis y coordinación de ayuda a gran escala.",
    "coo_bullet_1": "Coordinación y forja de alianzas con más de 100 municipios, instituciones y empresas donantes de primer nivel.",
    "coo_bullet_2": "Elaboración de planes de escalamiento estratégico y liderazgo directo de equipos multidisciplinarios.",
    "coo_bullet_3": "Gestión de registros sistemáticos, máxima transparencia financiera e informes de impacto para socios.",
    "vertex_role": "Fundador & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Agencia Digital)",
    "vertex_period": "2024 — Presente",
    "vertex_desc": "Creación y desarrollo de una agencia digital: diseño de vanguardia, ingeniería web en Next.js y WebGL, y automatización con IA para clientes globales.",
    "englishflow_role": "Creador de Producto & Desarrollador",
    "englishflow_org": "English Flow (SaaS integrado con Notion)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Herramienta de aprendizaje de vocabulario con integración nativa en Notion y algoritmos de repetición espaciada.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Móvil)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Diseño de interfaces web y móviles, creación de sistemas de diseño integrales, prototipado e identidad visual de marca.",
    "volunteer_role": "Diseñador Gráfico (Voluntariado)",
    "volunteer_org": "Shliakh Volontera UA (Remoto)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Diseño pro bono de campañas visuales y activos digitales para iniciativas voluntarias ucranianas.",
    "motion_role": "Edición de Video & Motion Design",
    "motion_org": "Canales de Medios & Agencias",
    "motion_period": "2020 — 2021",
    "motion_desc": "Edición de video, gráficos en movimiento y producción de contenido dinámico con Premiere Pro y After Effects.",
    "warehouse_note": "<strong>Experiencia en Polonia (Operaciones logísticas, 2024):</strong> Trabajo práctico en logística física en Polonia (empaque, almacenaje, capacitación de nuevo personal). Esto forjó resistencia física, humildad y una férrea ética laboral.",
    "exp_tag_coo_lead": "Liderazgo COO",
    "exp_tag_crisis_log": "Logística en crisis",
    "exp_tag_strat_alliances": "Alianzas estratégicas",
    "exp_tag_cross_scale": "Escalamiento transversal",
    "exp_tag_fin_rep": "Reportes financieros",
    "exp_tag_agency_founder": "Fundador de agencia",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Sistemas UI/UX",
    "exp_tag_ai_auto": "Automatización con IA",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Arquitectura de producto",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Spaced Repetition",
    "exp_tag_fullstack_proto": "Prototipo Full-Stack",
    "exp_tag_figma_tok": "Figma Tokens",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Apps móviles",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "TRABAJOS DESTACADOS",
    "proj_title": "PRODUCTOS Y ACTIVOS DIGITALES",
    "proj_sub": "Ejecución tangible: agencia digital propia y una plataforma EdTech SaaS innovadora.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "AGENCIA DIGITAL // NEXT.JS // IA // BRANDING",
    "proj1_desc": "Agencia digital de élite. Sitios web ultrarrápidos, sistemas de diseño y plataformas con IA desde la estrategia hasta el despliegue.",
    "proj1_btn": "Visitar sitio web ↗",
    "proj2_title": "English Flow — Aprendizaje integrado en Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "SaaS para el aprendizaje de idiomas con Notion. Cada usuario conecta su propia base de datos y aprende con repetición espaciada.",
    "proj2_btn": "Abrir versión beta ↗",
    "proj2_beta_badge": "Beta temprana",
    "dream_tag": "FILOSOFÍA OPERATIVA",
    "dream_title": "EL MARCO D.R.E.A.M.",
    "dream_sub": "Los principios fundamentales que rigen mi trabajo y liderazgo:",
    "dream_d_title": "Discipline (Disciplina)",
    "dream_d_desc": "Los sistemas siempre superan a la motivación. Las rutinas consistentes generan resultados extraordinarios.",
    "dream_r_title": "Routine & Resilience (Resiliencia)",
    "dream_r_desc": "Capacidad para navegar el caos y resolver crisis logísticas complejas manteniendo la calma.",
    "dream_e_title": "Execution & Empathy (Ejecución & Empatía)",
    "dream_e_desc": "Liderazgo de equipos mediante el empoderamiento y estándares intransigentes de calidad en cada fase.",
    "dream_a_title": "Adaptability (Adaptabilidad)",
    "dream_a_desc": "Dominio inmediato de nuevas herramientas (modelos de IA, frontend moderno, flujos globales).",
    "dream_m_title": "Mentality (Mentalidad ganadora)",
    "dream_m_desc": "Stay Hungry. Crecimiento imparable, ambición y búsqueda constante de la excelencia.",
    "slit1_num": "// 01 RESILIENCIA",
    "slit2_num": "// 02 VISIÓN",
    "slit3_num": "// 03 ARTESANÍA",
    "slit4_num": "// 04 DISCIPLINA",
    "proj1_status_tag": "● EN VIVO EN PRODUCCIÓN",
    "dream_hungry_tag": "// VISIÓN Y PROPÓSITO",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Nunca conformarse. Cada reto operativo es la oportunidad de construir un sistema aún más resiliente y escalable.",
    "skills_tag": "HABILIDADES Y STACK",
    "skills_title": "ARSENAL PROFESIONAL",
    "skills_sub": "La unión de liderazgo operativo (COO), diseño de producto y tecnologías web modernas.",
    "skill_c1_badge": "01 // OPERACIONES",
    "skill_c1_title": "Liderazgo Operativo (COO)",
    "skill_c1_s1": "Planificación estratégica",
    "skill_c1_b1": "Experto",
    "skill_c1_s2": "Escalamiento & Alianzas",
    "skill_c1_b2": "100+ Entidades",
    "skill_c1_s3": "Logística en crisis & Auditorías",
    "skill_c1_b3": "2 Años COO",
    "skill_c2_badge": "02 // DISEÑO",
    "skill_c2_title": "Diseño de Producto UI/UX",
    "skill_c2_s1": "Figma (Sistemas de diseño)",
    "skill_c2_b1": "Maestro",
    "skill_c2_s2": "Productos web y móviles",
    "skill_c2_b2": "Ciclo completo",
    "skill_c2_s3": "Prototipado & Motion",
    "skill_c2_b3": "Avanzado",
    "skill_c3_badge": "03 // TECNOLOGÍA",
    "skill_c3_title": "Tecnología & IA",
    "skill_c3_s1": "Ecosistema Notion & APIs",
    "skill_c3_b1": "Creador SaaS",
    "skill_c3_s2": "Next.js & Stack Web",
    "skill_c3_b2": "Práctico",
    "skill_c3_s3": "Flujos de IA & Automatización",
    "skill_c3_b3": "A diario",
    "skill_c4_badge": "04 // COMUNICACIÓN",
    "skill_c4_title": "Idiomas & Comunicación",
    "skill_c4_s1": "Ucraniano",
    "skill_c4_b1": "Nativo",
    "skill_c4_s2": "Polaco (2.5 años en UE)",
    "skill_c4_b2": "B2 Fluido",
    "skill_c4_s3": "Inglés (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "PUNTO DE CONTACTO",
    "contact_title": "¿LISTO PARA COLABORAR?",
    "contact_sub": "Disponible para roles de operaciones ejecutivas (COO), liderazgo en diseño de producto y desafíos remotos globales. Contáctame directamente:",
    "tg_title": "Escribir en Telegram",
    "tg_sub": "Canal directo instantáneo: @mikolazozul",
    "mail_title": "Enviar un Email",
    "mail_sub": "Propuestas formales: mikolazozul@gmail.com",
    "links_title": "Enlaces personales y QR",
    "links_sub": "Centro rápido de contactos y perfiles sociales",
    "copy_btn": "Copiar ⧉",
    "copied_tg": "¡Telegram @mikolazozul copiado!",
    "copied_mail": "¡Email mikolazozul@gmail.com copiado!",
    "qr_btn_text": "Ver código QR de la página",
    "footer_links": "Enlaces personales",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Escanea con tu teléfono para guardar los datos de contacto verificados al instante",
    "qr_modal_close": "Cerrar ventana",
    "form_name_lbl": "Tu nombre / Empresa",
    "form_name_ph": "Alejandro / Tech Venture",
    "form_email_lbl": "Email o usuario de Telegram",
    "form_email_ph": "alex@empresa.com o @usuario",
    "form_msg_lbl": "Mensaje / Propuesta",
    "form_msg_ph": "Cuéntame sobre tu proyecto o visión de colaboración...",
    "form_submit_btn": "Enviar mensaje →",
    "copied_toast": "¡Copiado al portapapeles!",
    "footer_copy": "© 2026 Mykola Zozul. Todos los derechos reservados. 100% Remoto • Dispuesto a reubicación."
  },
  "fr": {
    "nav_about": "À propos",
    "nav_exp": "Expérience & COO",
    "nav_projects": "Projets",
    "nav_dream": "Principes",
    "nav_skills": "Compétences",
    "nav_contact": "Contact",
    "nav_links_btn": "Liens personnels ↗",
    "hero_status": "EN RECHERCHE ACTIVE D'EMPLOI // REMOTE WORLDWIDE • PRÊT À LA RELOCALISATION",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 ans. Ancien Directeur des Opérations (Ex-COO) avec 2 ans d'expérience dans la logistique de crise et l'expansion de partenariats internationaux, ainsi que Senior Product Designer. Actuellement en recherche active de nouveaux défis (Operations Lead / COO / Founding Designer). 100% à distance • Prêt à la relocalisation.",
    "hero_cta_tg": "Écrire sur Telegram →",
    "hero_cta_work": "Voir les projets ↓",
    "hero_cta_links": "Liens personnels ↗",
    "hero_badge_loc": "ALPES SUISSES // ENVERGURE DE VISION",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "MYKOLA ZOZUL",
    "stat_exp_val": "2 ANS",
    "stat_exp_lbl": "Expérience de leadership Ex-COO",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Villes & Organisations Partenaires",
    "stat_age_val": "23 ANS",
    "stat_age_lbl": "NÉ EN 2003 / Remote • Relocalisation",
    "slits_tag": "ESPACE MULTIVISUEL",
    "slits_title": "FACETTES DE VISION ET DISCIPLINE",
    "slits_sub": "Chaque étape de mon parcours façonne mon caractère : de la résilience opérationnelle à la précision esthétique de chaque interface.",
    "slit1_title": "VARSOVIE / RÉSILIENCE",
    "slit1_desc": "2,5 ans de vie en Pologne, compréhension intime de la culture européenne et du rythme des affaires internationales.",
    "slit2_title": "ALPES / VISION STRATÉGIQUE",
    "slit2_desc": "Clarté de pensée, hauteur de vue stratégique et sang-froid absolu dans la gestion des situations de crise.",
    "slit3_title": "VERTEX / MAÎTRISE DIGITALE",
    "slit3_desc": "Artisanat numérique, systèmes de design nouvelle génération et déploiement de solutions logicielles clés en main.",
    "slit4_title": "FOCUS / DISCIPLINE",
    "slit4_desc": "Concentration quotidienne, sens aigu des responsabilités d'équipe et conduite des projets vers un résultat sans compromis.",
    "exp_tag": "PARCOURS PROFESSIONNEL",
    "exp_title": "EXPÉRIENCE SYSTÉMIQUE & DIRECTION",
    "exp_sub": "Accent sur la direction des opérations (COO), le développement de partenariats et les produits numériques propriétaires.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Organisation Humanitaire Internationale «Not Indifferent Squad»",
    "coo_period": "2 ans de leadership • Achevé",
    "coo_desc": "Direction intégrale des opérations d'une organisation humanitaire d'envergure internationale. Planification stratégique, logistique de crise et coordination d'aide humanitaire à grande échelle.",
    "coo_bullet_1": "Coordination et développement d'alliances avec plus de 100 municipalités, institutions et grands donateurs corporatifs.",
    "coo_bullet_2": "Conception de plans de croissance stratégique et encadrement direct d'équipes interdisciplinaires.",
    "coo_bullet_3": "Tenue d'une comptabilité rigoureuse, transparence financière totale et rapports d'impact pour les partenaires.",
    "vertex_role": "Fondateur & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Agence Digitale)",
    "vertex_period": "2024 — Présent",
    "vertex_desc": "Création et direction d'une agence digitale haut de gamme : design sur mesure, développement Next.js & WebGL et automatisation par l'IA pour des clients mondiaux.",
    "englishflow_role": "Créateur de Produit & Développeur",
    "englishflow_org": "English Flow (SaaS intégré à Notion)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Application d'apprentissage du vocabulaire avec intégration native de Notion et algorithmes de répétition espacée.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Conception d'interfaces web et mobiles, création de systèmes de design complets, prototypage interactif et identités de marque.",
    "volunteer_role": "Designer Graphique (Bénévolat)",
    "volunteer_org": "Shliakh Volontera UA (À distance)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Création pro bono de campagnes visuelles et de supports numériques pour des initiatives bénévoles ukrainiennes.",
    "motion_role": "Montage Vidéo & Motion Design",
    "motion_org": "Chaînes Média & Agences",
    "motion_period": "2020 — 2021",
    "motion_desc": "Montage vidéo, habillage animé et production de contenus dynamiques avec Premiere Pro, After Effects et outils spécialisés.",
    "warehouse_note": "<strong>Expérience en Pologne (Logistique physique, 2024):</strong> Travail sur le terrain en logistique d'entrepôt en Pologne (préparation de commandes, stockage, formation du nouveau personnel). Cela a forgé une endurance physique à toute épreuve, humilité et discipline de travail.",
    "exp_tag_coo_lead": "Leadership COO",
    "exp_tag_crisis_log": "Logistique de crise",
    "exp_tag_strat_alliances": "Alliances stratégiques",
    "exp_tag_cross_scale": "Mise à l'échelle",
    "exp_tag_fin_rep": "Rapports financiers",
    "exp_tag_agency_founder": "Fondateur d'agence",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Systèmes UI/UX",
    "exp_tag_ai_auto": "Automatisation IA",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Architecture produit",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Répétition espacée",
    "exp_tag_fullstack_proto": "Prototype Full-Stack",
    "exp_tag_figma_tok": "Tokens Figma",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Applications mobiles",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "TRAVAUX SÉLECTIONNÉS",
    "proj_title": "ACTIFS ET PRODUITS DIGITAUX",
    "proj_sub": "Exécution concrète : agence digitale indépendante et plateforme EdTech SaaS novatrice.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "AGENCE DIGITALE // NEXT.JS // IA // BRANDING",
    "proj1_desc": "Agence digitale d'élite. Sites web performants, systèmes de design et plateformes connectées à l'IA, de la vision stratégique à la mise en ligne.",
    "proj1_btn": "Visiter le site ↗",
    "proj2_title": "English Flow — Apprentissage intégré à Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "SaaS d'apprentissage linguistique avec Notion. Chaque utilisateur connecte sa propre base de données Notion et mémorise grâce à des algorithmes de répétition espacée.",
    "proj2_btn": "Accéder à la bêta ↗",
    "proj2_beta_badge": "Bêta préliminaire",
    "dream_tag": "PHILOSOPHIE OPÉRATIONNELLE",
    "dream_title": "LE CADRE D.R.E.A.M.",
    "dream_sub": "Les principes directeurs de mon approche et du leadership d'équipe :",
    "dream_d_title": "Discipline (Discipline)",
    "dream_d_desc": "Les systèmes l'emportent toujours sur la motivation. Des routines rigoureuses garantissent des résultats hors pair.",
    "dream_r_title": "Routine & Resilience (Résilience)",
    "dream_r_desc": "Capacité à canaliser le chaos et à résoudre sereinement des crises logistiques sous haute tension.",
    "dream_e_title": "Execution & Empathy (Exécution & Empathie)",
    "dream_e_desc": "Direction d'équipe bienveillante combinée à une exigence sans compromis sur la qualité du livrable.",
    "dream_a_title": "Adaptability (Adaptabilité)",
    "dream_a_desc": "Maîtrise immédiate des nouvelles technologies (modèles d'IA, frameworks modernes, flux d'affaires globaux).",
    "dream_m_title": "Mentality (Mental d'excellence)",
    "dream_m_desc": "Stay Hungry. Soif perpétuelle de dépassement, ambition et quête des standards les plus élevés.",
    "slit1_num": "// 01 RÉSILIENCE",
    "slit2_num": "// 02 VISION",
    "slit3_num": "// 03 ARTISANAT",
    "slit4_num": "// 04 DISCIPLINE",
    "proj1_status_tag": "● EN LIGNE EN PRODUCTION",
    "dream_hungry_tag": "// VISION & AMBITION",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Ne jamais s'endormir sur ses lauriers. Chaque défi opérationnel est l'opportunité de bâtir un système encore plus robuste et évolutif.",
    "skills_tag": "COMPÉTENCES ET STACK",
    "skills_title": "ARSENAL PROFESSIONNEL",
    "skills_sub": "La synthèse du leadership opérationnel (COO), du design produit et des technologies web de pointe.",
    "skill_c1_badge": "01 // OPÉRATIONS",
    "skill_c1_title": "Leadership Opérationnel (COO)",
    "skill_c1_s1": "Planification stratégique",
    "skill_c1_b1": "Expert",
    "skill_c1_s2": "Expansion & Partenariats",
    "skill_c1_b2": "100+ Entités",
    "skill_c1_s3": "Logistique de crise & Audit",
    "skill_c1_b3": "2 ans COO",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "Design Produit UI/UX",
    "skill_c2_s1": "Figma (Design Systems)",
    "skill_c2_b1": "Maître",
    "skill_c2_s2": "Produits Web & Mobiles",
    "skill_c2_b2": "Cycle complet",
    "skill_c2_s3": "Prototypage & Motion",
    "skill_c2_b3": "Avancé",
    "skill_c3_badge": "03 // TECHNOLOGIE",
    "skill_c3_title": "Technologie & IA",
    "skill_c3_s1": "Écosystème Notion & API",
    "skill_c3_b1": "Créateur SaaS",
    "skill_c3_s2": "Next.js & Stack Web",
    "skill_c3_b2": "Praticien",
    "skill_c3_s3": "Workflows IA & Automatisation",
    "skill_c3_b3": "Quotidien",
    "skill_c4_badge": "04 // COMMUNICATION",
    "skill_c4_title": "Langues & Communication",
    "skill_c4_s1": "Ukrainien",
    "skill_c4_b1": "Natif",
    "skill_c4_s2": "Polonais (2,5 ans en UE)",
    "skill_c4_b2": "B2 Courant",
    "skill_c4_s3": "Anglais (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "CONTACT DIRECT",
    "contact_title": "PRÊT POUR UNE COLLABORATION ?",
    "contact_sub": "Disponible pour des postes de direction des opérations (COO), lead design produit et opportunités à distance à l'international. Écrivez-moi directement :",
    "tg_title": "Écrire sur Telegram",
    "tg_sub": "Ligne directe instantanée : @mikolazozul",
    "mail_title": "Envoyer un Email",
    "mail_sub": "Propositions formelles : mikolazozul@gmail.com",
    "links_title": "Liens personnels et QR",
    "links_sub": "Hub de contact rapide et réseaux sociaux",
    "copy_btn": "Copier ⧉",
    "copied_tg": "Telegram @mikolazozul copié !",
    "copied_mail": "Email mikolazozul@gmail.com copié !",
    "qr_btn_text": "Afficher le QR code de la page",
    "footer_links": "Liens personnels",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Scannez avec votre téléphone pour enregistrer immédiatement les contacts vérifiés",
    "qr_modal_close": "Fermer la fenêtre",
    "form_name_lbl": "Votre nom / Entreprise",
    "form_name_ph": "Alexandre / Tech Venture",
    "form_email_lbl": "Email ou identifiant Telegram",
    "form_email_ph": "alex@entreprise.com ou @identifiant",
    "form_msg_lbl": "Message / Proposition",
    "form_msg_ph": "Présentez votre projet ou votre opportunité de collaboration...",
    "form_submit_btn": "Envoyer le message →",
    "copied_toast": "Copié dans le presse-papier !",
    "footer_copy": "© 2026 Mykola Zozul. Tous droits réservés. 100% à distance • Prêt à la relocalisation."
  },
  "ru": {
    "nav_about": "Обо мне",
    "nav_exp": "Опыт & COO",
    "nav_projects": "Проекты",
    "nav_dream": "Принципы",
    "nav_skills": "Скилы",
    "nav_contact": "Контакты",
    "nav_links_btn": "Личные ссылки ↗",
    "hero_status": "В АКТИВНОМ ПОИСКЕ РАБОТЫ // 100% REMOTE • ГОТОВ К РЕЛОКАЦИИ",
    "hero_title_sr": "МИКОЛА ЗОЗУЛЬ",
    "hero_title_prefix": "МИКОЛА",
    "hero_title_suffix": "ЗОЗУЛЬ",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 года. Экс-операционный директор (Ex-COO) с 2-летним опытом координации кризисной логистики и масштабирования международных партнерств, а также продуктовый дизайнер. Сейчас в активном поиске работы и новых вызовов (Operations Lead / COO / Founding Designer / Chief of Staff). 100% Remote • Готов к релокации при необходимости.",
    "hero_cta_tg": "Написать в Telegram →",
    "hero_cta_work": "Смотреть кейсы ↓",
    "hero_cta_links": "Личные ссылки ↗",
    "hero_badge_loc": "ШВЕЙЦАРСКИЕ АЛЬПЫ // МАСШТАБ ВИДЕНИЯ",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "МИКОЛА ЗОЗУЛЬ",
    "stat_exp_val": "2 ГОДА",
    "stat_exp_lbl": "Опыт Ex-COO / Операции",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Городов и компаний-партнеров",
    "stat_age_val": "23 ГОДА",
    "stat_age_lbl": "EST. 2003 / Удаленно • Релокация",
    "slits_tag": "МУЛЬТИВИЗУАЛЬНОЕ ПРОСТРАНСТВО",
    "slits_title": "ГРАНИ ВИДЕНИЯ И ДИСЦИПЛИНЫ",
    "slits_sub": "Каждый этап пути формирует характер: от операционной устойчивости и выдержки до эстетики каждой линии цифрового интерфейса.",
    "slit1_title": "ВАРШАВА / СТОЙКОСТЬ",
    "slit1_desc": "2.5 года жизни в Польше, глубокое понимание европейской деловой культуры и ритма международных процессов.",
    "slit2_title": "АЛЬПЫ / МАСШТАБ ВИДЕНИЯ",
    "slit2_desc": "Чистота мышления, стратегический масштаб и непоколебимое спокойствие в кризисных ситуациях.",
    "slit3_title": "VERTEX / РЕМЕСЛО",
    "slit3_desc": "Цифровое мастерство, дизайн-системы нового поколения и воплощение сложных технологических решений.",
    "slit4_title": "ФОКУС / ДИСЦИПЛИНА",
    "slit4_desc": "Ежедневная концентрация, ответственность за команду и доведение идей до безупречного финала.",
    "exp_tag": "КАРЬЕРНЫЙ ПУТЬ",
    "exp_title": "СИСТЕМНЫЙ ОПЫТ И УПРАВЛЕНИЕ",
    "exp_sub": "Акцент на операционном руководстве (COO), развитии партнерских экосистем и авторских цифровых продуктах.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Международная Благотворительная Организация «Небайдужі» (Not Indifferent Squad)",
    "coo_period": "2 года опыта • Завершено",
    "coo_desc": "Полное руководство операционными процессами благотворительной организации международного масштаба. Стратегическое планирование, антикризисная логистика и координация масштабной помощи.",
    "coo_bullet_1": "Координация взаимодействия с сотнями городов, муниципалитетами и десятками крупных корпоративных доноров.",
    "coo_bullet_2": "Разработка планов стратегического масштабирования и прямое управление междисциплинарными командами.",
    "coo_bullet_3": "Ведение системного учета, полная финансовая прозрачность и подготовка отчетности для международных партнеров.",
    "vertex_role": "Основатель & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digital Agency)",
    "vertex_period": "2024 — Сейчас",
    "vertex_desc": "Основание и развитие цифровой студии: премиальный дизайн, веб-разработка на Next.js, WebGL и автоматизация бизнес-процессов с помощью ИИ для клиентов по всему миру.",
    "englishflow_role": "Product Creator & Developer",
    "englishflow_org": "English Flow (Notion-Integrated SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Сервис для изучения иностранных слов методом интервальных повторений с прямой синхронизацией с базой Notion пользователя.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Проектирование веб- и мобильных интерфейсов, создание комплексных дизайн-систем, интерактивное прототипирование и брендинг.",
    "volunteer_role": "Графический дизайнер (Волонтерство)",
    "volunteer_org": "Shliakh Volontera UA (Удаленно)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Создание визуальных кампаний и цифровых информационных материалов для волонтерских инициатив на безвозмездной основе.",
    "motion_role": "Видеомонтаж & Motion Design",
    "motion_org": "Медиа-каналы и агентства",
    "motion_period": "2020 — 2021",
    "motion_desc": "Монтаж видео, моушн-графика и производство динамичного медиаконтента (Premiere Pro, After Effects).",
    "warehouse_note": "<strong>Опыт работы в Польше (Warehouse work, 2024):</strong> Практический опыт складской логистики в Польше (комплектация, размещение, обучение нового персонала). Это сформировало железную физическую выносливость, скромность и дисциплину труда.",
    "exp_tag_coo_lead": "COO лидерство",
    "exp_tag_crisis_log": "Кризисная логистика",
    "exp_tag_strat_alliances": "Стратегические партнерства",
    "exp_tag_cross_scale": "Кросс-функциональное масштабирование",
    "exp_tag_fin_rep": "Финансовая отчетность",
    "exp_tag_agency_founder": "Основатель агентства",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "UI/UX системы",
    "exp_tag_ai_auto": "ИИ-автоматизация",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Продуктовая архитектура",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Интервальные повторения",
    "exp_tag_fullstack_proto": "Full-Stack прототип",
    "exp_tag_figma_tok": "Figma токены",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Мобильные приложения",
    "exp_tag_wireframing": "Вайрфреймы",
    "proj_tag": "ИЗБРАННЫЕ ПРОЕКТЫ",
    "proj_title": "ЦИФРОВЫЕ АКТИВЫ И ПРОДУКТЫ",
    "proj_sub": "Практическое воплощение системной работы: собственное digital-агентство и персональный инновационный SaaS-продукт.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITAL-АГЕНТСТВО // NEXT.JS // ИИ // БРЕНДИНГ",
    "proj1_desc": "Премиальная цифровая студия. Скоростные веб-сайты, дизайн-системы и платформы с ИИ от стратегии до продакшн-запуска.",
    "proj1_btn": "Посетить сайт ↗",
    "proj2_title": "English Flow — Обучение с интеграцией Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Веб-сервис для изучения слов с интеграцией Notion. Пользователь подключает свою таблицу Notion и учит слова по алгоритму интервальных повторений.",
    "proj2_btn": "Открыть бета-версию ↗",
    "proj2_beta_badge": "Ранняя бета",
    "dream_tag": "ОПЕРАЦИОННАЯ ФИЛОСОФИЯ",
    "dream_title": "МАТРИЦА ПРИНЦИПОВ: D.R.E.A.M.",
    "dream_sub": "Фундамент, на котором строится каждый проект и любая системная команда:",
    "dream_d_title": "Discipline (Дисциплина)",
    "dream_d_desc": "Система всегда побеждает хаос. Стабильность ежедневных процессов гарантирует предсказуемый результат.",
    "dream_r_title": "Routine & Resilience (Стойкость)",
    "dream_r_desc": "Способность сохранять хладнокровие, решать нестандартные кризисные задачи без паники.",
    "dream_e_title": "Execution & Empathy (Исполнение)",
    "dream_e_desc": "Командное лидерство через поддержку людей и бескомпромиссный контроль качества на каждом этапе.",
    "dream_a_title": "Adaptability (Гибкость)",
    "dream_a_desc": "Мгновенное освоение новых инструментов (ИИ-модели, современный веб-стек, международные процессы).",
    "dream_m_title": "Mentality (Менталитет победителя)",
    "dream_m_desc": "Stay Hungry. Непрерывный рост, амбиции и стремление к эталонному качеству.",
    "slit1_num": "// 01 СТОЙКОСТЬ",
    "slit2_num": "// 02 МАСШТАБ",
    "slit3_num": "// 03 РЕМЕСЛО",
    "slit4_num": "// 04 ДИСЦИПЛИНА",
    "proj1_status_tag": "● РАБОТАЕТ В СЕТИ",
    "dream_hungry_tag": "// ВИДЕНИЕ И ДВИЖЕНИЕ",
    "dream_hungry_title": "ВСЕГДА ГОЛОДЕН.",
    "dream_hungry_desc": "Никогда не останавливаться на достигнутом. Любой вызов — это возможность построить более устойчивую систему.",
    "skills_tag": "НАВЫКИ И СТЕК",
    "skills_title": "ПРОФЕССИОНАЛЬНЫЙ АРСЕНАЛ",
    "skills_sub": "Синтез операционного управления (COO), продуктового дизайна и современных веб-технологий.",
    "skill_c1_badge": "01 // ОПЕРАЦИИ",
    "skill_c1_title": "Операционное лидерство (COO)",
    "skill_c1_s1": "Стратегическое планирование",
    "skill_c1_b1": "Эксперт",
    "skill_c1_s2": "Масштабирование & Партнерства",
    "skill_c1_b2": "100+ учреждений",
    "skill_c1_s3": "Кризисная логистика & Аудит",
    "skill_c1_b3": "2 года COO",
    "skill_c2_badge": "02 // ДИЗАЙН",
    "skill_c2_title": "Продуктовый UI/UX дизайн",
    "skill_c2_s1": "Figma (Дизайн-системы)",
    "skill_c2_b1": "Мастер",
    "skill_c2_s2": "Веб & мобильные продукты",
    "skill_c2_b2": "Полный цикл",
    "skill_c2_s3": "Прототипирование & Motion",
    "skill_c2_b3": "Продвинутый",
    "skill_c3_badge": "03 // ТЕХНОЛОГИИ",
    "skill_c3_title": "Технологии & ИИ",
    "skill_c3_s1": "Экосистема Notion и API",
    "skill_c3_b1": "Создатель SaaS",
    "skill_c3_s2": "Next.js & Веб-стек",
    "skill_c3_b2": "Практик",
    "skill_c3_s3": "ИИ-процессы & Автоматизация",
    "skill_c3_b3": "Ежедневно",
    "skill_c4_badge": "04 // КОММУНИКАЦИЯ",
    "skill_c4_title": "Языки & Коммуникация",
    "skill_c4_s1": "Украинский",
    "skill_c4_b1": "Родной",
    "skill_c4_s2": "Польский (2.5 г. в ЕС)",
    "skill_c4_b2": "B2 Свободный",
    "skill_c4_s3": "Английский (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "ПРЯМАЯ СВЯЗЬ",
    "contact_title": "ГОТОВЫ К СОТРУДНИЧЕСТВУ?",
    "contact_sub": "Открыт для операционного партнерства (COO), продуктового дизайна и масштабных удаленных задач. Напишите мне напрямую:",
    "tg_title": "Написать в Telegram",
    "tg_sub": "Быстрая прямая связь: @mikolazozul",
    "mail_title": "Написать на Email",
    "mail_sub": "Подробные предложения: mikolazozul@gmail.com",
    "links_title": "Личные ссылки и QR",
    "links_sub": "Быстрый хаб контактов и социальных сетей",
    "copy_btn": "Копировать ⧉",
    "copied_tg": "Telegram @mikolazozul скопирован!",
    "copied_mail": "Email mikolazozul@gmail.com скопирован!",
    "qr_btn_text": "Показать QR-код страницы",
    "footer_links": "Личные ссылки",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Отсканируйте смартфоном для мгновенного сохранения контактов",
    "qr_modal_close": "Закрыть окно",
    "form_name_lbl": "Ваше имя / Компания",
    "form_name_ph": "Александр / Tech Agency",
    "form_email_lbl": "Ваш Email или Telegram",
    "form_email_ph": "alex@company.com или @username",
    "form_msg_lbl": "Сообщение",
    "form_msg_ph": "Расскажите о вашем проекте или предложении...",
    "form_submit_btn": "Отправить сообщение →",
    "copied_toast": "Скопировано в буфер обмена!",
    "footer_copy": "© 2026 Микола Зозуль. Все права защищены. Удаленно • Готов к релокации."
  },
  "it": {
    "nav_about": "Profilo",
    "nav_exp": "Esperienza & COO",
    "nav_projects": "Progetti",
    "nav_dream": "Filosofia D.R.E.A.M.",
    "nav_skills": "Competenze",
    "nav_contact": "Contatto",
    "nav_links_btn": "Link Personali ↗",
    "hero_status": "IN CERCA ATTIVA DI LAVORO // REMOTO GLOBALE • APERTO AL TRASFERIMENTO",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERAZIONI",
    "hero_role_designer": "SENIOR PRODUCT DESIGNER",
    "hero_lead": "Leader operativo collaudato nella gestione di crisi (2 anni come COO) e Product Designer full-stack. Combino leadership strategica di partnership con design digitale di livello mondiale per SaaS e scaleup.",
    "hero_cta_projects": "Esplora Progetti ↓",
    "hero_cta_contact": "Scrivimi su Telegram ↗",
    "stat_exp_val": "2 ANNI",
    "stat_exp_lbl": "Esperienza di leadership Ex-COO",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Città e Partner Istituzionali",
    "stat_age_val": "23 ANNI",
    "stat_age_lbl": "EST. 2003 / Remoto • Trasferimento",
    "hero_badge_loc": "ALPI SVIZZERE // VISIONE GLOBALE",
    "hero_badge_name": "MYKOLA ZOZUL",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "slit1_badge": "DISCIPLINA // 2024",
    "slit1_title": "POLONIA // RESILIENZA",
    "slit1_sub": "Lavoro in magazzino in Polonia, 2024 — Fondamento di resistenza fisica, disciplina e umiltà operativa.",
    "slit2_badge": "VISION // EUROPA",
    "slit2_title": "ALPI SVIZZERE // SCALA",
    "slit2_sub": "Ampiezza di visione, pensiero strategico e ambizione globale senza confini.",
    "slit3_badge": "OPERAZIONI // REMOTO",
    "slit3_title": "FOCUS OPERATIVO // SISTEMI",
    "slit3_sub": "Processi asincroni, gestione documentale trasparente e leadership operativa da remoto al 100%.",
    "slit4_badge": "CREATIVITÀ // PRODOTTI",
    "slit4_title": "PRODUCT CRAFT // ARCHITETTURA",
    "slit4_sub": "Dalla visione alla consegna finale: Figma, Next.js, integrazioni AI e interfacce premium.",
    "about_tag": "STORIA & FILOSOFIA",
    "about_title": "OPERATORE AD ALTA LEVA // CREATORE DIGITALE",
    "about_p1": "All'età di 23 anni unisco due ruoli rari ma sinergici: <b>Direttore Operativo (COO)</b> con 2 anni di leadership sul campo nella gestione logistica di crisi e <b>Senior Product & UI/UX Designer</b> con un senso estetico raffinato e padronanza del codice frontend.",
    "about_p2": "Nel 2024 ho lavorato in un magazzino logistico in Polonia — una scelta intenzionale per forgiare una disciplina incrollabile e comprendere le operazioni di prima linea prima di guidare sistemi aziendali su larga scala.",
    "about_p3": "Lavoro al <b>100% da remoto in tutto il mondo</b> e sono completamente aperto al trasferimento quando necessario. Gestisco la complessità operativa con trasparenza e realizzo prodotti digitali che attraggono investitori e clienti.",
    "exp_tag": "PERCORSO PROFESSIONALE",
    "exp_title": "LEADERSHIP OPERATIVA & CREAZIONE PRODOTTI",
    "exp_sub": "Comprovata esperienza nella gestione di crisi, partnership istituzionali e sviluppo di prodotti digitali da 0 a 1.",
    "exp1_role": "Chief Operating Officer (COO) & Direttore Relazioni Partner",
    "exp1_company": "Organizzazione Umanitaria Internazionale «Not Indifferent Squad»",
    "exp1_period": "2024 — 2026 (2 ANNI) // REMOTO",
    "exp1_p": "Leadership operativa a tutto tondo per una delle principali organizzazioni di risposta alla crisi. Coordinamento logistico transfrontaliero con oltre 100 municipalità e donatori istituzionali europei.",
    "exp1_li1": "Direzione e ottimizzazione delle operazioni quotidiane e dei flussi logistici su scala nazionale e internazionale.",
    "exp1_li2": "Negoziazione e gestione di partnership strategiche con centinaia di autorità comunali e donatori aziendali.",
    "exp1_li3": "Sviluppo di reportistica finanziaria trasparente, documentazione standard (SOP) e sistemi asincroni.",
    "exp2_role": "Fondatore dello Studio & Direttore Soluzioni Web",
    "exp2_company": "Vertex Studio — Digital Craftsmanship & AI Solutions",
    "exp2_period": "2024 — PRESENTE // REMOTO",
    "exp2_p": "Creazione di siti web ad alte prestazioni, sistemi di design e soluzioni basate sull'IA per clienti internazionali e startup innovative.",
    "exp2_li1": "Progettazione e sviluppo frontend moderno utilizzando Next.js, Tailwind CSS e WebGL.",
    "exp2_li2": "Integrazione di flussi automatizzati di intelligenza artificiale per ottimizzare l'acquisizione clienti.",
    "exp2_li3": "Consulenza strategica sul posizionamento del brand e ottimizzazione del tasso di conversione.",
    "exp3_role": "Creatore di Prodotto & Fondatore",
    "exp3_company": "English Flow — SaaS EdTech integrato con Notion",
    "exp3_period": "2024 — PRESENTE // REMOTO (EARLY BETA)",
    "exp3_p": "Sviluppo completo da zero di un servizio web innovativo per l'apprendimento linguistico tramite database Notion e algoritmi di ripetizione spaziata.",
    "exp3_li1": "Architettura completa del prodotto, integrazione API Notion ufficiale e gestione database utenti.",
    "exp3_li2": "Progettazione UI/UX ad alta usabilità e test di validazione con la prima coorte di utenti beta.",
    "exp4_role": "Senior UI/UX Designer & Consulente Digitale",
    "exp4_company": "Progetti Freelance & Consulenza Globale",
    "exp4_period": "2022 — PRESENTE // REMOTO",
    "exp4_p": "Design di interfacce complesse, sistemi di design scalabili in Figma e prototipazione per prodotti mobile e desktop.",
    "exp4_li1": "Sviluppo di Design Token, componenti avanzati e architettura dell'informazione.",
    "exp4_li2": "Creazione di motion design e prototipi interattivi ad alta fedeltà.",
    "exp5_role": "Esperienza Logistica & Fondamento di Disciplina",
    "exp5_company": "Centro di Distribuzione Merci // Polonia",
    "exp5_period": "2024 // POLONIA (IN PRESENZA)",
    "exp5_p": "Lavoro sul campo nei centri logistici in Polonia. Esperienza vissuta con orgoglio che ha consolidato un'etica del lavoro impeccabile e resistenza fisica.",
    "exp5_li1": "Esecuzione rapida e disciplinata di standard operativi sotto pressione temporale.",
    "exp5_li2": "Comprensione diretta delle sfide dei team sul campo e dell'importanza della leadership empatica.",
    "exp_tag_crisis_ops": "Operazioni di Crisi",
    "exp_tag_cross_scale": "Scalabilità",
    "exp_tag_fin_rep": "Report Finanziari",
    "exp_tag_agency_founder": "Fondatore Studio",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Sistemi UI/UX",
    "exp_tag_ai_auto": "Automazione IA",
    "exp_tag_global_rem": "Remoto Globale",
    "exp_tag_prod_arch": "Architettura Prodotto",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Ripetizione Spaziata",
    "exp_tag_fullstack_proto": "Prototipo Full-Stack",
    "exp_tag_figma_tok": "Token Figma",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "App Mobili",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "PROGETTI SELEZIONATI",
    "proj_title": "PRODOTTI E ASSET DIGITALI",
    "proj_sub": "Esecuzione concreta: studio digitale indipendente e piattaforma SaaS EdTech proprietaria.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "STUDIO DIGITALE // NEXT.JS // IA // BRANDING",
    "proj1_desc": "Studio digitale d'élite. Realizzazione di siti performanti, sistemi di design e piattaforme potenziate dall'IA dalla concezione al lancio.",
    "proj1_btn": "Visita il sito ↗",
    "proj1_status_tag": "● LIVE IN PRODUZIONE",
    "proj2_title": "English Flow — Apprendimento integrato con Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Servizio SaaS per l'apprendimento rapido dei vocaboli. Connessione diretta con i database Notion degli utenti e algoritmi scientifici di ripetizione spaziata.",
    "proj2_btn": "Apri la versione beta ↗",
    "proj2_beta_badge": "● PRIMA BETA",
    "dream_tag": "FILOSOFIA OPERATIVA",
    "dream_title": "IL FRAMEWORK D.R.E.A.M.",
    "dream_sub": "I principi cardine che guidano le mie decisioni e la leadership del team:",
    "dream_d_title": "Discipline (Disciplina)",
    "dream_d_desc": "I sistemi superano sempre la motivazione casuale. Routine rigorose e chiare garantiscono standard costantemente elevati.",
    "dream_r_title": "Routine & Resilience (Resilienza)",
    "dream_r_desc": "Capacità di mantenere la lucidità nel caos e risolvere con serenità crisi logistiche complesse sotto forte pressione.",
    "dream_e_title": "Execution & Empathy (Esecuzione & Empatia)",
    "dream_e_desc": "Leadership empatica orientata alle persone unita a una meticolosa intransigenza sui risultati finali.",
    "dream_a_title": "Adaptability (Adattabilità)",
    "dream_a_desc": "Apprendimento immediato di nuovi strumenti e tecnologie (modelli di IA, framework moderni, dinamiche di mercato globali).",
    "dream_m_title": "Mentality (Mentalità di Eccellenza)",
    "dream_m_desc": "Stay Hungry. Ambizione continua, ricerca della perfezione nei dettagli e superamento costante dei propri limiti.",
    "slit1_num": "// 01 RESILIENZA",
    "slit2_num": "// 02 VISIONE",
    "slit3_num": "// 03 SISTEMI",
    "slit4_num": "// 04 PRODOTTO",
    "skills_tag": "STACK TECNOLOGICO & STRUMENTI",
    "skills_title": "COMPETENZE CHIAVE",
    "skills_sub": "Una combinazione rara di leadership esecutiva, sensibilità estetica e padronanza tecnica contemporanea.",
    "skill_c1_badge": "01 // LEADERSHIP",
    "skill_c1_title": "Operazioni & Gestione COO",
    "skill_c1_s1": "Gestione di Crisi & Logistica",
    "skill_c1_b1": "2 anni COO",
    "skill_c1_s2": "Relazioni di Partnership & Istituzioni",
    "skill_c1_b2": "100+ Partner",
    "skill_c1_s3": "Sistemi Asincroni & SOP",
    "skill_c1_b3": "Avanzato",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "Product Design UI/UX",
    "skill_c2_s1": "Figma (Design Systems & Token)",
    "skill_c2_b1": "Mastery",
    "skill_c2_s2": "Prodotti Web & Mobile",
    "skill_c2_b2": "Full-Cycle",
    "skill_c2_s3": "Prototipazione & Micro-Animazioni",
    "skill_c2_b3": "Avanzato",
    "skill_c3_badge": "03 // TECNOLOGIA",
    "skill_c3_title": "Tecnologia & IA",
    "skill_c3_s1": "Ecosistema Notion & API",
    "skill_c3_b1": "SaaS Creator",
    "skill_c3_s2": "Next.js & Stack Web",
    "skill_c3_b2": "Pratico",
    "skill_c3_s3": "Flussi di Automazione IA",
    "skill_c3_b3": "Quotidiano",
    "skill_c4_badge": "04 // COMUNICAZIONE",
    "skill_c4_title": "Lingue & Comunicazione",
    "skill_c4_s1": "Ucraino",
    "skill_c4_b1": "Madrelingua",
    "skill_c4_s2": "Polacco (2,5 anni in UE)",
    "skill_c4_b2": "B2 Fluente",
    "skill_c4_s3": "Inglese (Tecnico & Business)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "CONTATTO DIRETTO",
    "contact_title": "PRONTO A COLLABORARE?",
    "contact_sub": "Aperto a ruoli operativi (COO), direzione del design di prodotto e sfide ad alto impatto da remoto in tutto il mondo. Contattami direttamente:",
    "tg_title": "Scrivi su Telegram",
    "tg_sub": "Linea diretta istantanea: @mikolazozul",
    "mail_title": "Invia un'Email",
    "mail_sub": "Proposte formali: mikolazozul@gmail.com",
    "links_title": "Link Personali & QR",
    "links_sub": "Hub rapido di contatti e profili social",
    "copy_btn": "Copia ⧉",
    "copied_tg": "Telegram @mikolazozul copiato!",
    "copied_mail": "Email mikolazozul@gmail.com copiata!",
    "qr_btn_text": "Mostra il QR Code della pagina",
    "footer_links": "Link Personali",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Scansiona con lo smartphone per salvare istantaneamente i contatti verificati",
    "qr_modal_close": "Chiudi finestra",
    "form_name_lbl": "Nome / Azienda",
    "form_name_ph": "Marco / Tech Scaleup",
    "form_email_lbl": "Email o contatto Telegram",
    "form_email_ph": "marco@azienda.it o @username",
    "form_msg_lbl": "Messaggio / Proposta",
    "form_msg_ph": "Descrivi il tuo progetto o proposta di collaborazione...",
    "form_submit_btn": "Invia messaggio →",
    "copied_toast": "Copiato negli appunti!",
    "footer_copy": "© 2026 Mykola Zozul. Tutti i diritti riservati. 100% Remoto • Pronto al trasferimento.",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 anni. Ex Direttore Operativo (Ex-COO) con 2 anni di leadership esecutiva nella scalabilità di partnership umanitarie e logistica transfrontaliera, nonché Product Designer. Attualmente in cerca attiva di nuove opportunità esecutive e di prodotto. 100% Remoto • Pronto al trasferimento.",
    "hero_cta_tg": "Messaggio su Telegram →",
    "hero_cta_work": "Esplora Progetti ↓",
    "hero_cta_links": "Link Personali ↗",
    "slits_tag": "PROSPETTIVE // MULTI-VISUALE",
    "slits_title": "SFACCETTATURE DI VISIONE & DISCIPLINA",
    "slits_sub": "Ogni sfaccettatura del mio percorso forma il carattere: dalla scala operativa e tenacia fisica fino alla precisione del design digitale.",
    "slit1_desc": "2,5 anni vissuti in Polonia, assimilando la cultura lavorativa europea e il coordinamento internazionale.",
    "slit2_desc": "Chiarezza mentale, altitudine strategica ed esecuzione serena durante situazioni critiche.",
    "slit3_desc": "Artigianato digitale, design system evoluti e deploy di esperienze web mission-critical.",
    "slit4_desc": "Rigore quotidiano, responsabilità di squadra e trasformazione di visioni audaci in esecuzione impeccabile.",
    "coo_role": "Direttore Operativo & Relazioni Partner (COO)",
    "coo_org": "Organizzazione Umanitaria Internazionale “Not Indifferent Squad”",
    "coo_period": "2 anni di leadership • Concluso",
    "coo_desc": "Leadership operativa completa: logistica di emergenza, coordinamento transfrontaliero e gestione delle partnership strategiche.",
    "coo_bullet_1": "Coordinamento di partnership strategiche con centinaia di municipalità e dozzine di donatori aziendali.",
    "coo_bullet_2": "Sviluppo di roadmap operative e gestione di team multidisciplinari ad alto rendimento.",
    "coo_bullet_3": "Tenuta di una contabilità trasparente, reportistica rigorosa e audit operativi per i partner europei.",
    "vertex_role": "Fondatore & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digital Agency)",
    "vertex_period": "2024 — Presente",
    "vertex_desc": "Fondazione e direzione di uno studio digitale d'avanguardia: siti Next.js ad alte prestazioni, sistemi di design e automazione AI.",
    "englishflow_role": "Creatore di Prodotto & Developer",
    "englishflow_org": "English Flow (SaaS integrato con Notion)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Sviluppo di un'applicazione web per l'apprendimento vocaboli con sincronizzazione database Notion e ripetizione spaziata.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Progettazione di interfacce web e mobili, design system scalabili, prototipi interattivi e identità visive per clienti globali.",
    "volunteer_role": "Graphic Designer (Volontario)",
    "volunteer_org": "Shliakh Volontera UA (Remoto)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Creazione di campagne visive e materiali digitali a supporto di iniziative civiche e umanitarie.",
    "motion_role": "Video Editing & Motion Design",
    "motion_org": "Canali Social Media & Agenzie",
    "motion_period": "2020 — 2021",
    "motion_desc": "Montaggio video, motion graphics e produzione di contenuti dinamici con Premiere Pro e After Effects.",
    "warehouse_note": "<strong>Esperienza in Polonia (Lavoro in magazzino, 2024):</strong> Lavoro operativo nella logistica di magazzino in Polonia (picking, packing, smistamento scorte). Ha forgiato una tenacia fisica incrollabile e una solida etica del lavoro.",
    "exp_tag_coo_lead": "Leadership COO",
    "exp_tag_crisis_log": "Logistica di Crisi",
    "exp_tag_strat_alliances": "Alleanze Strategiche",
    "dream_hungry_tag": "// VISIONE & AMBIZIONE",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Non accontentarsi mai. Ogni sfida operativa è l'opportunità per costruire un sistema più resiliente e scalabile."
  },
  "pt": {
    "nav_about": "Sobre",
    "nav_exp": "Experiência & COO",
    "nav_projects": "Projetos",
    "nav_dream": "Filosofia D.R.E.A.M.",
    "nav_skills": "Habilidades",
    "nav_contact": "Contato",
    "nav_links_btn": "Links Pessoais ↗",
    "hero_status": "EM BUSCA ATIVA DE EMPREGO // REMOTO • ABERTO A RELOCALIZAÇÃO",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERAÇÕES",
    "hero_role_designer": "SENIOR PRODUCT DESIGNER",
    "hero_lead": "Líder de operações comprovado em crises (2 anos como COO) e Product Designer full-stack. Uno visão estratégica de parcerias com craft digital de padrão global para scaleups e SaaS.",
    "hero_cta_projects": "Ver Projetos ↓",
    "hero_cta_contact": "Mensagem no Telegram ↗",
    "stat_exp_val": "2 ANOS",
    "stat_exp_lbl": "Experiência de liderança Ex-COO",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Cidades e Parceiros Globais",
    "stat_age_val": "23 ANOS",
    "stat_age_lbl": "EST. 2003 / Remoto • Relocalização",
    "hero_badge_loc": "ALPES SUÍÇOS // VISÃO GLOBAL",
    "hero_badge_name": "MYKOLA ZOZUL",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "slit1_badge": "DISCIPLINA // 2024",
    "slit1_title": "POLÔNIA // RESILIÊNCIA",
    "slit1_sub": "Trabalho em armazém logístico na Polônia, 2024 — Base sólida de vigor físico, disciplina e humildade operacional.",
    "slit2_badge": "VISÃO // EUROPA",
    "slit2_title": "ALPES SUÍÇOS // ESCALA",
    "slit2_sub": "Amplitude de horizonte, visão sistêmica e ambição profissional sem barreiras geográficas.",
    "slit3_badge": "OPERAÇÕES // REMOTO",
    "slit3_title": "FOCO OPERACIONAL // SISTEMAS",
    "slit3_sub": "Comunicação assíncrona, documentação rigorosa e liderança de equipes 100% remota.",
    "slit4_badge": "PRODUTO // DESIGN",
    "slit4_title": "PRODUCT CRAFT // ARQUITETURA",
    "slit4_sub": "Da estratégia ao código: Figma, Next.js, IA generativa e interfaces refinadas.",
    "about_tag": "HISTÓRIA & PRINCÍPIOS",
    "about_title": "OPERADOR DE ALTA ALAVANCAGEM // CRIADOR DIGITAL",
    "about_p1": "Aos 23 anos, atuo no cruzamento raro de duas disciplinas fundamentais: <b>Diretor de Operações (COO)</b> com 2 anos de experiência liderando logística emergencial sob pressão extrema e <b>Senior Product & UI/UX Designer</b> com rigor visual e execução frontend.",
    "about_p2": "Em 2024, trabalhei intencionalmente em logística física na Polônia — experiência que desenvolveu minha resiliência inabalável e entendimento profundo de processos da base antes de gerenciar grandes ecossistemas.",
    "about_p3": "Atuo <b>100% remotamente para o mundo todo</b> e estou pronto para relocalização presencial caso necessário. Simplifico operações complexas e construo ativos digitais com alto poder de conversão.",
    "exp_tag": "TRAJETÓRIA PROFISSIONAL",
    "exp_title": "LIDERANÇA OPERACIONAL & CRIAÇÃO DE PRODUTOS",
    "exp_sub": "Resultados concretos em gestão de crises, parcerias institucionais e lançamento de produtos de 0 a 1.",
    "exp1_role": "Chief Operating Officer (COO) & Diretor de Parcerias",
    "exp1_company": "Organização Humanitária Internacional «Not Indifferent Squad»",
    "exp1_period": "2024 — 2026 (2 ANOS) // REMOTO",
    "exp1_p": "Liderança operacional integral de uma organização de auxílio em larga escala. Gestão logística e relações com mais de 100 municípios e doadores corporativos na Europa.",
    "exp1_li1": "Estruturação e otimização diária de processos logísticos críticos transfronteiriços.",
    "exp1_li2": "Coordenação de parcerias com centenas de entidades governamentais e corporativas.",
    "exp1_li3": "Implementação de prestação de contas transparente, manuais operacionais (SOPs) e fluxos assíncronos.",
    "exp2_role": "Líder de Estúdio & Arquiteto de Soluções Web",
    "exp2_company": "Vertex Studio — Digital Craftsmanship & AI Solutions",
    "exp2_period": "2024 — PRESENTE // REMOTO",
    "exp2_p": "Desenvolvimento de sites de alta performance, design systems e ferramentas potencializadas por IA para clientes globais.",
    "exp2_li1": "Engenharia frontend moderna com Next.js, Tailwind CSS e WebGL.",
    "exp2_li2": "Automatização de funis e fluxos inteligentes com modelos de IA de última geração.",
    "exp2_li3": "Consultoria em posicionamento de marca e arquitetura de conversão.",
    "exp3_role": "Criador de Produto & Fundador",
    "exp3_company": "English Flow — SaaS EdTech Integrado ao Notion",
    "exp3_period": "2024 — PRESENTE // REMOTO (EARLY BETA)",
    "exp3_p": "Concepção e desenvolvimento completo de um serviço web para memorização de vocabulário conectando bancos de dados do Notion com algoritmos de repetição espaçada.",
    "exp3_li1": "Arquitetura técnica, integração oficial com Notion API e sistema de autenticação segura.",
    "exp3_li2": "Design de interface centrado na retenção do usuário e testes com usuários beta iniciais.",
    "exp4_role": "Senior UI/UX Designer & Consultor",
    "exp4_company": "Projetos Freelance & Consultoria Internacional",
    "exp4_period": "2022 — PRESENTE // REMOTO",
    "exp4_p": "Desenvolvimento de interfaces robustas, design systems escaláveis no Figma e protótipos de alta fidelidade para plataformas web e mobile.",
    "exp4_li1": "Criação de bibliotecas de tokens, microinterações e wireframes detalhados.",
    "exp4_li2": "Motion design e validação contínua de usabilidade.",
    "exp5_role": "Fundação Operacional & Disciplina",
    "exp5_company": "Centro de Distribuição Logística // Polônia",
    "exp5_period": "2024 // POLÔNIA (PRESENCIAL)",
    "exp5_p": "Atuação no terreno logístico na Polônia. Base fundamental de resistência física, humildade e disciplina diária.",
    "exp5_li1": "Cumprimento rigoroso de cronogramas e tolerância zero a falhas em ambiente dinâmico.",
    "exp5_li2": "Empatia prática com equipes operacionais e clareza na formulação de diretrizes.",
    "exp_tag_crisis_ops": "Operações em Crise",
    "exp_tag_cross_scale": "Escalabilidade",
    "exp_tag_fin_rep": "Relatórios Financeiros",
    "exp_tag_agency_founder": "Fundador de Agência",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Design Systems",
    "exp_tag_ai_auto": "Automação com IA",
    "exp_tag_global_rem": "Remoto Global",
    "exp_tag_prod_arch": "Arquitetura de Produto",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Repetição Espaçada",
    "exp_tag_fullstack_proto": "Protótipo Full-Stack",
    "exp_tag_figma_tok": "Tokens Figma",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Apps Mobile",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "PROJETOS SELECIONADOS",
    "proj_title": "PRODUTOS E ATIVOS DIGITAIS",
    "proj_sub": "Execução prática: estúdio digital independente e plataforma SaaS EdTech inovadora.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "ESTÚDIO DIGITAL // NEXT.JS // IA // BRANDING",
    "proj1_desc": "Estúdio digital boutique. Criação de sites rápidos, design systems e aplicações com IA do conceito ao ar.",
    "proj1_btn": "Acessar site ↗",
    "proj1_status_tag": "● NO AR / PRODUÇÃO",
    "proj2_title": "English Flow — Aprendizado integrado ao Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "SaaS de aprendizagem de idiomas. Conecte sua base do Notion para treinar vocabulário com método científico de repetição espaçada.",
    "proj2_btn": "Acessar versão beta ↗",
    "proj2_beta_badge": "● BETA INICIAL",
    "dream_tag": "FILOSOFIA OPERACIONAL",
    "dream_title": "FRAMEWORK D.R.E.A.M.",
    "dream_sub": "Os pilares fundamentais que guiam minhas tomadas de decisão e liderança:",
    "dream_d_title": "Discipline (Disciplina)",
    "dream_d_desc": "Sistemas consistentes sempre superam a motivação efêmera. Rotinas disciplinadas asseguram resultados excelentes.",
    "dream_r_title": "Routine & Resilience (Resiliência)",
    "dream_r_desc": "Calma e foco para estruturar o caos e resolver crises logísticas complexas sob alta pressão.",
    "dream_e_title": "Execution & Empathy (Execução & Empatia)",
    "dream_e_desc": "Liderança atenciosa e voltada para as pessoas, combinada com exigência irredutível de qualidade final.",
    "dream_a_title": "Adaptability (Adaptabilidade)",
    "dream_a_desc": "Capacidade de dominar novas ferramentas e tecnologias velozmente (IA, novos frameworks, mercados globais).",
    "dream_m_title": "Mentality (Mentalidade Vencedora)",
    "dream_m_desc": "Stay Hungry. Ambição incansável, atenção obsessiva aos detalhes e busca constante pelos mais altos padrões mundiais.",
    "slit1_num": "// 01 RESILIÊNCIA",
    "slit2_num": "// 02 VISÃO",
    "slit3_num": "// 03 SISTEMAS",
    "slit4_num": "// 04 PRODUTO",
    "skills_tag": "FERRAMENTAS & STACK",
    "skills_title": "HABILIDADES PRINCIPAIS",
    "skills_sub": "Equilíbrio singular entre liderança executiva, gosto estético refinado e engenharia de software.",
    "skill_c1_badge": "01 // LIDERANÇA",
    "skill_c1_title": "Operações & Liderança COO",
    "skill_c1_s1": "Gestão de Crises & Logística",
    "skill_c1_b1": "2 anos COO",
    "skill_c1_s2": "Relações Governamentais & Parceiros",
    "skill_c1_b2": "100+ Entidades",
    "skill_c1_s3": "Sistemas Assíncronos & SOPs",
    "skill_c1_b3": "Avançado",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "Product Design UI/UX",
    "skill_c2_s1": "Figma (Tokens & Design Systems)",
    "skill_c2_b1": "Domínio",
    "skill_c2_s2": "Produtos Web & Mobile",
    "skill_c2_b2": "Ciclo Completo",
    "skill_c2_s3": "Prototipagem & Microinterações",
    "skill_c2_b3": "Avançado",
    "skill_c3_badge": "03 // TECNOLOGIA",
    "skill_c3_title": "Tecnologia & IA",
    "skill_c3_s1": "Ecossistema Notion & APIs",
    "skill_c3_b1": "Criador SaaS",
    "skill_c3_s2": "Next.js & Stack Web",
    "skill_c3_b2": "Prático",
    "skill_c3_s3": "Automação com Modelos de IA",
    "skill_c3_b3": "Diário",
    "skill_c4_badge": "04 // COMUNICAÇÃO",
    "skill_c4_title": "Idiomas & Comunicação",
    "skill_c4_s1": "Ucraniano",
    "skill_c4_b1": "Nativo",
    "skill_c4_s2": "Polonês (2,5 anos na UE)",
    "skill_c4_b2": "B2 Fluente",
    "skill_c4_s3": "Inglês (Técnico & Negócios)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "CONTATO DIRETO",
    "contact_title": "PRONTO PARA COLABORAR?",
    "contact_sub": "Aberto a cargos executivos de operações (COO), liderança de produto e desafios remotos de alto impacto. Envie uma mensagem direta:",
    "tg_title": "Mensagem no Telegram",
    "tg_sub": "Canal rápido e direto: @mikolazozul",
    "mail_title": "Enviar Email",
    "mail_sub": "Propostas formais: mikolazozul@gmail.com",
    "links_title": "Links Pessoais & QR",
    "links_sub": "Acesso rápido a contatos e redes sociais",
    "copy_btn": "Copiar ⧉",
    "copied_tg": "Telegram @mikolazozul copiado!",
    "copied_mail": "Email mikolazozul@gmail.com copiado!",
    "qr_btn_text": "Ver QR Code da página",
    "footer_links": "Links Pessoais",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Aponte a câmera do seu celular para salvar os contatos verificados",
    "qr_modal_close": "Fechar janela",
    "form_name_lbl": "Seu Nome / Empresa",
    "form_name_ph": "Carlos / Scaleup Tech",
    "form_email_lbl": "Email ou usuário no Telegram",
    "form_email_ph": "carlos@empresa.com ou @usuario",
    "form_msg_lbl": "Mensagem / Proposta",
    "form_msg_ph": "Conte sobre seu projeto ou oportunidade de parceria...",
    "form_submit_btn": "Enviar mensagem →",
    "copied_toast": "Copiado para a área de transferência!",
    "footer_copy": "© 2026 Mykola Zozul. Todos os direitos reservados. 100% Remoto • Pronto para relocalização.",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 anos. Ex-Diretor de Operações (Ex-COO) com 2 anos de experiência liderando logística emergencial e parcerias, e Product Designer. Atualmente em busca ativa de novas oportunidades (Operations Lead / COO / Founding Designer). 100% Remoto • Pronto para relocalização.",
    "hero_cta_tg": "Mensagem no Telegram →",
    "hero_cta_work": "Ver Projetos ↓",
    "hero_cta_links": "Links Pessoais ↗",
    "slits_tag": "PERSPECTIVAS // MULTI-VISUAL",
    "slits_title": "FACETAS DE VISÃO & DISCIPLINA",
    "slits_sub": "Cada etapa do meu caminho molda meu caráter: da escala operacional e vigor físico à precisão do design digital.",
    "slit1_desc": "2,5 anos vivendo na Polônia, integrando a cultura de trabalho europeia e coordenação internacional.",
    "slit2_desc": "Clareza mental, altitude estratégica e execução serena em situações de alta pressão.",
    "slit3_desc": "Craft digital, design systems modernos e deploy de produtos web críticos.",
    "slit4_desc": "Rigor diário, responsabilidade de equipe e transformação de visões arrojadas em realidade.",
    "coo_role": "Diretor de Operações & Relações de Parceria (COO)",
    "coo_org": "Organização Humanitária Internacional “Not Indifferent Squad”",
    "coo_period": "2 anos de liderança • Concluído",
    "coo_desc": "Liderança operacional completa de uma fundação internacional. Logística de resposta rápida e coordenação de auxílio emergencial.",
    "coo_bullet_1": "Coordenação de parcerias estratégicas com centenas de municípios e dezenas de doadores corporativos.",
    "coo_bullet_2": "Planejamento de escalabilidade operacional e gestão de equipes multidisciplinares.",
    "coo_bullet_3": "Auditoria financeira transparente e relatórios executivos para parceiros europeus.",
    "vertex_role": "Fundador & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Agência Digital)",
    "vertex_period": "2024 — Presente",
    "vertex_desc": "Fundação e direção de estúdio digital: sites Next.js de alto desempenho, design systems e automações de IA.",
    "englishflow_role": "Criador de Produto & Developer",
    "englishflow_org": "English Flow (SaaS com Notion)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Desenvolvimento de aplicativo web de memorização de vocabulário com sincronização direta do Notion e repetição espaçada.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Criação de interfaces web e mobile personalizadas, design systems escaláveis e identidades visuais para clientes globais.",
    "volunteer_role": "Designer Gráfico (Volontário)",
    "volunteer_org": "Shliakh Volontera UA (Remoto)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Design de campanhas visuais e materiais públicos para iniciativas voluntárias ucranianas pro bono.",
    "motion_role": "Edição de Vídeo & Motion Design",
    "motion_org": "Canais de Mídia Social & Agências",
    "motion_period": "2020 — 2021",
    "motion_desc": "Edição de vídeo, gráficos em movimento e produção de conteúdo dinâmico com Premiere Pro e After Effects.",
    "warehouse_note": "<strong>Experiência na Polônia (Armazém, 2024):</strong> Logística física em armazém na Polônia (separação, embalagem, controle de estoque). Forjou vigor físico inabalável e forte ética de trabalho.",
    "exp_tag_coo_lead": "Liderança COO",
    "exp_tag_crisis_log": "Logística em Crise",
    "exp_tag_strat_alliances": "Alianças Estratégicas",
    "dream_hungry_tag": "// VISÃO & AMBIÇÃO",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Nunca se acomodar. Cada desafio operacional é a oportunidade de construir um sistema mais resiliente e escalável."
  },
  "nl": {
    "nav_about": "Over mij",
    "nav_exp": "Ervaring & COO",
    "nav_projects": "Projecten",
    "nav_dream": "D.R.E.A.M. Filosofie",
    "nav_skills": "Vaardigheden",
    "nav_contact": "Contact",
    "nav_links_btn": "Persoonlijke Links ↗",
    "hero_status": "ACTIEF OP ZOEK NAAR WERK // OP AFSTAND • BEREID TOT VERHUIZING",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_designer": "SENIOR PRODUCT DESIGNER",
    "hero_lead": "Crisisbestendige operationele leider (2 jaar als COO) en full-stack Product Designer. Ik combineer strategische partnercoördinatie met hoogwaardig digitaal design voor SaaS en scale-ups.",
    "hero_cta_projects": "Bekijk Projecten ↓",
    "hero_cta_contact": "Stuur een bericht op Telegram ↗",
    "stat_exp_val": "2 JAAR",
    "stat_exp_lbl": "Ex-COO Leiderschapservaring",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Steden & Institutionele Partners",
    "stat_age_val": "23 JAAR",
    "stat_age_lbl": "EST. 2003 / Op afstand • Verhuizing",
    "hero_badge_loc": "ZWITSERSE ALPEN // WERELDVISIE",
    "hero_badge_name": "MYKOLA ZOZUL",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "slit1_badge": "DISCIPLINE // 2024",
    "slit1_title": "POLEN // VEERKRACHT",
    "slit1_sub": "Magazijnwerk in Polen, 2024 — Fysiek uithoudingsvermogen, discipline en nuchtere werkethiek.",
    "slit2_badge": "VISIE // EUROPA",
    "slit2_title": "ZWITSERSE ALPEN // SCHAAL",
    "slit2_sub": "Brede horizon, strategisch inzicht en grenzeloze professionele ambitie.",
    "slit3_badge": "OPERATIES // OP AFSTAND",
    "slit3_title": "OPERATIONELE FOCUS // SYSTEMEN",
    "slit3_sub": "Asynchrone processen, transparante documentatie en 100% remote leiderschap.",
    "slit4_badge": "PRODUCT // VORMGEVING",
    "slit4_title": "PRODUCT CRAFT // ARCHITECTUUR",
    "slit4_sub": "Van visie tot livegang: Figma, Next.js, AI-workflows en premium interfaces.",
    "about_tag": "VERHAAL & FILOSOFIE",
    "about_title": "HIGH-LEVERAGE OPERATOR // DIGITALE MAKER",
    "about_p1": "Op 23-jarige leeftijd combineer ik twee zeldzame rollen: <b>Chief Operating Officer (COO)</b> met 2 jaar ervaring in het leiden van humanitaire crisislogistiek en <b>Senior Product & UI/UX Designer</b> met uitzonderlijke esthetische en technische vaardigheden.",
    "about_p2": "In 2024 werkte ik doelbewust in een fysiek distributiecentrum in Polen — een ervaring die mijn discipline aanscherpte en mij leerde hoe operaties op de werkvloer werkelijk functioneren.",
    "about_p3": "Ik werk <b>100% op afstand wereldwijd</b> en ben volledig bereid om te verhuizen indien nodig. Ik breng rust in complexe bedrijfsprocessen en ontwerp digitale producten die conversie stimuleren.",
    "exp_tag": "CARRIÈREOVERZICHT",
    "exp_title": "OPERATIONEEL LEIDERSCHAP & PRODUCTCREATIE",
    "exp_sub": "Aantoonbare resultaten in crisismanagement, partnerrelaties en 0-tot-1 productontwikkeling.",
    "exp1_role": "Chief Operating Officer (COO) & Partner Relations Director",
    "exp1_company": "Internationale Humanitaire Organisatie «Not Indifferent Squad»",
    "exp1_period": "2024 — 2026 (2 JAAR) // OP AFSTAND",
    "exp1_p": "Algehele operationele leiding over grootschalige noodhulplogistiek. Coördinatie met meer dan 100 gemeenten en zakelijke donateurs door heel Europa.",
    "exp1_li1": "Opzet en dagelijkse optimalisatie van grensoverschrijdende toeleveringsketens.",
    "exp1_li2": "Onderhandeling en beheer van partnerschappen met publieke instanties en bedrijven.",
    "exp1_li3": "Invoering van transparante financiële verslaglegging, SOP's en asynchrone communicatie.",
    "exp2_role": "Studio-oprichter & Web Solutions Lead",
    "exp2_company": "Vertex Studio — Digital Craftsmanship & AI Solutions",
    "exp2_period": "2024 — HEDEN // OP AFSTAND",
    "exp2_p": "Ontwikkeling van snelle websites, design systems en AI-gedreven platforms voor internationale opdrachtgevers.",
    "exp2_li1": "Moderne frontend engineering met Next.js, Tailwind CSS en WebGL.",
    "exp2_li2": "Integratie van geautomatiseerde AI-workflows voor bedrijfsprocessen.",
    "exp2_li3": "Strategisch advies over merkpositionering en online conversiekracht.",
    "exp3_role": "Productbedenker & Oprichter",
    "exp3_company": "English Flow — Notion-Geïntegreerde EdTech SaaS",
    "exp3_period": "2024 — HEDEN // OP AFSTAND (EARLY BETA)",
    "exp3_p": "Volledige ontwikkeling van een innovatieve webapp voor het leren van talen via eigen Notion-databases met behulp van spaced repetition.",
    "exp3_li1": "Productarchitectuur, officiële Notion API-koppeling en veilige gebruikersinfrastructuur.",
    "exp3_li2": "Intuïtief UI/UX design en gebruikerstests met vroege bètadeelnemers.",
    "exp4_role": "Senior UI/UX Designer & Consultant",
    "exp4_company": "Freelance Projecten & Internationale Klanten",
    "exp4_period": "2022 — HEDEN // OP AFSTAND",
    "exp4_p": "Ontwerp van complexe interfaces, schaalbare design systems in Figma en interactieve prototypes voor web en mobile.",
    "exp4_li1": "Opbouw van design tokens, micro-interacties en gebruikersflows.",
    "exp4_li2": "Motion design en optimalisatie van digitale gebruikerservaringen.",
    "exp5_role": "Fysieke Logistiek & Discipline-basis",
    "exp5_company": "Distributiecentrum // Polen",
    "exp5_period": "2024 // POLEN (OP LOCATIE)",
    "exp5_p": "Operationeel magazijnwerk in Polen. Waardevolle ervaring die mijn fysieke weerbaarheid, nederigheid en toewijding heeft gevormd.",
    "exp5_li1": "Nauwkeurige en stipte uitvoering onder strakke tijdschema's.",
    "exp5_li2": "Inzicht in praktische uitdagingen van operationele teams op de werkvloer.",
    "exp_tag_crisis_ops": "Crisisoperaties",
    "exp_tag_cross_scale": "Schaalvergroting",
    "exp_tag_fin_rep": "Financiële Rapporten",
    "exp_tag_agency_founder": "Studio-oprichter",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "UI/UX Systemen",
    "exp_tag_ai_auto": "AI-automatisering",
    "exp_tag_global_rem": "Wereldwijd Remote",
    "exp_tag_prod_arch": "Productarchitectuur",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Spaced Repetition",
    "exp_tag_fullstack_proto": "Full-Stack Prototype",
    "exp_tag_figma_tok": "Figma Tokens",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Mobiele Apps",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "GESELECTEERDE PROJECTEN",
    "proj_title": "DIGITALE PRODUCTEN EN ASSETS",
    "proj_sub": "Tastbare resultaten: onafhankelijke digitale studio en innovatief EdTech SaaS-product.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITALE STUDIO // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Hoogwaardige digitale studio. Supersnelle websites, design systems en AI-platforms van idee tot live-omgeving.",
    "proj1_btn": "Bezoek website ↗",
    "proj1_status_tag": "● LIVE IN PRODUCTIE",
    "proj2_title": "English Flow — Leren met Notion-koppeling",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Taalleer-SaaS met Notion. Koppel direct uw eigen Notion-database en onthoud woorden dankzij spaced repetition.",
    "proj2_btn": "Bekijk bètaversie ↗",
    "proj2_beta_badge": "● VROEGE BÈTA",
    "dream_tag": "OPERATIONELE FILOSOFIE",
    "dream_title": "HET D.R.E.A.M. FRAMEWORK",
    "dream_sub": "De kernprincipes die mijn leiderschap en besluitvorming bepalen:",
    "dream_d_title": "Discipline (Discipline)",
    "dream_d_desc": "Doordachte systemen winnen het altijd van willekeurige motivatie. Vaste routines leveren continu topprestaties.",
    "dream_r_title": "Routine & Resilience (Veerkracht)",
    "dream_r_desc": "Het vermogen om rust te bewaren in chaos en complexe logistieke knelpunten kalm op te lossen onder druk.",
    "dream_e_title": "Execution & Empathy (Executie & Empathie)",
    "dream_e_desc": "Mensgerichte betrokkenheid gecombineerd met een compromisloze focus op de hoogste kwaliteit van het eindresultaat.",
    "dream_a_title": "Adaptability (Aanpassingsvermogen)",
    "dream_a_desc": "Snelle adoptie van nieuwe technologieën (AI-modellen, moderne frameworks, internationale markten).",
    "dream_m_title": "Mentality (Winnaarsmentaliteit)",
    "dream_m_desc": "Stay Hungry. Onvermoeibare ambitie, oog voor detail en het nastreven van wereldklasse standaarden.",
    "slit1_num": "// 01 VEERKRACHT",
    "slit2_num": "// 02 VISIE",
    "slit3_num": "// 03 SYSTEMEN",
    "slit4_num": "// 04 PRODUCT",
    "skills_tag": "TECH STACK & TOOLS",
    "skills_title": "KERNVAARDIGHEDEN",
    "skills_sub": "De zeldzame balans tussen operationeel leiderschap, esthetisch gevoel en technische beheersing.",
    "skill_c1_badge": "01 // LEIDERSCHAP",
    "skill_c1_title": "Operaties & COO-Management",
    "skill_c1_s1": "Crisismanagement & Logistiek",
    "skill_c1_b1": "2 jaar COO",
    "skill_c1_s2": "Partnerrelaties & Overheid",
    "skill_c1_b2": "100+ Partners",
    "skill_c1_s3": "Asynchrone Werkwijzen & SOPs",
    "skill_c1_b3": "Gevorderd",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "UI/UX Product Design",
    "skill_c2_s1": "Figma (Design Systems & Tokens)",
    "skill_c2_b1": "Meesterschap",
    "skill_c2_s2": "Web & Mobiele Producten",
    "skill_c2_b2": "Volledige cyclus",
    "skill_c2_s3": "Prototyping & Micro-animaties",
    "skill_c2_b3": "Gevorderd",
    "skill_c3_badge": "03 // TECHNOLOGIE",
    "skill_c3_title": "Technologie & AI",
    "skill_c3_s1": "Notion-ecosysteem & API",
    "skill_c3_b1": "SaaS-ontwikkelaar",
    "skill_c3_s2": "Next.js & Moderne Webstack",
    "skill_c3_b2": "Praktijkervaring",
    "skill_c3_s3": "AI-automatisering & Workflows",
    "skill_c3_b3": "Dagelijks",
    "skill_c4_badge": "04 // COMMUNICATIE",
    "skill_c4_title": "Talen & Communicatie",
    "skill_c4_s1": "Oekraïens",
    "skill_c4_b1": "Moedertaal",
    "skill_c4_s2": "Pools (2,5 jaar in de EU)",
    "skill_c4_b2": "B2 Vloeiend",
    "skill_c4_s3": "Engels (Technisch & Zakelijk)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "DIRECT CONTACT",
    "contact_title": "KLAAR VOOR EEN SAMENWERKING?",
    "contact_sub": "Beschikbaar voor COO-rollen, product design leiderschap en uitdagende projecten op afstand wereldwijd. Neem direct contact op:",
    "tg_title": "Stuur een bericht via Telegram",
    "tg_sub": "Snelle directe lijn: @mikolazozul",
    "mail_title": "Stuur een e-mail",
    "mail_sub": "Zakelijke voorstellen: mikolazozul@gmail.com",
    "links_title": "Persoonlijke Links & QR",
    "links_sub": "Contacthub en sociale mediakanalen",
    "copy_btn": "Kopiëren ⧉",
    "copied_tg": "Telegram @mikolazozul gekopieerd!",
    "copied_mail": "E-mail mikolazozul@gmail.com gekopieerd!",
    "qr_btn_text": "Toon pagina-QR-code",
    "footer_links": "Persoonlijke Links",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Scan met uw smartphone om geverifieerde contactgegevens direct op te slaan",
    "qr_modal_close": "Sluit venster",
    "form_name_lbl": "Uw naam / Bedrijf",
    "form_name_ph": "Lars / Tech Scaleup",
    "form_email_lbl": "E-mail of Telegram-gebruikersnaam",
    "form_email_ph": "lars@bedrijf.nl of @gebruiker",
    "form_msg_lbl": "Bericht / Voorstel",
    "form_msg_ph": "Vertel over uw project of mogelijke samenwerking...",
    "form_submit_btn": "Verstuur bericht →",
    "copied_toast": "Gekopieerd naar klembord!",
    "footer_copy": "© 2026 Mykola Zozul. Alle rechten voorbehouden. 100% Remote • Bereid tot verhuizing.",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 jaar oud. Voormalig Chief Operating Officer (Ex-COO) met 2 jaar ervaring in het leiden van humanitaire crisislogistiek en partnerschappen, en Product Designer. Momenteel actief op zoek naar nieuwe uitdagingen (Operations Lead / COO / Founding Designer). 100% Remote • Bereid tot verhuizing.",
    "hero_cta_tg": "Bericht op Telegram →",
    "hero_cta_work": "Bekijk Projecten ↓",
    "hero_cta_links": "Persoonlijke Links ↗",
    "slits_tag": "PERSPECTIEVEN // MULTI-VISUEEL",
    "slits_title": "FACETTEN VAN VISIE & DISCIPLINE",
    "slits_sub": "Elk facet van mijn pad vormt mijn karakter: van operationele schaal en fysieke toewijding tot de fijnste interfaceprecisie.",
    "slit1_desc": "2,5 jaar wonen en werken in Polen, vertrouwd met de Europese werkcultuur en internationale dynamiek.",
    "slit2_desc": "Mentale rust, strategisch overzicht en beheerste executie tijdens cruciale momenten.",
    "slit3_desc": "Digitaal vakmanschap, geavanceerde design systems en lancering van bedrijfskritische webapplicaties.",
    "slit4_desc": "Dagelijkse discipline, teamverantwoordelijkheid en het vertalen van grote ambities naar vlekkeloze resultaten.",
    "coo_role": "Directeur Operaties & Partnerrelaties (COO)",
    "coo_org": "Internationale Humanitaire Organisatie “Not Indifferent Squad”",
    "coo_period": "2 jaar leiderschap • Voltooid",
    "coo_desc": "Algehele operationele leiding over grootschalige noodhulporganisatie. Strategische planning en grensoverschrijdende logistiek.",
    "coo_bullet_1": "Coördinatie van strategische partnerschappen met honderden gemeenten en tientallen zakelijke donateurs.",
    "coo_bullet_2": "Ontwikkeling van operationele schalingsmodellen en leidinggeven aan multidisciplinaire teams.",
    "coo_bullet_3": "Nauwkeurige financiële verantwoording, transparantie en bestuursrapportages voor Europese partners.",
    "vertex_role": "Oprichter & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digitaal Bureau)",
    "vertex_period": "2024 — Heden",
    "vertex_desc": "Oprichting en leiding van een moderne digitale studio: Next.js websites, design systems en AI-procesautomatisering.",
    "englishflow_role": "Productbedenker & Developer",
    "englishflow_org": "English Flow (Notion-Geïntegreerde SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Bouwen van een webapp voor het leren van talen met spaced repetition en directe koppeling met Notion-databases.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Ontwerp van maatwerk web- en mobiele interfaces, componentenbibliotheken en merkidentiteiten voor internationale opdrachtgevers.",
    "volunteer_role": "Grafisch Vormgever (Vrijwilliger)",
    "volunteer_org": "Shliakh Volontera UA (Op afstand)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Vormgeving van visuele campagnes en informatiematerialen voor maatschappelijke vrijwilligersinitiatieven pro bono.",
    "motion_role": "Videobewerking & Motion Design",
    "motion_org": "Social Media Kanalen & Bureaus",
    "motion_period": "2020 — 2021",
    "motion_desc": "Videomontage, animaties en contentcreatie met behulp van Premiere Pro en After Effects.",
    "warehouse_note": "<strong>Ervaring in Polen (Magazijnwerk, 2024):</strong> Fysiek magazijnwerk in Polen (orderpicken, inpakken, voorraadbeheer). Dit legde de basis voor fysieke weerbaarheid en een ijzeren werkethiek.",
    "exp_tag_coo_lead": "COO Leiderschap",
    "exp_tag_crisis_log": "Crisislogistiek",
    "exp_tag_strat_alliances": "Strategische Allianties",
    "dream_hungry_tag": "// VISIE & DRIVE",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Neem nooit genoegen met het gemiddelde. Elke uitdaging is een kans om een sterker en schaalbaarder systeem te bouwen."
  },
  "tr": {
    "nav_about": "Hakkımda",
    "nav_exp": "Deneyim & COO",
    "nav_projects": "Projeler",
    "nav_dream": "D.R.E.A.M. Felsefesi",
    "nav_skills": "Yetenekler",
    "nav_contact": "İletişim",
    "nav_links_btn": "Kişisel Linkler ↗",
    "hero_status": "AKTİF İŞ ARAYIŞINDA // UZAKTAN • TAŞINMAYA HAZIR",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERASYONLAR",
    "hero_role_designer": "KIDEMLİ ÜRÜN TASARIMCISI",
    "hero_lead": "Kriz koşullarında kanıtlanmış operasyonel lider (2 yıl COO) ve full-stack Ürün Tasarımcısı. Girişimler ve SaaS şirketleri için stratejik ortaklık yönetimini dünya standartlarında dijital tasarımla birleştiriyorum.",
    "hero_cta_projects": "Projeleri İncele ↓",
    "hero_cta_contact": "Telegram'dan Yazın ↗",
    "stat_exp_val": "2 YIL",
    "stat_exp_lbl": "Ex-COO Liderlik Deneyimi",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Şehir ve Kurumsal Ortak",
    "stat_age_val": "23 YAŞ",
    "stat_age_lbl": "EST. 2003 / Uzaktan • Taşınabilir",
    "hero_badge_loc": "İSVİÇRE ALPLERİ // KÜRESEL VİZYON",
    "hero_badge_name": "MYKOLA ZOZUL",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "slit1_badge": "DİSİPLİN // 2024",
    "slit1_title": "POLONYA // DİRENÇ",
    "slit1_sub": "Polonya'da lojistik depo çalışması, 2024 — Fiziksel dayanıklılık, disiplin ve operasyonel alçakgönüllülük temeli.",
    "slit2_badge": "VİZYON // AVRUPA",
    "slit2_title": "İSVİÇRE ALPLERİ // ÖLÇEK",
    "slit2_sub": "Geniş vizyon, stratejik düşünme ve sınır tanımayan küresel hırs.",
    "slit3_badge": "OPERASYON // UZAKTAN",
    "slit3_title": "OPERASYONEL ODAK // SİSTEMLER",
    "slit3_sub": "Asenkron çalışma prensipleri, şeffaf dokümantasyon ve %100 uzaktan operasyon yönetimi.",
    "slit4_badge": "ÜRÜN // DİZAYN",
    "slit4_title": "ÜRÜN TASARIMI // MİMARİ",
    "slit4_sub": "Vizyondan canlıya: Figma, Next.js, yapay zeka akışları ve birinci sınıf kullanıcı arayüzleri.",
    "about_tag": "HİKAYE & PRENSİPLER",
    "about_title": "YÜKSEK ETKİLİ OPERATÖR // DİJİTAL GELİŞTİRİCİ",
    "about_p1": "23 yaşında, iki kritik uzmanlığı bir arada sunuyorum: Kriz lojistiğinde 2 yıllık liderlik deneyimine sahip bir <b>Operasyon Direktörü (COO)</b> ve yüksek estetik bilinciyle frontend kodlayan bir <b>Kıdemli Ürün & UI/UX Tasarımcısı</b>.",
    "about_p2": "2024'te Polonya'da fiziksel bir lojistik merkezinde çalıştım. Bu bilinçli tercih, bana sarsılmaz bir disiplin kazandırdı ve büyük sistemleri yönetmeden önce saha operasyonlarını derinlemesine anlamamı sağladı.",
    "about_p3": "Dünya çapında <b>%100 uzaktan</b> çalışıyorum ve gerektiğinde şirket merkezine taşınmaya tamamen açığım. Operasyonel karmaşayı düzenli sistemlere dönüştürüyor ve yatırımcı çeken ürünler tasarlıyorum.",
    "exp_tag": "KARİYER YOLCULUĞU",
    "exp_title": "OPERASYONEL LİDERLİK & ÜRÜN ÜRETİMİ",
    "exp_sub": "Kriz yönetimi, kurumsal ortaklıklar ve 0'dan 1'e ürün geliştirmede kanıtlanmış başarılar.",
    "exp1_role": "Operasyon Direktörü (COO) & Ortaklık İlişkileri Lideri",
    "exp1_company": "Uluslararası İnsani Yardım Kuruluşu «Not Indifferent Squad»",
    "exp1_period": "2024 — 2026 (2 YIL) // UZAKTAN",
    "exp1_p": "Büyük ölçekli yardım operasyonlarının uçtan uca yönetimi. Avrupa çapında 100'den fazla belediye ve kurumsal bağışçıyla sınır ötesi lojistik koordinasyonu.",
    "exp1_li1": "Kritik kriz lojistiğinin günlük operasyonel yönetimi ve hatasız akışı.",
    "exp1_li2": "Yüzlerce kamu ve özel sektör kuruluşuyla stratejik ortaklık anlaşmaları.",
    "exp1_li3": "Şeffaf finansal raporlama, standart işletim prosedürleri (SOP) ve asenkron sistemlerin kurulması.",
    "exp2_role": "Stüdyo Kurucusu & Web Çözümleri Lideri",
    "exp2_company": "Vertex Studio — Digital Craftsmanship & AI Solutions",
    "exp2_period": "2024 — GÜNÜMÜZ // UZAKTAN",
    "exp2_p": "Küresel girişimler için yüksek performanslı web siteleri, tasarım sistemleri ve yapay zeka tabanlı platformlar geliştirme.",
    "exp2_li1": "Next.js, Tailwind CSS ve WebGL ile modern ön yüz mühendisliği.",
    "exp2_li2": "Müşteri süreçlerini optimize eden yapay zeka otomasyonlarının entegrasyonu.",
    "exp2_li3": "Marka konumlandırma ve dönüşüm optimizasyonu danışmanlığı.",
    "exp3_role": "Ürün Yaratıcısı & Kurucu",
    "exp3_company": "English Flow — Notion Entegreli EdTech SaaS",
    "exp3_period": "2024 — GÜNÜMÜZ // UZAKTAN (EARLY BETA)",
    "exp3_p": "Kullanıcıların Notion veri tabanlarını bağlayarak aralıklı tekrar yöntemiyle dil öğrenmelerini sağlayan yenilikçi SaaS platformu.",
    "exp3_li1": "Sıfırdan ürün mimarisi, resmi Notion API entegrasyonu ve güvenli kullanıcı altyapısı.",
    "exp3_li2": "Kullanıcı bağlılığını artıran UI/UX tasarımı ve erken beta kullanıcı testleri.",
    "exp4_role": "Kıdemli UI/UX Tasarımcısı & Danışman",
    "exp4_company": "Serbest Projeler & Küresel Müşteriler",
    "exp4_period": "2022 — GÜNÜMÜZ // UZAKTAN",
    "exp4_p": "Figma üzerinde karmaşık arayüzler, ölçeklenebilir tasarım sistemleri ve yüksek kaliteli interaktif prototipler geliştirme.",
    "exp4_li1": "Tasarım tokenleri, gelişmiş bileşenler ve kullanıcı deneyimi haritalama.",
    "exp4_li2": "Hareketli tasarım (motion) ve test edilmiş arayüz çözümleri.",
    "exp5_role": "Fiziksel Saha Lojistiği & Disiplin Temeli",
    "exp5_company": "Lojistik Dağıtım Merkezi // Polonya",
    "exp5_period": "2024 // POLONYA (FİZİKSEL)",
    "exp5_p": "Polonya'daki lojistik merkezinde saha deneyimi. Fiziksel dayanıklılık ve iş ahlakını pekiştiren değerli bir temel.",
    "exp5_li1": "Yoğun tempo altında yüksek dikkat ve disiplinli görev icrası.",
    "exp5_li2": "Saha ekiplerinin gerçek ihtiyaçlarını ve empati odaklı liderliği ilk elden anlama.",
    "exp_tag_crisis_ops": "Kriz Yönetimi",
    "exp_tag_cross_scale": "Ölçekleme",
    "exp_tag_fin_rep": "Finansal Raporlama",
    "exp_tag_agency_founder": "Stüdyo Kurucusu",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Tasarım Sistemleri",
    "exp_tag_ai_auto": "Yapay Zeka",
    "exp_tag_global_rem": "Küresel Uzaktan",
    "exp_tag_prod_arch": "Ürün Mimarisi",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Aralıklı Tekrar",
    "exp_tag_fullstack_proto": "Full-Stack Prototip",
    "exp_tag_figma_tok": "Figma Tokenları",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Mobil Uygulamalar",
    "exp_tag_wireframing": "Wireframe",
    "proj_tag": "SEÇİLMİŞ PROJELER",
    "proj_title": "DİJİTAL ÜRÜNLER VE ÇÖZÜMLER",
    "proj_sub": "Somut icraat: bağımsız dijital stüdyo ve özgün EdTech SaaS girişimi.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DİJİTAL STÜDYO // NEXT.JS // YAPAY ZEKA // BRANDING",
    "proj1_desc": "Seçkin dijital stüdyo. Hızlı web siteleri, tasarım sistemleri ve yapay zeka destekli platformlar.",
    "proj1_btn": "Siteyi Ziyaret Et ↗",
    "proj1_status_tag": "● YAYINDA / CANLI",
    "proj2_title": "English Flow — Notion Entegreli Öğrenim",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Notion entegrasyonlu yabancı dil platformu. Kendi Notion tablonuzu bağlayın ve bilimsel tekrar algoritmasıyla kelimeleri öğrenin.",
    "proj2_btn": "Beta Sürümü Aç ↗",
    "proj2_beta_badge": "● ERKEN BETA",
    "dream_tag": "OPERASYONEL FELSEFE",
    "dream_title": "D.R.E.A.M. ÇERÇEVESİ",
    "dream_sub": "Karar alma süreçlerime ve ekip liderliğime yön veren ana prensipler:",
    "dream_d_title": "Discipline (Disiplin)",
    "dream_d_desc": "Doğru kurgulanmış sistemler anlık motivasyonu daima yener. Sıkı rutinler süreklilik arz eden üst düzey sonuçlar doğurur.",
    "dream_r_title": "Routine & Resilience (Direnç)",
    "dream_r_desc": "Kaos ortamında sükuneti koruma ve yüksek baskı altında karmaşık lojistik problemleri soğukkanlılıkla çözme yeteneği.",
    "dream_e_title": "Execution & Empathy (İcraat & Empati)",
    "dream_e_desc": "İnsan odaklı empatik yönetim tarzı ile teslim kalitesinde tavizsiz mükemmeliyetçiliğin dengesi.",
    "dream_a_title": "Adaptability (Uyum Sağlama)",
    "dream_a_desc": "Yeni teknolojileri hızla benimseme ve iş süreçlerine entegre etme (yapay zeka modelleri, modern kod çatıları).",
    "dream_m_title": "Mentality (Kazanma Zihniyeti)",
    "dream_m_desc": "Stay Hungry. Dinmeyen gelişme arzusu, ayrıntılara verilen önem ve dünya standartlarında iş çıkarma tutkusu.",
    "slit1_num": "// 01 DİRENÇ",
    "slit2_num": "// 02 VİZYON",
    "slit3_num": "// 03 SİSTEMLER",
    "slit4_num": "// 04 ÜRÜN",
    "skills_tag": "TEKNOLOJİ VE ARAÇLAR",
    "skills_title": "TEMEL YETKİNLİKLER",
    "skills_sub": "Operasyonel liderlik, estetik kavrayış ve teknik uzmanlığın güçlü birlikteliği.",
    "skill_c1_badge": "01 // LİDERLİK",
    "skill_c1_title": "Operasyon ve COO Yönetimi",
    "skill_c1_s1": "Kriz Yönetimi & Lojistik",
    "skill_c1_b1": "2 Yıl COO",
    "skill_c1_s2": "Kurumsal & Hükümet İlişkileri",
    "skill_c1_b2": "100+ Ortak",
    "skill_c1_s3": "Asenkron Sistemler & SOP",
    "skill_c1_b3": "İleri Düzey",
    "skill_c2_badge": "02 // TASARIM",
    "skill_c2_title": "UI/UX Ürün Tasarımı",
    "skill_c2_s1": "Figma (Tasarım Sistemleri)",
    "skill_c2_b1": "Usta",
    "skill_c2_s2": "Web & Mobil Ürünler",
    "skill_c2_b2": "Uçtan Uca",
    "skill_c2_s3": "Prototipleme & Animasyon",
    "skill_c2_b3": "İleri Düzey",
    "skill_c3_badge": "03 // TEKNOLOJİ",
    "skill_c3_title": "Teknoloji & Yapay Zeka",
    "skill_c3_s1": "Notion Ekosistemi & API",
    "skill_c3_b1": "SaaS Geliştirici",
    "skill_c3_s2": "Next.js & Web Teknolojileri",
    "skill_c3_b2": "Uygulamacı",
    "skill_c3_s3": "Yapay Zeka Otomasyonları",
    "skill_c3_b3": "Günlük",
    "skill_c4_badge": "04 // İLETİŞİM",
    "skill_c4_title": "Diller & İletişim",
    "skill_c4_s1": "Ukraynaca",
    "skill_c4_b1": "Anadil",
    "skill_c4_s2": "Lehçe (AB'de 2.5 Yıl)",
    "skill_c4_b2": "B2 Akıcı",
    "skill_c4_s3": "İngilizce (Teknik & İş)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "DOĞRUDAN İLETİŞİM",
    "contact_title": "BİRLİKTE ÇALIŞMAYA HAZIR MISINIZ?",
    "contact_sub": "Operasyon Direktörlüğü (COO), ürün tasarımı liderliği ve küresel uzaktan çalışma fırsatları için hazırım. Doğrudan bana ulaşın:",
    "tg_title": "Telegram'dan Yazın",
    "tg_sub": "Hızlı ve doğrudan iletişim: @mikolazozul",
    "mail_title": "E-posta Gönderin",
    "mail_sub": "Resmi teklifler için: mikolazozul@gmail.com",
    "links_title": "Kişisel Linkler & QR",
    "links_sub": "İletişim merkezi ve sosyal profiller",
    "copy_btn": "Kopyala ⧉",
    "copied_tg": "Telegram @mikolazozul kopyalandı!",
    "copied_mail": "E-posta mikolazozul@gmail.com kopyalandı!",
    "qr_btn_text": "Sayfanın QR Kodunu Göster",
    "footer_links": "Kişisel Linkler",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Doğrulanmış iletişim bilgilerini anında kaydetmek için akıllı telefonunuzla tarayın",
    "qr_modal_close": "Pencereyi Kapat",
    "form_name_lbl": "Adınız / Şirketiniz",
    "form_name_ph": "Can / Girişimci",
    "form_email_lbl": "E-posta veya Telegram Kullanıcı Adı",
    "form_email_ph": "can@sirket.com veya @kullanici",
    "form_msg_lbl": "Mesaj / Teklif",
    "form_msg_ph": "Projenizden veya iş birliği fırsatından bahsedin...",
    "form_submit_btn": "Mesajı Gönder →",
    "copied_toast": "Panoya kopyalandı!",
    "footer_copy": "© 2026 Mykola Zozul. Tüm hakları saklıdır. %100 Uzaktan • Taşınmaya Hazır.",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 yaşında. Uluslararası insani yardım ortaklıklarını ve sınır ötesi operasyonları yöneten 2 yıllık Eski Operasyon Direktörü (Ex-COO) deneyimi ile Ürün Tasarımcısı. Şu anda aktif olarak yeni roller arıyor (Operations Lead / COO / Founding Designer). %100 Uzaktan • Taşınmaya Hazır.",
    "hero_cta_tg": "Telegram'dan Yazın →",
    "hero_cta_work": "Projeleri İncele ↓",
    "hero_cta_links": "Kişisel Linkler ↗",
    "slits_tag": "PERSPEKTİFLER // ÇOKLU BAKIŞ",
    "slits_title": "VİZYON VE DİSİPLİN BOYUTLARI",
    "slits_sub": "Geçtiğim her aşama karakterimi güçlendirdi: saha lojistiği ve fiziksel dayanıklılıktan dijital arayüz zarafetine.",
    "slit1_desc": "Polonya'da 2.5 yıl yaşayarak Avrupa çalışma kültürünü ve uluslararası koordinasyon hızını benimseme.",
    "slit2_desc": "Stratejik geniş bakış açısı, zihinsel dinginlik ve kriz anlarında sarsılmaz soğukkanlılık.",
    "slit3_desc": "Dijital zanaatkarlık, yeni nesil tasarım sistemleri ve kritik web platformlarının hayata geçirilmesi.",
    "slit4_desc": "Günlük disiplin, takım sorumluluğu ve cesur vizyonları kusursuz sonuçlara dönüştürme iradesi.",
    "coo_role": "Operasyon Direktörü & Ortaklık İlişkileri (COO)",
    "coo_org": "Uluslararası Yardım Kuruluşu “Not Indifferent Squad”",
    "coo_period": "2 yıllık liderlik • Tamamlandı",
    "coo_desc": "Geniş ölçekli uluslararası vakfın tüm operasyonel liderliği. Kriz lojistiği, stratejik yol haritası ve yardım dağıtımı.",
    "coo_bullet_1": "Yüzlerce belediye ve onlarca kurumsal bağışçıyla stratejik ortaklıkların kurulması ve yürütülmesi.",
    "coo_bullet_2": "Operasyonel büyüme stratejilerinin tasarlanması ve çok işlevli ekiplerin yönetimi.",
    "coo_bullet_3": "Şeffaf finansal raporlama, denetim süreçleri ve ortaklara yönelik kapsamlı yönetim raporları.",
    "vertex_role": "Kurucu & Kreatif Lider",
    "vertex_org": "VERTEX STUDIO (Dijital Ajans)",
    "vertex_period": "2024 — Günümüz",
    "vertex_desc": "Modern bir dijital stüdyonun kuruluşu ve yönetimi: yüksek performanslı Next.js siteleri, tasarım sistemleri ve yapay zeka otomasyonları.",
    "englishflow_role": "Ürün Yaratıcısı & Geliştirici",
    "englishflow_org": "English Flow (Notion Entegreli SaaS)",
    "englishflow_period": "2026 (Erken Beta)",
    "englishflow_desc": "Notion veri tabanı senkronizasyonu ve aralıklı tekrar metodolojisiyle yabancı dil kelime öğrenme web uygulaması.",
    "freelance_role": "UI/UX & Ürün Tasarımcısı",
    "freelance_org": "Freelance (Figma / Web & Mobil)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Küresel müşteriler için özgün web ve mobil kullanıcı arayüzleri, tasarım sistemleri ve marka kimlikleri tasarlama.",
    "volunteer_role": "Grafik Tasarımcı (Gönüllü)",
    "volunteer_org": "Shliakh Volontera UA (Uzaktan)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Ukraynalı gönüllü girişimler için ücretsiz görsel kampanyalar ve dijital iletişim materyalleri üretme.",
    "motion_role": "Video Kurgu & Hareketli Tasarım",
    "motion_org": "Sosyal Medya Kanalları & Ajanslar",
    "motion_period": "2020 — 2021",
    "motion_desc": "Premiere Pro ve After Effects ile video montajı, hareketli grafikler ve dinamik içerik üretimi.",
    "warehouse_note": "<strong>Polonya Deneyimi (Depo Lojistiği, 2024):</strong> Polonya'da lojistik merkezinde saha çalışması (sipariş hazırlama, paketleme, stok yönetimi). Sarsılmaz fiziksel direnç ve disiplin temeli sağladı.",
    "exp_tag_coo_lead": "COO Liderliği",
    "exp_tag_crisis_log": "Kriz Lojistiği",
    "exp_tag_strat_alliances": "Stratejik Ortaklıklar",
    "dream_hungry_tag": "// VİZYON & TUTKU",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Asla yetinmeyin. Her operasyonel zorluk, daha dayanıklı ve ölçeklenebilir bir sistem inşa etme fırsatıdır."
  },
  "sv": {
    "nav_about": "Om mig",
    "nav_exp": "Erfarenhet & COO",
    "nav_projects": "Projekt",
    "nav_dream": "D.R.E.A.M. Filosofi",
    "nav_skills": "Färdigheter",
    "nav_contact": "Kontakt",
    "nav_links_btn": "Personliga Länkar ↗",
    "hero_status": "AKTIVT ARBETSSÖKANDE // PÅ DISTANS • ÖPPEN FÖR OMLOKALISERING",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & VERKSAMHET",
    "hero_role_designer": "SENIOR PRODUKTDESIGNER",
    "hero_lead": "Krisprövad operativ ledare (2 år som COO) och full-stack Produktdesigner. Jag förenar storskalig partnerkoordinering med digital design i absolut världsklass för SaaS och scaleups.",
    "hero_cta_projects": "Utforska Projekt ↓",
    "hero_cta_contact": "Skriv på Telegram ↗",
    "stat_exp_val": "2 ÅR",
    "stat_exp_lbl": "Ex-COO Ledarskapserfarenhet",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Städer & Institutionella Partners",
    "stat_age_val": "23 ÅR",
    "stat_age_lbl": "EST. 2003 / På distans • Omlokalisering",
    "hero_badge_loc": "SCHWEIZISKA ALPERNA // GLOBALT PERSPEKTIV",
    "hero_badge_name": "MYKOLA ZOZUL",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "slit1_badge": "DISCIPLIN // 2024",
    "slit1_title": "POLEN // RESILIENS",
    "slit1_sub": "Lagerarbete i Polen, 2024 — Grundmurad fysisk uthållighet, disciplin och operativ ödmjukhet.",
    "slit2_badge": "VISION // EUROPA",
    "slit2_title": "SCHWEIZISKA ALPERNA // SKALA",
    "slit2_sub": "Bred horisont, strategisk helhetssyn och gränslös professionell ambition.",
    "slit3_badge": "OPERATIONER // DISTANS",
    "slit3_title": "OPERATIVT FOKUS // SYSTEM",
    "slit3_sub": "Asynkrona processer, transparent dokumentation och 100% remote ledarskap.",
    "slit4_badge": "PRODUKT // UTFORMNING",
    "slit4_title": "PRODUCT CRAFT // ARKITEKTUR",
    "slit4_sub": "Från idé till lansering: Figma, Next.js, AI-arbetsflöden och förstklassiga gränssnitt.",
    "about_tag": "BAKGRUND & PRINCIPER",
    "about_title": "HIGH-LEVERAGE OPERATÖR // DIGITAL SKAPARE",
    "about_p1": "Vid 23 års ålder kombinerar jag två sällsynta spetskompetenser: <b>Operativ Chef (COO)</b> med 2 års erfarenhet av storskalig krislogistik samt <b>Senior Produkt- & UI/UX-designer</b> med skarp känsla för estetik och modern frontend-kod.",
    "about_p2": "Under 2024 arbetade jag medvetet i ett logistiklager i Polen — en erfarenhet som byggde stenhård disciplin och djup förståelse för verksamhetens grund innan jag ledde större system.",
    "about_p3": "Jag arbetar <b>100% på distans globalt</b> och är fullt beredd att omlokalisera vid behov. Jag skapar ordning i komplexa processer och bygger produkter som konverterar användare.",
    "exp_tag": "KARRIÄRRESA",
    "exp_title": "OPERATIVT LEDARSKAP & PRODUKTUTVECKLING",
    "exp_sub": "Dokumenterade resultat inom krishantering, partnerskap och 0-till-1 produktleverans.",
    "exp1_role": "Chief Operating Officer (COO) & Partner Relations Director",
    "exp1_company": "Internationell Humanitär Organisation «Not Indifferent Squad»",
    "exp1_period": "2024 — 2026 (2 ÅR) // PÅ DISTANS",
    "exp1_p": "Övergripande operativ ledning för en stor hjälpinsats. Gränsöverskridande logistikkoordinering med över 100 kommuner och internationella givare.",
    "exp1_li1": "Daglig ledning och optimering av tidskritiska logistikkedjor i krisområden.",
    "exp1_li2": "Förhandling och samordning med hundratals myndigheter och företagspartners.",
    "exp1_li3": "Strukturerad finansiell rapportering, standardrutiner (SOP) och asynkrona system.",
    "exp2_role": "Grundare av Studio & Ledare för Webblösningar",
    "exp2_company": "Vertex Studio — Digital Craftsmanship & AI Solutions",
    "exp2_period": "2024 — NUTID // PÅ DISTANS",
    "exp2_p": "Utveckling av högpresterande webbplatser, designsystem och AI-plattformar för internationella kunder och startups.",
    "exp2_li1": "Modern frontend med Next.js, Tailwind CSS och WebGL.",
    "exp2_li2": "Integration av automatiserade AI-arbetsflöden för ökad affärsnytta.",
    "exp2_li3": "Strategisk rådgivning kring varumärkespositionering och konvertering.",
    "exp3_role": "Produktskapare & Grundare",
    "exp3_company": "English Flow — Notion-integrerad EdTech SaaS",
    "exp3_period": "2024 — NUTID // PÅ DISTANS (EARLY BETA)",
    "exp3_p": "Fullständig utveckling av en webbtjänst för språkinlärning som ansluter direkt till användarens Notion-databaser med spaced repetition.",
    "exp3_li1": "Produktarkitektur, officiell Notion API-koppling och säker användarhantering.",
    "exp3_li2": "Genomtänkt UI/UX-design fokuserad på användarengagemang och tidiga betatester.",
    "exp4_role": "Senior UI/UX Designer & Konsult",
    "exp4_company": "Frilansprojekt & Internationella Kunder",
    "exp4_period": "2022 — NUTID // PÅ DISTANS",
    "exp4_p": "Design av komplexa gränssnitt, skalbara designsystem i Figma och interaktiva prototyper för webb och mobil.",
    "exp4_li1": "Skapande av designtokens, avancerade komponenter och användarflöden.",
    "exp4_li2": "Motion design och kontinuerlig optimering av användarupplevelser.",
    "exp5_role": "Fysisk Logistik & Disciplinär Grund",
    "exp5_company": "Distributionscenter // Polen",
    "exp5_period": "2024 // POLEN (PÅ PLATS)",
    "exp5_p": "Praktiskt arbete i logistikcenter i Polen. En värdefull erfarenhet som lade grunden för uthållighet, ödmjukhet och arbetsmoral.",
    "exp5_li1": "Exakt och disciplinerad leverans under tidspress.",
    "exp5_li2": "Förståelse på djupet för medarbetarnas förutsättningar och empatiskt ledarskap.",
    "exp_tag_crisis_ops": "Krisoperationer",
    "exp_tag_cross_scale": "Skalning",
    "exp_tag_fin_rep": "Finansiella Rapporter",
    "exp_tag_agency_founder": "Studiogrundare",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Designsystem",
    "exp_tag_ai_auto": "AI-automatisering",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Produktarkitektur",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Spaced Repetition",
    "exp_tag_fullstack_proto": "Full-Stack Prototyp",
    "exp_tag_figma_tok": "Figma Tokens",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Mobilappar",
    "exp_tag_wireframing": "Wireframing",
    "proj_tag": "UTVALDA PROJEKT",
    "proj_title": "DIGITALA PRODUKTER OCH TILLGÅNGAR",
    "proj_sub": "Konkret leverans: oberoende digital studio och innovativ egen EdTech SaaS.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITAL STUDIO // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Exklusiv digital studio. Snabba webbplatser, designsystem och AI-plattformar från koncept till drift.",
    "proj1_btn": "Besök webbplats ↗",
    "proj1_status_tag": "● LIVE I DRIFT",
    "proj2_title": "English Flow — Inlärning kopplad till Notion",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "SaaS för språkinlärning med Notion. Koppla din egen Notion-databas och memorera ord med vetenskaplig repetition.",
    "proj2_btn": "Öppna betaversion ↗",
    "proj2_beta_badge": "● TIDIG BETA",
    "dream_tag": "OPERATIV FILOSOFI",
    "dream_title": "D.R.E.A.M. RAMVERKET",
    "dream_sub": "Ledstjärnorna bakom mina beslut och mitt teamledarskap:",
    "dream_d_title": "Discipline (Disciplin)",
    "dream_d_desc": "Genomtänkta system slår alltid tillfällig motivation. Tydliga rutiner garanterar resultat på högsta nivå.",
    "dream_r_title": "Routine & Resilience (Uthållighet)",
    "dream_r_desc": "Förmågan att behålla lugnet i kaos och lösa komplicerade logistiska kriser metodiskt under press.",
    "dream_e_title": "Execution & Empathy (Genomförande & Empati)",
    "dream_e_desc": "Mänskligt och stöttande ledarskap kombinerat med kompromisslösa krav på slutresultatets kvalitet.",
    "dream_a_title": "Adaptability (Anpassningsförmåga)",
    "dream_a_desc": "Snabb inlärning och praktisk tillämpning av nya verktyg (AI-modeller, moderna ramverk, globala marknader).",
    "dream_m_title": "Mentality (Vinnarmentalitet)",
    "dream_m_desc": "Stay Hungry. Konstant drivkraft att utvecklas, öga för detaljer och strävan efter högsta internationella standard.",
    "slit1_num": "// 01 RESILIENS",
    "slit2_num": "// 02 VISION",
    "slit3_num": "// 03 SYSTEM",
    "slit4_num": "// 04 PRODUKT",
    "skills_tag": "TEKNOLOGI & VERKTYG",
    "skills_title": "KÄRNKOMPETENSER",
    "skills_sub": "En sällsynt kombination av operativt ledarskap, estetisk skärpa och teknisk verkshöjd.",
    "skill_c1_badge": "01 // LEDARSKAP",
    "skill_c1_title": "Verksamhetsledning & COO",
    "skill_c1_s1": "Krishantering & Logistik",
    "skill_c1_b1": "2 år som COO",
    "skill_c1_s2": "Partnerrelationer & Myndigheter",
    "skill_c1_b2": "100+ Partners",
    "skill_c1_s3": "Asynkrona Rutiner & SOP",
    "skill_c1_b3": "Avancerad",
    "skill_c2_badge": "02 // DESIGN",
    "skill_c2_title": "UI/UX Produktdesign",
    "skill_c2_s1": "Figma (Designsystem & Tokens)",
    "skill_c2_b1": "Mästerskap",
    "skill_c2_s2": "Webb- & Mobilprodukter",
    "skill_c2_b2": "Hela livscykeln",
    "skill_c2_s3": "Prototyper & Rörelsedesign",
    "skill_c2_b3": "Avancerad",
    "skill_c3_badge": "03 // TEKNOLOGI",
    "skill_c3_title": "Teknik & AI",
    "skill_c3_s1": "Notion-ekosystemet & API",
    "skill_c3_b1": "SaaS-skapare",
    "skill_c3_s2": "Next.js & Modern Webbstubbe",
    "skill_c3_b2": "Praktisk",
    "skill_c3_s3": "AI-arbetsflöden & Automatisering",
    "skill_c3_b3": "Dagligen",
    "skill_c4_badge": "04 // KOMMUNIKATION",
    "skill_c4_title": "Språk & Kommunikation",
    "skill_c4_s1": "Ukrainska",
    "skill_c4_b1": "Modersmål",
    "skill_c4_s2": "Polska (2,5 år i EU)",
    "skill_c4_b2": "B2 Flytande",
    "skill_c4_s3": "Engelska (Teknisk & Affär)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "DIREKTKONTAKT",
    "contact_title": "REDO FÖR SAMARBETE?",
    "contact_sub": "Öppen för COO-roller, ledande produktdesignuppdrag och globala distansutmaningar. Kontakta mig direkt:",
    "tg_title": "Skriv på Telegram",
    "tg_sub": "Snabb direktkontakt: @mikolazozul",
    "mail_title": "Skicka e-post",
    "mail_sub": "Formella förslag: mikolazozul@gmail.com",
    "links_title": "Personliga Länkar & QR",
    "links_sub": "Kontakthub och sociala profiler",
    "copy_btn": "Kopiera ⧉",
    "copied_tg": "Telegram @mikolazozul kopierat!",
    "copied_mail": "E-post mikolazozul@gmail.com kopierat!",
    "qr_btn_text": "Visa sidans QR-kod",
    "footer_links": "Personliga Länkar",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Skanna med mobilen för att spara verifierade kontaktuppgifter direkt",
    "qr_modal_close": "Stäng fönster",
    "form_name_lbl": "Ditt namn / Företag",
    "form_name_ph": "Erik / Tech Venture",
    "form_email_lbl": "E-post eller Telegram-användarnamn",
    "form_email_ph": "erik@foretag.se eller @anvandare",
    "form_msg_lbl": "Meddelande / Förslag",
    "form_msg_ph": "Berätta om ditt projekt eller samarbetsförslag...",
    "form_submit_btn": "Skicka meddelande →",
    "copied_toast": "Kopierat till urklipp!",
    "footer_copy": "© 2026 Mykola Zozul. Alla rättigheter förbehållna. 100% på distans • Öppen för omlokalisering.",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 år gammal. Tidigare Operativ Chef (Ex-COO) med 2 års erfarenhet av storskalig krislogistik och internationella partnerskap samt Produktdesigner. Söker för närvarande aktivt nya utmaningar (Operations Lead / COO / Founding Designer). 100% på distans • Öppen för omlokalisering.",
    "hero_cta_tg": "Skriv på Telegram →",
    "hero_cta_work": "Utforska Projekt ↓",
    "hero_cta_links": "Personliga Länkar ↗",
    "slits_tag": "PERSPEKTIV // MULTI-VISUELLT",
    "slits_title": "ASPEKTER AV VISION & DISCIPLIN",
    "slits_sub": "Varje steg på min väg formar min karaktär: från storskalig logistik och fysisk uthållighet till gränssnittsdesignens finess.",
    "slit1_desc": "2,5 år boende i Polen med förståelse för europeisk arbetskultur och internationellt samarbete.",
    "slit2_desc": "Strategiskt lugn, helhetssyn och behärskat agerande i tidskritiska lägen.",
    "slit3_desc": "Digitalt hantverk, moderna designsystem och lansering av verksamhetskritiska webbapplikationer.",
    "slit4_desc": "Daglig disciplin, personligt ansvar och förmågan att förvandla djärva visioner till verklighet.",
    "coo_role": "Operativ Chef & Partnerrelationer (COO)",
    "coo_org": "Internationell Humanitär Organisation “Not Indifferent Squad”",
    "coo_period": "2 års ledarskap • Avslutat",
    "coo_desc": "Heltäckande operativ ledning för en stor internationell hjälpinsats. Krishantering, strategisk färdplan och logistik.",
    "coo_bullet_1": "Samordning av strategiska allianser med hundratals kommuner och dussintals företagspartners.",
    "coo_bullet_2": "Utveckling av operativa expansionsmodeller och ledning av tvärfunktionella team.",
    "coo_bullet_3": "Noggrann finansiell redovisning, transparent kontroll och beslutsunderlag för europeiska partners.",
    "vertex_role": "Grundare & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digitalbyrå)",
    "vertex_period": "2024 — Nutid",
    "vertex_desc": "Grundande och ledning av en modern digitalbyrå: Next.js-webbplatser med hög prestanda, designsystem och AI-arbetsflöden.",
    "englishflow_role": "Produktskapare & Utvecklare",
    "englishflow_org": "English Flow (Notion-integrerad SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Utveckling av en webbtjänst för språkinlärning med spaced repetition och synkronisering mot Notion-databaser.",
    "freelance_role": "UI/UX & Produktdesigner",
    "freelance_org": "Frilans (Figma / Webb & Mobil)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Skapande av skräddarsydda webb- och mobilgränssnitt, designsystem och varumärkesidentiteter för internationella kunder.",
    "volunteer_role": "Grafisk Formgivare (Volontär)",
    "volunteer_org": "Shliakh Volontera UA (På distans)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Formgivning av visuella kampanjer och informationsmaterial för ukrainska frivilliginitiativ ideellt.",
    "motion_role": "Videoredigering & Motion Design",
    "motion_org": "Sociala Mediekanaler & Byråer",
    "motion_period": "2020 — 2021",
    "motion_desc": "Videoredigering, rörlig grafik och dynamisk innehållsproduktion med Premiere Pro och After Effects.",
    "warehouse_note": "<strong>Erfarenhet i Polen (Lagerarbete, 2024):</strong> Fysiskt lagerarbete i Polen (plock, pack, lagerstyrning). Det gav en grundmurad fysisk uthållighet och respekt för verksamhetens rötter.",
    "exp_tag_coo_lead": "COO Ledarskap",
    "exp_tag_crisis_log": "Krislogistik",
    "exp_tag_strat_alliances": "Strategiska Allianser",
    "dream_hungry_tag": "// VISION & DRIVKRAFT",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Slå dig aldrig till ro. Varje operativ utmaning är en möjlighet att bygga ett mer motståndskraftigt och skalbart system."
  },
  "la": {
    "nav_about": "De Me",
    "nav_exp": "Experientia & COO",
    "nav_projects": "Proiecta",
    "nav_dream": "Principia",
    "nav_skills": "Artes",
    "nav_contact": "Colloquium",
    "nav_links_btn": "Nexus Personales ↗",
    "hero_status": "LABOREM ACTUOSE QUAERENS // REMOTUS • AD COMMIGRANDUM PARATUS",
    "hero_title_sr": "MYKOLA ZOZUL",
    "hero_title_prefix": "MYKOLA",
    "hero_title_suffix": "ZOZUL",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "XXIII annos natus. Olim Praefectus Operandi (Ex-COO) duorum annorum experientia in societatibus internationalibus et logistica discriminum gubernanda, necnon designator producti. Nunc novas partes et laborem actuose quaerens. Omnino remote operor • Ad commigrandum paratus.",
    "hero_cta_tg": "Scribe in Telegram →",
    "hero_cta_work": "Inspice Proiecta ↓",
    "hero_cta_links": "Nexus Personales ↗",
    "hero_badge_loc": "ALPES HELVETIAE // VISIO & SCALA",
    "hero_badge_role": "DUX OPERATIONUM & PRODUCTI",
    "hero_badge_name": "MYKOLA ZOZUL",
    "stat_exp_val": "II ANNI",
    "stat_exp_lbl": "Experientia ducatus Ex-COO",
    "stat_partners_val": "C+",
    "stat_partners_lbl": "Urbes & Societates Sociae",
    "stat_age_val": "XXIII ANNI",
    "stat_age_lbl": "EST. MMIII / Remotus • Commigratio",
    "slits_tag": "SPATIUM MULTIVISUALE",
    "slits_title": "FACIES VISIONIS ET DISCIPLĪNAE",
    "slits_sub": "Unaquaeque facies itineris mei ingenium format: ab operationum magnitudine et tolerantia ad cuiusque lineae elegantiam.",
    "slit1_title": "VARSOVIA / CONSTANTIA",
    "slit1_desc": "II.V anni in Polonia acti, cognitio culturae Europaeae et rhythmi rationum internationalium.",
    "slit2_title": "ALPES / VISIO & SCALA",
    "slit2_desc": "Puritas mentis, altitudo consiliorum et tranquillitas animi in rebus adversis.",
    "slit3_title": "VERTEX / OPUS DIGITALE",
    "slit3_desc": "Ars digitalis, systemata designandi novae aetatis et effectio rationum multiplicium.",
    "slit4_title": "FOCUS / DISCIPLINA",
    "slit4_desc": "Cotidiana intentio, curatio gregis et perductio consiliorum ad exitum absolutum.",
    "exp_tag": "CURRICULUM VITAE",
    "exp_title": "EXPERIENTIA SYSTEMICA ET ADMINISTRATIO",
    "exp_sub": "Praecipua vis in directione operationum (COO), institutione societatum et creatione productorum digitalium posita est.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Institutum Beneficentiae Internationale «Not Indifferent Squad»",
    "coo_period": "II anni ducatus • Perfectum",
    "coo_desc": "Totius administrationis operationum moderatio in societate beneficentiae internationali. Consilia strategica, logistica subsidiorum et coordinatio auxilii erga centra puerilia et Copias Armatas Ucrainae.",
    "coo_bullet_1": "Coordinatio dilectus et societatis diuturnae cum centenis urbibus, municipiis et magnis societatibus donatoribus.",
    "coo_bullet_2": "Consiliorum evolutionis strategicae constructio et directa gregum interdisciplinarium moderatio.",
    "coo_bullet_3": "Ratio systemica, perspicuitas nummaria et confectiones relationum sociis tradendae.",
    "vertex_role": "Conditor & Dux Creativus",
    "vertex_org": "VERTEX STUDIO (Officina Digitalis)",
    "vertex_period": "MMXXIV — Hodie",
    "vertex_desc": "Fundatio et progressio officinae digitalis: designatio summae notae, contextus retialis in Next.js, WebGL et rationum negotiantium automatio per intelligentiam artificialem.",
    "englishflow_role": "Creator Producti & Developer",
    "englishflow_org": "English Flow (Notion-Integrated SaaS)",
    "englishflow_period": "MMXXVI (Beta Recens)",
    "englishflow_desc": "Constructio applicationis retialis ad verba discenda per intervalla repetita cum directa synchronisatione ad tabulam Notion usoris.",
    "freelance_role": "UI/UX & Producti Designator",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "MMXXII — MMXXIV",
    "freelance_desc": "Constructio interfacierum usoris pro paginis retialibus et mobilibus, systematum designandi universorum, exemplarium ac notarum identitatis.",
    "volunteer_role": "Graphicus Designator (Voluntarius)",
    "volunteer_org": "Iter Voluntarii UA (Remote)",
    "volunteer_period": "MMXXIII — MMXXIV",
    "volunteer_desc": "Creatio materiarum graphicarum et informationalium pro inceptis voluntariis Ucrainae sine mercede.",
    "motion_role": "Video Recensio & Motus Designator",
    "motion_org": "Canales Mediorum & Officinae",
    "motion_period": "MMXX — MMXXI",
    "motion_desc": "Compositio pellicularum, designatio motus et creatio contentorum dynamicorum (Premiere Pro, After Effects, KinoMaster).",
    "warehouse_note": "<strong>Experientia in Polonia (Labor horrei, MMXXIV):</strong> In horreis Polonicis exercitatus (collectio, dispositio, novorum opificum institutio). Quae res duritiam corporis, rationem logisticae primariae et laboris disciplinam firmavit.",
    "exp_tag_coo_lead": "COO Principatus",
    "exp_tag_crisis_log": "Logistica Discriminum",
    "exp_tag_strat_alliances": "Foedera Strategica",
    "exp_tag_cross_scale": "Scalatio Transversalis",
    "exp_tag_fin_rep": "Perspicuitas Nummaria",
    "exp_tag_agency_founder": "Conditor Officinae",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "Systemata UI/UX",
    "exp_tag_ai_auto": "AI Automatio",
    "exp_tag_global_rem": "Remotus Universalis",
    "exp_tag_prod_arch": "Architectura Producti",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Iteratio Spatiata",
    "exp_tag_fullstack_proto": "Prototypus Plenus",
    "exp_tag_figma_tok": "Figma Signa",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Appellationes Mobiles",
    "exp_tag_wireframing": "Formae Primordiales",
    "proj_tag": "PROIECTA ELECTA",
    "proj_title": "RES DIGITALES ET PRODUCTA",
    "proj_sub": "Operis systemici effectio vera: officina digitalis propria et productum SaaS novum.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "OFFICINA DIGITALIS // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Officina digitalis nobilissima. Paginas hodiernas, systemata designandi et suggestus retiales per intelligentiam artificialem creamus.",
    "proj1_btn": "Visita Paginam ↗",
    "proj2_title": "English Flow — Notion-Integrated Learning",
    "proj2_cat": "EDTECH SAAS // NOTION API // BETA RECENS",
    "proj2_desc": "Ministerium retiale ad verba aliena discenda cum Notion coniunctum. Quisque suam tabulam Notion adiungere et memoriam per intervalla exercere potest.",
    "proj2_btn": "Aperi Versionem Beta ↗",
    "proj2_beta_badge": "Beta Recens",
    "dream_tag": "PHILOSOPHIA OPERATIONUM",
    "dream_title": "MATRIX PRINCIPIORUM: D.R.E.A.M.",
    "dream_sub": "Fundamentum super quod omne inceptum et omnis grex systematicus aedificatur:",
    "dream_d_title": "Discipline (Disciplina)",
    "dream_d_desc": "Ordo semper chaos superat. Processuum cotidianorum stabilitas eventum praevisum confirmat.",
    "dream_r_title": "Routine & Resilience (Constantia)",
    "dream_r_desc": "Facultas ad res adversas sese accommodandi ac solvendi quaestiones logististicas sine terrore.",
    "dream_e_title": "Execution & Empathy (Effectio & Empathia)",
    "dream_e_desc": "Principatus per hominum sustentationem et severam cuiusque gradus inspectionem.",
    "dream_a_title": "Adaptability (Accommodatio)",
    "dream_a_desc": "Celeris instrumentorum novorum perceptio (AI, architectura hodierna, normae communicationis).",
    "dream_m_title": "Mentality (Ingenium Victoris)",
    "dream_m_desc": "Stay Hungry. Continuus motus in anteriora, magnitudo animi et appetitio perfectionis.",
    "slit1_num": "// 01 CONSTANTIA",
    "slit2_num": "// 02 SCALA",
    "slit3_num": "// 03 OPUS",
    "slit4_num": "// 04 DISCIPLINA",
    "proj1_status_tag": "● IN RETE VIVUM",
    "dream_hungry_tag": "// VISIO ET MOTUS",
    "dream_hungry_title": "SEMPER ESURIENS.",
    "dream_hungry_desc": "Numquam in parta victoria conquiescere. Omne periculum est occasio amplioris systematis condendi.",
    "skills_tag": "ARTES ET INSTRUMENTA",
    "skills_title": "ARMAMENTARIUM PROFESSIONALE",
    "skills_sub": "Symphonia administrationis operationum, designationis producti et technologiarum retialium.",
    "skill_c1_badge": "01 // OPERATIONES",
    "skill_c1_title": "Principatus Operationum (COO)",
    "skill_c1_s1": "Consilium Strategicum",
    "skill_c1_b1": "Peritus",
    "skill_c1_s2": "Scalatio & Societates",
    "skill_c1_b2": "C+ Instituta",
    "skill_c1_s3": "Logistica Discriminum",
    "skill_c1_b3": "II Anni COO",
    "skill_c2_badge": "02 // DESIGNATIO",
    "skill_c2_title": "Producti UI/UX Designatio",
    "skill_c2_s1": "Figma (Systemata Designandi)",
    "skill_c2_b1": "Magister",
    "skill_c2_s2": "Producta Retialia & Mobilia",
    "skill_c2_b2": "Circulus Plenus",
    "skill_c2_s3": "Prototypa & Motus",
    "skill_c2_b3": "Progressus",
    "skill_c3_badge": "03 // TECHNOLOGIA",
    "skill_c3_title": "Technologia & AI",
    "skill_c3_s1": "Oecosystema Notion & API",
    "skill_c3_b1": "Creator SaaS",
    "skill_c3_s2": "Next.js & Stack Retiale",
    "skill_c3_b2": "Practicus",
    "skill_c3_s3": "Processus AI & Automatio",
    "skill_c3_b3": "Cotidie",
    "skill_c4_badge": "04 // COMMUNICATIO",
    "skill_c4_title": "Linguae & Communicatio",
    "skill_c4_s1": "Ucrainica",
    "skill_c4_b1": "Patria",
    "skill_c4_s2": "Polonica (II.V anni in UE)",
    "skill_c4_b2": "B2",
    "skill_c4_s3": "Anglica (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "COLLOQUIUM DIRECTUM",
    "contact_title": "PARATINE AD COOPERANDUM?",
    "contact_sub": "Pateo ad societatem operationum (COO), designationem producti et magna incepta remota. Scribe mihi directe:",
    "tg_title": "Scribe in Telegram",
    "tg_sub": "Nexus celer directus: @mikolazozul",
    "mail_title": "Scribe per Litteras Electronicas",
    "mail_sub": "Proposita ampliora: mikolazozul@gmail.com",
    "links_title": "Nexus Personales & QR",
    "links_sub": "Nodus celer contactuum et vinculorum socialium",
    "copy_btn": "Exscribe ⧉",
    "copied_tg": "Telegram @mikolazozul exscriptum est!",
    "copied_mail": "Litterae mikolazozul@gmail.com exscriptae sunt!",
    "qr_btn_text": "Monstra Codicem QR Paginae",
    "footer_links": "Nexus Personales",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Scande per telephonum ut notas continuo serves",
    "qr_modal_close": "Claude Fenestram",
    "form_name_lbl": "Nomen Tuum / Societas",
    "form_name_ph": "Alexander / Tech Agency",
    "form_email_lbl": "Litterae Electronicae vel Telegram",
    "form_email_ph": "alexander@societas.com vel @usornomen",
    "form_msg_lbl": "Mandatum",
    "form_msg_ph": "Narra de incepto tuo vel proposito...",
    "form_submit_btn": "Mitte Mandatum →",
    "copied_toast": "In capsam exscriptorium relatum est!",
    "footer_copy": "© MMXXVI Mykola Zozul. Omnia iura reservata. Remotus • Ad commigrandum paratus."
  },
  "ru": {
    "nav_about": "Обо мне",
    "nav_exp": "Опыт & COO",
    "nav_projects": "Проекты",
    "nav_dream": "Принципы",
    "nav_skills": "Навыки",
    "nav_contact": "Контакты",
    "nav_links_btn": "Личные ссылки ↗",
    "hero_status": "ДОСТУПЕН ДЛЯ ПРОЕКТОВ // УДАЛЕННО • ГОТОВ К РЕЛОКАЦИИ",
    "hero_title_sr": "НИКОЛАЙ ЗОЗУЛЬ",
    "hero_title_prefix": "МИКОЛА",
    "hero_title_suffix": "ЗОЗУЛЬ",
    "hero_role_coo": "EX-COO & OPERATIONS",
    "hero_role_design": "PRODUCT & UI/UX DESIGNER",
    "hero_bio": "23 года. Операционный директор (COO) с 2-летним опытом масштабирования международных партнерств и гуманитарных миссий, а также продуктовый дизайнер и создатель цифровых решений. Сочетаю системный операционный менеджмент, продуктовое мышление и эстетику высокого уровня. Работаю полностью удаленно • Готов к релокации при необходимости.",
    "hero_cta_tg": "Написать в Telegram →",
    "hero_cta_work": "Смотреть кейсы ↓",
    "hero_cta_links": "Личные ссылки ↗",
    "hero_badge_loc": "SWISS ALPS // МАСШТАБ ВИДЕНИЯ",
    "hero_badge_role": "OPERATIONS LEAD & PRODUCT DESIGNER",
    "hero_badge_name": "МИКОЛА ЗОЗУЛЬ",
    "stat_exp_val": "2 ГОДА",
    "stat_exp_lbl": "COO / Операционное лидерство",
    "stat_partners_val": "100+",
    "stat_partners_lbl": "Городов и компаний-партнеров",
    "stat_age_val": "23 ГОДА",
    "stat_age_lbl": "EST. 2003 / Удаленно • Релокация",
    "slits_tag": "МУЛЬТИВИЗУАЛЬНОЕ ПРОСТРАНСТВО",
    "slits_title": "ГРАНИ ВИДЕНИЯ И ДИСЦИПЛИНЫ",
    "slits_sub": "Каждая грань моего пути формирует характер: от операционного масштаба и выносливости до эстетики каждой линии интерфейса.",
    "slit1_title": "ВАРШАВА / СТОЙКОСТЬ",
    "slit1_desc": "2.5 года жизни в Польше, понимание европейской культуры и ритма международных процессов.",
    "slit2_title": "АЛЬПЫ / МАСШТАБ ВИДЕНИЯ",
    "slit2_desc": "Чистота мышления, высота стратегических целей и внутреннее спокойствие в кризисных ситуациях.",
    "slit3_title": "VERTEX / ПРОДУКТ",
    "slit3_desc": "Цифровое ремесло, дизайн-системы нового поколения и реализация сложных решений.",
    "slit4_title": "ФОКУС / ДИСЦИПЛИНА",
    "slit4_desc": "Ежедневная концентрация, ответственность за команду и доведение идей до безупречного финала.",
    "exp_tag": "КАРЬЕРНЫЙ ПУТЬ",
    "exp_title": "СИСТЕМНЫЙ ОПЫТ И УПРАВЛЕНИЕ",
    "exp_sub": "Акцент на операционном руководстве (COO), развитии партнерских экосистем и авторских онлайн-продуктах.",
    "coo_role": "Director of Operations & Partner Relations (Ex-COO)",
    "coo_org": "Международная Благотворительная Организация «Небайдужі» (Not Indifferent Squad)",
    "coo_period": "2025 — 2026 (2 года)",
    "coo_desc": "Полное руководство операционными процессами благотворительной организации международного масштаба. Стратегическое планирование, логистика помощи и координация поддержки детских центров и ВСУ.",
    "coo_bullet_1": "Координация рекрутинга и долгосрочного сотрудничества с сотнями городов, муниципалитетами и десятками крупных доноров.",
    "coo_bullet_2": "Разработка стратегических планов развития и прямое руководство междисциплинарными командами.",
    "coo_bullet_3": "Ведение системного учета, финансовой прозрачности и подготовка отчетов для партнеров.",
    "vertex_role": "Founder & Creative Lead",
    "vertex_org": "VERTEX STUDIO (Digital Agency)",
    "vertex_period": "2024 — Сейчас",
    "vertex_desc": "Основание и развитие цифровой студии: дизайн высокого класса, веб-разработка на Next.js, WebGL и автоматизация бизнес-процессов с помощью ИИ для клиентов по всему миру.",
    "englishflow_role": "Product Creator & Developer",
    "englishflow_org": "English Flow (Notion-Integrated SaaS)",
    "englishflow_period": "2026 (Early Beta)",
    "englishflow_desc": "Создание веб-сервиса для изучения слов по методу интервальных повторений с прямой синхронизацией с таблицей Notion пользователя.",
    "freelance_role": "UI/UX & Product Designer",
    "freelance_org": "Freelance (Figma / Web & Mobile)",
    "freelance_period": "2022 — 2024",
    "freelance_desc": "Разработка интерфейсов веб-сайтов и мобильных приложений, создание дизайн-систем, прототипирование и брендинг.",
    "volunteer_role": "Graphic Designer (Volunteer)",
    "volunteer_org": "Шлях Волонтера UA (Удаленно)",
    "volunteer_period": "2023 — 2024",
    "volunteer_desc": "Создание графических и информационных материалов для волонтерских инициатив на безвозмездной основе.",
    "motion_role": "Video Editing & Motion Design",
    "motion_org": "Social Media Channels & Agencies",
    "motion_period": "2020 — 2021",
    "motion_desc": "Монтаж видео, моушн-дизайн и производство медиаконтента (Premiere Pro, After Effects, KinoMaster).",
    "warehouse_note": "<strong>Опыт работы в Польше (Warehouse work, 2024):</strong> Прошел через складские процессы в Польше (комплектация, размещение, обучение персонала). Это сформировало физическую выносливость, понимание логистики и дисциплину труда.",
    "exp_tag_coo_lead": "COO лидерство",
    "exp_tag_crisis_log": "Кризисная логистика",
    "exp_tag_strat_alliances": "Стратегические партнерства",
    "exp_tag_cross_scale": "Кросс-функциональное масштабирование",
    "exp_tag_fin_rep": "Финансовая отчетность",
    "exp_tag_agency_founder": "Основатель агентства",
    "exp_tag_nextjs": "Next.js",
    "exp_tag_uiux_sys": "UI/UX системы",
    "exp_tag_ai_auto": "ИИ-автоматизация",
    "exp_tag_global_rem": "Global Remote",
    "exp_tag_prod_arch": "Продуктовая архитектура",
    "exp_tag_notion_api": "Notion API",
    "exp_tag_spaced_rep": "Интервальные повторения",
    "exp_tag_fullstack_proto": "Full-Stack прототип",
    "exp_tag_figma_tok": "Figma токены",
    "exp_tag_autolayout": "Autolayout 5.0",
    "exp_tag_mobile_apps": "Мобильные приложения",
    "exp_tag_wireframing": "Вайрфреймы",
    "proj_tag": "ИЗБРАННЫЕ ПРОЕКТЫ",
    "proj_title": "ЦИФРОВЫЕ АКТИВЫ И ПРОДУКТЫ",
    "proj_sub": "Практическое воплощение системной работы: собственное digital-агентство и персональный инновационный SaaS-продукт.",
    "proj1_title": "VERTEX STUDIO — Digital Craftsmanship",
    "proj1_cat": "DIGITAL AGENCY // NEXT.JS // AI // BRANDING",
    "proj1_desc": "Элитная цифровая студия. Создаем современные сайты, дизайн-системы и веб-платформы с использованием ИИ. Полная клиентская линия от концепта до публикации.",
    "proj1_btn": "Посетить сайт ↗",
    "proj2_title": "English Flow — Notion-Integrated Learning",
    "proj2_cat": "EDTECH SAAS // NOTION API // EARLY BETA",
    "proj2_desc": "Веб-сервис для изучения иностранных слов с интеграцией Notion. Пользователь подключает собственную Notion-таблицу со словами и тренирует память по алгоритму интервальных повторений (Spaced Repetition).",
    "proj2_btn": "Открыть бета-версию ↗",
    "proj2_beta_badge": "Ранняя бета",
    "dream_tag": "ОПЕРАЦИОННАЯ ФИЛОСОФИЯ",
    "dream_title": "МАТРИЦА ПРИНЦИПОВ: D.R.E.A.M.",
    "dream_sub": "Фундамент, на котором строится каждый проект и системная команда:",
    "dream_d_title": "Discipline (Дисциплина)",
    "dream_d_desc": "Система всегда побеждает хаос. Стабильность ежедневных процессов гарантирует предсказуемый результат.",
    "dream_r_title": "Routine & Resilience (Стойкость)",
    "dream_r_desc": "Способность адаптироваться к кризисным условиям, решать нестандартные логистические задачи без паники.",
    "dream_e_title": "Execution & Empathy (Исполнение)",
    "dream_e_desc": "Командное лидерство через поддержку людей и четкий контроль качества каждого этапа.",
    "dream_a_title": "Adaptability (Гибкость)",
    "dream_a_desc": "Быстрое освоение новых инструментов (ИИ, современные фреймворки, международные стандарты коммуникации).",
    "dream_m_title": "Mentality (Менталитет победителя)",
    "dream_m_desc": "Stay Hungry. Постоянное движение вперед, амбициозность и стремление к совершенству.",
    "slit1_num": "// 01 СТОЙКОСТЬ",
    "slit2_num": "// 02 МАСШТАБ",
    "slit3_num": "// 03 РЕМЕСЛО",
    "slit4_num": "// 04 ДИСЦИПЛИНА",
    "proj1_status_tag": "● ОНЛАЙН В СЕТИ",
    "dream_hungry_tag": "// ВИДЕНИЕ И ДВИЖЕНИЕ",
    "dream_hungry_title": "STAY HUNGRY.",
    "dream_hungry_desc": "Никогда не останавливаться на достигнутом. Каждый вызов — это возможность построить более масштабную систему.",
    "skills_tag": "НАВЫКИ И СТЕК",
    "skills_title": "ПРОФЕССИОНАЛЬНЫЙ АРСЕНАЛ",
    "skills_sub": "Синтез операционного управления, продуктового дизайна и современных веб-технологий.",
    "skill_c1_badge": "01 // ОПЕРАЦИИ",
    "skill_c1_title": "Операционное лидерство (COO)",
    "skill_c1_s1": "Стратегическое планирование",
    "skill_c1_b1": "Эксперт",
    "skill_c1_s2": "Масштабирование & Партнерства",
    "skill_c1_b2": "100+ организаций",
    "skill_c1_s3": "Кризисная логистика & Аудит",
    "skill_c1_b3": "2 года COO",
    "skill_c2_badge": "02 // ДИЗАЙН",
    "skill_c2_title": "Продуктовый UI/UX дизайн",
    "skill_c2_s1": "Figma (Дизайн-системы)",
    "skill_c2_b1": "Мастер",
    "skill_c2_s2": "Веб & мобильные продукты",
    "skill_c2_b2": "Полный цикл",
    "skill_c2_s3": "Прототипирование & Motion",
    "skill_c2_b3": "Продвинутый",
    "skill_c3_badge": "03 // ТЕХНОЛОГИИ",
    "skill_c3_title": "Технологии & ИИ",
    "skill_c3_s1": "Экосистема Notion и API",
    "skill_c3_b1": "Создатель SaaS",
    "skill_c3_s2": "Next.js & Веб-стек",
    "skill_c3_b2": "Практик",
    "skill_c3_s3": "ИИ-процессы & Автоматизация",
    "skill_c3_b3": "Ежедневно",
    "skill_c4_badge": "04 // КОММУНИКАЦИЯ",
    "skill_c4_title": "Языки & Коммуникация",
    "skill_c4_s1": "Украинский",
    "skill_c4_b1": "Родной",
    "skill_c4_s2": "Polish (Польский, 2.5 г. в ЕС)",
    "skill_c4_b2": "B2",
    "skill_c4_s3": "English (Tech & Comms)",
    "skill_c4_b3": "A2-B1 Tech",
    "contact_tag": "ПРЯМАЯ СВЯЗЬ",
    "contact_title": "ГОТОВЫ К СОТРУДНИЧЕСТВУ?",
    "contact_sub": "Открыт для операционного партнерства (COO), продуктового дизайна и масштабных удаленных вызовов. Напишите мне напрямую:",
    "tg_title": "Написать в Telegram",
    "tg_sub": "Быстрая прямая связь: @mikolazozul",
    "mail_title": "Написать на Email",
    "mail_sub": "Подробные предложения: mikolazozul@gmail.com",
    "links_title": "Личные ссылки и QR",
    "links_sub": "Быстрый хаб контактов и социальных сетей",
    "copy_btn": "Копировать ⧉",
    "copied_tg": "Telegram @mikolazozul скопирован!",
    "copied_mail": "Email mikolazozul@gmail.com скопирован!",
    "qr_btn_text": "Показать QR-код страницы",
    "footer_links": "Личные ссылки",
    "qr_modal_title": "MYKOLA ZOZUL // QR",
    "qr_modal_sub": "Отсканируйте смартфоном для мгновенного сохранения контактов",
    "qr_modal_close": "Закрыть окно",
    "form_name_lbl": "Ваше имя / Компания",
    "form_name_ph": "Александр / Tech Agency",
    "form_email_lbl": "Ваш Email или Telegram",
    "form_email_ph": "alex@company.com или @username",
    "form_msg_lbl": "Сообщение",
    "form_msg_ph": "Расскажите о вашем проекте или предложении...",
    "form_submit_btn": "Отправить сообщение →",
    "copied_toast": "Скопировано в буфер обмена!",
    "footer_copy": "© 2026 Микола Зозуль. Все права защищены. Удаленно • Готов к релокации."
  }
};

  // --- 2. State & Sound Synthesizer (Always Active) ---
  const soundEnabled = true;

  let audioCtx = null;
  function playClickSound(freq = 800, type = 'sine', duration = 0.04) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or failed
    }
  }

  // Futuristic Cyber UI micro-tick for TechText and precision transitions
  function playCyberTick(pitch = 1400) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, t);
      osc.frequency.exponentialRampToValueAtTime(320, t + 0.016);
      gain.gain.setValueAtTime(0.028, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.016);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + 0.018);
    } catch (e) {
      // Audio not permitted
    }
  }

  // Auto unlock AudioContext on first user interaction anywhere
  const unlockAudio = () => {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    } catch (e) {}
    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(evt => {
      window.removeEventListener(evt, unlockAudio);
    });
  };
  ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(evt => {
    window.addEventListener(evt, unlockAudio, { passive: true });
  });

  // --- 3. Language Auto-Detection & Translation Matrix ---
  const supportedLangs = ['uk', 'en', 'de', 'pl', 'es', 'fr', 'it', 'pt', 'nl', 'tr', 'sv', 'la', 'ru'];

  function detectUserLanguage() {
    const saved = localStorage.getItem('mz_lang');
    if (saved && supportedLangs.includes(saved)) {
      return saved;
    }
    const navLangs = navigator.languages || [navigator.language || ''];
    for (const raw of navLangs) {
      if (!raw) continue;
      const primary = raw.toLowerCase().split('-')[0];
      if (supportedLangs.includes(primary)) {
        return primary;
      }
    }
    return 'uk';
  }

  let currentLang = detectUserLanguage();

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'uk';
    currentLang = lang;
    localStorage.setItem('mz_lang', lang);
    document.documentElement.lang = lang;

    const titles = {
      uk: "Микола Зозуль // Mykola Zozul — COO & Product Designer | Executive Portfolio",
      en: "Mykola Zozul — Chief Operating Officer & Product Designer | Executive Portfolio",
      de: "Mykola Zozul — Chief Operating Officer & Product Designer | Executive Portfolio",
      pl: "Mykola Zozul — Chief Operating Officer & Product Designer | Portfolio Wykonawcze",
      es: "Mykola Zozul — Chief Operating Officer & Product Designer | Portafolio Ejecutivo",
      fr: "Mykola Zozul — Directeur des Opérations (COO) & Product Designer | Portfolio",
      it: "Mykola Zozul — Direttore Operativo (COO) & Product Designer | Portfolio Esecutivo",
      pt: "Mykola Zozul — Diretor de Operações (COO) & Product Designer | Portfólio Executivo",
      nl: "Mykola Zozul — Chief Operating Officer (COO) & Product Designer | Executive Portfolio",
      tr: "Mykola Zozul — Operasyon Direktörü (COO) & Ürün Tasarımcısı | Yönetici Portföyü",
      sv: "Mykola Zozul — Operativ Chef (COO) & Produktdesigner | Exekutiv Portfölj",
      la: "Mykola Zozul — Praefectus Operandi (COO) & Designator Producti | Portfolio Executivum",
      ru: "Микола Зозуль // Mykola Zozul — COO & Product Designer | Портфолио"
    };
    document.title = titles[lang] || titles.uk;

    const dict = translations[lang] || translations.uk;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update Dropdown UI
    const codeMap = { uk: 'UA', en: 'EN', de: 'DE', pl: 'PL', es: 'ES', fr: 'FR', it: 'IT', pt: 'PT', nl: 'NL', tr: 'TR', sv: 'SV', la: 'LA', ru: 'RU' };
    const currentCodeEl = document.getElementById('lang-current-code');
    if (currentCodeEl) {
      currentCodeEl.textContent = codeMap[lang] || lang.toUpperCase();
    }
    const legacyToggleBtn = document.getElementById('lang-toggle-btn');
    if (legacyToggleBtn) {
      legacyToggleBtn.textContent = codeMap[lang] || lang.toUpperCase();
    }

    document.querySelectorAll('.lang-opt-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    if (window.heroTechText) {
      const techTextStr = (lang === 'uk' || lang === 'ru') ? 'МИКОЛА\nЗОЗУЛЬ' : 'MYKOLA\nZOZUL';
      window.heroTechText.setText(techTextStr);
    }
  }

  // --- 3.1 Language Dropdown Controller ---
  function initLangDropdown() {
    const wrap = document.getElementById('lang-dropdown-wrap');
    const trigger = document.getElementById('lang-dropdown-btn');
    const menu = document.getElementById('lang-dropdown-menu');

    if (!wrap || !trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle('open');
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      playClickSound(850, 'sine', 0.03);
    });

    menu.querySelectorAll('.lang-opt-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        applyLanguage(selectedLang);
        wrap.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        playClickSound(950, 'sine', 0.04);
      });
    });

    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && wrap.classList.contains('open')) {
        wrap.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
  }

  // --- 4. Interactive Soft Ambient Spotlight Follower ---
  function initCustomCursor() {
    // Skip on touch-only / mobile devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.getElementById('ambient-glow');
    if (!glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;
    let isMoving = false;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        isMoving = true;
        glow.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      if (isMoving) glow.style.opacity = '1';
    });

    function renderGlow() {
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;
      glow.style.transform = `translate3d(${glowX - 240}px, ${glowY - 240}px, 0)`;
      requestAnimationFrame(renderGlow);
    }
    requestAnimationFrame(renderGlow);

    const interactiveTargets = document.querySelectorAll('a, button, input, textarea, .slit-item, .exp-card, .dream-row');
    interactiveTargets.forEach(el => {
      el.addEventListener('click', () => {
        playClickSound(950, 'triangle', 0.05);
      });
    });
  }

  // --- 5. Slit Gallery Dynamics ---
  function initSlits() {
    const slits = document.querySelectorAll('.slit-item');
    if (!slits.length) return;

    slits.forEach((slit, idx) => {
      slit.addEventListener('mouseenter', () => {
        slits.forEach(s => s.classList.remove('active'));
        slit.classList.add('active');
        playClickSound(600 + idx * 80, 'sine', 0.03);
      });

      slit.addEventListener('click', () => {
        slits.forEach(s => s.classList.remove('active'));
        slit.classList.add('active');
      });
    });
  }

  // --- 6. Toast System ---
  function showToast(msg) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = msg || (translations[currentLang]?.copied_toast || 'Copied!');
    toast.classList.add('show');
    playClickSound(1100, 'sine', 0.08);

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // --- 7. Copy to Clipboard ---
  window.copyText = function (text, message) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(message);
      }).catch(() => {
        fallbackCopy(text, message);
      });
    } else {
      fallbackCopy(text, message);
    }
  };

  window.copyContact = function (type, triggerBtn) {
    const dict = translations[currentLang] || translations.uk;
    const textToCopy = type === 'tg' ? '@mikolazozul' : 'mikolazozul@gmail.com';
    const msg = type === 'tg' ? (dict.copied_tg || 'Telegram @mikolazozul скопійовано!') : (dict.copied_mail || 'Email mikolazozul@gmail.com скопійовано!');
    window.copyText(textToCopy, msg);
    playCyberTick(1600);

    const btn = triggerBtn || document.querySelector(`[data-copy-contact="${type}"]`);
    if (btn) {
      const origHtml = btn.innerHTML;
      btn.classList.add('copied');
      btn.textContent = currentLang === 'uk' ? 'Скопійовано! ✓' : 'Copied! ✓';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = origHtml;
      }, 2200);
    }
  };

  function fallbackCopy(text, message) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(message);
    } catch (e) {
      console.error(e);
    }
    document.body.removeChild(ta);
  }

  // --- 8. QR Code SVG Generator (Pure inline SVG, monochrome luxury) ---
  function generateQrSvg(url) {
    // Generate clean stylized SVG pattern resembling QR with high-contrast matrix
    return `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="#000000">
        <rect width="200" height="200" fill="#ffffff" rx="10"/>
        <!-- Top Left Finder -->
        <rect x="20" y="20" width="45" height="45" fill="#000000" rx="6"/>
        <rect x="28" y="28" width="29" height="29" fill="#ffffff" rx="4"/>
        <rect x="35" y="35" width="15" height="15" fill="#000000" rx="2"/>
        <!-- Top Right Finder -->
        <rect x="135" y="20" width="45" height="45" fill="#000000" rx="6"/>
        <rect x="143" y="28" width="29" height="29" fill="#ffffff" rx="4"/>
        <rect x="150" y="35" width="15" height="15" fill="#000000" rx="2"/>
        <!-- Bottom Left Finder -->
        <rect x="20" y="135" width="45" height="45" fill="#000000" rx="6"/>
        <rect x="28" y="143" width="29" height="29" fill="#ffffff" rx="4"/>
        <rect x="35" y="150" width="15" height="15" fill="#000000" rx="2"/>
        <!-- Data dots & alignment matrix -->
        <rect x="75" y="22" width="12" height="12" rx="2"/>
        <rect x="95" y="22" width="12" height="12" rx="2"/>
        <rect x="115" y="22" width="12" height="12" rx="2"/>
        <rect x="75" y="42" width="12" height="12" rx="2"/>
        <rect x="95" y="42" width="12" height="12" rx="2"/>
        <rect x="75" y="62" width="12" height="12" rx="2"/>
        <rect x="115" y="62" width="12" height="12" rx="2"/>
        <rect x="22" y="75" width="12" height="12" rx="2"/>
        <rect x="42" y="75" width="12" height="12" rx="2"/>
        <rect x="75" y="75" width="12" height="12" rx="2"/>
        <rect x="95" y="75" width="12" height="12" rx="2"/>
        <rect x="115" y="75" width="12" height="12" rx="2"/>
        <rect x="135" y="75" width="12" height="12" rx="2"/>
        <rect x="165" y="75" width="12" height="12" rx="2"/>
        <rect x="22" y="95" width="12" height="12" rx="2"/>
        <rect x="55" y="95" width="12" height="12" rx="2"/>
        <rect x="85" y="95" width="12" height="12" rx="2"/>
        <rect x="105" y="95" width="12" height="12" rx="2"/>
        <rect x="135" y="95" width="12" height="12" rx="2"/>
        <rect x="155" y="95" width="12" height="12" rx="2"/>
        <rect x="75" y="115" width="12" height="12" rx="2"/>
        <rect x="95" y="115" width="12" height="12" rx="2"/>
        <rect x="115" y="115" width="12" height="12" rx="2"/>
        <rect x="145" y="115" width="12" height="12" rx="2"/>
        <rect x="165" y="115" width="12" height="12" rx="2"/>
        <rect x="75" y="135" width="12" height="12" rx="2"/>
        <rect x="105" y="135" width="12" height="12" rx="2"/>
        <rect x="125" y="135" width="12" height="12" rx="2"/>
        <rect x="155" y="135" width="12" height="12" rx="2"/>
        <rect x="75" y="155" width="12" height="12" rx="2"/>
        <rect x="95" y="155" width="12" height="12" rx="2"/>
        <rect x="135" y="155" width="12" height="12" rx="2"/>
        <rect x="155" y="155" width="12" height="12" rx="2"/>
        <circle cx="100" cy="100" r="10" fill="#000000"/>
      </svg>
    `;
  }

  function initQrModal() {
    const modal = document.getElementById('qr-modal');
    const qrBox = document.getElementById('qr-box');
    const closeBtn = document.getElementById('qr-close-btn');
    const openBtns = document.querySelectorAll('[data-open-qr]');

    if (!modal || !qrBox) return;

    openBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const url = window.location.href;
        qrBox.innerHTML = generateQrSvg(url);
        modal.classList.add('open');
        playClickSound(850, 'sine', 0.05);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  // --- 9. Navigation Active Highlighting & Smooth Scroll ---
  function initNavScroll() {
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        if (window.scrollY >= top) {
          current = sec.getAttribute('id');
        }
      });

      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // --- 10. Contact Actions & Form Handler ---
  function initContactForm() {
    // Cell Click Delegation for Matrix Inputs & Submit
    document.querySelectorAll('.matrix-cell[data-focus-target]').forEach(cell => {
      cell.addEventListener('click', e => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'LABEL') {
          const targetId = cell.getAttribute('data-focus-target');
          const el = document.getElementById(targetId);
          if (el) el.focus();
        }
      });
    });

    const submitCell = document.querySelector('.matrix-cell-submit');
    if (submitCell) {
      submitCell.addEventListener('click', e => {
        if (e.target.id !== 'matrix-submit-btn' && !e.target.closest('#matrix-submit-btn')) {
          const btn = document.getElementById('matrix-submit-btn');
          if (btn) btn.click();
        }
      });
    }

    // Interactive Contact Card Copy Buttons (if present)
    document.querySelectorAll('[data-copy-contact]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation(); // Prevents following card <a> link
        const type = btn.getAttribute('data-copy-contact');
        window.copyContact(type, btn);
      });
    });

    const form = document.getElementById('direct-contact-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('form-name')?.value || '';
        const phone = document.getElementById('form-phone')?.value || '';
        const email = document.getElementById('form-email')?.value || '';
        const msg = document.getElementById('form-msg')?.value || '';

        const subject = encodeURIComponent(`Запит від ${name} через портфоліо`);
        const phoneLine = phone ? `\nТелефон/TG: ${phone}` : '';
        const body = encodeURIComponent(`Ім'я: ${name}${phoneLine}\nEmail: ${email}\n\nПовідомлення:\n${msg}`);

        playClickSound(1050, 'sine', 0.08);
        showToast(currentLang === 'uk' ? 'Формуємо лист...' : 'Generating email draft...');
        window.location.href = `mailto:mikolazozul@gmail.com?subject=${subject}&body=${body}`;
        form.reset();
      });
    }
  }

  // --- 11. Subtle Premium Scroll Reveal (Triggered on Scroll) ---
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length) return;

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target); // Trigger only once!
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => {
      // If element is already within viewport on initial load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 30) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });
  }

  // --- 12. TechText Component (React Bits Port for Hero Wordmark) ---
  class TechTextVanilla {
    constructor(container, options = {}) {
      this.container = container;
      this.container.classList.add('tech-text');
      this.canvas = document.createElement('canvas');
      this.canvas.className = 'tech-text-canvas';
      this.container.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.scratch = document.createElement('canvas');
      this.scratchCtx = this.scratch.getContext('2d');

      this.options = {
        text: options.text || 'МИКОЛА\nЗОЗУЛЬ',
        fontFamily: options.fontFamily || "'Unbounded', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: options.fontWeight || 900,
        fontSize: options.fontSize || 94,
        letterSpacing: options.letterSpacing || -0.03,
        lineHeight: options.lineHeight || 0.94,
        color: options.color || '#ffffff',
        accentColor: options.accentColor || '#ffffff',
        dashLength: options.dashLength || 4,
        dashGap: options.dashGap || 2,
        strokeWidth: options.strokeWidth || 1.5,
        lineStyle: 'dashed',
        reveal: 'letter',
        specks: options.specks || 14,
        selection: true,
        labels: true,
        interval: options.interval || 2000,
        ...options
      };

      this.width = 1;
      this.height = 1;
      this.dpr = 1;
      this.raf = 0;
      this.last = performance.now();
      this.layoutKey = '';
      this.word = null;
      this.glyphs = [];
      this.pulse = 0;
      this.frame = { x1: 0, y1: 0, x2: 0, y2: 0, alpha: 0, index: -1 };
      this.activeGlyphIndex = 0;
      this.lastStepTime = performance.now();

      this.approach = (current, target, dt, seconds) =>
        current + (target - current) * (1 - Math.exp(-dt / seconds));

      this.hexToRgb = hex => {
        let h = String(hex || '').replace('#', '');
        if (h.length === 3) h = h.replace(/./g, c => c + c);
        const n = parseInt(h.slice(0, 6), 16);
        return Number.isNaN(n) ? [255, 255, 255] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
      };

      this.rgba = (hex, alpha) => {
        const [r, g, b] = this.hexToRgb(hex);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      this.noise = (...values) => {
        let h = 2166136261;
        for (const value of values) {
          h = Math.imul(h ^ (value | 0), 16777619);
          h ^= h >>> 13;
          h = Math.imul(h, 0x5bd1e995);
          h ^= h >>> 15;
        }
        return (h >>> 0) / 4294967296;
      };

      this.init();
    }

    setFont(target, size) {
      target.font = `${this.options.fontWeight} ${size}px ${this.options.fontFamily}`;
      if ('letterSpacing' in target) {
        target.letterSpacing = `${this.options.letterSpacing * size}px`;
      }
      target.textAlign = 'left';
      target.textBaseline = 'alphabetic';
    }

    sprite(view, glyph, stroke) {
      const s = this.options;
      const pad = Math.ceil(s.strokeWidth * 2 + 10);
      const left = glyph.box.x1 - pad;
      const top = glyph.box.y1 - pad;
      const w = glyph.box.x2 - glyph.box.x1 + pad * 2;
      const h = glyph.box.y2 - glyph.box.y1 + pad * 2;
      const image = document.createElement('canvas');
      image.width = Math.max(1, Math.ceil(w * this.dpr));
      image.height = Math.max(1, Math.ceil(h * this.dpr));
      const c = image.getContext('2d');
      if (!c) return { image, left, top };
      c.setTransform(this.dpr, 0, 0, this.dpr, -left * this.dpr, -top * this.dpr);
      this.setFont(c, view.size);

      if (stroke) {
        c.lineJoin = 'round';
        c.lineWidth = s.strokeWidth * 2;
        c.lineCap = 'butt';
        c.strokeStyle = s.color;
        if (s.lineStyle !== 'solid') {
          c.setLineDash([Math.max(1, s.dashLength), Math.max(1, s.dashGap)]);
        }
        c.strokeText(glyph.char, glyph.x, glyph.baseline);
        c.setLineDash([]);
        c.globalCompositeOperation = 'destination-out';
        c.fillStyle = '#000000';
        c.fillText(glyph.char, glyph.x, glyph.baseline);
        c.globalCompositeOperation = 'source-over';
      } else {
        c.fillStyle = s.color;
        c.fillText(glyph.char, glyph.x, glyph.baseline);
      }
      return { image, left, top };
    }

    ensureLayout() {
      const s = this.options;
      const key = [
        s.text,
        s.fontFamily,
        s.fontWeight,
        s.fontSize,
        s.letterSpacing,
        s.lineHeight,
        s.color,
        this.width,
        this.height,
        this.dpr
      ].join('|');

      if (key === this.layoutKey && this.word) return this.word;
      this.layoutKey = key;

      const lines = s.text.split('\n');
      const probe = this.scratchCtx;

      let testSize = s.fontSize;
      this.setFont(probe, testSize);
      let maxLineWidth = 0;
      lines.forEach(l => {
        const m = probe.measureText(l);
        const boxLeft = typeof m.actualBoundingBoxLeft === 'number' ? m.actualBoundingBoxLeft : 0;
        const boxRight = typeof m.actualBoundingBoxRight === 'number' ? m.actualBoundingBoxRight : (m.width || testSize * 0.6);
        const w = m.width || (boxLeft + boxRight) || 100;
        if (w > maxLineWidth) maxLineWidth = w;
      });
      const approxTotalH = lines.length * testSize * s.lineHeight;

      const padLeft = 20;
      const padRight = 48; // Generous space for rightmost letter frame, bracket ticks, and specks
      const padTop = 30;   // Clean clearance for top brackets, specks and tech label W × H
      const padBottom = 32; // Clean clearance for bottom tech label coordinates on line 2

      const availW = Math.max(100, this.width - padLeft - padRight);
      const availH = Math.max(80, this.height - padTop - padBottom);

      const fitW = availW / Math.max(maxLineWidth, 1);
      const fitH = availH / Math.max(approxTotalH, 1);
      const fit = Math.min(1, fitW, fitH);
      const size = Math.max(26, Math.floor(testSize * fit));

      this.setFont(probe, size);
      const lineSpacing = size * s.lineHeight;
      const lineAscent = size * 0.82;
      const startX = padLeft;
      const startY = padTop;

      this.glyphs = [];
      let totalGlyphIndex = 0;

      lines.forEach((lineText, lineIdx) => {
        const baseline = startY + lineAscent + lineIdx * lineSpacing;
        const chars = Array.from(lineText);
        let prefix = '';

        chars.forEach(char => {
          prefix += char;
          const own = probe.measureText(char);
          const ownLeft = typeof own.actualBoundingBoxLeft === 'number' ? own.actualBoundingBoxLeft : 0;
          const ownAscent = typeof own.actualBoundingBoxAscent === 'number' ? own.actualBoundingBoxAscent : size * 0.8;
          const ownRight = typeof own.actualBoundingBoxRight === 'number' ? own.actualBoundingBoxRight : (own.width || size * 0.6);
          const ownDescent = typeof own.actualBoundingBoxDescent === 'number' ? own.actualBoundingBoxDescent : size * 0.2;
          const gx = startX + (probe.measureText(prefix).width || 0) - (own.width || size * 0.6);
          if (!char.trim()) return;

          const base = {
            char,
            x: gx,
            baseline,
            lineIdx,
            box: {
              x1: gx - ownLeft,
              y1: baseline - ownAscent,
              x2: gx + ownRight,
              y2: baseline + ownDescent
            }
          };

          const view = { size };
          this.glyphs.push({
            ...base,
            offset: { x: 0, y: 0 },
            outline: 0,
            index: totalGlyphIndex++,
            lineIdx,
            fill: this.sprite(view, base, false),
            dashes: this.sprite(view, base, true)
          });
        });
      });

      this.word = { size, linesCount: lines.length };
      return this.word;
    }

    crisp(value) {
      return (Math.round(value * this.dpr) + 0.5) / this.dpr;
    }

    perimeterPoint(distance, w, h) {
      let d = ((distance % (2 * (w + h))) + 2 * (w + h)) % (2 * (w + h));
      if (d < w) return [this.frame.x1 + d, this.frame.y1, 0, -1];
      d -= w;
      if (d < h) return [this.frame.x2, this.frame.y1 + d, 1, 0];
      d -= h;
      if (d < w) return [this.frame.x2 - d, this.frame.y2, 0, 1];
      d -= w;
      return [this.frame.x1, this.frame.y2 - d, -1, 0];
    }

    drawSpecks(s, a) {
      const w = this.frame.x2 - this.frame.x1;
      const h = this.frame.y2 - this.frame.y1;
      if (w < 2 || h < 2) return;
      const perimeter = 2 * (w + h);
      const seed = this.frame.index + 1;
      const grid = 3;
      const ctx = this.ctx;

      for (let k = 0; k < s.specks; k++) {
        const period = 0.5 + this.noise(seed, k, 11) * 1.2;
        const t = this.pulse / period + this.noise(seed, k, 17);
        const cycle = Math.floor(t);
        const life = t - cycle;
        if (life > 0.7) continue;
        const [px, py, nx, ny] = this.perimeterPoint(this.noise(seed, k, cycle) * perimeter, w, h);
        const pick = this.noise(seed, k, cycle, 2);
        const size = pick < 0.46 ? 2 : pick < 0.7 ? 3 : pick < 0.84 ? 5 : pick < 0.94 ? 8 : 11;
        const large = size >= 8;
        const out = (large ? 9 : 4) + Math.floor(this.noise(seed, k, cycle, 1) * 5) * grid;
        const x = this.frame.x1 + Math.round((px + nx * out - this.frame.x1) / grid) * grid;
        const y = this.frame.y1 + Math.round((py + ny * out - this.frame.y1) / grid) * grid;
        const tone = this.noise(seed, k, cycle, 3);
        const blink = life < 0.06 || (life > 0.32 && life < 0.36) ? 0.35 : 1;
        const alpha = a * (large ? 0.3 + 0.4 * tone : 0.3 + 0.6 * tone) * blink;
        const left = Math.round(x - size / 2);
        const top = Math.round(y - size / 2);

        if (tone < 0.26 || (large && tone < 0.78)) {
          ctx.strokeStyle = this.rgba(s.accentColor, alpha);
          ctx.strokeRect(left + 0.5, top + 0.5, size, size);
          if (large && tone > 0.5) {
            ctx.fillStyle = this.rgba(s.accentColor, alpha);
            ctx.fillRect(Math.round(x) - 1, Math.round(y) - 1, 2, 2);
          }
        } else {
          ctx.fillStyle = this.rgba(s.accentColor, alpha);
          ctx.fillRect(left, top, size, size);
        }
      }
    }

    drawFrame(s) {
      const glyph = this.glyphs[this.frame.index];
      if (!glyph || this.frame.alpha < 0.01) return;
      const a = this.frame.alpha;
      const x1 = this.crisp(this.frame.x1);
      const y1 = this.crisp(this.frame.y1);
      const x2 = this.crisp(this.frame.x2);
      const y2 = this.crisp(this.frame.y2);
      const ctx = this.ctx;

      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);

      // Tech rectangular frame
      ctx.beginPath();
      ctx.rect(x1, y1, x2 - x1, y2 - y1);
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.rgba(s.accentColor, 0.45 * a);
      ctx.stroke();

      // 4 corner brackets
      ctx.beginPath();
      for (const [cx, cy] of [
        [x1, y1],
        [x2, y1],
        [x2, y2],
        [x1, y2]
      ]) {
        ctx.rect(Math.round(cx) - 2, Math.round(cy) - 2, 5, 5);
      }
      ctx.fillStyle = this.rgba(s.accentColor, 0.95 * a);
      ctx.fill();

      // Specks
      if (s.specks > 0) {
        ctx.lineWidth = 1;
        this.drawSpecks(s, a);
      }

      // Tech label: for lineIdx > 0 ("ЗОЗУЛЬ"), display below the frame; for lineIdx === 0 ("МИКОЛА"), display above
      if (s.labels) {
        ctx.font = '10px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
        ctx.textAlign = 'left';
        ctx.fillStyle = this.rgba(s.accentColor, 0.75 * a);
        const w = Math.round(glyph.box.x2 - glyph.box.x1);
        const h = Math.round(glyph.box.y2 - glyph.box.y1);
        const label = `${w} × ${h}`;
        if (glyph.lineIdx > 0) {
          ctx.textBaseline = 'top';
          ctx.fillText(label, Math.round(this.frame.x1), Math.round(this.frame.y2) + 6);
        } else {
          ctx.textBaseline = 'bottom';
          ctx.fillText(label, Math.round(this.frame.x1), Math.round(this.frame.y1) - 6);
        }
      }
    }

    blit(art, dx, dy) {
      this.ctx.drawImage(
        art.image,
        Math.round((art.left + dx) * this.dpr),
        Math.round((art.top + dy) * this.dpr)
      );
    }

    tick = now => {
      const dt = Math.min(0.05, Math.max(0.001, (now - this.last) / 1000));
      this.last = now;
      const s = this.options;
      this.ensureLayout();

      // Advance to next letter autonomously every s.interval (2000ms = 2s) silently without sound
      if (now - this.lastStepTime >= s.interval) {
        this.lastStepTime = now;
        if (this.glyphs.length > 0) {
          this.activeGlyphIndex = (this.activeGlyphIndex + 1) % this.glyphs.length;
        }
      }

      this.pulse += dt;
      const focus = this.glyphs.length > 0 ? this.activeGlyphIndex : -1;

      if (focus >= 0 && s.selection) {
        const glyph = this.glyphs[focus];
        const pad = 6;
        const bx1 = glyph.box.x1 - pad;
        const by1 = glyph.box.y1 - pad;
        const bx2 = glyph.box.x2 + pad;
        const by2 = glyph.box.y2 + pad;

        if (this.frame.index < 0 || this.frame.alpha < 0.02) {
          this.frame.x1 = bx1;
          this.frame.y1 = by1;
          this.frame.x2 = bx2;
          this.frame.y2 = by2;
        }

        const glide = 0.08;
        this.frame.x1 = this.approach(this.frame.x1, bx1, dt, glide);
        this.frame.y1 = this.approach(this.frame.y1, by1, dt, glide);
        this.frame.x2 = this.approach(this.frame.x2, bx2, dt, glide);
        this.frame.y2 = this.approach(this.frame.y2, by2, dt, glide);
        this.frame.index = focus;
      }

      this.frame.alpha = this.approach(this.frame.alpha, focus >= 0 ? 1 : 0, dt, 0.1);

      this.glyphs.forEach((glyph, i) => {
        const target = i === focus ? 1 : 0;
        glyph.outline = this.approach(glyph.outline, target, dt, 0.09);
      });

      const ctx = this.ctx;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (const glyph of this.glyphs) {
        if (glyph.outline < 0.999) {
          ctx.globalAlpha = 1 - glyph.outline;
          this.blit(glyph.fill, 0, 0);
        }
        if (glyph.outline > 0.001) {
          ctx.globalAlpha = glyph.outline;
          this.blit(glyph.dashes, 0, 0);
        }
        ctx.globalAlpha = 1;
      }

      this.drawFrame(s);

      this.raf = requestAnimationFrame(this.tick);
    };

    resize = () => {
      this.width = Math.max(1, this.container.clientWidth);
      this.height = Math.max(1, this.container.clientHeight);
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(this.width * this.dpr);
      this.canvas.height = Math.round(this.height * this.dpr);
      this.layoutKey = '';
      this.ensureLayout();
    };

    setText(newText) {
      if (this.options.text !== newText) {
        this.options.text = newText;
        this.layoutKey = '';
        this.activeGlyphIndex = 0;
        this.lastStepTime = performance.now();
        this.ensureLayout();
      }
    }

    setTheme(color, accentColor) {
      this.options.color = color;
      this.options.accentColor = accentColor;
      this.layoutKey = '';
      this.ensureLayout();
    }

    init() {
      this.resize();
      window.addEventListener('resize', this.resize);
      document.fonts?.ready?.then(() => {
        this.layoutKey = '';
        this.ensureLayout();
      });

      this.isVisible = true;
      this.last = performance.now();
      this.lastStepTime = performance.now();

      // Immediately render the first frame synchronously
      this.tick(performance.now());

      // Start continuous animation loop
      cancelAnimationFrame(this.raf);
      this.raf = requestAnimationFrame(this.tick);

      // Pause RAF rendering loop when canvas is scrolled out of viewport
      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver((entries) => {
          const visible = entries[0].isIntersecting;
          if (visible && !this.isVisible) {
            this.isVisible = true;
            this.last = performance.now();
            this.lastStepTime = performance.now();
            cancelAnimationFrame(this.raf);
            this.raf = requestAnimationFrame(this.tick);
          } else if (!visible && this.isVisible) {
            this.isVisible = false;
            cancelAnimationFrame(this.raf);
          }
        }, { threshold: 0.05 });
        this.observer.observe(this.canvas);
      }
    }

    destroy() {
      cancelAnimationFrame(this.raf);
      if (this.observer) this.observer.disconnect();
      window.removeEventListener('resize', this.resize);
    }
  }

  // --- 12. Initial Setup on DOM Ready ---
  function initApp() {
    // Check saved theme
    const savedTheme = localStorage.getItem('mz_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    const isDarkInitial = document.documentElement.getAttribute('data-theme') !== 'light';
    const initCol = isDarkInitial ? '#ffffff' : '#000000';

    window.applyLanguage = applyLanguage;
    applyLanguage(currentLang);
    initLangDropdown();
    initCustomCursor();
    initSlits();
    initQrModal();
    initNavScroll();
    initContactForm();
    initScrollReveal();

    // Mount Hero TechText (autonomous 2s letter stepping, reactive theme and lang)
    const heroTitleContainer = document.getElementById('hero-tech-title');
    if (heroTitleContainer) {
      const isDarkInit = (document.documentElement.getAttribute('data-theme') || 'dark') !== 'light';
      const initialColor = isDarkInit ? '#ffffff' : '#090c12';
      const techTextStr = (currentLang === 'uk' || currentLang === 'ru') ? 'МИКОЛА\nЗОЗУЛЬ' : 'MYKOLA\nZOZUL';
      window.heroTechText = new TechTextVanilla(heroTitleContainer, {
        text: techTextStr,
        fontFamily: "'Unbounded', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: 900,
        fontSize: 94,
        letterSpacing: -0.03,
        lineHeight: 0.94,
        color: initialColor,
        accentColor: initialColor,
        dashLength: 4,
        dashGap: 2,
        strokeWidth: 1.5,
        lineStyle: 'dashed',
        reveal: 'letter',
        specks: 14,
        selection: true,
        labels: true,
        interval: 2000
      });
      heroTitleContainer.closest('.hero-title')?.classList.add('has-tech-text');
    }

    // Theme Toggle (Vertex Studio Pattern: Sun in Dark, Moon in Light)
    function syncThemeIcons(theme) {
      const isLight = theme === 'light';
      document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        const sun = btn.querySelector('.sun-icon');
        const moon = btn.querySelector('.moon-icon');
        if (sun) sun.style.display = isLight ? 'none' : 'block';
        if (moon) moon.style.display = isLight ? 'block' : 'none';
        btn.setAttribute('title', isLight ? 'Темна тема (Dark Mode)' : 'Світла тема (Light Mode)');
        btn.setAttribute('aria-label', isLight ? 'Увімкнути темну тему' : 'Увімкнути світлу тему');
      });
    }

    const initialTheme = document.documentElement.getAttribute('data-theme') || localStorage.getItem('mz_theme') || 'dark';
    syncThemeIcons(initialTheme);

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const newTheme = isDark ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('mz_theme', newTheme);
        syncThemeIcons(newTheme);
        if (window.heroTechText) {
          const col = newTheme === 'light' ? '#090c12' : '#ffffff';
          window.heroTechText.setTheme(col, col);
        }
        playClickSound(isDark ? 900 : 700, 'sine', 0.05);
      });
    }

    // Tactile Audio Feedback on Interactive Clicks (Always Active)
    document.querySelectorAll('.btn-primary, .btn-secondary, .ctrl-btn, .nav-cta-links, .social-chip, .filter-chip, .project-card, .timeline-card').forEach(el => {
      el.addEventListener('click', () => {
        playClickSound(920, 'sine', 0.035);
      });
    });

    // Legacy or Secondary Lang Toggle Support
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const langs = ['uk', 'en', 'de', 'pl', 'es', 'fr', 'it', 'pt', 'nl', 'tr', 'sv', 'la', 'ru'];
        const currentIdx = langs.indexOf(currentLang);
        const nextLang = langs[(currentIdx + 1) % langs.length];
        applyLanguage(nextLang);
        playClickSound(850, 'sine', 0.04);
      });
    }

    // Mobile Navigation Drawer
    const mobileBtn = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links-list');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        const isShown = navLinks.style.display === 'flex';
        navLinks.style.display = isShown ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '16px';
        navLinks.style.right = '16px';
        navLinks.style.background = 'var(--bg-glass)';
        navLinks.style.backdropFilter = 'blur(20px)';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '16px';
        navLinks.style.border = '1px solid var(--line-strong)';
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
