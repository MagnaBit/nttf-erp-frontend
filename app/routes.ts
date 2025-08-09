import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),

  ...prefix("admin", [index("routes/admin/admin.tsx")]),
  ...prefix("staff", [index("routes/staff/staff.tsx")]),
  ...prefix("student", [index("routes/student/student.tsx")]),
] satisfies RouteConfig;
