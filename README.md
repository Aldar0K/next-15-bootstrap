# Next.js 15 Test App

Тестовое приложение на Next.js 15, демонстрирующее разные виды рендеринга и работу с API.

## Особенности

- **4 страницы с разными видами рендеринга:**
  - SSR (Server-Side Rendering) - рендеринг на сервере
  - SSG (Static Site Generation) - статическая генерация
  - ISR (Incremental Static Regeneration) - инкрементальная регенерация
  - CSR (Client-Side Rendering) - рендеринг на клиенте

- **API интеграция** с встроенными Next.js API Routes
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
│   ├── api/               # API Routes
│   │   ├── todos/         # API для todos
│   │   └── files/         # API для файлов
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Корневой layout
│   ├── page.tsx           # Главная страница
│   ├── ssr/               # SSR страница
│   ├── ssg/               # SSG страница
│   ├── isr/               # ISR страница
│   └── csr/               # CSR страница
├── entities/               # Бизнес-сущности
│   └── todo/              # Todo сущность
├── features/               # Фичи
│   └── create-todo/       # Создание todo
├── shared/                # Общие компоненты и утилиты
│   ├── providers/         # Провайдеры (тема)
│   ├── ui/                # UI компоненты
│   └── lib/               # Утилиты
└── widgets/               # Виджеты (компоненты страниц)
    └── header/            # Шапка сайта
```

## Деплой

Проект готов для деплоя на Vercel:

### 1. Подготовка к деплою

```bash
# Клонируйте репозиторий
git clone <your-repo-url>
cd next-15-bootstrap

# Установите зависимости
npm install

# Скопируйте файл с переменными окружения
cp .env.example .env.local

# Отредактируйте .env.local для разработки
# NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 2. Деплой на Vercel

1. Подключите репозиторий к Vercel
2. В настройках проекта добавьте переменную окружения:
   - `NEXT_PUBLIC_BASE_URL` = `https://your-domain.vercel.app`
3. Деплой произойдет автоматически

### 3. Деплой на другие платформы

Для других хостингов (Netlify, Railway, etc.):

- Установите переменную `NEXT_PUBLIC_BASE_URL` в настройках проекта
- Укажите URL вашего домена
