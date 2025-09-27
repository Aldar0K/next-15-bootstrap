"use client";

import { Todo, TodoList } from "@/entities/todo";
import { CreateTodoButton } from "@/features/create-todo";

interface ISRPageClientProps {
  todos: Todo[];
}

export function ISRPageClient({ todos }: ISRPageClientProps) {
  const toggleTodo = (id: number) => {
    // В ISR нет интерактивности, но оставляем для демонстрации
    console.log("Toggle todo:", id);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Список задач (ISR)</h2>
        <CreateTodoButton />
      </div>

      <TodoList todos={todos} onToggle={toggleTodo} loading={false} />
    </div>
  );
}
