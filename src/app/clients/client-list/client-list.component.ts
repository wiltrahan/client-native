import { Component, OnInit, Input } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { IClient } from '~/app/shared/interfaces';
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { ClientService } from '../client.service';
@Component({
  selector: 'ns-client-list',
  providers: [ClientService],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  moduleId: module.id,
})
export class ClientListComponent implements OnInit {

  myUnsortedClients: object[] = [];
  mySortedClients: object[] = [];
  clients: IClient[] = [];

  constructor(private router: RouterExtensions, private clientService: ClientService) { }

  ngOnInit() {
    // this.mySortedClients = this.clients.sort(this.sorter);
    // this.myUnsortedClients = this.clientService.getClients();
    this.clients = this.clientService.getClients().sort(this.sorter);
  }

  onClientTap(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems();
    const clientName = selectedItems[0].name;
    console.log(clientName);
    this.getClientPage(clientName);
  }

  getClientPage(name: string) {
    this.router.navigate(['/client', name]);
  }

  sorter(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    let comparison = 0;

    if(nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }
}
