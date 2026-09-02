# Unibrix.ai

Сайт-витрина [Unibrix](https://unibrix.ai): живые демо ботов в Telegram и заявка на расчёт.

Это **сайт**, не Mini App и не репозиторий `unibrix-app`.

## Стек

- TanStack Start (React + Vite)
- Tailwind CSS v4
- TypeScript
- Nitro → Vercel Build Output API (`.vercel/output`)

## Локально

```bash
npm install
npm run dev
```

## Vercel — существующий проект unibrix.ai

Новый проект **не создавать**. Залить код в тот проект, к которому уже привязан домен `unibrix.ai`, и сделать Redeploy.

### Settings проекта

| Поле | Значение |
|------|----------|
| Framework Preset | **Other** |
| Root Directory | `.` (корень этого репозитория сайта) |
| Build Command | `npm run build` |
| Output Directory | **пусто** — не заполнять. Nitro сам пишет `.vercel/output` |
| Install Command | `npm install` |
| Node.js | 22.x |

**Не затирать:**

- Domain `unibrix.ai` и `www` в Vercel → Settings → Domains
- DNS у регистратора
- Production Branch текущего проекта
- Env Vars, если они уже стоят — только добавить недостающие, не удалять доменные настройки

### Environment Variables

Нужны, чтобы заявки приходили в Telegram администратору. Только в Vercel, не в git.

| Name | Environment | Зачем |
|------|-------------|--------|
| `TELEGRAM_BOT_TOKEN` | Production (и Preview, если нужно) | токен бота `@unibrixbot` |
| `ADMIN_TELEGRAM_ID` | Production | Telegram ID, куда слать заявки |

После добавления переменных — Redeploy. Без них форма на сайте всё равно показывает «Заявка принята», но сообщение в Telegram не уйдёт.

### Как выкатить

1. Заменить код в GitHub-репозитории **этого сайта** (не `unibrix-app`).
2. Vercel подтянет коммит в существующий проект и соберёт Production.
3. Проверить `https://unibrix.ai/`, `/zapisi`, `/demo/lumi`, `/zayavka`, отправить тестовую заявку.

## Страницы

| Путь | Страница |
|------|----------|
| `/` | Главная |
| `/zapisi` | Запись |
| `/magazin` | Магазин |
| `/anketa` | Анкета |
| `/arenda` | Аренда |
| `/zayavka` | Заявка |
| `/demo/lumi` … `/demo/riel` | Демо ниш |

## SEO

- Уникальные `title` / `description` на каждую страницу
- Canonical: `https://unibrix.ai…`
- [`public/sitemap.xml`](public/sitemap.xml)
- [`public/robots.txt`](public/robots.txt)
- Open Graph: `/og.jpg`, favicon из логотипа

Тексты и демо — [`src/content.ts`](src/content.ts). Акция: `promo.enabled`, `promo.percent`, `promo.endsAt`.
