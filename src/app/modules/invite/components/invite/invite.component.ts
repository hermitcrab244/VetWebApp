import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.scss',
})
export class InviteComponent implements OnInit {
  invitationForm!: FormGroup;
  times: string[] = [];
  selectedTime: string = '';
  invitationCode!: string;
  customerID!: string;

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.generateTimeOptions();
  }

  ngOnInit() {
    this.customerID = this.settingsService.customerID;
    this.invitationCode = `${this.customerID}_${Date.now()}`;

    this.invitationForm = this.formBuilder.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: [''],
    });
  }

  private generateTimeOptions() {
    const hours = 24;
    const minutes = 60;
    const interval = 30;
    for (let hour = 0; hour < hours; hour++) {
      for (let minute = 0; minute < minutes; minute += interval) {
        const formattedHour = ('0' + hour).slice(-2);
        const formattedMinute = ('0' + minute).slice(-2);
        this.times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
  }

  sendInvite() {
    if (this.invitationForm.valid) {
      const formData = this.invitationForm.value;
      console.log('Sending invitation with form data:', formData);
      console.log('Sender ID:', this.customerID);
      console.log('Invitation code:', this.invitationCode);
    } else {
      console.log('Form is invalid. Cannot send invitation.');
    }
  }
}
