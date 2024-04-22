import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';
import { APIService } from 'src/app/core/services/backendService/api.service';
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
  ownerIDs!: string[];

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    private api: APIService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.generateTimeOptions();
  }

  ngOnInit() {
    this.customerID = this.settingsService.customerID;
    this.invitationCode = `${this.customerID}_${Date.now()}`;
    this.ownerIDs = this.settingsService.ownerIDs;
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
      const invitationCode = this.invitationCode;
      const senderID = this.customerID;
      const receiverIDs = this.ownerIDs;
      const date = this.invitationForm.get('date')!.value.toDateString();
      const time = this.invitationForm.get('time')!.value;
      const message = this.invitationForm.get('message')!.value || null;
      const status = 'Pending';

      receiverIDs.forEach((receiverID) => {
        this.api
          .sendInvite(
            invitationCode,
            senderID,
            receiverID,
            date,
            time,
            message,
            status
          )
          .subscribe(
            (response) => {
              console.log(response.message);
            },
            (error) => {
              console.log('Error: ', error);
            }
          );
      });
    }
  }
}
