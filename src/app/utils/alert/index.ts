import { Inject, Injectable } from "@angular/core";
import { TuiAlertService, TuiNotification } from "@taiga-ui/core";

@Injectable({
  providedIn : 'root'
})
export class AlertService {

  private message ?: string ;
  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {}

  public setMessage(message : string) {
    this.message = message;
    return this;
  }

  public error(){
    return this.buildAlert(this.message as string , 'error');
  }

  public success(){
    return this.buildAlert(this.message as string , 'success');
  }

  public warning(){
    return this.buildAlert(this.message as string , 'warning');
  }

  public info(){
    return this.buildAlert(this.message as string , 'info');
  }

  private buildAlert(message :string , type : string = 'error' , duration : number = 1000 ) {

    let status = TuiNotification.Error;

    if(type == 'success') {
      status  =  TuiNotification.Success
    }

    if(type == 'warning') {
      status = TuiNotification.Warning
    }

    if(type == 'info') {
      status = TuiNotification.Info
    }

    return this.alertService.open(message,{
     autoClose : true,
     status ,
     hasCloseButton : true,
     hasIcon : true
    }).subscribe();
  }



}
