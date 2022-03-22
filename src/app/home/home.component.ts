import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Movie } from '../models/models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public sort!: string;
  public movies: Array<Movie> = [];
  private routeSub: Subscription = new Subscription;
  private movieSub: Subscription = new Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {

      //if statement that declares that if the a user uses the search, responds with a params of either the rating or etc
      if (params['movie-search']) {
        this.searchMovies('metacrit', params['movie-search']);
      } else {
        this.searchMovies('metacrit');
      }
    });
  }

  searchMovies(sort: string, search?: string): void {
    this.movieSub = this.httpService
    .getMovieList(sort, search)
    .subscribe((movieList: APIResponse<Movie>) => {
      this.movies = movieList.results;
      console.log(movieList);
    });
  }


  openMovieDetails(id: string): void {
    this.router.navigate(['details', id]);
  }

  ngOnDestroy(): void{
    if(this.movieSub){
      this.movieSub.unsubscribe();
    }
    if (this.routeSub){
      this.movieSub.unsubscribe();
    }
  }
}
