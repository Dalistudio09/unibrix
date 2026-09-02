export const site = {
  name: "Unibrix",
  domain: "Unibrix.ai",
  url: "https://unibrix.ai",
  title: "Unibrix — боты и Mini App для записи и продаж в Telegram",
  description:
    "Запись к мастеру, магазин и заявки в Telegram для салонов, барберов, кондитеров и сервисов. Живые демо. Расчёт под ваш бюджет.",
  locale: "ru_KZ",
  ogImage: "/og.jpg",
};

export const contacts = {
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/unibrix.ai",
    text: "@unibrix.ai",
  },
  telegramBot: {
    label: "Telegram-бот",
    href: "https://t.me/unibrixbot",
    text: "@unibrixbot",
  },
  telegram: {
    label: "Telegram",
    href: "https://t.me/unibrix",
    text: "@unibrix",
  },
  email: {
    label: "Email",
    href: "mailto:unibrix.ai@gmail.com",
    text: "unibrix.ai@gmail.com",
  },
  phone: {
    label: "Телефон / WhatsApp",
    href: "https://wa.me/77787152517",
    text: "+7 778 715 25 17",
  },
};

/**
 * Акция. Чтобы выключить — enabled: false.
 * Плашка без сумм: «Сейчас скидка {percent}%. Осталось N дней.»
 */
export const promo = {
  enabled: true,
  percent: 30,
  endsAt: "2026-09-30T23:59:59+05:00",
};

export const analytics = {
  gaId: "",
  metrikaId: "",
};

export type CategoryId = "zapisi" | "magazin" | "anketa" | "arenda";

export const nav = [
  { label: "Запись", to: "/zapisi" as const },
  { label: "Магазин", to: "/magazin" as const },
  { label: "Анкета", to: "/anketa" as const },
  { label: "Аренда", to: "/arenda" as const },
];

export const hero = {
  title: "Готовые рабочие решения для бизнеса в Telegram",
  subtitle: "Подберём решение под ваш бюджет",
  primaryCta: "Смотреть демо",
  secondaryCta: "Рассчитать",
  note: "Запуск доступен небольшому бизнесу, не только сетям.",
};

export type Demo = {
  slug: string;
  category: CategoryId;
  name: string;
  line: string;
  botUrl: string;
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  painTitle: string;
  pain: string;
  demoTitle: string;
  demo: string;
  cta: string;
};

