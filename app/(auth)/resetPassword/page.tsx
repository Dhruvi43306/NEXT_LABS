"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setMessage("");

    try {
      const res = await fetch("/Lab23/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword: password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setMessage(data.message);
      setTimeout(() => router.push("/Lab23/products"), 1500); // auto redirect after login
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleReset} className="space-y-4">
        <h2 className="text-xl font-bold">Reset Password</h2>
        <input
          type="password"
          value={password}
          placeholder="New password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border px-4 py-2 rounded w-full"
        />
        <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded">
          Reset Password
        </button>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}