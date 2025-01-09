import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, of, pipe, tap } from 'rxjs';

@Component({
  selector: 'app-learn-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './learn-rxjs.component.html',
  styleUrl: './learn-rxjs.component.scss'
})
export class LearnRxjsComponent implements OnInit {
 
  couter: number = 0;

  ngOnInit(): void {
    this.couter = 10;

    // Cơ bản
    const myObservable = new Observable((ob => {
      console.log("Phát ra tín hiệu 1...");
      ob.next("1");
      console.log("Phát ra tín hiệu 2...");
      ob.next("2");
      console.log("Phát ra tín hiệu 3...");
      ob.next("3");
      ob.complete();
    }))

    myObservable.subscribe({
      next: (value) => console.log("Nhận được: ", value),
      error: (err) => console.log("Có lỗi: ", err),
      complete: () => console.log("Kết thúc"),
    })
    
    // Sử dụng of
    const observable = of(1, 2, 3); // Phát ra 1, 2, 3

    observable.pipe(
      tap((value) => console.log('Nguồn phát dữ liệu:', value)) // Theo dõi dữ liệu
    ).subscribe((value) => {
      console.log('Subscriber nhận dữ liệu:', value);
    });

    // Theo dõi sự kiện click trên nút
    const button = document.getElementById('myButton') as HTMLButtonElement;
    fromEvent( button , 'click')
    .subscribe(() => console.log('Bạn đã bấm nút!'));
  }
}
