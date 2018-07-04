import { Component, OnInit } from '@angular/core';
import { CategoryServiceService   } from '../../services/category-service.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements OnInit {

  categoryList=[];
  constructor( private catservice: CategoryServiceService) { }

  ngOnInit() {
    this.categoryList= this.catservice.categories;
  }

}
