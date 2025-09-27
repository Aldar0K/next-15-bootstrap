"use client";

import { CreateTodoRequest, Todo, todoApi } from "@/entities/todo";
import { Modal } from "@/shared/ui/modal";
import { useState } from "react";
import { CreateTodoForm } from "./CreateTodoForm";
import { CreateTodoResult } from "./CreateTodoResult";

interface CreateTodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTodoCreated?: (todo: Todo) => void;
}

type ModalStep = "form" | "result";

export const CreateTodoModal = ({
  isOpen,
  onClose,
  onTodoCreated,
}: CreateTodoModalProps) => {
  const [currentStep, setCurrentStep] = useState<ModalStep>("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdTodo, setCreatedTodo] = useState<Todo | null>(null);

  const handleSubmit = async (data: CreateTodoRequest) => {
    try {
      setIsSubmitting(true);
      const newTodo = await todoApi.createTodo(data);

      console.log("Todo создан:", newTodo);
      setCreatedTodo(newTodo);
      setCurrentStep("result");

      onTodoCreated?.(newTodo);
    } catch (error) {
      console.error("Ошибка при создании задачи:", error);
      alert("Ошибка при создании задачи");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setCurrentStep("form");
    setCreatedTodo(null);
    onClose();
  };

  const handleBackToForm = () => {
    setCurrentStep("form");
    setCreatedTodo(null);
  };

  const getTitle = () => {
    switch (currentStep) {
      case "form":
        return "Создать новую задачу";
      case "result":
        return "Задача создана!";
      default:
        return "Создать новую задачу";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={getTitle()}>
      {currentStep === "form" && (
        <CreateTodoForm
          onSubmit={handleSubmit}
          onCancel={handleClose}
          isSubmitting={isSubmitting}
        />
      )}

      {currentStep === "result" && createdTodo && (
        <CreateTodoResult
          todo={createdTodo}
          onClose={handleClose}
          onBackToForm={handleBackToForm}
        />
      )}
    </Modal>
  );
};
