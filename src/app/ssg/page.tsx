import { TimeDisplay } from "@/shared/ui/time-display";
import { SSGPageClient } from "./SSGPageClient";

// SSG - Static Site Generation
// Данные загружаются на этапе сборки и кешируются
export default async function SSGPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=6",
    {
      cache: "force-cache", // Принудительно кешируем для SSG
    }
  );
  const todos = await response.json();

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Static Site Generation (SSG)</h1>
          <p className="text-muted-foreground">
            Данные загружаются на этапе сборки и кешируются
          </p>
          <TimeDisplay label="Время сборки" />
        </div>

        <SSGPageClient todos={todos} />
      </div>
    </div>
  );
}
