"use client";

import { CreateTodoRequest } from "@/entities/todo";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useState } from "react";

interface CreateTodoFormProps {
  onSubmit: (data: CreateTodoRequest, file?: File) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export const CreateTodoForm = ({
  onSubmit,
  onCancel,
  isSubmitting,
}: CreateTodoFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    file: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) return;

    const todoData: CreateTodoRequest = {
      title: formData.title.trim(),
      completed: false,
      userId: 1, // В реальном приложении брать из контекста пользователя
    };

    onSubmit(todoData, formData.file || undefined);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-card-foreground mb-2">
          Название задачи
        </label>
        <Input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Введите название задачи..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-card-foreground mb-2">
          Вложение (опционально)
        </label>
        <Input type="file" onChange={handleFileChange} accept="*/*" />
        {formData.file && (
          <p className="text-sm text-muted-foreground mt-1">
            Выбран файл: {formData.file.name}
          </p>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Отмена
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Создание..." : "Создать"}
        </Button>
      </div>
    </form>
  );
};
