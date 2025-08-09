import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - NTTF ERP" },
    { name: "description", content: "NTTF ERP Software" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
