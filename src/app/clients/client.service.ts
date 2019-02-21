import { Injectable } from '@angular/core';
import { CLIENTS } from './mock-clients';
import { IClient } from '~/app/shared/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }


  getClients() {
    return CLIENTS;
  }
}
