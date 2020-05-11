import { Injectable } from '@angular/core';
import {Headers} from '@angular/http';
import { ControlService } from '../services/control.service';
import {Http, Request, RequestMethod} from "@angular/http";

@Injectable()
export class EmailService {
  taxihub: string = 'taxihub24@gmail.com'; //replace with your company email.
  http: Http;
  mailgunUrl: string;
  mailgunApiKey: string;
  constructor(http: Http, public ctrl: ControlService) { 
    this.http = http;
    this.mailgunUrl = "sandboxa68716decc6e4fac8cca889c27b546ba.mailgun.org"; //Replace with your sandbox key gotten from https://mailgun.com
    this.mailgunApiKey = window.btoa("api:key-d0349bf94cb463ef17e2512542625837");//Replace with your api key
  }


  send(subject: string, message: string, email: string) {
    var requestHeaders = new Headers();
    requestHeaders.append("Authorization", "Basic " + this.mailgunApiKey);
   // requestHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    this.http.request(new Request({
        method: RequestMethod.Post,
        url: "https://api.mailgun.net/v3/" + this.mailgunUrl + "/messages",
        body: "from="+ email + "&to=" + this.taxihub + "&subject=" + subject + "&text=" + message,
        headers: requestHeaders
    }))
    .subscribe(success => {
        this.ctrl.canHide = false
        this.ctrl.submitted = false;
        this.ctrl.submitted2 = false;
        console.log("SUCCESS -> " + JSON.stringify(success));
    }, error => {
  
       alert("ERROR -> " + JSON.stringify(error));
        //console.log("SUCCESS -> " + JSON.stringify(error));
    });
}


}
