import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContacts } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  allGroups:any[]=[]
  contactName:string=""
  contact:MyContacts ={} as MyContacts //MYCONTSS IS AN OBJECT SO WE ADD SAME TYPE, SEE MODEL
  constructor(private api:ApiService, private router:Router)
  {
//router class injected here because we need to redirect after create contact
  }

  ngOnInit(): void {
    this.api.getAllgroups().subscribe((data:any)=>
    {
      console.log(data);
      this.allGroups=data
    })
  }

  addContact()
  {
    this.api.addContact(this.contact).subscribe((data:any)=>{
//data is added so we need to redirect now //successfully crated so result here in subscribe
this.router.navigateByUrl('') //redirect link

    })

  }

}
