import { Injectable } from '@angular/core';

@Injectable()
export class BrandserviceService {

  constructor() { }

  brands=[
    {"bname":"Acne","slug":"acne","no_of_products":"5"},
    {"bname":"Albiro","slug":"albiro" ,"no_of_products":"5"},
    {"bname":"Kids","slug":"kids","no_of_products":"55"}
  ]

}
