import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatTabsModule,
  MatTableModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatCardModule,
    MatSidenavModule,
     MatTabsModule,
     MatInputModule,
     MatDialogModule,
     MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
    
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}