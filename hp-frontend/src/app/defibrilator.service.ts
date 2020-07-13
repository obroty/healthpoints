import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DefibInterface } from './defib-interface';
import { DEFIBS } from './mock-defibs';

@Injectable({
  providedIn: 'root'
})
export class DefibrilatorService {
  private defibrilatorsUrl = 'http://localhost:8000/api/v1/?format=json'

  constructor(
    private http: HttpClient) { }

  getDefibrilators(): Observable<DefibInterface[]> {
    return this.http.get<DefibInterface[]>(this.defibrilatorsUrl);
  }
}
