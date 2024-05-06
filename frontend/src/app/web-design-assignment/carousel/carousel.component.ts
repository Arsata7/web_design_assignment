import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.less'
})
export class CarouselComponent implements OnInit {

  products: any[] = [];
  notificationBadgeValue: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    //Using public API
    // this.productService.getProducts().subscribe({
    //   next: (response) => {
    //     this.products = response.slice(0, 4);
    //     console.log(this.products)
    //   },
    //   error: (error) => {
    //     console.error('Error fetching products:', error);
    //   }
    // });

    //Using dummy json
      this.productService.getProducts().subscribe(data => {
        this.products = data;
      });
  }

  addToCard() {
    this.notificationBadgeValue++;
  }

}
