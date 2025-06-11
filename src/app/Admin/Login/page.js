// src/app/admin/login/page.js
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "digiexperts121") {
      localStorage.setItem("isAdmin", "true");
      router.push("/admin/booking-dashboard");
    } else {
      alert("Wrong password bro");
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input
        type="password"
        placeholder="Enter password"
        className="border p-2 w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className="bg-black text-white p-2 w-full">
        Login
      </button>
    </div>
  );
}
