import { Component } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, RouterOutlet, ToastModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
