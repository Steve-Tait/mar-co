export function formatTitle(markdownText: string = '') {
  return markdownText
    .replace(/\*\*(.*)\*\*/gim, '<span class="text-secondary">$1</span>')
    .trim();
}
