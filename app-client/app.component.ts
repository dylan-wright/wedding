import { Component } from '@angular/core';

@Component({
  selector: 'too-mean',
  template: `<h1>Testing {{ name }}</h1>`
})

export class AppComponent {
  name = 'Too Mean';
}