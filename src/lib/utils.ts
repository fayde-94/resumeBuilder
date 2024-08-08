import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numsOnly = (value: string) => {
  const cleaned = ("" + value).replace(/\D/g, "");
  return cleaned.slice(0, 4);
};

export function trimUrls(url: string) {
  return url.replace(/^(https?:\/\/)?(www\.)?/, "");
}
export const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];