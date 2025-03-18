import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private contactService: ServiceService, private popup: PopupService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.contactForm.invalid) {
      this.errorMessage = 'Please fill in all required fields correctly!';
      return;
    }
    console.log("SendMessage", this.contactForm.value);
  
    // Send email functionality
    if (this.contactForm.valid) {
    this.contactService.sendEmail(this.contactForm.value)
      .subscribe({
        next: () => {
          // Show success message
          this.successMessage = 'Message sent successfully!';
          this.popup.showSuccess('Email sent successfully!!');
          
          // Clear the form
          this.contactForm.reset();

          // Hide the success message after 3 seconds
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        error: () => this.errorMessage = 'Failed to send message. Try again later.'
      });
    }
  }
}
