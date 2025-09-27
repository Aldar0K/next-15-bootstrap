import { ISRPageClient } from "./ISRPageClient";

// ISR - Incremental Static Regeneration
// Данные кешируются, но периодически обновляются
export default async function ISRPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=6",
    {
      next: { revalidate: 60 }, // Пересоздаем страницу каждые 60 секунд
    }
  );
  const todos = await response.json();

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
          <p className="text-sm text-muted-foreground">
            Время последнего обновления:{" "}
            {new Date().toLocaleTimeString("ru-RU")}
          </p>
        </div>

        <ISRPageClient todos={todos} />
      </div>
    </div>
  );
}
