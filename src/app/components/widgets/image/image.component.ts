import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() images : {image1 ?: string , image2 ?: string , image3 ?: string} = {}
  default ?:string ;

  constructor() { }

  ngOnInit(): void {
    this.default = this.images?.image1;
  }


  setImage(index :string){

    if(index == "2") {
      this.images.image1  = this.images?.image2 as string;
    }

    if(index == "3") {
      this.images.image1 = this.images?.image3;
    }

    if(index == "1") {
      this.images.image1 = this.default;
    }

  }

}
