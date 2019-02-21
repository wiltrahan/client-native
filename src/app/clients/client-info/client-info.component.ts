import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css'],
  moduleId: module.id,
})
export class ClientInfoComponent implements OnInit {

  public fullName: string;

  constructor(private router: RouterExtensions, private route: ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.fullName = params["name"];
    })
  }

  ngOnInit() {
  }

  onEdit() {
    this.router.navigate(['/clients/edit']);
  }

}
