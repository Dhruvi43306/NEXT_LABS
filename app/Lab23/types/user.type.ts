export interface User {
  user_id?: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  // created_at?: Date;
  // modify_at?: Date;
}