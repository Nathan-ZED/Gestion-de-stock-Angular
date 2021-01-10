import { SuperetteService } from './services/superette/superette.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  products: Array<any>;
  
  constructor(private superetteService:SuperetteService) { 
  }

  getNextStatus(currentStatus:string): string {
    if(currentStatus === 'En stock') {
      return 'Stock epuisé'
    }
    return 'En stock';
  } 

  ngOnInit(): void {
    this.products = this.superetteService.products;
    console.log(this.products);
  }

  onClickAddAllInStock(newStatus: string): void {
    this.superetteService.addAllInStock(newStatus);
  }

  onClickAddInStock(index: number, newStatus:string): void {
    this.superetteService.addInStock(index, newStatus);
  }

}
