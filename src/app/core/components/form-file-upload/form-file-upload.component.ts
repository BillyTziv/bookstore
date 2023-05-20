import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-form-file-upload',
  templateUrl: './form-file-upload.component.html',
  styleUrls: ['./form-file-upload.component.scss']
})
export class FormFileUploadComponent {
  @Output() fileSelected: EventEmitter<string> = new EventEmitter<string>();
  
  @ViewChild('fileUpload', { static: false })
  fileUpload!: ElementRef<HTMLInputElement>;

  public uploadedImage: string = '';

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.uploadedImage = event.target.result;
      this.fileSelected.emit(this.uploadedImage);
    };
    reader.readAsDataURL(file);
  }

  public handleFileUploadClick(event: MouseEvent) {
    event.preventDefault();
    this.fileUpload.nativeElement.click();
  }

  removeImage() {
    this.uploadedImage = '';
  }
}