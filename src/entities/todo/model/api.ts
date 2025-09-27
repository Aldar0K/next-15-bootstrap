import { CreateTodoRequest, CreateTodoResponse, Todo } from "./types";

const API_BASE_URL = "/api";

export const todoApi = {
  // Получить все todos
  async getTodos(limit?: number): Promise<Todo[]> {
    const url = limit
      ? `${API_BASE_URL}/todos?_limit=${limit}`
      : `${API_BASE_URL}/todos`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return response.json();
  },

  // Создать новый todo
  async createTodo(
    data: CreateTodoRequest,
    file?: File
  ): Promise<CreateTodoResponse> {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("completed", String(data.completed || false));
    formData.append("userId", String(data.userId));

    if (file) {
      formData.append("attachment", file);
    }

    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to create todo");
    }
    return response.json();
  },

  // Обновить todo
  async updateTodo(id: number, data: Partial<Todo>): Promise<Todo> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }
    return response.json();
  },

  // Удалить todo
  async deleteTodo(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  },
};
