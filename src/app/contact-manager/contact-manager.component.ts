import { Component, OnInit } from '@angular/core';
import { MyContacts } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  allContacts:MyContacts[]=[]

  searchKey:string=""

  constructor(private api:ApiService)
  {

  }

  ngOnInit(): void {
    this.api.getAllcontacts().subscribe((data:any)=>{console.log(data);
      this.allContacts=data
    })
  }

  search(a:any) //a is the $event
  {
    console.log(a.target.value);
    this.searchKey=a.target.value
    
  }
}
