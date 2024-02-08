import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,
    RouterModule],
  template: `
  <main>
    <header class="brand-name">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'homes';
}
