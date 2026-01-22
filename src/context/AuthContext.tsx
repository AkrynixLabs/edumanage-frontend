"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AuthUser, LoginResponse } from "@/types/auth";
import { apiFetch } from "@/services/api";
import { tokenStorage } from "@/lib/token";

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const isAuthenticated = !!user;

  async function login(email: string, password: string) {
    const res = await apiFetch<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    tokenStorage.set(res.token);
    setUser(res.user);
  }

  function logout() {
    tokenStorage.remove();
    setUser(null);
    window.location.href = "/login";
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
