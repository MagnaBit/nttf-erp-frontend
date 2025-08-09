import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - NTTF ERP" },
    { name: "description", content: "NTTF ERP Software" },
  ];
}

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
}
