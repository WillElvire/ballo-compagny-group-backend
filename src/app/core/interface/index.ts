export interface HttpRequestParams {
  method : string ,
  body   : string ,
  isEnc  : boolean,
  url    : string
}


export interface IOrder {
  user     : IUser,
  product ?: IShoppingProduct,
  quantity : number,
  total    : number
}


export interface IUser {
  firstname : string ,
  lastname  : string,
  email     : string ,
  phone     : string,
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
};

export interface ILoginPayload {
  email : string ,
  password : string
}
