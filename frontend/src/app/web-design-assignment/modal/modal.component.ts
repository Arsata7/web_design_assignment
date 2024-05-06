import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../ui-components-module/button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogContent, MatIconModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.less',
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

 onCloseClick() {
    this.dialogRef.close();
  }

}
