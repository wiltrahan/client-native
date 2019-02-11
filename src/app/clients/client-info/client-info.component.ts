import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
  moduleId: module.id,
})
export class ClientInfoComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate(['/clients/edit']);
  }

}
