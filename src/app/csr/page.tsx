"use client";

import { Todo, TodoList, todoApi } from "@/entities/todo";
import { CreateTodoButton } from "@/features/create-todo";
import { TimeDisplay } from "@/shared/ui/time-display";
import { useEffect, useState } from "react";

// CSR - Client-Side Rendering
// Данные загружаются на клиенте
export const dynamic = "force-dynamic"; // Принудительно делаем страницу динамической

export default function CSRPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const data = await todoApi.getTodos(20);
        setTodos(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoCreated = (newTodo: Todo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Client-Side Rendering (CSR)</h1>
          <p className="text-muted-foreground">
            Данные загружаются на клиенте после рендеринга страницы
          </p>
          <TimeDisplay label="Время загрузки страницы" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Список задач (CSR)</h2>
            <CreateTodoButton onTodoCreated={handleTodoCreated} />
          </div>

          <TodoList todos={todos} onToggle={toggleTodo} loading={loading} />
        </div>
      </div>
    </div>
  );
}
