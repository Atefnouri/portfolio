import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent , MaincontentComponent , PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild('portfoliosection') portfolioComponent?: ElementRef;


  ScrollTo(message:string) {
console.log('Received message:', message);
document.getElementById(message)?.scrollIntoView({ behavior: 'auto' });
}

ngAfterViewInit() {

  console.log(this.portfolioComponent);
   }


}
