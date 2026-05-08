"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  nombre: string;
  setNombre: (nombre: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState("GatoMeowMiau");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}