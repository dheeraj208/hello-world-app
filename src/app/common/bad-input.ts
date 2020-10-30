import { logging } from 'protractor';
import { AppErrors } from './app-errors';

export class BadInput extends AppErrors{

    constructor(){
        super();
        console.log('Bad Input Error');
    }
}
