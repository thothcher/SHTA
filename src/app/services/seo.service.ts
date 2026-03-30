import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

type SeoConfig = {
  title?: string;
  description?: string;
  robots?: string;
};

const SITE_URL = 'https://thothcher.github.io/SHTA';
const DEFAULT_TITLE = 'SHTA | შესავალი თანამედროვე აზროვნებაში';
const DEFAULT_DESCRIPTION = 'SHTA არის ინტერაქტიული სასწავლო პლატფორმა კურსისთვის „შესავალი თანამედროვე აზროვნებაში“ - თავები, ქვიზები, ფლეშბარათები და სასწავლო რესურსები სტუდენტებისთვის.';
const DEFAULT_ROBOTS = 'index, follow';
const DEFAULT_IMAGE = `${SITE_URL}/og.png`;

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.updateFromRoute();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.updateFromRoute());
  }

  private updateFromRoute(): void {
    const route = this.getLeafRoute(this.router.routerState.snapshot.root);
    const seo = (route.data['seo'] as SeoConfig | undefined) ?? {};
    const title = seo.title ?? DEFAULT_TITLE;
    const description = seo.description ?? DEFAULT_DESCRIPTION;
    const robots = seo.robots ?? DEFAULT_ROBOTS;
    const normalizedPath = this.normalizePath(this.router.url);
    const canonicalUrl = normalizedPath ? `${SITE_URL}${normalizedPath}` : `${SITE_URL}/`;

    this.title.setTitle(title);
    this.updateMetaTag('name', 'description', description);
    this.updateMetaTag('name', 'robots', robots);
    this.updateMetaTag('property', 'og:url', canonicalUrl);
    this.updateMetaTag('property', 'og:title', title);
    this.updateMetaTag('property', 'og:description', description);
    this.updateMetaTag('property', 'og:image', DEFAULT_IMAGE);
    this.updateMetaTag('name', 'twitter:title', title);
    this.updateMetaTag('name', 'twitter:description', description);
    this.updateMetaTag('name', 'twitter:image', DEFAULT_IMAGE);
    this.updateCanonical(canonicalUrl);
  }

  private getLeafRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;

    while (current.firstChild) {
      current = current.firstChild;
    }

    return current;
  }

  private normalizePath(url: string): string {
    if (!url || url === '/') {
      return '';
    }

    return url.startsWith('/') ? url : `/${url}`;
  }

  private updateMetaTag(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attribute]: key, content });
  }

  private updateCanonical(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }
}
