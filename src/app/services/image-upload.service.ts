import { Injectable } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(
    private storage: Storage
  ) { }

  async uploadImage(image: Photo): Promise<string> {
    const path = `images/${new Date().getTime()}.jpg`;
    const storageRef = ref(this.storage, path);
    const uploadResult = await uploadString(storageRef, image.base64String, 'base64');

    return getDownloadURL(uploadResult.ref);
  }
}
