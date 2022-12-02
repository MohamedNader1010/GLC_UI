import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './component/side-bar/side-bar.component';

import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterBarComponent } from './component/footer-bar/footer-bar.component';

@NgModule({
  declarations: [SideBarComponent, NavBarComponent, FooterBarComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, SideBarComponent,FooterBarComponent]
})
export class SharedModule {}
