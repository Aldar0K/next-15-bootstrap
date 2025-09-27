"use client";

import { Todo } from "../model";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div
      className={`p-4 bg-card border border-border rounded-lg cursor-pointer transition-colors hover:bg-muted ${
        todo.completed ? "opacity-60" : ""
      }`}
      onClick={() => onToggle(todo.id)}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
            todo.completed
              ? "bg-primary border-primary text-primary-foreground"
              : "border-border"
          }`}
        >
          {todo.completed && (
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <p
            className={`text-card-foreground ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.title}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            ID: {todo.id} | User ID: {todo.userId}
          </p>
        </div>
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(todo.id);
            }}
            className="text-muted-foreground hover:text-foreground p-1"
            aria-label="Удалить задачу"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
