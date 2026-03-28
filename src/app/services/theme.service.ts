import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly theme = signal<Theme>(this.getInitial());

  constructor() {
    effect(() => {
      const t = this.theme();
      this.doc.documentElement.setAttribute('data-theme', t);
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('shta-theme', t);
      }
    });
  }

  toggle() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  private getInitial(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('shta-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  }
}
