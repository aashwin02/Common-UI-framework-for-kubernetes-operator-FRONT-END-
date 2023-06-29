import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  constructor( private auth : AuthService) {}

  logout(): void {
    this.auth.logOut() ;
  }

  isLogged(): boolean {
    return this.auth.isLoggedIn() ;
  }
}
