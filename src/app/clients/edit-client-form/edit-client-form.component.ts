import { Component, OnInit } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-edit-client-form',
  templateUrl: './edit-client-form.component.html',
  styleUrls: ['./edit-client-form.component.css'],
  moduleId: module.id,
})
export class EditClientFormComponent implements OnInit {
  isEditing = true;

  constructor(private pageRoute: PageRoute) { }

  ngOnInit() {
    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(paramMap => {
        if(!paramMap.has('mode')) {
          this.isEditing = true;
        } else {
          this.isEditing = paramMap.get('mode') !== 'edit'
        }
      });
    });
  }

}
