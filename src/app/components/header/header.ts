import { Component, signal } from '@angular/core';
import { smoothScrollTo } from '../../utils/scroll';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isDark = signal(this.getInitialTheme());
  mobileMenuOpen = signal(false);

  readonly navLinks = [
    { label: 'Accueil', fragment: 'hero' },
    { label: 'A propos', fragment: 'about' },
    { label: 'Competences', fragment: 'skills' },
    { label: 'Projets', fragment: 'projects' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Contact', fragment: 'contact' },
  ];

  toggleTheme(): void {
    this.isDark.update((v) => !v);
    const theme = this.isDark() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  scrollTo(fragment: string): void {
    this.mobileMenuOpen.set(false);
    smoothScrollTo(fragment);
  }

  private getInitialTheme(): boolean {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
