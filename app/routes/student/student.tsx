import type { Route } from "./+types/student";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Student - NTTF ERP" },
    { name: "description", content: "NTTF ERP Software" },
  ];
}

export default function Student() {
  return (
    <div>
      <h1>Student Page</h1>
    </div>
  );
}
