import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FileItem } from '../directives/file-item';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class UploadServiceService {

  private IMAGES_FOLDER: string = 'images';

  constructor(public af: AngularFireDatabase, public ctrl: ControlService, public ph: ProfileService) { }

 

  createNewParentItem(files: Array<FileItem[]>, name){
    console.log('uploaded')
    let storageRef = firebase.storage().ref();
    let cock;
    _.each(files, (item:FileItem) => {

      item.isUploading = true;
      let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${item.file.name}`).put(item.file);
      
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
        (snapshot)=> { console.log(snapshot)},
        (error) => {},
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.isUploading = false;
          this.ph.ItemProfile.push({
            name: name,
            picture: item.url
          }).then((success)=>{
            this.ctrl.createNew = false
            this.ctrl.submitted = false;
            this.ctrl.submitted2 = false;
          })
        }
      );
    
    });
 }



 UpdateParentItem(files: Array<FileItem[]>, name, id){
  console.log('uploaded')
  let storageRef = firebase.storage().ref();
  let cock;
  _.each(files, (item:FileItem) => {

    item.isUploading = true;
    let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${item.file.name}`).put(item.file);
    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      (snapshot)=> { console.log(snapshot)},
      (error) => {},
      () => {
        item.url = uploadTask.snapshot.downloadURL;
        item.isUploading = false;
        this.ph.ChangeMainItem(id).update({
          name: name,
          picture: item.url
        }).then((success)=>{
          this.ctrl.edit = false
          this.ctrl.submitted = false;
          this.ctrl.submitted2 = false;
        })
      }
    );
  
  });
}

createNewSecondaryItem(files: Array<FileItem[]>, name, price, id){
  console.log('uploaded')
  let storageRef = firebase.storage().ref();
  let cock;
  _.each(files, (item:FileItem) => {

    item.isUploading = true;
    let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${item.file.name}`).put(item.file);
    
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      (snapshot)=> { console.log(snapshot)},
      (error) => {},
      () => {
        item.url = uploadTask.snapshot.downloadURL;
        item.isUploading = false;
        this.ph.getInnerItem(id).push({
          name: name,
          picture: item.url,
          price: price
        }).then((success)=>{
          this.ctrl.createNew = false
          this.ctrl.submitted = false;
          this.ctrl.submitted2 = false;
        })
      }
    );
  
  });
}



UpdateSecondaryItem(files: Array<FileItem[]>, name, price, curl, id){
console.log('uploaded')
let storageRef = firebase.storage().ref();
let cock;
_.each(files, (item:FileItem) => {

  item.isUploading = true;
  let uploadTask: firebase.storage.UploadTask = storageRef.child(`${this.IMAGES_FOLDER}/${item.file.name}`).put(item.file);
  
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
    (snapshot)=> { console.log(snapshot)},
    (error) => {},
    () => {
      item.url = uploadTask.snapshot.downloadURL;
      item.isUploading = false;
      this.ph.ChangeItem(curl, id).update({
        name: name,
        picture: item.url,
        price: price
      }).then((success)=>{
        this.ctrl.edit = false
        this.ctrl.submitted = false;
        this.ctrl.submitted2 = false;
      })
    }
  );

});
}


 private saveImage(image:any) {
   this.af.list(`/${this.IMAGES_FOLDER}`).push(image).then( success =>{
    console.log(success)
   });
 }

}