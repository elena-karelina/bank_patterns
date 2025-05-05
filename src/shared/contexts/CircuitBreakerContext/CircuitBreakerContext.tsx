import { createContext } from "react";

export type CircuitState = "CLOSED" | "OPEN";

export interface CircuitBreakerContextType {
  canRequest: () => boolean;
  recordSuccess: () => void;
  recordFailure: () => void;
}

export const CircuitBreakerContext =
  createContext<CircuitBreakerContextType | null>(null);
