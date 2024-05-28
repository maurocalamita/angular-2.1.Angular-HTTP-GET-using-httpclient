import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
baseURL: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUserRepos(username: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${username}/repos`);
  }
}
