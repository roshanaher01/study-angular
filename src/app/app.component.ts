import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courceProject1';
  loadedFeatuer='recipe';

  onNavigate(featuer:string){
      this.loadedFeatuer= featuer;
  }

}
