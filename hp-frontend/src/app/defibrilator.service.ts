import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DefibInterface } from './defib-interface';
import { DEFIBS } from './mock-defibs';

@Injectable({
  providedIn: 'root'
})
export class DefibrilatorService {
  constructor() { }

  getDefibrilators(): Observable<DefibInterface[]> {
    return of(DEFIBS);
  }
}
