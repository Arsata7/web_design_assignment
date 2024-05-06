import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./button/button.component";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonComponent],
  exports: [ButtonComponent]
})
export class UiComponentsModule {}