import { Injectable } from '@angular/core';
import { DefibInterface } from './defib-interface';
import { DEFIBS } from './mock-defibs';

@Injectable({
  providedIn: 'root'
})
export class DefibrilatorService {
  constructor() { }

  getHeroes(): DefibInterface[] {
    return DEFIBS;
  }
}
