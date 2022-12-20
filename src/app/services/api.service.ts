import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContacts } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string='http://localhost:3000/contacts'
  baseUrl2:string='http://localhost:3000/groups'

  constructor(private a:HttpClient) { }

  //function for get all contacts

  getAllcontacts():Observable<MyContacts>
{
return this.a.get(this.baseUrl)
}

 //function for get a single contacts
 viewContact(contactId:string)
 {
 return this.a.get(`${this.baseUrl}/${contactId}`)
 }

 //functiom to get particular group

 getGroupName(group:string)
 {
 return this.a.get(`${this.baseUrl2}/${group}`)
 }

 //function to fetch all group details

 getAllgroups()
 {
  return this.a.get(`${this.baseUrl2}`)
 }

 //function to add a new contact to server

 addContact(a:any)
 {
return this.a.post(this.baseUrl,a) //a will be added to api(base url)
 }



}
