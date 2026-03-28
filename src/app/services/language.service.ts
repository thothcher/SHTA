import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from '../i18n/translations';

export type Lang = 'ka';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('ka');

  t(key: string, params?: Record<string, string>): string {
    let text = TRANSLATIONS[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
      }
    }
    return text;
  }
}
