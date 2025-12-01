export default (node: globalThis.HTMLElement, icon = 'wine') => {
	if (!icon) {
		throw new Error('Missing icon')
	}

	node.querySelectorAll(':scope > li').forEach(li => {
		li.classList.add('fontello-' + icon)
		li.innerHTML = '&nbsp;' + li.innerHTML
	})
}
