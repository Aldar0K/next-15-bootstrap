export interface Attachment {
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  path: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  createdAt?: string;
  updatedAt?: string;
  attachment?: Attachment;
}

export interface CreateTodoRequest {
  title: string;
  completed?: boolean;
  userId: number;
}

export interface CreateTodoResponse {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}
