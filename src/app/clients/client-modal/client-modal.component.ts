import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular';

@Component({
  selector: 'ns-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css'],
  moduleId: module.id,
})
export class ClientModalComponent implements OnInit {

  clientName: string;

  constructor(private modalParams: ModalDialogParams) { }

  ngOnInit() {
    this.clientName = this.modalParams.context as string;
  }

  onCall(action: string) {
    this.modalParams.closeCallback(action);
  }

  onText(action: string) {

  }

  toProfile(action: string) {

  }

}
