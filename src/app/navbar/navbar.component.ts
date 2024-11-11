  import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Output() messageEmitter = new EventEmitter<string>();


sentLinkID(id:string) {
  this.messageEmitter.emit(id);
}

}
