import { Injectable } from '@angular/core';

@Injectable()
export class ControlService {
public sidemenu_toggle: boolean = false;
public modal_toggle: boolean = true;
public logo: string;
public state_1: boolean = false;
public state_2: boolean = false;
public isDriverAccepted: boolean = false;
public isDriverPending: boolean = false;
public newScene: boolean = false;
public sceneEdit: boolean = false;
public pageName: any;
public hasLoggedIn: boolean = false;
public curl: any;
public canHide: boolean = false;
public createNew: boolean = false;
public edit: boolean = false;
public current_key: any;
public sidenav: any;
public canShowNav: boolean;
public currentName: any;
public submitted: boolean = false;
public submitted2: boolean = false;
public cur_Item: any;
public opened: boolean = false
public animal: string;
public name: string;
public prevScenedrivers: boolean = false;
public prevScenewaiting: boolean = false;
public started: boolean = false;
  constructor() { }


  CreatePop(){

   return true
  }
  

}
