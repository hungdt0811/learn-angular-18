import { Component, OnInit } from '@angular/core';
import { ProductItem } from '../models/product-item';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog-service';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent implements OnInit {  
  id = '';
  product: ProductItem = {
    id: 0,
    image: "",
    name: "",
    price: 0
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    this.id = String(route.snapshot.paramMap.get('id'));

  }

  ngOnInit(): void {
    this.blogService.getDetailProduct(+this.id)
      .subscribe(({data} : any) => {
        console.log(data);
        this.product.id = data.id;
        this.product.name = data.title;
        this.product.image = "assets/images/shoes-1.png";
        this.product.price = data.body;
      })
  }
}
