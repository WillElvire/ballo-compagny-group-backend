import { AppFacades } from 'src/app/facades/app.facades';
import { Component, OnInit } from '@angular/core';
import { HttpRequestType } from 'src/app/core/enum';
import { ICategorie, IMarque } from 'src/app/core/interface';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  categories : ICategorie[] = [];
  marques    : IMarque[]    = [];
  categorie  : Required<{name : string , isActive : number, marque_id : string}> = {
    name : '',
    isActive : 1,
    marque_id : ''

  }
  isLoaded : boolean = false;
  error = "";
  constructor(private appFacades : AppFacades) { }

  ngOnInit(): void {
    this.getCategories();
    this.getMarques()
  }

  getCategories() {
    const httpRequest = {body  : {},isEnc : false,url : '/categorie/gets',method : HttpRequestType.GET};
    this.appFacades.request(httpRequest)
    .subscribe((response : any)=>{
      this.categories = response.data as ICategorie[];
    })
  }


  getMarques() {
    const httpRequest = {body  : {},isEnc : false,url : '/marque/gets',method : HttpRequestType.GET};
    this.appFacades.request(httpRequest)
    .subscribe((response :any)=>{
      this.marques  = response.data;
      console.log(this.marques);
    })
  }

  activeModal(modalId : string) {
    this.appFacades.openModal(modalId);
  }
  closeModal(modalId: string) {
    this.error = "";
    this.appFacades.closeModal(modalId);
  }

  addNewCategorie() {
    this.isLoaded = true;
    const httpRequest = {body  : this.categorie,isEnc : false,url : '/categorie/add',method : HttpRequestType.POST};
    this.appFacades.request(httpRequest).subscribe(
      {
        next : (response :any )=>{
          this.isLoaded = false;
          this.closeModal('custom-modal-1');
          this.appFacades.alertSuccess(response.message);
          this.error = "";
          this.getCategories();
        },
        error : (err)=>{
          this.isLoaded = false;
          this.error = err.error.message ? err.error.message  : err.message ;
        }
      }
    )

  }

}
