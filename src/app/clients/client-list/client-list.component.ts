import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { IClient } from '~/app/shared/interfaces';
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { ClientService } from '../client.service';
import { ModalDialogService } from 'nativescript-angular';
import { ClientModalComponent } from '~/app/clients/client-modal/client-modal.component';
import { UIService } from '~/app/shared/ui.service';
@Component({
  selector: 'ns-client-list',
  providers: [ClientService],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  moduleId: module.id,
})
export class ClientListComponent implements OnInit {

  clients: IClient[] = [];

  constructor(
    private router: RouterExtensions, 
    private clientService: ClientService,
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private uiService: UIService
  ) { }

  ngOnInit() {
    this.clients = this.clientService.getClients().sort(this.sorter);
  }

  // onClientTap(args: ListViewEventData) {
  //   const listview = args.object as RadListView;
  //   const selectedItems = listview.getSelectedItems();
  //   const clientName = selectedItems[0].name;
  //   console.log(clientName);
  //   this.getClientPage(clientName);
  // }

  onClientTap() {
    this.modalDialog.showModal(ClientModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uiService.getRootVcRef() 
        ? this.uiService.getRootVcRef()
        : this.vcRef
    });
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
