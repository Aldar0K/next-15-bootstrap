"use client";

import { Todo } from "@/entities/todo";
import { Button } from "@/shared/ui/button";
import { CheckCircle, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";

interface CreateTodoResultProps {
  todo: Todo;
  onClose: () => void;
  onBackToForm: () => void;
}

export const CreateTodoResult = ({
  todo,
  onClose,
  onBackToForm,
}: CreateTodoResultProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(todo.id.toString());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Ошибка при копировании:", error);
    }
  };

  const handleViewInAPI = () => {
    window.open(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      "_blank"
    );
  };

  return (
    <div className="space-y-6">
      {/* Success Icon */}
      <div className="flex justify-center">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-card-foreground">
          Задача успешно создана!
        </h3>
        <p className="text-sm text-muted-foreground">
          Ваша задача была добавлена в систему
        </p>
      </div>

      {/* Todo Details */}
      <div className="bg-muted/50 rounded-lg p-4 space-y-3">
        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Название задачи
          </label>
          <p className="text-sm text-card-foreground mt-1 font-medium">
            {todo.title}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              ID задачи
            </label>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm text-card-foreground font-mono">
                #{todo.id}
              </p>
              <button
                onClick={handleCopyId}
                className="p-1 hover:bg-muted rounded transition-colors"
                title="Копировать ID"
              >
                <Copy className="w-3 h-3" />
              </button>
              {copied && (
                <span className="text-xs text-green-600 dark:text-green-400">
                  Скопировано!
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Статус
            </label>
            <p className="text-sm text-card-foreground mt-1">
              {todo.completed ? "Выполнено" : "В процессе"}
            </p>
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Пользователь
          </label>
          <p className="text-sm text-card-foreground mt-1">
            User ID: {todo.userId}
          </p>
        </div>
      </div>

      {/* API Link */}
      <div className="text-center">
        <button
          onClick={handleViewInAPI}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Посмотреть в API
        </button>
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onBackToForm}>
          Создать еще
        </Button>
        <Button onClick={onClose}>Готово</Button>
      </div>
    </div>
  );
};
