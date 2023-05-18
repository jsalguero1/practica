import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl = environment.BaseUrl + 'series.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Serie[]>
  {
    return this.http.get<Serie[]>(this.apiUrl);
  }


}
