import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Movie } from '../models/models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sort!: string;
  public movies: Array<Movie> = [];



  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {

      //if statement that declares that if the a user uses the search, responds with a params of either the rating or etc
      if (params['movie-search']) {
        this.searchMovies('metacrit', params['movie-search']);
      } else {
        this.searchMovies('metacrit');
      }
    });
  }
  
  searchMovies(sort: string, search?: any) {
    this.httpService
    .getMovieList(sort, search)
    .subscribe((movieList: APIResponse<Movie>) => {
      this.movies = movieList.results;
      console.log(movieList);
    });
  }

}
