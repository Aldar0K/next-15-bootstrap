"use client";

import { Todo } from "@/entities/todo";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { CreateTodoModal } from "./CreateTodoModal";

interface CreateTodoButtonProps {
  onTodoCreated?: (todo: Todo) => void;
}

export const CreateTodoButton = ({ onTodoCreated }: CreateTodoButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Добавить задачу</Button>

      <CreateTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onTodoCreated={onTodoCreated}
      />
    </>
  );
};
