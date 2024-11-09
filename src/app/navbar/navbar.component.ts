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

  sendMessage() {
    const message = 'Portfolio Link';
    this.messageEmitter.emit(message);
    console.log('Message sent: ', message);
  }

}
