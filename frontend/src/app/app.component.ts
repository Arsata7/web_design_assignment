import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './web-design-assignment/carousel/carousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'frontend';
}
