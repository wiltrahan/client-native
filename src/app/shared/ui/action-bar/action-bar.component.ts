import { Component, OnInit, Input } from '@angular/core';
import { UIService } from '~/app/shared/ui.service';
import { isAndroid } from 'platform';

declare var android: any;


@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit {
  @Input() title: string;
  @Input() hasMenu = true;
  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

  get android() {
    return isAndroid;
  }

  onToggleMenu() {
    this.uiService.toggleDrawer();
  }

}
