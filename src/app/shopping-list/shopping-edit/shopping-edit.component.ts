import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingrdiant } from '../../shared/ingrdiant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingrediantAdded: EventEmitter<Ingrdiant> = new EventEmitter<Ingrdiant>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddedItem(ingForm: any) {    
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrediant = new Ingrdiant(ingName, ingAmount);
    this.ingrediantAdded.emit(newIngrediant);
    ingForm.reset();
  }

}
