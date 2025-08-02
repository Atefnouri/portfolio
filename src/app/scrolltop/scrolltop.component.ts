
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scrolltop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.css']
})
export class ScrolltopComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
