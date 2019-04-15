import { Component, OnInit } from '@angular/core';
import { GenresService } from '../services/genres.service';
import { IGenreResponse, IGenre } from '../models/genre';

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

      console.log(this.genres);
    });
  }

}
