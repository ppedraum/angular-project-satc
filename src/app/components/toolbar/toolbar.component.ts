import { Component, signal } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule, ButtonSeverity } from 'primeng/button';

type ToolbarButton = {
  icon: string;
  label: string;
  class?: string;
  severity: ButtonSeverity;
};

@Component({
  selector: 'app-toolbar',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
  toolbarButtons = signal<ToolbarButton[]>([
    {
      icon: 'pi pi-chart-bar',
      label: 'Dash',
      class: 'mr-2',
      severity: 'secondary',
    },
    {
      icon: 'pi pi-list',
      label: 'List',
      class: 'mr-2',
      severity: 'secondary',
    },
    {
      icon: 'pi pi-plus',
      label: 'Add',
      severity: 'secondary',
    },
  ]);

  setToolbarButtonActive(i: number) {
    let newToolbarButtons = this.toolbarButtons();

    newToolbarButtons.forEach((b) => {
      b.severity = 'secondary';
    });
    newToolbarButtons[i].severity = 'success';

    this.toolbarButtons.set(newToolbarButtons);
  }
}
