import { Component, Inject } from '@angular/core';
import { APIService } from 'src/app/core/services/backendService/api.service';
import { SettingsService } from 'src/app/core/services/dataService/settings.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  invitation: any;
  invitations: any[];

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: APIService,
    private settingsService: SettingsService
  ) {
    this.invitation = data.invitation;
    this.invitations = data.invitations;
  }

  acceptInvitation() {
    const invitationId = this.invitation.invitation_id;
    const status = 'Accepted';

    this.api.updateInviteStatus(invitationId, status).subscribe(
      (response) => {
        console.log('Invitation accepted:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error accepting invitation:', error);
      }
    );
  }

  declineInvitation() {
    const invitationId = this.invitation.invitation_id;
    const status = 'Declined';

    this.api.updateInviteStatus(invitationId, status).subscribe(
      (response) => {
        console.log('Invitation accepted:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error accepting invitation:', error);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}
