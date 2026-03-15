export function smoothScrollTo(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
