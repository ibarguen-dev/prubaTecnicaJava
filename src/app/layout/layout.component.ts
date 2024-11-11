import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { RouterOutlet } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzLayoutModule,
    RouterOutlet,
    RouterModule,
    NzButtonModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  public isCollapsed: boolean = false;
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
