"use client";

import { Todo, TodoList } from "@/entities/todo";
import { CreateTodoButton } from "@/features/create-todo";

interface SSRPageClientProps {
  todos: Todo[];
}

export function SSRPageClient({ todos }: SSRPageClientProps) {
  const toggleTodo = (id: number) => {
    // В SSR нет интерактивности, но оставляем для демонстрации
    console.log("Toggle todo:", id);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Список задач (SSR)</h2>
        <CreateTodoButton />
      </div>

      <TodoList todos={todos} onToggle={toggleTodo} loading={false} />
    </div>
  );
}
