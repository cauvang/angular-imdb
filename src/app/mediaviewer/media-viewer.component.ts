import { Component, OnInit } from '@angular/core';
import { ViewerService } from '../services/viewer.service';
import { IMediaViewer, IImageViewer } from '../models/viewer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-viewer',
  templateUrl: './media-viewer.component.html',
  styleUrls: ['./media-viewer.component.scss']
})
export class MediaViewerComponent implements OnInit {
  private data: IMediaViewer;
  private id: string;
  private imageId: string;
  private currentImage: IImageViewer;
  private people: string;
  private currentInd: number;

  constructor(private service: ViewerService, private router: Router) { }

  ngOnInit() {
    const urls = this.router.url.split('/');
    this.id = urls[2];
    this.imageId = urls[4];
    this.service.getMediaViewer(this.id, this.imageId).subscribe(data => {
      this.data = data;
      this.currentInd = data.allImages.findIndex(x => x.id == this.imageId);
      this.resetImageViewer();
    });
  }

  resetImageViewer() {
    this.currentImage = this.data.allImages[this.currentInd];
    this.imageId = this.currentImage.id;
    const temp = this.currentImage.caption;
    this.people = temp.substring(0, temp.indexOf("in <a href"));

  }
  changeURL() {
    this.router.navigateByUrl("/title/" + this.id + "/mediaviewer/" + this.imageId);
  }

  onNext() {
    this.currentInd = this.currentInd + 1;
    if (this.currentInd === this.data.totalImageCount)
      this.currentInd = 0;
    this.resetImageViewer();
    this.changeURL();
  }

  onPrev() {
    this.currentInd = this.currentInd - 1;
    if (this.currentInd < 0)
      this.currentInd = this.data.totalImageCount - 1;
    this.resetImageViewer();
    this.changeURL();
  }

  onClose() {
    this.router.navigateByUrl("/title" + this.id + "/mediaindex");
  }
}
