import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() featrueSelected=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature:string){
    this.featrueSelected.emit(feature)
  }

}
