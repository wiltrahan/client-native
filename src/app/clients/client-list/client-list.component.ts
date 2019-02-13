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
    { name: 'Joe NeedAcut', phone: '999.000.3333', email: 'joe@us.net' },
    { name: 'Sloppy Joe', phone: '777.777.7777', email: 'slopfest@us.org' },
    { name: 'Butt Head', phone: '508.633.9299', email: 'butthead@mtv.com' },
    { name: 'Chris Cuomo', phone: '718.111.1111', email: 'ccuomo@cnn.com' },
    { name: 'Lori Pacheco', phone: '508.999.2222', email: 'lori@swansea.com' },
    { name: 'Kim Kardashian', phone: '919.111.1111', email: 'kimk@k.com' },
    { name: 'Joey Smalls', phone: '718.000.0000', email: 'joe@joe.com' },
    { name: 'Hi Face', phone: '444.444.4444', email: 'hi@face.com' },
    { name: 'Ding Dong', phone: '212.212.2121', email: 'ding@dong.com' },
    { name: 'Frank White', phone: '401.111.1111', email: 'thatsme@aol.com' },
    { name: 'Jane Janesmith', phone: '555.555.5555', email: 'jane@us.gov' },
    { name: 'Barack Obama', phone: '281.121.2222', email: 'barack@us.gov' }
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
