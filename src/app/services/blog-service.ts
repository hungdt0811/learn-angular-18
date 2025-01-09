import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ItemBlog, ProductItem } from "../models/product-item";
import { ResponseData } from "../models/responseData";

@Injectable({ providedIn: 'root'})
export class BlogService {
    constructor(private http: HttpClient) {

    }

    getBlog() : Observable<ResponseData<ProductItem[]>> {
        return this.http.get<any>('https://ninedev-api.vercel.app/blogs')
    }

    getDetailProduct(id : number) : Observable<ResponseData<ProductItem>> {
        return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`)
    }

    postBlog(itemBlog: ItemBlog) : Observable<ResponseData<ProductItem>> {
        return this.http.post<any>(`https://ninedev-api.vercel.app/blogs/`, itemBlog)
    }
}