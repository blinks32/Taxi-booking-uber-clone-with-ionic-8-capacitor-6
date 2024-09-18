// src/app/components/enroute-chat/enroute-chat.component.ts

import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-enroute-chat',
  templateUrl: './enroute-chat.component.html',
  styleUrls: ['./enroute-chat.component.scss'],
})
export class EnrouteChatComponent implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  @Input() chatData: any;  // Define an input property to receive data
 
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
    this.messages = this.chatService.getChatMessage(this.chatData.userId);
    this.messages.subscribe((d) => {
      if (d.length == 0){
        this.hasNoData = true;
        this.hideSkeleton = false;
      } else {
        this.hideSkeleton = false;
        this.hasNoData = false;
      }
    });
  }

  async Show() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }

  async Hide() {
    await StatusBar.setOverlaysWebView({ overlay: true });
  }

  ngOnInit() {
    // Use the passed data if needed
    console.log(this.chatData);
  }
 
  async sendMessage() {
    await this.chatService.addChatEnRouteMessage(this.newMsg, this.chatData.userId);
    this.newMsg = '';
    this.content.scrollToBottom();
    this.chatService.updatChatMessageInfo(this.chatData.userId);
  }
}
