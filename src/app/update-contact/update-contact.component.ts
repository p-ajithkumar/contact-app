import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MyContacts } from 'src/models/myContacts';
import { MyGroups } from 'src/models/myGroups';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId:string='';
  contact:MyContacts={} as MyContacts //creating and making a variable just like the model myContacts
//now contact is created and has same fileds as my contacts but empty

groups:MyGroups[]=[] as MyGroups[]

  constructor(private b:ActivatedRoute,private api:ApiService,private r:Router)
  {
    
  }

  ngOnInit(): void {
    //to get the contact id from the url parameter
    this.b.params.subscribe((data)=>
    {
      console.log(data['contactId']);
      
this.contactId=data['contactId']
    })

    //calling api with this particular contact id
    //viewcontact was already defined in the api services.ts
    //we are just passing our requried contact id to that function using below code

  this.api.viewContact(this.contactId).subscribe((data:any)=>
  {
 this.contact=data
  }
  
 )
//call api for getting all groups
 this.api.getAllgroups().subscribe((data:any)=>
 {
   this.groups=data
 })

  }

  updateContact()
  {
    this.api.updateContact(this.contactId, this.contact).subscribe((data:any)=>
    {
      //contact holds new data of updated contact and it will goes to updatecotact function of api sevices 
      //argument contactId = cid of updatecontact in api services
      //argument contact for cb in api services 
      this.r.navigateByUrl('')
    })
  }
  
}
