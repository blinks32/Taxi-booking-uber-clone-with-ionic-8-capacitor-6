import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { FileItem } from '../directives/file-item';
import { AngularFireDatabase } from 'angularfire2/database';
import 'firebase/storage';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  public createNew: boolean = false;
  public edit: boolean = false;
  public eventList: Array<any>;
  form: any;
  showMe: boolean = false;
  isDropZoneOver:boolean = false;
  isEnabledUpload: boolean = true;
  files: Array<FileItem[]> = [];
  id: any;
  @ViewChild('fileInput') fileInput: ElementRef;
   public item_subProfile: any;
   isDecided: boolean = false;
  profileUploaded: boolean = false;
  
  constructor(private fb: FormBuilder, public upload: UploadServiceService, public af: AngularFireDatabase, private app: FirebaseApp, public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
  this.ctrl.pageName = 'Add Item'
  this.ctrl.newScene = true;
  }

  ngOnInit() {
  
  }

  public fileOverDropZone(e:any):void {
    this.isDropZoneOver = e;
  }

  CreateNewItem(){
    this.ctrl.createNew = true
  }

  onSubmit(form: any ) {
    this.form = form;
      this.ctrl.submitted = true;
      this.isEnabledUpload = false;
      this.upload.createNewParentItem(this.files, form.name)
  }


  changeItem(id){
    this.id = id
    this.ctrl.edit = true
  }

  onSubmit2(form: any ) {
    this.form = form;
    this.upload.UpdateParentItem(this.files, form.name, this.id)
    this.ctrl.submitted2 = true;
    this.isEnabledUpload = false;
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


  Delete(id){
    console.log(id)
    this.ph.getItemProfile(id.$key).remove().then(f =>{
      console.log(f)
    })
  }


  allItems(item){
    this.ph.getInnerItem(item).on('value', passengerSnapshot => {
      // console.log(passengerSnapshot.val().client.Client_Dropped);
     
    })
  }

  editItem(s){
    console.log(s)
  }


  ShowMore(e, name){
    this.showMe = true
    console.log(e)
    this.ctrl.curl = e
    this.ctrl.currentName = name
    this.router.navigateByUrl('moreitem');
  }

 
}
