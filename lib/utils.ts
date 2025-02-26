import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number) => {
  if (Number.isInteger(num)) return num.toString();
  if (Math.abs(num) < 0.01) return num.toFixed(4);
  if (Math.abs(num) >= 100) return num.toFixed(1);
  return num.toFixed(2);
};
