import { Component , Output , EventEmitter } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MaincontentComponent } from '../maincontent/maincontent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , MaincontentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Output() messageEmitter = new EventEmitter<string>();

  SendMessage(message:string)
  {
    this.messageEmitter.emit(message);
  }

}
