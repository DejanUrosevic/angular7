import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  /*@Output()
  newIngredient = new EventEmitter<Ingredient>();*/

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    console.log(this.name.nativeElement.value);
    console.log(this.amount.nativeElement.value);
    //this.newIngredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    this.shoppingListService.onAddedIngredient(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
