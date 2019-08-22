import { Component, OnInit } from '@angular/core';
import { IVideoInfo, IRelation, IVideoMetadata, IDictionary } from '../models/viewer';
import { ViewerService } from '../services/viewer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  private data: IVideoInfo;
  private id: string;
  private relation: IRelation;
  private metadata: IVideoMetadata;
  private playList = new Array<IVideoMetadata>();
  private bHidden: boolean = true;
  private title: string;

  constructor(private service: ViewerService, private router: Router) {

  }

  ngOnInit() {
    const urls = this.router.url.split('/');
    if (urls.length > 3)
      this.id = urls[4];
    else
      this.id = urls[2];

    this.service.getVideoViewer(this.id).subscribe(data => {
      this.data = data.videoPlayerObject.video.videoInfoList[1];
      const videos = data.alternativeData.videos;
      this.relation = Object.values(videos.primaryRelations)[0];
      this.metadata = Object.values(videos.videoMetadata)[0];

      this.service.getVideoPlaylist(this.metadata.primaryConst).subscribe(data => {
        this.title = Object.values(data.playlists)[0].title;
        const meta = Object.values(data.videoMetadata);

        meta.forEach(element => {
          this.playList.push(element);
        });

        console.log(this.playList);
      });
    });


  }

  onClose() {
    console.log("id", this.relation)
    this.router.navigateByUrl("/title/" + this.relation.id);
  }

  onClickDown() {
    this.bHidden = !this.bHidden;
  }

  onClickUp() {
    this.bHidden = !this.bHidden;
  }
}
