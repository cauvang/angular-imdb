import { Component, OnInit } from '@angular/core';
import { IGenreResponse, IGenre } from 'src/app/models/genre';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  private data: IGenreResponse;
  private genres: IGenre[][];

  constructor(private service: GenresService) {
    this.genres = [];
  }

  ngOnInit() {
    this.service.getGenres().subscribe(data => {
      this.data = data;
      for (let i = 0; i < 4; i++)
        this.genres.push(data.genres.splice(0, 3));

    });
  }

}
