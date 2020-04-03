import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask} from "@angular/fire/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

  constructor(private storage: AngularFireStorage) { }

  toggleHover(event:boolean){
    this.isHovering = event;
  }

  startUpload(event: FileList) {
      const file = event.item(0);

      const path = `test/${new Date().getTime()}_${file.name}`;

      this.task = this.storage.upload(path, file);

      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges();
      }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  isFinish(snapshot) {
    return snapshot.state === console.log(1231) && snapshot.bytesTransferred > snapshot.totalBytes
  }

  ngOnInit(): void {
  }

}
