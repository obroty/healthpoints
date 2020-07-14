import { Component, OnInit, Input } from '@angular/core';
import { DefibInterface } from '../defib-interface';

@Component({
  selector: 'app-defibrilator-detail',
  templateUrl: './defibrilator-detail.component.html',
  styleUrls: ['./defibrilator-detail.component.css']
})
export class DefibrilatorDetailComponent implements OnInit {

  @Input() clicked_defibrilator: DefibInterface;

  constructor() { }
  ngOnInit(): void {
  }
}
