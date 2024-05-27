import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {Number} total Total items
 * @param {Number} n Targeted items
 */

export const countRate = (total: number, n: number) => (n * 100) / total;
