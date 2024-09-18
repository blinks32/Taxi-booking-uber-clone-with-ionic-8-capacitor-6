import { Component, OnInit, OnDestroy } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { LoadingController, AlertController, ActionSheetController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { doc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  profileForm: FormGroup;
  user: import("@angular/fire/auth").User;

  constructor(
    public avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private auth: Auth,
    private actionSheetController: ActionSheetController,
    private fb: FormBuilder
  ) {
    this.auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.user = user;
        this.profileForm.patchValue({
          displayName: user.displayName || '',
        });
        this.avatarService.profile = user; // Ensure the profile is set
      }
    });
  }

  ngOnInit() {
    console.log('ProfilePage initialized');
    this.profileForm = this.fb.group({
      displayName: ['']
    });

    this.profileForm.get('displayName').valueChanges.subscribe(value => {
      this.saveProfile();
    });
  }

  ngOnDestroy() {
    console.log('ProfilePage destroyed');
    // Clean up any subscriptions or listeners if necessary
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  goBack() {
    // Use the router to navigate back
    this.router.navigate(['/home']); // Replace '/previous-page' with your desired route
  }

  async presentImageSourceActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.changeImage(CameraSource.Camera);
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.changeImage(CameraSource.Photos);
          }
        },
        {
          text: 'File',
          icon: 'document',
          handler: () => {
            this.selectFile();
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async changeImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: source,
      });

      if (image) {
        const loading = await this.loadingController.create();
        await loading.present();

        if (!this.avatarService.profile?.uid) {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Upload failed',
            message: 'Profile UID is missing.',
            buttons: ['OK'],
          });
          await alert.present();
          return;
        }

        const result = await this.avatarService.uploadImage(image, this.avatarService.profile.uid);
        loading.dismiss();

        if (!result) {
          const alert = await this.alertController.create({
            header: 'Upload failed',
            message: 'There was a problem uploading your avatar.',
            buttons: ['OK'],
          });
          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Upload Successful',
            message: 'Your avatar has been successfully uploaded.',
            buttons: ['OK'],
          });
          await alert.present();

          // Update the user profile
          if (this.auth.currentUser) {
            const result = await this.avatarService.uploadImage(image as Photo, this.avatarService.profile.uid);
            await updateProfile(this.user, {
              photoURL: result,
            });
            this.user = this.auth.currentUser; // Refresh the user object
          }
        }
      }
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Upload failed',
        message: `There was a problem uploading your avatar: ${error.message}`,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e: any) => {
          const image = {
            base64String: e.target.result.split(',')[1]
          };
          const loading = await this.loadingController.create();
          await loading.present();

          if (!this.avatarService.profile?.uid) {
            loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Upload failed',
              message: 'Profile UID is missing.',
              buttons: ['OK'],
            });
            await alert.present();
            return;
          }

          const result = await this.avatarService.uploadImage(image as Photo, this.avatarService.profile.uid);
          loading.dismiss();

          if (!result) {
            const alert = await this.alertController.create({
              header: 'Upload failed',
              message: 'There was a problem uploading your avatar.',
              buttons: ['OK'],
            });
            await alert.present();
          } else {
            const alert = await this.alertController.create({
              header: 'Upload Successful',
              message: 'Your avatar has been successfully uploaded.',
              buttons: ['OK'],
            });
            await alert.present();

            // Update the user profile
            if (this.auth.currentUser) {
              await updateProfile(this.user, {
                photoURL: result,
              });
              this.user = this.auth.currentUser; // Refresh the user object
            }
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  async saveProfile() {
    if (this.user) {
      const userDocRef = doc(this.avatarService.firestore, `Riders/${this.user.uid}`);
      //const loading = await this.loadingController.create();
      //await loading.present();

      try {
        await updateProfile(this.user, {
          displayName: this.profileForm.get('displayName').value,
        });
        //loading.dismiss();
        // const alert = await this.alertController.create({
        //   header: 'Profile Updated',
        //   message: 'Your profile information has been updated.',
        //   buttons: ['OK'],
        // });
        // await alert.present();
      } catch (error) {
        // loading.dismiss();
        // const alert = await this.alertController.create({
        //   header: 'Update Failed',
        //   message: 'There was a problem updating your profile.',
        //   buttons: ['OK'],
        // });
        // await alert.present();
      }
    }
  }
}
