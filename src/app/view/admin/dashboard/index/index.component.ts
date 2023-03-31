import { Component, OnInit } from '@angular/core';
import { ICommand } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';
import { UserQuery } from 'src/app/store/users/user.query';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  report: Required<{
    currentStock: number;
    dailyBooking: number;
    weeklyBooking: number;
  }> = {
    currentStock: 0,
    dailyBooking: 0,
    weeklyBooking: 0,
  };
  isSpinning: boolean = true;
  lastFiveCommande: ICommand[] = [];

  constructor(private userQuery: UserQuery, private appFacades: AppFacades) {}

  ngOnInit(): void {
    this.getUserLoggedIn();
    this.getReport();
    this.getLastCommand();
    this.getDailyReport();
  }

  getUserLoggedIn() {
    this.userQuery.isLoading$.subscribe((response) => {
      response;
    });
  }

  getReport() {
    this.appFacades.getStockProduct().subscribe((response: any) => {
      response.map((element: { quantity: string }) => {
        this.report.currentStock =
          this.report.currentStock + Number.parseInt(element.quantity);
      });
    });
  }

  getLastCommand() {
    this.appFacades.getLastFiveCommand().subscribe({
      next: (responce) => {
        this.isSpinning = false;
        this.lastFiveCommande = responce as ICommand[];
      },
      error: (err) => {
        this.isSpinning = false;
      },
    });
  }

  getDailyReport() {
    this.appFacades.getCommandDailyReport().subscribe({
      next: (response: any) => {
        this.report.dailyBooking = response[0]?.count;
      },
      error: (err) => {},
    });
  }

  marqueCommeLivrer(guid: string | undefined) {
    this.appFacades.updateStatusCommand(guid as string).subscribe(
      (response: any) => {
        this.getLastCommand();
        this.getReport();
        this.appFacades.alertSuccess(response.message);
      },
      (error) => {
        this.appFacades.alertError(error.message);
      }
    );
  }
}
