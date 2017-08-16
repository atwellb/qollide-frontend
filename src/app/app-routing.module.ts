import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home.component";
import { ScreenComponent } from "./views/screen.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "screen/:id", component: ScreenComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }