# Unibrix.ai

Сайт компании [Unibrix](https://unibrix.ai): готовые CRM-боты, интернет-магазины и Mini App для бизнеса в Telegram.

## Стек

- [TanStack Start](https://tanstack.com/start) (React + Vite)
- Tailwind CSS v4
- TypeScript

## Запуск

```bash
npm install
npm run dev
```

Сайт откроется на [http://localhost:8080](http://localhost:8080).

Сборка:

```bash
npm run build
npm run preview
```

## Контент и акция

Тексты, цены, контакты и настройки скидки — в [`src/content.ts`](src/content.ts).

- Чтобы выключить акцию раньше срока: `promo.enabled = false`
- Чтобы сменить размер скидки: `promo.discounts`
- Чтобы сменить дату окончания: `promo.endsAt`

## Страницы

| Путь | Страница |
|------|----------|
| `/` | Главная |
| `/solutions` | Решения |
| `/cases` | Кейсы |
| `/apply` | Заявка |

Заявки сохраняются локально в браузере (localStorage).

## Контакты

- Instagram: [instagram.com/unibrix.ai](https://www.instagram.com/unibrix.ai)
- Telegram-бот: [t.me/unibrixbot](https://t.me/unibrixbot)
- Telegram: [t.me/unibrix](https://t.me/unibrix)
- Email: [unibrix.ai@gmail.com](mailto:unibrix.ai@gmail.com)
- WhatsApp: [+7 778 715 25 17](https://wa.me/77787152517)
