import { Component, OnInit, Input } from '@angular/core';
import { DefibInterface } from '../defib-interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() defibrilator: DefibInterface;
  @Input() defibrilators_list: DefibInterface[];

  latHome: number = 53.4296962;
  lngHome: number = 14.6246236;
  zoom: number = 11;

  constructor() { }
  ngOnInit(): void {
  }
}
