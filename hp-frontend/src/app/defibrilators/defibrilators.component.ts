import { Component, OnInit } from '@angular/core';
import { DefibInterface } from '../defib-interface';
import { DEFIBS } from '../mock-defibs';


@Component({
  selector: 'app-defibrilators',
  templateUrl: './defibrilators.component.html',
  styleUrls: ['./defibrilators.component.css']
})
export class DefibrilatorsComponent implements OnInit {

  defib_list = DEFIBS
  selectedDefib: DefibInterface;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(defib: DefibInterface): void {
    this.selectedDefib = defib;
  }
}
