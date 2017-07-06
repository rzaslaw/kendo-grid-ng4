import { Component, ViewEncapsulation } from '@angular/core';
import { products } from "../services/products";
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // load the default theme (use correct path to node_modules)
  styleUrls: [
      '../../node_modules/@progress/kendo-theme-default/dist/all.css'
  ],
  // prevent style encapsulation
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private gridView: GridDataResult;
    private data: Object[];
    private pageSize: number = 10;
    private skip: number = 0;
    private items: any[] = products;

    constructor() {
        this.loadItems();
    }

    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
}
