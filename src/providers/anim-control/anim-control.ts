import { Injectable } from '@angular/core';

/*
  Generated class for the AnimControlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AnimControlProvider {

  public flipState: String = 'notFlipped';
  public flyInOutState: String = 'out';
  public fadeState: String = 'invisible';
  public bounceState: String = 'out';
  

 toggleFlipAnim(animation){
  this.flipState = animation;
  console.log('animate caleede')
 }

 toggleFlyOutAnim(animation){
  this.flyInOutState = animation;
  console.log('animate caleede')
 }

 toggleFadeAnim(animation){
  this.fadeState = animation;
  console.log('animate caleede')
 }

 toggleBounceAnim(animation){
  this.bounceState = animation;
  console.log('animate caleede')
 }

}
