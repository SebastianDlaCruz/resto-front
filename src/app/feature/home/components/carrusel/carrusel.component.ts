import { Component, HostListener, Input, input, OnInit, } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherArrowLeftCircle, featherArrowRightCircle } from '@ng-icons/feather-icons';
import { Person } from '../person/model/person.model';

@Component({
  selector: 'app-carrusel',
  imports: [NgIcon],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css',
  providers: [
    provideIcons({ featherArrowRightCircle, featherArrowLeftCircle }),

  ]
})
export class CarruselComponent implements OnInit {

  arrowRightIcon = featherArrowRightCircle;
  arrowLeftIcon = featherArrowLeftCircle;


  items = input.required<Person[]>();
  @Input() itemsToShow = 0;
  @Input() itemToScroll = 0;

  currentIndex = 0;
  windowWidth = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.adjustItemsShow();
  }

  ngOnInit(): void {
    this.adjustItemsShow();
  }

  adjustItemsShow() {
    if (this.windowWidth < 768) {
      this.itemsToShow = 1;
    } else if (this.windowWidth < 922) {
      this.itemsToShow = Math.min(2, this.items().length)
    } else {
      this.itemsToShow = Math.min(this.itemsToShow, this.items.length);
    }
  }

  get visibleItems() {
    return this.items().slice(this.currentIndex, this.currentIndex + this.itemsToShow);
  }

  next() {
    if (this.currentIndex < this.items().length - this.itemsToShow) {
      this.currentIndex += this.itemToScroll;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.itemToScroll;

    } else {
      this.currentIndex = this.items().length - this.itemsToShow;
    }
  }


  get transformStyle() {
    return `translateX(-${this.currentIndex * (100 / this.itemsToShow)})`;
  }
}
