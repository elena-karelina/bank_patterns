export interface CircuitBreakerControls {
  canRequest: () => boolean;
  recordSuccess: () => void;
  recordFailure: () => void;
}
