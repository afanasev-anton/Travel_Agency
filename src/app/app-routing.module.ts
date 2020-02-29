import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
{path: "", component: HomePageComponent},
{path: "contact", component: ContactComponent},
{path: "blog", component: BlogPageComponent},
{path: "offers", component: OffersComponent},
{path: "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
