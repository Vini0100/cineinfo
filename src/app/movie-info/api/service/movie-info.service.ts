import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../model/movie';
import { environment } from '../../../../environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieInfoService {
  constructor(private http: HttpClient) {}
  getMovie(titleSearch: string): Observable<IMovie> {
    const url = 'https://www.omdbapi.com/';
    return this.http.get<IMovie>(
      `${url}?t=${titleSearch}&plot=full&type=movie&apikey=${environment.API_KEY}`
    );
  }
}
