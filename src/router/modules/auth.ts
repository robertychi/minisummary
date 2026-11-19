import type { RouteRecordRaw } from "vue-router"

const authRoutes: RouteRecordRaw = {
  path: "/Auth",
  name: "Auth",
  component: () => import("@/views/AuthView.vue"),
  children: [
    {
      path: "",
      name: "Login",
      component: () => import("@/views/Auth/LoginView.vue"),
      meta: {
        style: "main", // 例如 major
        name: `Login`,
        upperCamelCaseName: "Login",
        snakeCaseName: "login",
        lowerCamelCaseName: "login",
        title: "登入",
        subTitle: "",
      },
    },
    {
      path: "ForgetPassword",
      name: "ForgetPassword",
      component: () => import("@/views/Auth/ForgetPasswordView.vue"),
      meta: {
        style: "main", // 例如 major
        name: `ForgetPassword`,
        upperCamelCaseName: "ForgetPassword",
        snakeCaseName: "forget_password",
        lowerCamelCaseName: "forgetPassword",
        title: "忘記密碼",
        subTitle: "",
      },
    },
    {
      path: "RegisterConfirm",
      name: "RegisterConfirm",
      component: () => import("@/views/Auth/RegisterConfirmView.vue"),
      meta: {
        style: "main", // 例如 major
        name: `RegisterConfirm`,
        upperCamelCaseName: "RegisterConfirm",
        snakeCaseName: "register_confirm",
        lowerCamelCaseName: "registerConfirm",
        title: "註冊確認",
        subTitle: "",
      },
    },
    {
      path: "Register",
      name: "Register",
      component: () => import("@/views/Auth/RegisterView.vue"),
      meta: {
        style: "main", // 例如 major
        name: `Register`,
        upperCamelCaseName: "Register",
        snakeCaseName: "register",
        lowerCamelCaseName: "register",
        title: "註冊",
        subTitle: "",
      },
    },
    {
      path: "ResetPassword",
      name: "ResetPassword",
      component: () => import("@/views/Auth/ResetPasswordView.vue"),
      meta: {
        style: "main", // 例如 major
        name: `ResetPassword`,
        upperCamelCaseName: "ResetPassword",
        snakeCaseName: "reset_password",
        lowerCamelCaseName: "resetPassword",
        title: "密碼重置",
        subTitle: "",
      },
    },
  ],
}

export default authRoutes
