import { Signin, Register, PasswordRecovery } from "../views";

export const authRoutes = [
  {
    name: "Login",
    path: "/login",
    component: Signin,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "PasswordRecovery",
    path: "/recovery",
    component: PasswordRecovery,
  },
];

// TODO: create admin routes
const adminRoutes = [];

export default adminRoutes;
