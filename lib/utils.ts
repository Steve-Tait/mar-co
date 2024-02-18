import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function underlineBetweenStars(str: string): string {
  const regex = /\*\*([^*\n]*(?:\*(?!\*)[^*\n]*)*)\*\*/g;
  return str.replace(regex, '<span class="text-pink">$1</span>');
}

export function replacePunctuation(str: string): string {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/;

  if (punctuation.test(str)) {
    const punct = str.match(punctuation)!.shift() || '.';
    return str.replace(punctuation, `<span class="text-pink">${punct}</span>`);
  }
  return str;
}

export const getImageDimensionsFromUrl = (url: string): number[] =>
  url
    .split('/')[5]
    .split('x')
    .map((n) => Number(n));
