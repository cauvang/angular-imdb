import { Component, OnInit } from '@angular/core';
import { IVideoInfo, IRelation, IVideoMetadata, IDictionary, IListItem, IVideos } from '../models/viewer';
import { ViewerService } from '../services/viewer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {
  private bHidden: boolean = true;

  private videoId: string;
  private titleId: string;
  private playList = new Array<IListItem>();
  private primaryRelation: IRelation;
  private primaryMetadata: IVideoMetadata;
  private metadataList = new Array<IVideoMetadata>();
  private currentInd: number;

  constructor(private service: ViewerService, private router: Router) {

  }

  ngOnInit() {
    const urls = this.router.url.split('/');
    if (urls.length > 3) {
      this.videoId = urls[4];
      this.titleId = urls[2];
      this.service.getVideoPlaylist(this.titleId).subscribe(data => {
        this.getInfo(data);
      });
    }
    else {
      this.videoId = urls[2];
      this.service.getVideoViewer(this.videoId).subscribe(data => {
        const videos = data.alternativeData.videos;
        this.getInfo(videos);
      });
    }
  }

  private getInfo(data: IVideos) {
    const list = Object.values(data.playlists)[0];
    this.playList = list.listItems;

    if (this.titleId === undefined)
      this.primaryRelation = Object.values(data.primaryRelations)[0];
    else
      this.primaryRelation = (data.primaryRelations)[this.titleId];

    this.primaryMetadata = data.videoMetadata[this.videoId];
    this.currentInd = this.playList.findIndex(x => x.videoId == this.videoId) + 1;


    const meta = data.videoMetadata;
    this.playList.forEach(element => {
      const curMeta = meta[element.videoId];
      curMeta.name = data.primaryRelations[curMeta.primaryConst].name;

      this.metadataList.push(curMeta);
    });
  }

  onClose() {
    this.router.navigateByUrl("/title/" + this.primaryRelation.id);
  }

  onClickDown() {
    this.bHidden = !this.bHidden;
  }

  onClickUp() {
    this.bHidden = !this.bHidden;
  }

  onSelectVideo() {
  }
}
