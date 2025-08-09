import type { Route } from "./+types/admin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Admin - NTTF ERP" },
    { name: "description", content: "NTTF ERP Software" },
  ];
}

export default function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
