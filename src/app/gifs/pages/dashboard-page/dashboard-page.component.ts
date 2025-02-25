import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from '../../components/gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from '../../components/gifs-side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuComponent } from '../../components/gifs-side-menu/gifs-side-menu.component';

@Component({
  selector: 'selector-name',
  templateUrl: 'dashboard-page.component.html',
  imports: [RouterOutlet, GifsSideMenuComponent],
  standalone: true
})

export default class DashboardPageComponent {
}
