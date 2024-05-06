import { Component, ElementRef, HostListener } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { GridComponent } from '../grid/grid.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.less',
    imports: [CarouselComponent, GridComponent, AboutComponent, ContactComponent, MatToolbarModule]
})
export class DashboardComponent {
  selectedButton: string | null = null;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const sections = this.elementRef.nativeElement.querySelectorAll('.content-container > *');
    
    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.selectedButton = section.id.replace('-component', '');
      }
    });
  }

  scrollTo(component: string) {
    this.selectedButton = component;
    const element = document.getElementById(component + '-component');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
