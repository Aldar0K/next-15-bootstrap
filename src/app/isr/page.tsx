import { TimeDisplay } from "@/shared/ui/time-display";
import { ISRPageClient } from "./ISRPageClient";

// ISR - Incremental Static Regeneration
// Данные кешируются, но периодически обновляются
export default async function ISRPage() {
  // Для ISR используем моковые данные, так как API недоступен при сборке
  const todos = [
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
  ];

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">
            Incremental Static Regeneration (ISR)
          </h1>
          <p className="text-muted-foreground">
            Данные кешируются, но периодически обновляются (каждые 60 сек)
          </p>
          <TimeDisplay label="Время последнего обновления" />
        </div>

        <ISRPageClient todos={todos} />
      </div>
    </div>
  );
}
