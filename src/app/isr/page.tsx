import { getFallbackTodos } from "@/shared/constants";
import { TimeDisplay } from "@/shared/ui/time-display";
import { ISRPageClient } from "./ISRPageClient";

// ISR - Incremental Static Regeneration
// Данные кешируются, но периодически обновляются
export default async function ISRPage() {
  let todos;

  try {
    // Получаем данные из API с тегами кеширования
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos?_limit=20`,
      {
        next: {
          revalidate: 60, // Пересоздаем страницу каждые 60 секунд
          tags: ["todos"], // Тег для инвалидации
        },
      }
    );
    todos = await response.json();
  } catch {
    // Fallback данные для сборки
    console.log("API недоступен при сборке, используем fallback данные");
    todos = getFallbackTodos(10);
  }

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
