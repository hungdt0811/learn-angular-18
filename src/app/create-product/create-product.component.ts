import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../services/blog-service';
import { Router } from '@angular/router';
import { ItemBlog } from '../models/product-item';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  constructor(private blogService: BlogService, private router: Router) {
    
  }

  product = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)])
  })

  // Getter
  get name() {
    return this.product.get('name');
  }
  get price() {
    return this.product.get('price');
  }

  handleAddProduct() {
    // Đánh dấu tất cả input đã được touch
    this.product.markAllAsTouched();

    // Xử lý trường hợp khi form chưa validate
    if(!this.product.valid)
      return;

    const itemBlog: ItemBlog = {
      id: Math.random(),
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: "Nguyễn Văn Tèo",
    }

    this.blogService.postBlog(itemBlog)
    .subscribe(({data}: any) => {
      if(data.id) {
        this.router.navigate(["/"])
      }
    })
    
  }
}
