import { Todo } from "@/entities/todo";

/**
 * Статичные данные todos для fallback при сборке
 */
export const FALLBACK_TODOS: Todo[] = [
  {
    id: 1,
    title: "Изучить Next.js 15",
    completed: false,
    userId: 1,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
    attachment: undefined,
  },
  {
    id: 2,
    title: "Настроить TypeScript",
    completed: true,
    userId: 1,
    createdAt: "2024-01-14T09:30:00.000Z",
    updatedAt: "2024-01-14T15:45:00.000Z",
    attachment: undefined,
  },
  {
    id: 3,
    title: "Создать компоненты UI",
    completed: false,
    userId: 2,
    createdAt: "2024-01-13T14:20:00.000Z",
    updatedAt: "2024-01-13T14:20:00.000Z",
    attachment: undefined,
  },
  {
    id: 4,
    title: "Настроить Tailwind CSS",
    completed: true,
    userId: 1,
    createdAt: "2024-01-12T16:00:00.000Z",
    updatedAt: "2024-01-12T18:30:00.000Z",
    attachment: undefined,
  },
  {
    id: 5,
    title: "Реализовать темную тему",
    completed: false,
    userId: 2,
    createdAt: "2024-01-11T11:15:00.000Z",
    updatedAt: "2024-01-11T11:15:00.000Z",
    attachment: undefined,
  },
  {
    id: 6,
    title: "Оптимизировать производительность",
    completed: false,
    userId: 1,
    createdAt: "2024-01-10T14:45:00.000Z",
    updatedAt: "2024-01-10T14:45:00.000Z",
    attachment: undefined,
  },
  {
    id: 7,
    title: "Добавить тестирование",
    completed: false,
    userId: 2,
    createdAt: "2024-01-09T13:30:00.000Z",
    updatedAt: "2024-01-09T13:30:00.000Z",
    attachment: undefined,
  },
  {
    id: 8,
    title: "Настроить CI/CD",
    completed: true,
    userId: 1,
    createdAt: "2024-01-08T11:00:00.000Z",
    updatedAt: "2024-01-08T16:30:00.000Z",
    attachment: undefined,
  },
  {
    id: 9,
    title: "Оптимизировать SEO",
    completed: false,
    userId: 2,
    createdAt: "2024-01-07T09:15:00.000Z",
    updatedAt: "2024-01-07T09:15:00.000Z",
    attachment: undefined,
  },
  {
    id: 10,
    title: "Добавить мониторинг",
    completed: false,
    userId: 1,
    createdAt: "2024-01-06T14:45:00.000Z",
    updatedAt: "2024-01-06T14:45:00.000Z",
    attachment: undefined,
  },
];

/**
 * Получить fallback данные с ограничением по количеству
 */
export const getFallbackTodos = (limit?: number): Todo[] => {
  return limit ? FALLBACK_TODOS.slice(0, limit) : FALLBACK_TODOS;
};
