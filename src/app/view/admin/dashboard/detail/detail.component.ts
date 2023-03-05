import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFullCommandDetail } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';
declare var require: any;
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { formatDate } from '@angular/common';
const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  guid: string = '';
  detailCommand?: IFullCommandDetail;
  subscrption: Subscription;
  @ViewChild('pdfTable') pdfTable!: ElementRef;

  constructor(
    private router: ActivatedRoute,
    private appFacade: AppFacades,
    private router$: Router,
    @Inject(LOCALE_ID) public locale: string
  ) {
    this.subscrption = this.router.params.subscribe((response: any) => {
      this.guid = response?.guid;
    });
  }
  ngOnDestroy(): void {
    this.subscrption.unsubscribe();
  }

  ngOnInit(): void {
    this.getCommandDetail();
  }

  getCommandDetail() {
    this.subscrption = this.appFacade
      .getCommandUsingGuid(this.guid)
      .subscribe((response: any) => {
        this.detailCommand = response[0] as IFullCommandDetail;
      });
  }

  marqueCommeLivrer(guid: string | undefined) {
    this.subscrption = this.appFacade
      .updateStatusCommand(guid as string)
      .subscribe(
        (response: any) => {
          this.getCommandDetail();
          this.appFacade.alertSuccess(response.message);
        },
        (error) => {
          this.appFacade.alertError(error.message);
          console.log(error);
        }
      );
  }

  deleteCommand(guid: string | undefined) {
    this.appFacade.deleteCommandFromGuid(guid as string).subscribe(
      (response: any) => {
        this.router$.navigate(['/dashboard/']);
        this.appFacade.alertSuccess(response.message);
      },
      (error) => {
        this.appFacade.alertError(error.message);
        console.log(error);
      }
    );
  }

  makePdf(data : string) {
    try{
      //console.log("make pdf",data);
      var html = htmlToPdfmake(this.parseDocToHtml(data));
      const documentDefinition : TDocumentDefinitions = { content: html};
      pdfMake.createPdf(documentDefinition).download();
    }
    catch(ex) {
      throw new Error(ex as string)
    }
  }

  parseDocToHtml(data : any){
    let dataToHTML = new DOMParser();
    let dataAfterParsedToHTML = dataToHTML.parseFromString(this.mapReceiptFile(data) , 'text/html');
    console.log(dataAfterParsedToHTML);
    return dataAfterParsedToHTML.documentElement.innerHTML;
  }

  downloadRceipt(guid:string | undefined) {
    return this.readFile();
  }

  mapReceiptFile(data: string) {
    data = data.replace("[nom]",this.detailCommand?.nom as string);
    data = data.replace("[prenom]",this.detailCommand?.prenom as string);
    data = data.replace("[date]", formatDate(this.detailCommand!.createdAt.toString(),"dd/MM/yyyy",this.locale).toString());
    data = data.replace("[now]", formatDate(new Date(),"dd/MM/yyyy",this.locale).toString());
    data = data.replace("[email]",this.detailCommand?.email as string);
    data = data.replace("[phone]",this.detailCommand?.telephone as string);
    data = data.replace("[marque]",this.detailCommand?.marque as string);
    data = data.replace("[titre]",this.detailCommand?.titre as string);
    data = data.replace("[quantite]",this.detailCommand!.quantity.toString());
    data = data.replace("[prix]",this.detailCommand?.prix as string);
    data = data.replace("[total]",this.detailCommand!.total.toString());
    data = data.replace("[guid]",this.detailCommand?.guid as string);
    return data;
  }

  readFile() {
    this.subscrption = this.appFacade.getReceiptFile().subscribe(
      {
        next : (response : any)=>{
          if(!!response) {
            console.log(response);
            this.makePdf(response);
          }
        },
        error : (err)=>{
          console.log(err);
        }
      }
    )
  }
}
