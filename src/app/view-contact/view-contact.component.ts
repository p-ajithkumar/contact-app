import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  //getting id name from the url
  //here activated route is the class name which contain urll from another ts file
  contactId:string = ""
  contact:any
  
  groupName:any
  group:any
  constructor(private b:ActivatedRoute,private c:ApiService)
  {}
//everything inside ngonit will show in the component page when it loads, not need to click any button
//like a navbar it will be permenent in a particular page
  ngOnInit(): void {
    this.b.params
    .subscribe((data:any)=>{
this.contactId =data.contactId //final op which is the id of that specific user

    })

    //api call contact

    this.c.viewContact(this.contactId ).subscribe((data:any)=>
    {
this.contact=data //whole data of the contact includes grp id, name etc
this.group=data.groupId //just the group id from the contact list 

//api call group

this.c.getGroupName(this.group).subscribe((result:any)=>
{
this.groupName=result
  }

 )
    })


}

}
