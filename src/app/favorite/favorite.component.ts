import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-fav') isFavorite: boolean;
  @Output('isOutput') change = new EventEmitter();

  enterText: string;
  constructor() { }

  onClick(){
    console.log('Before Emit');
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
    console.log('After Emit');
  }
  ngOnInit(): void {
  }

}

export interface FavoriteChangeEventArgs {
   newValue: boolean;
}
