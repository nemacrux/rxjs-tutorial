import { of, fromEvent } from 'rxjs'; 
import { map } from 'rxjs/operators';

let button = document.querySelector("button");

let source = fromEvent(button, 'click');

source.subscribe( event => console.log(event))