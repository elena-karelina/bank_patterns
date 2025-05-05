export enum EAppStage {
  MainPage = "/main",
  LoginPage = "/login",
  PersonPage = "/person",
  AccountDetailsPage = "/details",
}

export interface CircuitBreakerControls {
  canRequest: () => boolean;
  recordSuccess: () => void;
  recordFailure: () => void;
}
