import { Component } from '@angular/core';
import { smoothScrollTo } from '../../utils/scroll';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly scrollTo = smoothScrollTo;
}
