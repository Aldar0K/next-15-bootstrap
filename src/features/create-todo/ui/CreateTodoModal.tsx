"use client";

import { CreateTodoRequest, Todo, todoApi } from "@/entities/todo";
import { Modal } from "@/shared/ui/modal";
import { useState } from "react";
import { CreateTodoForm } from "./CreateTodoForm";

interface CreateTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTodoCreated?: (todo: Todo) => void;
}

export const CreateTodoModal = ({
  isOpen,
  onClose,
  onTodoCreated,
}: CreateTodoModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: CreateTodoRequest) => {
    try {
      setIsSubmitting(true);
      const newTodo = await todoApi.createTodo(data);

      console.log("Todo создан:", newTodo);
      alert("Задача успешно создана!");

      onTodoCreated?.(newTodo);
      onClose();
    } catch (error) {
      console.error("Ошибка при создании задачи:", error);
      alert("Ошибка при создании задачи");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Создать новую задачу">
      <CreateTodoForm
        onSubmit={handleSubmit}
        onCancel={onClose}
        isSubmitting={isSubmitting}
      />
    </Modal>
  );
};
