import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { TestComponent } from './test/test.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    // {path: "life-cycle", component: LifeCycleComponent},
    // {path: "learn-rxjs", component: LearnRxjsComponent},
    // {path: "test", component: TestComponent},
    // {path: "detail/:id", component: DetailProductComponent},
    // {path: "create", component: CreateProductComponent},

    {   
        path: "detail/:id", 
        loadComponent: () => 
            import('./detail-product/detail-product.component').then((m) => m.DetailProductComponent),

        
    },
    {
        path: "create", 
        loadComponent: () => 
            import('./create-product/create-product.component').then((m) => m.CreateProductComponent)
    },

];
