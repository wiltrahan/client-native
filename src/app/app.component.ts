import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { UIService } from "~/app/shared/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
  private drawerSub: Subscription;
  private drawer: RadSideDrawer;

  constructor(
    private uiService: UIService, 
    private chgDetRef: ChangeDetectorRef,
    private vcRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.drawerSub = this.uiService.drawerState.subscribe(() => {
      if(this.drawer) {
        this.drawer.toggleDrawerState();
      }
    });
    this.uiService.setRootVcRef(this.vcRef);
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this.chgDetRef.detectChanges();
  }

  onLogout() {
    this.uiService.toggleDrawer();  
  }

  ngOnDestroy() {
    if(this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
  
  }
}
