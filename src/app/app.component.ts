import { Component,OnInit } from '@angular/core';
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
  repos: GitHubRepos[];
  errorMessage: string= "";


  constructor(public http: HttpClient) {
  }

  ngOnInit() {
   
    }

    public getRepos() { 
      return this.http.get<GitHubRepos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
     (response) => {         //Next callback
                 
      this.repos = response; 

     },
     (error) => {            //Error callback
                 
      this.errorMessage = error;
      this.repos=[];
      
     },
     () => {                 //Complete callback
               
      console.log("done!");

     })
      }
     
      onSubmit(contactForm:FormGroup) {
        this.getRepos()
      }

}



