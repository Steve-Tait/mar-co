export function formatTitle(markdownText: string = '') {
	return markdownText
		.replace(
			/\*\*(.*)\*\*/gim,
			'<span class="text-pink">$1</span>',
		)
		.trim();
}
