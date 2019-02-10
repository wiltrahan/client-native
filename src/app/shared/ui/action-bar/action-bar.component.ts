import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }

}
