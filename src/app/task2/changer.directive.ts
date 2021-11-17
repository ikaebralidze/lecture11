import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appChanger]',
})
export class ChangerDirective implements OnInit {
  @Input() bgColor: string = '';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
  onHover() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
