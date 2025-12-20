"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//Definimos los props del componente Provider
type ProviderProps = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: ProviderProps) {
  //1.Inicializa el QueryClient una sola vez
  const [queryClient] = useState(
    () =>
      new QueryClient({
        //2.Opciones por defecto para un comportamiento óptimo
        defaultOptions: {
          queries: {
            // Deshabilita el refetching automático en cada cambio de foco de ventana
            // (Mejor control del rendimiento)
            staleTime: 1000 * 60 * 5, // 5 minutos de frescura
            refetchOnWindowFocus: process.env.NODE_ENV === "development", // Solo en desarrollo
            retry: 1, // Reintenta fallos una vez
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 3.Devtools: Solo se carga en desarrollo por seguridad y rendimiento */}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
