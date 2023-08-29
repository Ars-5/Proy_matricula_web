import { Component, Input, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() onToggleSideNav:EventEmitter<SideNavToggle> = new EventEmitter();
  // sidebarHidden = false;
  // labelsVisible = true;
  collapsed = false;
  screenWidth = 0;
  navData = navbarData

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth : this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  // toggleSidebar() {
  //   this.sidebarHidden = !this.sidebarHidden;
  //   this.labelsVisible = !this.labelsVisible;
  // }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth : this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed , screenWidth : this.screenWidth});
  }

}
