export const CSSToggleVisibility = (isOpen: boolean) => (`
  opacity: ${isOpen ? 1 : 0};
  visibility: ${isOpen ? 'visible' : 'hidden'};
  transition: all 0.2s ease-in-out;
`)
