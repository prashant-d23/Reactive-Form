import {AbstractControl} from '@angular/forms'
import {ValidationErrors} from '@angular/forms'

export function PasswordValidator(control:AbstractControl):ValidationErrors | null{

  let confirmPassword = control.value;
  let password = control.root.get('password')?.value;

  if(password != "" && (password !== confirmPassword)){
    return {'passwordNotMatch':true}
  }else{
    return null;
  }
}
