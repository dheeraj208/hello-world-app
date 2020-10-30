import { Component, HostListener } from '@angular/core';
import { FavoriteChangeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World';

  isFavorite = true;

  tweet = {
    body: 'Here si the body of the tweet..',
    isLiked: false,
    likesCount: 10
  };

  textValue = '';

  // onFavoriteChange(eventArgs : FavoriteChangeEventArgs){
  //   console.log("Favorite is changed.", eventArgs);
  // }

  onFavoriteChange(eventArgs: {newValue: boolean}){
    console.log('Favorite is changed.', eventArgs);
  }
  onBlurTextBox(){
    const x = document.getElementById('fname');
    x.innerText = x.innerText.toUpperCase();
  }
}
