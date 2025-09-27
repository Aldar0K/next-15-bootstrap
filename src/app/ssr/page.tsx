import { getFallbackTodos } from "@/shared/constants";
import { TimeDisplay } from "@/shared/ui/time-display";
import { SSRPageClient } from "./SSRPageClient";

// SSR - Server-Side Rendering
// Данные загружаются на сервере при каждом запросе
export default async function SSRPage() {
  // Имитируем задержку сервера
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let todos;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/todos?_limit=20`,
      {
        cache: "no-store", // Принудительно отключаем кеширование для SSR
        next: { tags: ["todos"] }, // Тег для инвалидации
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
          <h1 className="text-3xl font-bold">Server-Side Rendering (SSR)</h1>
          <p className="text-muted-foreground">
            Данные загружаются на сервере при каждом запросе
          </p>
          <TimeDisplay label="Время генерации" />
        </div>

        <SSRPageClient todos={todos} />
      </div>
    </div>
  );
}
