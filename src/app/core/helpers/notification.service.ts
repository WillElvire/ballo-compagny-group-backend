import { Injectable } from '@angular/core';
import { NzNotificationDataOptions, NzNotificationPlacement, NzNotificationService } from 'ng-zorro-antd/notification';
import { IBuilder } from '../interface/Ibuilder';

@Injectable()
export class NotificationService implements IBuilder<NotificationService> {
  private message!: string;
  private placement !: NzNotificationPlacement;
  private duration: number = 1000;
  private title :string = "Notification";

  constructor(private notification: NzNotificationService) {}

  setMessage(message: string) {
    this.message = message;
    return this;
  }
  setDuration(duration: number) {
    this.duration = duration;
    return this;
  }
  setTitle(title : string) {
    this.title = title;
    return this;
  }
  build<NzNotificationRef>(element: NzNotificationRef): NzNotificationRef {
    return element;
  }
  buildError(): void {
    this.build(this.notification.error(this.title,this.message,this.getOptions()));
  }
  buildSuccess(): void {
    this.build(this.notification.success(this.title,this.message,this.getOptions()));
  }
  buildDanger(): void {
    this.build(this.notification.warning(this.title,this.message,this.getOptions()));
  }
  buildBlank() : void {
    this.build(this.notification.blank(this.title,this.message,this.getOptions()));
  }

  setPlacement(placement: NzNotificationPlacement): NotificationService {
    this.placement = placement;
    return this;
  }

  getOptions() :NzNotificationDataOptions{
    return {
      nzPlacement : this.placement,
      nzDuration : this.duration
    }
  }
}
