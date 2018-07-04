import { Component, OnInit } from '@angular/core';
import { BrandserviceService  } from '../../services/brandservice.service';
import {CategoryServiceService } from '../../services/category-service.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  brandList =[];
  categoryList =[];
  constructor( private brandservice: BrandserviceService , private catservice:CategoryServiceService) { }

  ngOnInit() {
    this.brandList = this.brandservice.brands;
    this.categoryList = this.catservice.categories;
  }

}
