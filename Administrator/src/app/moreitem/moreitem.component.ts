import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import 'firebase/storage';
import { FileItem } from '../directives/file-item';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  
  selector: 'app-moreitem',
  templateUrl: './moreitem.component.html',
  styleUrls: ['./moreitem.component.scss']
})
export class MoreitemComponent implements OnInit {
  public eventList: Array<any>;
  submitted: boolean = false;
  submitted2: boolean = false;
  form: any;
  showMe: boolean = false;
  public createNew: boolean = false;
  file: any;
  name: any;
  type: any;
  id: any;
  isDropZoneOver:boolean = false;
  files: Array<FileItem[]> = [];
  isDecided: boolean = false;
  public item_subProfile: any;
  isEnabledUpload: boolean = true;
  constructor(private fb: FormBuilder, public upload: UploadServiceService, public af: AngularFireDatabase, private app: FirebaseApp, public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
    this.ctrl.pageName = this.ctrl.currentName
    this.ctrl.sceneEdit = true;
  }

  ngOnInit() {
    console.log()
    this.item_subProfile = this.af.list(`https://russian-de713.firebaseio.com/ItemProfile/${this.ctrl.curl}/Stuffs`);
    this.item_subProfile.forEach(eleme => {
      this.eventList = [];
      eleme.map( el => {
         console.log(el);
         this.eventList.push(el);
      })

    })
  }


  public fileOverDropZone(e:any):void {
    this.isDropZoneOver = e;
  }

onSubmit(form: any ) {
    this.form = form;
    this.ctrl.submitted = true;
    this.isEnabledUpload = false;
    this.upload.createNewSecondaryItem(this.files, form.name, form.price, this.ctrl.curl)
  } 


  Decider(id){
    this.isDecided = true;
    this.id = id
  }

  Choose(choice){
  if (choice == 1) {
  this.Delete(this.id)
   this.isDecided = false;
  }else{
   this.isDecided = false;
  }
  }


  Edit(id){
    this.id = id
    this.ctrl.edit = true
  }

  AddNew(){
    this.ctrl.createNew = true
  }


onSubmit2(form: any ) {
  this.form = form;
  this.ctrl.submitted2 = true;
  this.isEnabledUpload = false;
  this.upload.UpdateSecondaryItem(this.files, form.name, form.price, this.ctrl.curl, this.id)
} 


Delete(id){
  console.log(id)
  this.ph.getSecondaryItem(this.ctrl.curl, id.$key).remove().then(f =>{
    console.log(f)
  })
}


}
