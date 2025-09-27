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
];

/**
 * Получить fallback данные с ограничением по количеству
 */
export const getFallbackTodos = (limit?: number): Todo[] => {
  return limit ? FALLBACK_TODOS.slice(0, limit) : FALLBACK_TODOS;
};
