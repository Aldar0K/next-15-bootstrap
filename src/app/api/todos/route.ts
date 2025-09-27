import { NextRequest, NextResponse } from "next/server";

// Имитация базы данных в памяти
const todos: Array<{
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  createdAt: string;
  updatedAt: string;
  attachment: {
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    path: string;
  } | null;
}> = [
  {
    id: 1,
    title: "Изучить Next.js 15",
    completed: false,
    userId: 1,
    createdAt: "2024-01-15T10:00:00.000Z",
    updatedAt: "2024-01-15T10:00:00.000Z",
    attachment: null,
  },
  {
    id: 2,
    title: "Настроить TypeScript",
    completed: true,
    userId: 1,
    createdAt: "2024-01-14T09:30:00.000Z",
    updatedAt: "2024-01-14T15:45:00.000Z",
    attachment: null,
  },
  {
    id: 3,
    title: "Создать компоненты UI",
    completed: false,
    userId: 2,
    createdAt: "2024-01-13T14:20:00.000Z",
    updatedAt: "2024-01-13T14:20:00.000Z",
    attachment: null,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("_limit");

  let result = todos;
  if (limit) {
    const limitNum = parseInt(limit);
    result = todos.slice(0, limitNum);
  }

  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const completed = formData.get("completed") === "true";
    const userId = parseInt(formData.get("userId") as string);
    const file = formData.get("attachment") as File | null;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const newTodo = {
      id: todos.length + 1,
      title,
      completed,
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      attachment: file
        ? {
            filename: `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            originalName: file.name,
            size: file.size,
            mimetype: file.type,
            path: `/api/files/${file.name}`,
          }
        : null,
    };

    todos.push(newTodo);

    return NextResponse.json(newTodo, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
