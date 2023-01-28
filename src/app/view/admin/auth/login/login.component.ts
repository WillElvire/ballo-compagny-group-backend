import { Component, OnInit } from '@angular/core';
import { ILoginPayload } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  passwordType  : string  = 'password';
  isClicked     : boolean = false;
  text          : string  = 'Afficher mon mot de passe';
  startSpinning : boolean = false;
  login   : ILoginPayload = {
    email : '',
    password : ''
  }
  constructor(private appFacades : AppFacades) { }

  ngOnInit(): void {
  }

  showMyPassword(){
    this.isClicked = ! this.isClicked;
    this.isClicked ? this.passwordType = "text"  : this.passwordType = "password";
    this.isClicked ? this.text = "Cacher mon mot de passe " : this.text = "Afficher mon mot de passe";
  }

  authentification(){

    const verification  = this.appFacades.verifyObj(this.login);
    if(verification.count  > 0)
    return this.displayErrors(verification?.index as number[]);
    if(!this.appFacades.verifyIfEmail(this.login.email))
    return this.appFacades.alertError(`veuillez renseigner une addresse email valide`)
    return this.connectUser(this.login);
  }


  connectUser(loginPayload : ILoginPayload){
    this.startSpinning  = true;

    /*this._authService.login(loginPayload).subscribe((responce : {user ?: JUser , message :string})=>{
      this.isFilled  = false;
      if(!!responce.user){
        this._notification.create('success','',`Bienvenue  ${responce.user.name}`);
        this.router.navigate(["/project/"]);
      }
      this._notification.create('error','',responce.message);
    }); */
  }

  displayErrors(errorTable : number[]) {
    for(let index of errorTable) {
      this.appFacades.alertError(`veuillez renseigner votre ${Object.keys(this.login)[index]}`)
    }
  }

}
