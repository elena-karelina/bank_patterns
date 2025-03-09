import { ReactNode } from "react";

export interface ISegment {
  label: string;
  title: string;
  key: string;
  children: ReactNode;
  button?: ReactNode;
}
