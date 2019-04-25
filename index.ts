import { of, fromEvent } from 'rxjs'; 
import { map, throttleTime } from 'rxjs/operators';

let button = document.querySelector("button");

let source = fromEvent(button, 'click');

source.pipe(
  throttleTime(1000)
).subscribe( event => console.log(event))