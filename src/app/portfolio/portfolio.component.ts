import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,PaginationComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
      projectUrl: '#'
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
      projectUrl: '#'
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
      projectUrl: '#'
    },
      {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
      projectUrl: '#'
    }
  ];
}