export const demos: Demo[] = [
  {
    slug: "lumi",
    category: "zapisi",
    name: "Lumi",
    line: "Студия красоты — запись к мастеру",
    botUrl: "https://t.me/thelumibeautybot",
    image: "/demos/lumi.webp",
    imageAlt: "Интерьер студии красоты Lumi",
    seoTitle: "Mini App для салона красоты — демо Lumi | Unibrix",
    seoDescription:
      "Запись к мастеру в Telegram вместо лички и таблиц. Откройте демо Lumi и посмотрите, как студия принимает клиентов без накладок.",
    h1: "Запись к мастеру в Telegram — демо Lumi",
    intro:
      "Lumi — рабочий контур для студии: клиент выбирает услугу и время, мастер видит расписание, напоминания уходят сами.",
    painTitle: "Что обычно ломается в студии",
    pain: "Запись живёт в личке, WhatsApp и таблице. Клиент забывает, два человека претендуют на одно окно, мастер отвечает вместо того, чтобы работать. Администратор вечером сверяет чаты вручную.",
    demoTitle: "Что показывает демо",
    demo: "В боте Lumi клиент записывается к мастеру без переписки. Слот закрывается сразу, приходит напоминание. Вы видите живой сценарий — не презентацию.",
    cta: "Открыть Lumi в Telegram",
  },
  {
    slug: "forge",
    category: "zapisi",
    name: "Forge",
    line: "Барбершоп — запись без накладок",
    botUrl: "https://t.me/forgebarberbot",
    image: "/demos/forge.webp",
    imageAlt: "Кресло барбершопа Forge",
    seoTitle: "Бот для барбершопа — демо Forge | Unibrix",
    seoDescription:
      "Запись в барбершоп через Telegram: слоты мастеров, статусы и напоминания. Откройте демо Forge.",
    h1: "Бот для барбершопа — демо Forge",
    intro:
      "Forge закрывает запись в барбершопе: клиент пишет в один бот, мастер видит своё окно, «потерянных» записей почти не остаётся.",
    painTitle: "Как запись тонет в чатах",
    pain: "Клиенты пишут барберу в личку, в группу и на ресепшен. Расписание в блокноте или в голове. К вечеру два человека на одно кресло, а кто-то просто не приходит.",
    demoTitle: "Что в демо Forge",
    demo: "Один вход для записи, слоты по мастерам, статус визита и напоминание. Посмотрите, как барбершоп собирает загрузку без ручной сверки чатов.",
    cta: "Открыть Forge в Telegram",
  },
  {
    slug: "dent",
    category: "zapisi",
    name: "Dent",
    line: "Стоматология — запись на приём",
    botUrl: "https://t.me/thedentbot",
    image: "/demos/dent.webp",
    imageAlt: "Кабинет стоматологии Dent",
    seoTitle: "Telegram-бот для записи в стоматологию — демо Dent | Unibrix",
    seoDescription:
      "Пациент записывается в Telegram, клиника видит слоты и напоминания. Демо Dent для хозяина клиники.",
    h1: "Запись в стоматологию — демо Dent",
    intro:
      "Dent — запись на приём в Telegram: пациент выбирает окно, клиника не держит очередь в мессенджерах.",
    painTitle: "Где клиника теряет приёмы",
    pain: "Администратор одновременно отвечает в WhatsApp, принимает звонки и ведёт карту. Пациент путает время, переносит в последний момент, а кресло простаивает.",
    demoTitle: "Как выглядит Dent",
    demo: "Пациент записывается сам, слот фиксируется, напоминание уходит заранее. Откройте бота и пройдите сценарий как хозяин клиники, не как пациент с улицы.",
    cta: "Открыть Dent в Telegram",
  },
  {
    slug: "bloom",
    category: "magazin",
    name: "Bloom",
    line: "Цветы — витрина и заказ в Telegram",
    botUrl: "https://t.me/bloomfloowersbot",
    image: "/demos/bloom.webp",
    imageAlt: "Букеты цветочного магазина Bloom",
    seoTitle: "Магазин цветов в Telegram — демо Bloom | Unibrix",
    seoDescription:
      "Заказ букета в Telegram: витрина, корзина, статус. Демо Bloom для цветочного магазина.",
    h1: "Цветочный магазин в Telegram — демо Bloom",
    intro:
      "Bloom показывает, как цветочный принимает заказы в Telegram: букет виден на витрине, заказ не теряется в директ.",
    painTitle: "Почему директ не тянет сезон",
    pain: "Фото букетов в ленте и в закреплённом сообщении. Клиент пишет «а этот есть?», менеджер уточняет наличие вручную. В праздники чат рвётся, заказы путаются.",
    demoTitle: "Что делает Bloom",
    demo: "Витрина, выбор состава, оформление заказа и статус. Посмотрите бота до того, как считать запуск под свой магазин.",
    cta: "Открыть Bloom в Telegram",
  },
  {
    slug: "aroma",
    category: "magazin",
    name: "Aroma",
    line: "Парфюм — каталог и заказ без лички",
    botUrl: "https://t.me/thearomashop_bot",
    image: "/demos/aroma.webp",
    imageAlt: "Флаконы парфюма Aroma",
    seoTitle: "Магазин парфюма в Telegram — демо Aroma | Unibrix",
    seoDescription:
      "Каталог, корзина и статусы заказа в Telegram. Демо Aroma для розницы и распива.",
    h1: "Парфюм в Telegram — демо Aroma",
    intro:
      "Aroma — магазин в Telegram для тех, кто продаёт парфюм из чата: каталог вместо закрепа, заказ со статусом вместо переписки.",
    painTitle: "Где теряются заказы на распив",
    pain: "Каталог в закреплённом сообщении, заказы в личку, остатки в голове. Клиент не знает, собран заказ или нет. Менеджер вечером восстанавливает переписку.",
    demoTitle: "Как устроен Aroma",
    demo: "Карточки, корзина, оформление и статусы. Откройте демо — это витрина, которую клиент может пройти сам, без менеджера на каждом шаге.",
    cta: "Открыть Aroma в Telegram",
  },
  {
    slug: "relax",
    category: "anketa",
    name: "Relax",
    line: "Массаж — заявка с опросом",
    botUrl: "https://t.me/therealmassagebot",
    image: "/demos/relax.webp",
    imageAlt: "Кабинет массажа Relax",
    seoTitle: "CRM-бот для заявок на массаж — демо Relax | Unibrix",
    seoDescription:
      "Клиент проходит короткий опрос и оставляет заявку в Telegram. Демо Relax для массажных кабинетов.",
    h1: "Заявка на массаж с опросом — демо Relax",
    intro:
      "Relax собирает заявку через анкету: тип массажа, ограничения, удобное время. Администратор получает готовую карточку, а не «сколько стоит?».",
    painTitle: "Почему анкета важнее прайса в чате",
    pain: "Клиент не знает, какой массаж ему нужен. Админ по кругу спрашивает противопоказания и длительность. Половина заявок обрывается на уточнениях.",
    demoTitle: "Что в демо Relax",
    demo: "Короткий опрос, заявка в одном потоке, уведомление администратору. Посмотрите, как кабинет квалифицирует клиента до звонка.",
    cta: "Открыть Relax в Telegram",
  },
  {
    slug: "saffron",
    category: "anketa",
    name: "Saffron",
    line: "Торты на дату — заявка без переписки",
    botUrl: "https://t.me/safroncakesbot",
    image: "/demos/saffron.webp",
    imageAlt: "Витрина тортов Saffron",
    seoTitle: "Заказ тортов в Telegram — демо Saffron | Unibrix",
    seoDescription:
      "Клиент указывает дату, начинку и тираж в анкете. Демо Saffron для кондитера и пекарни.",
    h1: "Заказ тортов в Telegram — демо Saffron",
    intro:
      "Saffron закрывает предзаказ торта: дата, начинка и повод собираются в анкете, кондитер не восстанавливает детали из десяти сообщений.",
    painTitle: "Как заказы теряют дату",
    pain: "Клиент пишет в WhatsApp «торт на субботу». Начинка уточняется через день, число гостей — ещё позже. Дата срывается, потому что детали жили в переписке.",
    demoTitle: "Как выглядит Saffron",
    demo: "Анкета под дату и состав, заявка уходит кондитеру целиком. Откройте бота, если принимаете торты под событие, а не с витрины «на сегодня».",
    cta: "Открыть Saffron в Telegram",
  },
  {
    slug: "riel",
    category: "arenda",
    name: "Riel",
    line: "Квартиры и офисы — надолго и посуточно",
    botUrl: "https://t.me/rieltyagencybot",
    image: "/demos/riel.webp",
    imageAlt: "Гостиная квартиры из витрины Riel",
    seoTitle: "Бот аренды квартир и офисов в Telegram — демо Riel | Unibrix",
    seoDescription:
      "Подбор жилья и офисов в Telegram: надолго и посуточно. Демо Riel для агентства и собственника.",
    h1: "Аренда квартир и офисов — демо Riel",
    intro:
      "Riel — витрина объектов в Telegram: клиент смотрит квартиры и офисы, пишет заявку, менеджер не пересылает одни и те же фото в десятый чат.",
    painTitle: "Где агентство теряет объекты",
    pain: "Фото в Excel, в канале и в личке риелтора. Клиент спрашивает «это ещё свободно?», актуальная база живёт у одного человека. Посуточно и длинная аренда путаются.",
    demoTitle: "Что показывает Riel",
    demo: "Объекты, фильтр под задачу, заявка на просмотр. Откройте демо, если сдаёте и надолго, и посуточно — и хотите один вход для клиента.",
    cta: "Открыть Riel в Telegram",
  },
];

