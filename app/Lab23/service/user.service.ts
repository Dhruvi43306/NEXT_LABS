import bcrypt from "bcrypt";
import crypto from "crypto";
import { createUser, findByEmail, findByResetToken, saveResetToken, UpdatePasswordById } from "@/app/Lab23/model/user.model";
import { User } from "@/app/Lab23/types/user.type";

export async function registerUser(data: User) {
  const existingUser = await findByEmail(data.email);
  if (existingUser) throw new Error("Email already exists");

  await createUser({
    name: data.name,
    email: data.email,
    password: data.password,
    role: "customer",
  });

  return { message: "User registered successfully" };
}

export async function loginUser(email: string, password: string) {
  const user = await findByEmail(email);
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  return user;
}

// 🔹 Generate Reset Token
export async function forgotPassword(email: string) {
  const user = await findByEmail(email);
  if (!user) throw new Error("Email not registered");

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await saveResetToken(email, token, expires.toISOString());

  return { token, message: "Reset token generated" }; // send this token via email in real app
}

// 🔹 Reset Password
export async function resetPassword(token: string, newPassword: string) {
  const userData: any = await findByResetToken(token);

  if (!userData.length) {
    return { error: true, message: "Token expired or invalid" };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await UpdatePasswordById(userData[0].user_id, hashedPassword);

  return { error: false, message: "Password updated successfully" };
}