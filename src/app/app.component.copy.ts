import { Component, OnInit } from '@angular/core';
import { GitHubRepos } from './model/repository';
import { FormGroup } from '@angular/forms';
import { GithubService } from './service/github.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-frontend';

  userName: string = "maurocalamita"
  repos: GitHubRepos[]=[];
  errorMessage: any;
  loaded: boolean=false;

  constructor(private githubService: GithubService) {}

  ngOnInit() {}

  public getRepos() {
    this.repos=[];
    this.githubService.getUserRepos(this.userName).subscribe({
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
          this.loaded = false;
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


