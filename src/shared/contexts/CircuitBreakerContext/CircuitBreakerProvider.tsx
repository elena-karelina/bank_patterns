import { useState, useCallback, FC, ReactNode } from "react";
import { CircuitBreakerContext, CircuitState } from "./CircuitBreakerContext";

export const CircuitBreakerProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<CircuitState>("CLOSED");
  const [failureCount, setFailureCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [lastOpened, setLastOpened] = useState<number | null>(null);

  const resetStats = () => {
    setFailureCount(0);
    setRequestCount(0);
  };

  const canRequest = useCallback(() => {
    if (state === "OPEN") {
      const now = Date.now();
      if (lastOpened && now - lastOpened > 7000) {
        setState("CLOSED");
        resetStats();
        return true;
      }
      return false;
    }
    return true;
  }, [state, lastOpened]);

  const recordSuccess = () => {
    setFailureCount((f) => f + 1);
    setRequestCount((r) => r + 1);
    console.log("CircuitBreaker Close");
  };

  const recordFailure = () => {
    setFailureCount((f) => f + 1);
    setRequestCount((r) => r + 1);

    const newFailureRate = (failureCount + 1) / (requestCount + 1);
    if (newFailureRate > 0.7) {
      console.log("CircuitBreaker OPEN");
      setState("OPEN");
      setLastOpened(Date.now());
    }
  };

  return (
    <CircuitBreakerContext.Provider
      value={{ canRequest, recordSuccess, recordFailure }}
    >
      {children}
    </CircuitBreakerContext.Provider>
  );
};
