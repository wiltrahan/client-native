import { Component, OnInit, Input } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view';

@Component({
  selector: 'ns-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  moduleId: module.id,
})
export class ClientListComponent implements OnInit {

  @Input() clients = ['Jessica Nunes', 'Frankie Nunes', 'Wil Trahan', 'Saquon Barkley'];

  ngOnInit() {
  }

  onClientTap(args: ItemEventData) {
    console.log(args);
  }

}
