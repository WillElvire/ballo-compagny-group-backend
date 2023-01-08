export interface HttpRequestParams {
  method : string ,
  body   : string ,
  isEnc  : boolean,
  url    : string
}


export interface IShoppingProduct {
  title       : string ,
  marque      : string,
  type       ?: string,
  description : string ,
  price       : number ,
  reduction  ?: number,
  stock       : number,
  images      : {
    image1 ?: string ,
    image2?: string ,
    image3?: string,
  },
}
