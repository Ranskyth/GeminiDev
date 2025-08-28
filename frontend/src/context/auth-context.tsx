"use client";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useState } from "react";

interface Props {
  verifyToken: (token: string) => void;
  auth: boolean;
}

interface UserToken {
  email: string;
  role: string;
}

export const AuthContext = createContext({} as Props);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  const verifyToken = (token: string) => {
    if (!token) {
      console.log("Nenhum token");
      return setAuth(false);
    }

    if (!token.split(".")[2]) {
      console.log("Token mau formatado");
      return setAuth(false);
    }

    const decodeToken: UserToken = jwtDecode(token);

    setAuth(true);

    if (decodeToken.role != "ADMIN") {
      return router.push("/dashboard");
    }

    return router.push("/admin/dasboard");
  };

  return (
    <AuthContext.Provider value={{ verifyToken, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
