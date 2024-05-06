import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../ui-components-module/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.less'
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  showSuccess: boolean = false;

  submitForm(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);

    if (this.contactForm.invalid) {
        return;
    }

    setTimeout(() => {
        this.showSuccess = true;
        setTimeout(() => {
            this.showSuccess = false;
        }, 3000);
        this.contactForm.resetForm();
    }, 1000);
}
  
}
