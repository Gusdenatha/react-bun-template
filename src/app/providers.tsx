import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import type { ReactNode } from "react";
import { queryClient } from "../shared/lib/query_client";

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
}