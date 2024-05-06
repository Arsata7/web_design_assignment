import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WebDesignAssignmentRoutingModule } from "./web-design-assignment-routing.module";
import { ProductService } from "./product.service";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatTableModule } from "@angular/material/table";
import { ButtonComponent } from "../ui-components-module/button/button.component";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    WebDesignAssignmentRoutingModule,
    DashboardComponent,
    MatTableModule,
    ButtonComponent,
    MatIconModule
  ],
  providers: [ProductService],
})
export class WebDesignAssignmentModule { }