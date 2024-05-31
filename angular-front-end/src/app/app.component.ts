import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ApiService } from 'service/api.service';
import { Person } from 'model/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-frontend';

  people: Person[] = [];
  person: Person = {id:null,name:""};
  //post : JsonPost;
  /*errorMessage: any;
  loaded: boolean = false;
  noDataFound: boolean = false;
  noDataFoundmsg: string = "in github non è presente alcun repository";
*/
  constructor(private servicePerson: ApiService) { }

  ngOnInit() {
    this.refreshPeople()
   }

   refreshPeople() {
    this.servicePerson.getPeople()
      .subscribe(data => {
     console.log(data)
     this.people = data;
      })      
 
  }

  createPerson() {
    //const person: Person = { id: 23, name: "mauro" };
    if(this.person.name==""){
     alert("il nome non può essere vuoto");
     return;
    }
    
    this.servicePerson.addPerson(this.person).subscribe(
      response => {
        this.person=response;
        this.refreshPeople();
        this.person.name="";
      }
    )
        
  }
}



