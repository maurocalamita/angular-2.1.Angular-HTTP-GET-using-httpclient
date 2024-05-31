import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable()
export class ApiService {
 
  baseURL: string = "http://localhost:3000";
 
  constructor(private http: HttpClient) {}
 
  getPeople(): Observable<Person[]> {
	return this.http.get<Person[]>(this.baseURL + '/people')    
  }
 
  addPerson(person:Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    console.log(body)
    return this.http.post<Person>(this.baseURL + '/people', body,{'headers':headers})
  }
 
}