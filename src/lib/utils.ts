import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numsOnly = (value: string) => {
  const cleaned = ("" + value).replace(/\D/g, "");
  return cleaned.slice(0, 4);
};
