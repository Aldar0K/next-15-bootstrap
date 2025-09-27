"use client";

import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { CreateTodoModal } from "./CreateTodoModal";

export const CreateTodoButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Добавить задачу</Button>

      <CreateTodoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
