class Env {
  static APP_URL =
    (process.env.NEXT_PUBLIC_APP_URL as string) || "http://localhost:3000";
  static BACKEND_URL =
    (process.env.NEXT_PUBLIC_BACKEND_URL as string) || "http://localhost:7001";
}
export default Env;
