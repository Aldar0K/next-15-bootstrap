import Link from "next/link";

const Home = () => {
  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            Next.js 15 Test App
          </h1>
          <p className="text-muted-foreground text-lg">
            Демонстрация разных видов рендеринга в Next.js
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/ssr"
            className="p-6 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">SSR</h2>
            <p className="text-muted-foreground">
              Server-Side Rendering - рендеринг на сервере
            </p>
          </Link>

          <Link
            href="/ssg"
            className="p-6 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">SSG</h2>
            <p className="text-muted-foreground">
              Static Site Generation - статическая генерация
            </p>
          </Link>

          <Link
            href="/isr"
            className="p-6 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">ISR</h2>
            <p className="text-muted-foreground">
              Incremental Static Regeneration - инкрементальная регенерация
            </p>
          </Link>

          <Link
            href="/csr"
            className="p-6 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">CSR</h2>
            <p className="text-muted-foreground">
              Client-Side Rendering - рендеринг на клиенте
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
