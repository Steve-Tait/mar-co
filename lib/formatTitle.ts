export function formatTitle(markdownText: string = '') {
  return markdownText
    .replace(/\*\*(.*)\*\*/gim, '<span class="text-eyebrow">$1</span>')
    .trim();
}
