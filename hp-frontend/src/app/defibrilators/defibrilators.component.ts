import { Component, OnInit } from '@angular/core';
import { DefibInterface } from '../defib-interface';
// import { DEFIBS } from '../mock-defibs';
import { DefibrilatorService } from '../defibrilator.service';


@Component({
  selector: 'app-defibrilators',
  templateUrl: './defibrilators.component.html',
  styleUrls: ['./defibrilators.component.css']
})
export class DefibrilatorsComponent implements OnInit {

  selectedDefib: DefibInterface;
  defib_list: DefibInterface[];

  constructor(private defibrilatorService: DefibrilatorService) { }

  ngOnInit(): void {
    this.getDefibrilators();
  }

  onSelect(defib: DefibInterface): void {
    this.selectedDefib = defib;
  }

  getDefibrilators(): void {
  this.defibrilatorService.getDefibrilators()
      .subscribe(defib_list => this.defib_list = defib_list);
  }
}
