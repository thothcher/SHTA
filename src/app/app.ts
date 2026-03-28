import { Component, signal, inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, effect, DOCUMENT, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LanguageService } from './services/language.service';
import { GamificationService } from './services/gamification.service';
import { ThemeService } from './services/theme.service';
import { XpToastComponent } from './components/xp-toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, XpToastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly auth = inject(AuthService);
  protected readonly langService = inject(LanguageService);
  protected readonly gam = inject(GamificationService);
  protected readonly themeService = inject(ThemeService);
  protected readonly mobileMenuOpen = signal(false);
  private readonly doc = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Set <html lang> to Georgian
    this.doc.documentElement.lang = 'ka';

    // Load gamification stats when user is logged in
    effect(() => {
      if (this.auth.isLoggedIn() && !this.auth.isAdmin()) {
        this.gam.loadStats().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
      }
    });

    // Auto-dismiss XP toast after 3.5s
    effect((onCleanup) => {
      if (this.gam.pendingToast()) {
        const id = setTimeout(() => this.gam.dismissToast(), 3500);
        onCleanup(() => clearTimeout(id));
      }
    });
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
    (this.doc.activeElement as HTMLElement)?.blur();
  }
}