export const categories: Record<
  CategoryId,
  {
    path: `/${CategoryId}`;
    nav: string;
    title: string;
    seoTitle: string;
    seoDescription: string;
    h1: string;
    intro: string;
    h2: string;
  }
> = {
  zapisi: {
    path: "/zapisi",
    nav: "Запись",
    title: "Запись",
    seoTitle: "Telegram-бот для записи — салоны, барбершопы, клиники | Unibrix",
    seoDescription:
      "Живые демо записи в Telegram: студия красоты Lumi, барбершоп Forge, стоматология Dent. Расчёт после демо, без прайса пакетов.",
    h1: "Telegram-бот для записи",
    intro:
      "Клиент выбирает мастера и время сам. Вы смотрите расписание, а не переписку. Ниже — три рабочих демо, не макеты.",
    h2: "Mini App для салона красоты и запись в сервисах",
  },
  magazin: {
    path: "/magazin",
    nav: "Магазин",
    title: "Магазин",
    seoTitle: "Магазин в Telegram — цветы и парфюм | Unibrix",
    seoDescription:
      "Витрина, корзина и статус заказа в Telegram. Демо Bloom и Aroma. Подберём контур под ваш каталог.",
    h1: "Магазин в Telegram",
    intro:
      "Каталог и заказ остаются в одном чате. Клиент не пишет «есть ли в наличии?» под каждым фото.",
    h2: "Витрина, которая продаёт без менеджера на каждом шаге",
  },
  anketa: {
    path: "/anketa",
    nav: "Анкета",
    title: "Анкета",
    seoTitle: "CRM-бот для заявок и анкет в Telegram | Unibrix",
    seoDescription:
      "Заявки с опросом: массаж Relax и торты на дату Saffron. Демо для хозяина сервиса, расчёт после просмотра.",
    h1: "Анкета и заявки в Telegram",
    intro:
      "Клиент отвечает на нужные вопросы до звонка. Вы получаете заявку, а не обрывок переписки.",
    h2: "CRM-бот для заявок — опрос, а не пустой «напишите нам»",
  },
  arenda: {
    path: "/arenda",
    nav: "Аренда",
    title: "Аренда",
    seoTitle: "Бот для аренды квартир и офисов в Telegram | Unibrix",
    seoDescription:
      "Демо Riel: квартиры и офисы, надолго и посуточно. Один вход для клиента, заявка на просмотр.",
    h1: "Аренда в Telegram",
    intro:
      "Объекты в одном боте — надолго и посуточно. Клиент смотрит актуальные варианты, менеджер не пересылает архив фото.",
    h2: "Квартиры и офисы в одном контуре",
  },
};

