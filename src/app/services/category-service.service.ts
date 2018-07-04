import { Injectable } from '@angular/core';

@Injectable()
export class CategoryServiceService {

  constructor() { }

  categories=[
    {"cname":"Men","slug":"men" ,
    "sub_cat":[
      {"sub_cat_name":"Shirt","slug":"shirt"},
      {"sub_cat_name":"T-shirt","slug":"t-shirt"}]
  },
    {"cname":"Women","slug":"women",
    "sub_cat":[
      {"sub_cat_name":"Sarees","slug":"sarees"},
      {"sub_cat_name":"Kurta & Kurtees","slug":"kurta - kurtees"}]
    },
    {"cname":"Kids","slug":"kids",
    "sub_cat":[
      {"sub_cat_name":"Shirt","slug":"shirt"},
      {"sub_cat_name":"T-shirt","slug":"t-shirt"}]
    }
  ]

}
