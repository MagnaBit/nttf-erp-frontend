import type { Route } from "./+types/staff";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Staff - NTTF ERP" },
    { name: "description", content: "NTTF ERP Software" },
  ];
}

export default function Staff() {
  return (
    <div>
      <h1>Staff Page</h1>
    </div>
  );
}
