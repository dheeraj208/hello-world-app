import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): unknown {
    if (!value) { return null; }

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++){
      if ( this.isProposition(words[i]) && i > 0) {
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = this.toTitleCase(words[i]);
      }
    }
    return words.join(' ');
  }

  private toTitleCase(word: string): string{
    return word.substr(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

  private isProposition(word: string): boolean{
    const listOfProposition = ['of', 'the', 'is'];
    return listOfProposition.includes(word.toLowerCase());
  }

}
