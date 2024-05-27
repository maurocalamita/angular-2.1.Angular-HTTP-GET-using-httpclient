import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitHubRepos } from './model/repository';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';

  userName: string = "maurocalamita"
  baseURL: string = "https://api.github.com/";
  repos: GitHubRepos[]=[];
  errorMessage: any;
  loaded: boolean=false;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {

  }

  public getRepos() {
    this.repos=[];
    return this.http.get<GitHubRepos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe({
        next: (response: GitHubRepos[]) => {
          if (response.length !== 0) {
            response.map((item: { id: any; name: any; html_url: any; description: any; }) => {
              this.repos.push({
                id: item.id,
                name: item.name,
                html_url: item.html_url,
                description: item.description
              });
            });
            this.loaded = true;
          }
        },
        error: (error): void => {
          this.errorMessage = {
            statusCode: error.status,
            message: error.error.message,
          };
          this.loaded = true;
        },
        complete: () => {
          console.log('Request completed.');
          this.loaded = true;
        },
      });
  }


  onSubmit(contactForm: FormGroup) {
    this.getRepos()
  }

}



