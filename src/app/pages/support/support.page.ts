import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
 
  newMsg = '';
  messages: Observable<import("@angular/fire/firestore").DocumentData[]>;
  hasNoData: any;
  skeletOns: {}[];
  hideSkeleton: boolean;

 
  constructor(private chatService: AvatarService, private router: Router) { }
 
  async ionViewDidEnter() {
    this.skeletOns = [
      {},{},{},{}
    ]
    this.hideSkeleton = true;
    this.messages = (this.chatService.getMessage())
    this.messages.subscribe((d)=>{
      if (d.length == 0){
        this.hasNoData = true;
        this.hideSkeleton = false;
      }else{
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
  })


  

}

  


   

  async Show(){
    await StatusBar.setOverlaysWebView({ overlay: false });
   
  }

  async Hide(){
    await StatusBar.setOverlaysWebView({ overlay: true });
   
  }

  ngOnInit(){}
 
  async sendMessage() {
    await this.chatService.addChatMessage(this.newMsg)
      this.newMsg = '';
      this.content.scrollToBottom();
      this.chatService.updateMessageInfo();
  }
 
  
}
