import { Component } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms'
import { SharedService } from '../shared.service';
import { PasswordValidator } from '../PasswordValidator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

    registrationForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private httpService:SharedService, private router:Router) { }

    ngOnInit() {
      this.createForm();

      //dropdown
      this.countries = Object.keys(this.countryobj)

  //dropdown and code abbr;

      this.registrationForm.get('country')?.valueChanges.subscribe((country) => {
        this.states = this.countryobj[country];
        this.phoneAbbr = this.phoneAbbreavations[country];
        this.registrationForm.patchValue({ phoneNumber: this.phoneAbbr });
        this.registrationForm.get('state')?.setValue('');
      });

      this.registrationForm.get('password')?.valueChanges.subscribe((password)=>{
          this.registrationForm.get('confirmPassword')?.updateValueAndValidity();
      })
    }
    //dropdowns

    countries:string[] = [];
    states:string[] = [];
    countryobj:any = {
      "India" : ['Maharashtra', 'Uttar Pradesh', 'Madhya Pradesh', 'Karnataka'],
      'United States': ['New York', 'California', 'Texas'],
      Australia: ['New South Wales', 'Victoria', 'Queensland']
    }

    //code Abbrevation
    phoneAbbr:any;
    phoneAbbreavations:any = {
      India : '+91',
      'United States' : '+1',
      Australia : '+61'
    };

    createForm() {
      this.registrationForm = this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]{2,30}$')]],
        email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}')]],
        password: ['', [Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-zA-Z0-9]).{8,}$')]],
        confirmPassword: ['', [Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-zA-Z0-9]).{8,}$'),PasswordValidator]],
        address:['',Validators.required],
        country : ['',Validators.required],
        state : ['',[Validators.required]],
        city : ['',[Validators.required]],
        pinCode : ['',[Validators.required]],
        phoneNumber : ['',[Validators.required]],
      });
    }

    get firstName(){
      return this.registrationForm.get('fullName')
    }
    get email(){
      return this.registrationForm.get('email')
    }
    get password(){
      return this.registrationForm.get('password')
    }
    get confirmPassword(){
      return this.registrationForm.get('confirmPassword')
    }
    get address(){
      return this.registrationForm.get('address')
    }
    get country(){
        return this.registrationForm.get('country')
    }
    get state(){
        return this.registrationForm.get('state')
     }
    get city(){
        return this.registrationForm.get('city')
      }
    get pinCode(){
        return this.registrationForm.get('pinCode')
      }
    get phoneNumber(){
        return this.registrationForm.get('phoneNumber')
      }


    saveForm() {
     console.log(this.registrationForm.value)
     this.httpService.postData("users",this.registrationForm.value).subscribe((data:any)=>{
      console.log(data);
     })

     this.router.navigate(['/user-list']);

    }


  }




