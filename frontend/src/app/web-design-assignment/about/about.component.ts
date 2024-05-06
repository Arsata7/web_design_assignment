import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ButtonComponent } from "../../ui-components-module/button/button.component";
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface Product {
  item: string;
  description: string;
  price: number;
}

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.less',
    imports: [CommonModule, MatTableModule, ButtonComponent]
})
export class AboutComponent {

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['item', 'description', 'price'];
  products: Product[] = [
    { item: 'iPhone 13 Pro', description: '5G, Super Retina XDR display', price: 899 },
    { item: 'Samsung Galaxy S21', description: 'Snapdragon 888, 120Hz display', price: 799 },
    { item: 'Google Pixel 6', description: 'Tensor chip, Dual rear camera', price: 599 },
    { item: 'Xiaomi Redmi Note 13 Pro', description: 'Qualcomm SM7435-AB, Adreno 710', price: 699 },
  ];
  dataSource = new MatTableDataSource<Product>(this.products);

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterOpened().subscribe(() => {
      dialogRef.componentInstance.dialogRef.addPanelClass('modal-open');
    });
  }

}
