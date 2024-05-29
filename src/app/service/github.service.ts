import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
baseURL: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/'+ userName + '/repos');
  }

  addPerson(username:string): Observable<any> {
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(username);
    return this.http.post(this.baseURL + 'people', body,{'headers':headers , observe: 'response'}); 
  }
}
