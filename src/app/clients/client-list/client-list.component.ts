import { Component, OnInit, Input } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
  selector: 'ns-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  moduleId: module.id,
})
export class ClientListComponent implements OnInit {

  @Input() clients = ['Jessica Nunes', 'Frankie Nunes', 'Wil Trahan', 'Saquon Barkley'];

  constructor(private router: RouterExtensions) {}

  ngOnInit() {
  }

  onClientTap(args: ItemEventData) {
    console.log(args.index);
  }

  getClientPage() {
    this.router.navigate(['/client']);
  }

}
