import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "luna-nails",
    index: "01",
    title: "LUNA NAILS",
    category: "Beauty",
    niche: "Камерная студия маникюра в Тольятти",
    year: 2026,
    description:
      "Сайт nail-студии с понятным прайсом, портфолио работ и онлайн-записью в несколько шагов.",
    accentColor: "#671F2D",
    services: [
      "Услуги и цены",
      "Портфолио",
      "Мастера и отзывы",
      "Онлайн-запись",
    ],
    heroImage: "/images/work/luna-nails/hero.png",
    gallery: [
      "/images/work/luna-nails/screen-01.png",
      "/images/work/luna-nails/screen-02.png",
    ],
    duration: "12 рабочих дней",
    role: "UX/UI, frontend, форма записи",
    concept:
      "Камерная эстетика строится на молочной основе, винном акценте, мягких формах и спокойной serif-типографике. Интерфейс поддерживает ощущение бережного ухода и ведёт к записи без визуального шума.",
    projectType: "Лендинг студии",
    challenge:
      "Собрать весь путь клиента в одном спокойном сценарии: познакомить со студией, показать услуги, цены и работы, представить мастеров, снять вопросы и завершить визит онлайн-записью.",
    structure: [
      "Первый экран",
      "Преимущества",
      "Услуги и цены",
      "Работы и мастера",
      "Отзывы и FAQ",
      "Контакты и запись",
    ],
    tech: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Адаптивная вёрстка",
      "Фильтрация портфолио",
      "Telegram-заявки",
    ],
    result: [
      "Готовый адаптивный сайт для студии маникюра.",
      "Собраны услуги и цены, фильтруемая галерея работ, карточки мастеров, отзывы, FAQ и форма записи с проверкой полей. Заявки можно отправлять напрямую в Telegram.",
    ],
  },
  {
    slug: "element-laser",
    index: "02",
    title: "ELEMENT LASER",
    category: "Health",
    niche: "Студия лазерной эпиляции",
    year: 2026,
    description:
      "Чистая система, которая спокойно объясняет процедуры и ведёт к первому визиту.",
    accentColor: "#173D31",
    services: ["Процедуры", "Подготовка", "FAQ", "Запись"],
    heroImage: "/images/work/element-laser/hero.png",
    gallery: [
      "/images/work/element-laser/screen-01.png",
      "/images/work/element-laser/screen-02.png",
    ],
    duration: "14 рабочих дней",
    role: "Арт-дирекшн, UX, разработка",
    concept:
      "Клиническая ясность без стерильности: воздух, точная сетка и тактильный шалфейный акцент.",
  },
  {
    slug: "boroda-63",
    index: "03",
    title: "BORODA 63",
    category: "Beauty",
    niche: "Барбершоп",
    year: 2026,
    description:
      "Уверенный тёмный интерфейс для выбора мастера, услуги и удобного времени.",
    accentColor: "#B76B43",
    services: ["Мастера", "Прайс", "Атмосфера", "Запись"],
    heroImage: "/images/work/boroda-63/hero.png",
    gallery: [
      "/images/work/boroda-63/screen-01.png",
      "/images/work/boroda-63/screen-02.png",
    ],
    duration: "10 рабочих дней",
    role: "Стратегия, дизайн, код",
    concept:
      "Насыщенный медный цвет, брутальная типографика и вертикальная композиция без клише мужской косметики.",
  },
  {
    slug: "vino-room",
    index: "04",
    title: "VINO ROOM",
    category: "HoReCa",
    niche: "Камерный ресторан",
    year: 2026,
    description:
      "Онлайн-афиша места: меню, события и бронирование в журнальной композиции.",
    accentColor: "#6D2335",
    services: ["Меню", "События", "Бронирование", "Карта"],
    heroImage: "/images/work/vino-room/hero.png",
    gallery: [
      "/images/work/vino-room/screen-01.png",
      "/images/work/vino-room/screen-02.png",
    ],
    duration: "16 рабочих дней",
    role: "Концепция, интерфейс, разработка",
    concept:
      "Глубокий винный тон, свободная журнальная верстка и выразительные типографические паузы.",
  },
  {
    slug: "motion-club",
    index: "05",
    title: "MOTION CLUB",
    category: "Sport",
    niche: "Фитнес-студия",
    year: 2026,
    description:
      "Энергичная горизонтальная лента направлений, тренеров и расписания.",
    accentColor: "#B7FF31",
    services: ["Направления", "Расписание", "Тренеры", "Абонементы"],
    heroImage: "/images/work/motion-club/hero.png",
    gallery: [
      "/images/work/motion-club/screen-01.png",
      "/images/work/motion-club/screen-02.png",
    ],
    duration: "15 рабочих дней",
    role: "UX, motion, frontend",
    concept:
      "Смелая лента экранов, локальный кислотный акцент и темп, который остаётся удобным.",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
