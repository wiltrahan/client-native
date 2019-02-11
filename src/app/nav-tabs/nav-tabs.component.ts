import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.css'],
  moduleId: module.id,
})
export class NavTabsComponent implements OnInit {

  constructor(private router: RouterExtensions, private active: ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate([
      {
        outlets: { newClientForm: ['new-client-form'], calendar: ['calendar'] }
      }
    ],
    {
      relativeTo: this.active
    }
  )};
}