export const homeSections = {
  demoEyebrow: "Живые демо",
  demoTitle: "Откройте бота и пройдите сценарий",
  demoBody:
    "Четыре задачи — запись, магазин, анкета, аренда. В каждой карточке одно демо: фото, название, кнопка в Telegram.",
  h2s: [
    {
      id: "bot-zapisi",
      title: "Telegram-бот для записи",
      body: "Салон, барбершоп, клиника: слот занимается в боте, напоминание уходит клиенту. Смотрите Lumi, Forge и Dent.",
    },
    {
      id: "miniapp-salon",
      title: "Mini App для салона красоты",
      body: "Если кнопочного бота мало — экраны записи внутри Telegram. Демо Lumi как точка старта разговора, не как витрина для клиента с улицы.",
    },
    {
      id: "bot-barber",
      title: "бот для барбершопа",
      body: "Forge — запись к барберу без накладок и без трёх чатов на одного мастера.",
    },
    {
      id: "torty",
      title: "заказ тортов в Telegram",
      body: "Saffron собирает дату и начинку в анкете. Кондитер видит заказ целиком.",
    },
    {
      id: "crm-zayavki",
      title: "CRM-бот для заявок",
      body: "Relax и Saffron показывают заявку с опросом: квалификация до звонка администратора.",
    },
  ],
};

