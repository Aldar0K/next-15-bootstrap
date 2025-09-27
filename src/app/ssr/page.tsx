import { SSRPageClient } from "./SSRPageClient";

// SSR - Server-Side Rendering
// Данные загружаются на сервере при каждом запросе
export default async function SSRPage() {
  // Имитируем задержку сервера
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    {
      cache: "no-store", // Принудительно отключаем кеширование для SSR
    }
  );
  const todos = await response.json();

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Server-Side Rendering (SSR)</h1>
          <p className="text-muted-foreground">
            Данные загружаются на сервере при каждом запросе
          </p>
          <p className="text-sm text-muted-foreground">
            Время генерации: {new Date().toLocaleTimeString("ru-RU")}
          </p>
        </div>

        <SSRPageClient todos={todos} />
      </div>
    </div>
  );
}
