import { revalidatePath, revalidateTag } from "next/cache";

/**
 * Инвалидирует кеш для страниц с разными стратегиями рендеринга
 */
export const revalidatePages = () => {
  // Инвалидируем SSR страницу (динамическая)
  revalidatePath("/ssr");

  // Инвалидируем ISR страницу (статическая с ревалидацией)
  revalidatePath("/isr");

  // Инвалидируем тег для API данных
  revalidateTag("todos");

  console.log("✅ Кеш страниц инвалидирован");
};
