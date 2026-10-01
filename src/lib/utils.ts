import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// cn() joins class names together and removes clashes,
// e.g. cn('p-2', 'p-4') gives 'p-4'. Every shadcn component uses it.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
