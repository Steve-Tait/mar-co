import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function underlineBetweenStars(str: string): string {
  const regex = /\*\*([^*\n]*(?:\*(?!\*)[^*\n]*)*)\*\*/g;
  return str.replace(regex, '<span class="text-eyebrow">$1</span>');
}

export function replacePunctuation(str: string): string {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/;

  if (punctuation.test(str)) {
    const punct = str.match(punctuation)!.shift() || '.';
    return str.replace(
      punctuation,
      `<span class="text-eyebrow">${punct}</span>`
    );
  }
  return str;
}

export const getImageDimensionsFromUrl = (url: string): number[] =>
  url
    .split('/')[5]
    .split('x')
    .map((n) => Number(n));

export const countDecimals = (value: number): number => {
  if (value % 1 != 0) return value.toString().split('.')[1].length;
  return 0;
};

const emojiRegex = /^[\p{Emoji}]/u;
export const startsWithEmoji = (str: string): boolean => emojiRegex.test(str);
