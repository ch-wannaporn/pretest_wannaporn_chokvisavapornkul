import { Component } from '@angular/core';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  categories:String[] = []
  showdata:String[] = []

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe(res => {
    this.categories = res
    this.showdata = res
  })
  }

  filterData(event:any) {
    let keyword = event.target.value
    this.showdata = this.categories.filter((item:String)=>{
      return item.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    })
  }
  
}