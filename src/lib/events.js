// Small page-wide events, so distant components can talk without shared state.
export const OPEN_PALETTE = 'portfolio:open-palette';
export const SHOW_PROJECT = 'portfolio:show-project';
export const TOAST = 'portfolio:toast';

export const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE));

/** Scrolls to a project card, clearing any project filter that hides it. */
export const showProject = (slug) => window.dispatchEvent(new CustomEvent(SHOW_PROJECT, { detail: slug }));

export const toast = (message) => window.dispatchEvent(new CustomEvent(TOAST, { detail: message }));

/** Smoothly scrolls to a section (instantly when reduced motion is on) and updates the URL. */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ block: 'start' });
  history.replaceState(null, '', `#${id}`);
}

export async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch {
    toast('Copying is blocked here. The address is in the contact section.');
  }
}

export const isMac = /Mac|iPhone|iPad/.test(navigator.userAgent);
export const shortcutLabel = isMac ? '⌘K' : 'Ctrl K';
