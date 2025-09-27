# Next.js 15 Test App

Тестовое приложение на Next.js 15, демонстрирующее разные виды рендеринга и работу с API.

## Особенности

- **4 страницы с разными видами рендеринга:**
  - SSR (Server-Side Rendering) - рендеринг на сервере
  - SSG (Static Site Generation) - статическая генерация
  - ISR (Incremental Static Regeneration) - инкрементальная регенерация
  - CSR (Client-Side Rendering) - рендеринг на клиенте

- **API интеграция** с jsonplaceholder
- **Модальные окна** с формами (text и file инпуты)
- **POST запросы** с данными из модальных окон
- **Feature-Sliced Design** архитектура
- **Tailwind CSS v4** с кастомными CSS переменными
- **next-themes** для переключения тем
- **TypeScript** для типизации

## Технологии

- Next.js 15.5.3
- React 19.1.0
- TypeScript
- Tailwind CSS v4
- next-themes
- Lucide React
- Feature-Sliced Design

## Запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## Структура проекта

```
src/
├── app/                    # App Router страницы
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   ├── ssr/               # SSR страница
│   ├── ssg/               # SSG страница
│   ├── isr/               # ISR страница
│   └── csr/               # CSR страница
├── shared/                # Общие компоненты и утилиты
│   ├── providers/         # Провайдеры (тема)
│   ├── ui/                # UI компоненты
│   └── lib/               # Утилиты
└── widgets/               # Виджеты (компоненты страниц)
    ├── header/            # Шапка сайта
    ├── ssr-page/          # Компонент SSR страницы
    ├── ssg-page/          # Компонент SSG страницы
    ├── isr-page/          # Компонент ISR страницы
    └── csr-page/          # Компонент CSR страницы
```

## Деплой

Проект готов для деплоя на Vercel:

1. Подключите репозиторий к Vercel
2. Настройки деплоя будут применены автоматически
3. Проект будет доступен по ссылке Vercel
