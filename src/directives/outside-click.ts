type ExtendedHtmlElement = HTMLElement & { clickEvent? (event: Event): void; }

export const outsideClick = {
  beforeMount: (
    element: ExtendedHtmlElement,
    binding: { value(): void; }
  ) => {
    const onOuterClickFn = binding.value

    const handler = (event: Event) => {
      if (event.target instanceof Node && !element.contains(event.target)) {
        onOuterClickFn()
      }
    }

    element.clickEvent = handler
    document.addEventListener('click', handler, true)
  },
  unmounted: (element: ExtendedHtmlElement) => {
    if (element.clickEvent) {
      document.removeEventListener('click', element.clickEvent, true)
    }
  }
}
