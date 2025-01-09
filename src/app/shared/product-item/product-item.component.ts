import { Component, EventEmitter, Input, Output } from '@angular/core';
import { uppercasePipe } from '../pipes/upppercasePipe.pipe';
import { CurrencyPipe } from '../pipes/currencyPipe.pipe';
import { ProductItem } from '../../models/product-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [uppercasePipe, CurrencyPipe, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  // Khai báo biến products hứng dữ liệu
  @Input() products: ProductItem[] = []

  // Khai báo biến phát dữ liệu
  @Output() childDataEvent = new EventEmitter<number>();

  get totalPrice(): number {
    const sum = this.products.reduce((total, item) => {
      return total + item.price
    }, 0);
    return sum;
  }

  handleDelete = (id: number) => {
    console.log("Id truyền đi:" + id);
    // Phát sự kiện
    this.childDataEvent.emit(id);
  }
}
