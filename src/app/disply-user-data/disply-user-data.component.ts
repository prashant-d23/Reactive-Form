import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-disply-user-data',
  templateUrl: './disply-user-data.component.html',
  styleUrls: ['./disply-user-data.component.css']
})
export class DisplyUserDataComponent implements OnInit {

  receivedData:FormData[] = [];
  isLoading:boolean = false;
  constructor(private httpService:SharedService){}

  ngOnInit() {
    this.isLoading = true;
    this.httpService.getData("users").subscribe((response:any)=>{
      if(response && response.length > 0){
        this.receivedData = response;
      }
      this.isLoading = false;
    },
    error =>{
      this.isLoading = false;
    })
    console.log(this.receivedData)

  }

  displayColumns : string[] = ['id','fullName', 'email','password', 'confirmPassword', 'address', 'country', 'state', 'city', 'pinCode', 'phoneNumber']


}

export interface FormData{
  fullName:string;
  email:string;
  password:string;
  confirmPassword:string;
  address:string;
  country:string;
  state:string;
  city:string;
  pinCode:string;
  phoneNumber:string;

}
