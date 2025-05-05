import { useContext } from "react";
import { CircuitBreakerContext } from "./CircuitBreakerContext";

export const useCircuitBreaker = () => {
  const context = useContext(CircuitBreakerContext);
  if (!context) throw new Error("CircuitBreakerContext not found");
  return context;
};
