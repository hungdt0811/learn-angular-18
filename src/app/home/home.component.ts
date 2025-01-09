import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductItem } from '../models/product-item';
import { ProductItemComponent } from '../shared/product-item/product-item.component';
import { LifeCycleComponent } from '../life-cycle/life-cycle.component';
import { BlogService } from '../services/blog-service';
import { filter, map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ProductItemComponent, LifeCycleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private blogService: BlogService) {
    this.getBlogApi = new Subscription();
  }

  getBlogApi: Subscription;

  ngOnInit(): void {
    // Gọi api
    this.getBlogApi = this.blogService
      .getBlog()
      .pipe(
        tap(value => console.log("tap 1:", value)),
        map(({data}) =>
          data.map((item : any) => {
            return {
              id: item.id,
              name: item.title,
              price: Number(item.body),
              image: 'https://picsum.photos/200/200',
            };
          }).filter( product => product.price >= 400000)
        ),
      )
      .subscribe(( res ) => {
        console.log("res:", res);
        this.products = res;
      });
  }

  ngOnDestroy(): void {
    if(this.getBlogApi) {
      this.getBlogApi.unsubscribe();
    }
  }


  long: string = 'abc';

  // Dữ liệu từ component cha sẽ truyền xuống component con
  products: ProductItem[] = [
    {
      id: 1,
      name: 'nike SEQ',
      price: 400000,
      image: 'assets/images/shoes-1.png',
    },
    {
      id: 2,
      name: 'addidas T100',
      price: 320000,
      image: 'assets/images/shoes-2.png',
    },
    {
      id: 3,
      name: 'addidas k59',
      price: 430000,
      image: 'assets/images/shoes-3.png',
    },
    {
      id: 4,
      name: 'addidas v01',
      price: 380000,
      image: 'assets/images/shoes-4.png',
    },
    {
      id: 5,
      name: 'nike olympic',
      price: 290000,
      image: 'assets/images/shoes-5.png',
    },
    {
      id: 6,
      name: 'vans f1',
      price: 450000,
      image: 'assets/images/shoes-6.png',
    },
  ];

  handleDelete = (id: number) => {
    console.log('Dữ liệu mà component cha nhận được: ' + id);

    // Tiến hành xóa item khỏi products
    const productIndex = this.products.findIndex((item) => item.id == id);
    if (productIndex != -1) {
      this.products.splice(productIndex, 1);
    }
  };
}
