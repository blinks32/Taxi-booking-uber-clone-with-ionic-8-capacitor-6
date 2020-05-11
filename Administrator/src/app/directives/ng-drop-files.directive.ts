import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from './file-item';
import * as _ from 'lodash';

@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() public files:Array<FileItem> = [];
  @Output() public fileOver:EventEmitter<any> = new EventEmitter();
  @Output() public onFileDrop:EventEmitter<FileItem[]> = new EventEmitter<FileItem[]>();

 private element:ElementRef;

  public constructor(element:ElementRef) {
    this.element = element;
  }


  @HostListener('drop', ['$event'])
  public onDrop(event:any):void {
    let transfer = this._getTransfer(event);
    if (!transfer) return;

    this._preventAndStop(event);
    this._addFiles(transfer.files);
    this.fileOver.emit(false);
    this.onFileDrop.emit(this.files);
  }  

  @HostListener('draenter', ['$event'])
  public onDragEnter(event:any):void {
    this._preventAndStop(event);
    this.fileOver.emit(true);
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event:any):void {
    let transfer = this._getTransfer(event);

    transfer.dropEffect = 'copy';
    this._preventAndStop(event);
    this.fileOver.emit(true);
  }


  @HostListener('dragleave', ['$event'])
  public onDragLeave(event:any):any {
    this._preventAndStop(event);
    this.fileOver.emit(false);
  }



  private _getTransfer(event:any):any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _preventAndStop(event:any):any {
    event.preventDefault();
    event.stopPropagation();
  }

  private _addFiles(files: FileList):void {
    _.each(files, (file) => { if (this._fileCanBeAdded(file)) this.files.push(new FileItem(file)) });
  }

  private _fileCanBeAdded(file:File):boolean {
    return (!this._fileIsAlreadyDropped(file) && this._fileTypeIsImage(file.type));
  }

  private _fileIsAlreadyDropped(file:File):boolean {
    return _.filter(this.files, _.iteratee(['name', file.name])).length > 0;
  }

  private _fileTypeIsImage(fileType:string):boolean {
    return (fileType == ''? false: fileType.startsWith('image'));
  }

}