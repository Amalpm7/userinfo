import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putData() }
  putData=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.userData=data
      }
    )
  }
  userData:any=[]

  ngOnInit(): void {
  }

}
