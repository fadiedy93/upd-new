import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as enCA from './translations/en-CA.json';
import * as frCA from './translations/fr-CA.json';
import * as calldriversEnCA from './translations/calldrivers_en-CA.json';
import * as calldriversfrCA from './translations/calldrivers_fr-CA.json';
import { LocaleId } from './i18n.types';

export class JsonLoader implements TranslateLoader {
  getTranslation(lang: LocaleId): Observable<Record<string, string | Record<string, string>>> {
    switch (lang) {
      case 'en-CA':
        return of({ ...enCA, ...calldriversEnCA } as Record<string, string | Record<string, string>>);
      case 'fr-CA':
        return of({ ...frCA, ...calldriversfrCA } as Record<string, string | Record<string, string>>);
    }
  }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