export const lead = {
  eyebrow: "Расчёт",
  title: "После демо напишите нишу — рассчитаем персонально.",
  body: "Не высылаем общий прайс. Сначала смотрите живого бота, затем пишете нишу — считаем под ваш объём, а не «пакет с сайта».",
  success: "Заявка принята",
  submit: "Отправить",
  consent:
    "Нажимая кнопку, вы соглашаетесь, что мы свяжемся с вами по указанным контактам.",
  fields: {
    name: { label: "Имя", placeholder: "Как к вам обращаться" },
    contact: {
      label: "Telegram / телефон",
      placeholder: "@username или +7 …",
    },
    niche: {
      label: "Ниша",
      placeholder: "Салон, барбершоп, цветы, торты, аренда…",
    },
    comment: {
      label: "Комментарий",
      placeholder: "Что хотите запустить и как сейчас принимаете заявки",
    },
  },
  errors: {
    name: "Укажите имя",
    contact: "Укажите Telegram или телефон",
    niche: "Укажите нишу",
  },
};

export const applyPage = {
  seoTitle: "Рассчитать решение Unibrix — заявка после демо",
  seoDescription:
    "Напишите нишу после просмотра демо. Рассчитаем персонально, без сумм пакетов на сайте.",
  h1: "Рассчитаем решение под ваш бюджет",
  intro:
    "После демо напишите нишу — рассчитаем персонально. Цена зависит от сценария, а не от кнопки «тариф».",
};

export const faq = {
  eyebrow: "Вопросы",
  title: "Коротко о запуске",
  items: [
    {
      q: "Чем это отличается от WhatsApp?",
      a: "WhatsApp остаётся перепиской: запись, заказ и статусы живут в чатах и в голове администратора. В Telegram мы ставим готовый контур — бот или Mini App, — где клиент проходит сценарий сам, а вы видите слоты, заказы и заявки в одном месте.",
    },
    {
      q: "Нужно ли увольнять администратора?",
      a: "Нет. Администратор перестаёт быть диспетчером чатов и занимается клиентами и залом. Бот забирает запись, витрину и первичную анкету — не человека.",
    },
    {
      q: "Можно посмотреть демо?",
      a: "Да. На сайте четыре блока с живыми ботами. Откройте нужный в Telegram, пройдите сценарий, затем напишите нишу — рассчитаем под вас.",
    },
    {
      q: "Как считается цена?",
      a: "Рассчитываем после демо. На сайте нет пакетов и сумм «от»: смотрите бота, описываете нишу и объём — считаем персонально.",
    },
  ],
};

export const categoryOrder: CategoryId[] = [
  "zapisi",
  "magazin",
  "anketa",
  "arenda",
];

export const footer = {
  blurb:
    "Готовые боты и Mini App для записи, магазина, заявок и аренды в Telegram. Сначала демо, затем расчёт.",
  geo: "Казахстан. Работаем с командами в Алматы и Астане — и с теми, кто ведёт бизнес удалённо.",
  rights: "© 2026 Unibrix.ai",
};

export function demosByCategory(id: CategoryId): Demo[] {
  return demos.filter((d) => d.category === id);
}

export function demoBySlug(slug: string): Demo | undefined {
  return demos.find((d) => d.slug === slug);
}
