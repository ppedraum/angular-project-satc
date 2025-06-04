import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  imports: [
    CardModule,
    FloatLabelModule,
    InputText,
    SelectModule,
    ButtonModule,
    FormsModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  types = signal(['Trabalho', 'Estudo', 'Saúde']);
  description = signal('');
  type = signal<any>(null);

  isButtonDisabled() {
    return !this.description() || !this.type;
  }

  save() {
    const task = {
      id: new Date().getTime(),
      description: this.description,
      type: this.type,
      createdAt: new Date(),
    };

    this.type.set(null);
    this.description.set('');
  }
}
