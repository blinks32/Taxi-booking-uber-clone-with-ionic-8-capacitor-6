export class FileItem {
    
  public file:File;
  public url:string = '';
  public isUploading:boolean = false;
  public progress:number = 0;

  public constructor(file:File) {
    this.file = file;
  }

}