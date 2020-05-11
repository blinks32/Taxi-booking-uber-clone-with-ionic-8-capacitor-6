import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ControlService } from '../services/control.service';

@Component({
    templateUrl: 'dialog.component.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public ctrl: ControlService) { }

  onNoClick(): void {
    this.dialogRef.close();
    this.ctrl.state_1 = true
  }

  onYesClick(): void {
    this.dialogRef.close();
    this.ctrl.state_1 = false;
  }

}
