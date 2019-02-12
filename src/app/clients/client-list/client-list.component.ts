import { Component, OnInit, Input } from '@angular/core';
import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { RouterExtensions } from 'nativescript-angular/router';
import { IClient } from '~/app/shared/interfaces';

@Component({
  selector: 'ns-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
  moduleId: module.id,
})
export class ClientListComponent implements OnInit {

  @Input() clients = [
    { name: 'Jessica Nunes', phone: '333.333.3333', email: 'stylistjess@aol.com' },
    { name: 'Frankie Nunes', phone: '401.111.1111', email: 'frankie@woof.org' },
    { name: 'Wil Trahan', phone: '508.999.9999', email: 'willyT@us.gov' },
    { name: 'Saquon Barkley', phone: '212.111.1111', email: 'roy@giants.com' },
    { name: 'Jessica Nunes', phone: '333.333.3333', email: 'stylistjess@aol.com' },
    { name: 'Frankie Nunes', phone: '401.111.1111', email: 'frankie@woof.org' },
    { name: 'Wil Trahan', phone: '508.999.9999', email: 'willyT@us.gov' },
    { name: 'Saquon Barkley', phone: '212.111.1111', email: 'roy@giants.com' },
    { name: 'Jessica Nunes', phone: '333.333.3333', email: 'stylistjess@aol.com' },
    { name: 'Frankie Nunes', phone: '401.111.1111', email: 'frankie@woof.org' },
    { name: 'Wil Trahan', phone: '508.999.9999', email: 'willyT@us.gov' },
    { name: 'Saquon Barkley', phone: '212.111.1111', email: 'roy@giants.com' },
    { name: 'Jessica Nunes', phone: '333.333.3333', email: 'stylistjess@aol.com' },
    { name: 'Frankie Nunes', phone: '401.111.1111', email: 'frankie@woof.org' },
    { name: 'Wil Trahan', phone: '508.999.9999', email: 'willyT@us.gov' },
    { name: 'Saquon Barkley', phone: '212.111.1111', email: 'roy@giants.com' }
  ];


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
