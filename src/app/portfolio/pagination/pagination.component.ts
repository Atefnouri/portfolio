import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 5; // mock total
  @Output() pageChange = new EventEmitter<number>();

  get paginationRange(): (number | string)[] {
    const totalShown = 5;
    const result: (number | string)[] = [];

    if (this.totalPages <= 7) {
      // Show all pages if few total
      for (let i = 1; i <= this.totalPages; i++) {
        result.push(i);
      }
    } else {
      result.push(1);

      if (this.currentPage > 3) {
        result.push('...');
      }

      const start = Math.max(2, this.currentPage - 1);
      const end = Math.min(this.totalPages - 1, this.currentPage + 1);

      for (let i = start; i <= end; i++) {
        result.push(i);
      }

      if (this.currentPage < this.totalPages - 2) {
        result.push('...');
      }

      result.push(this.totalPages);
    }

    return result;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  goToPage(page: number | string) {
    if (typeof page === 'number' && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}
