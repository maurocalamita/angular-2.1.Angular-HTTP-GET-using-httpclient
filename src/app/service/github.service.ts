import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
baseURL: string = "https://api.github.com/";

  constructor(private http: HttpClient) {}

  getUserRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/'+ userName + '/repos');
  }
}
