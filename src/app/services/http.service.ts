import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Movie } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient) { }


  //get movie method
  getMovieList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Movie>> {
    let params = new HttpParams().set('ordering', ordering);

    if(search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Movie>>(`${env.MOVIE_API_URL}/movies`, {
      params: params
    });
  }
}
