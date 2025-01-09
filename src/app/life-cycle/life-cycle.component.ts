import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnInit, DoCheck, OnChanges {

  // @Input() long: string = "";
  constructor() {
    console.log('Constructor được chạy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges được chạy');
  }
  ngOnInit(): void {
    console.log('ngOnInit được chạy');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck được chạy');
  }


}
