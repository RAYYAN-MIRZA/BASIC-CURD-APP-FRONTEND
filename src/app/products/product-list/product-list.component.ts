import { InnerServiceService } from 'src/app/service/inner-service.service';
// import { Component } from '@angular/core';
import { InventoryResponse, inventory } from 'src/app/interface';
import { InventoriService } from 'src/app/service/inventori.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  search_inp!: string;
  invent: inventory[] = []; // empty array of objects
  invent_for_search: inventory[] = []; // empty array of objects
  curr_page!: number;
  pagesize = 4;
  total_pages!: number;

  constructor(private inventoryService: InventoriService, private router: Router, private dataService: InnerServiceService) {
    this.curr_page = 1;
  }

  ngOnInit(page_num?: number): void {
    if (page_num == null)
      page_num = 1;
    this.inventoryService.getalldata(page_num, this.pagesize).subscribe(
      (response) => {
        this.invent = response.dataToSend;
        this.total_pages = Math.ceil(response.totalSize / this.pagesize);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  //   next: (inventori: inventory[]) => {               still not using this but may use later
  //     this.invent = inventori;
  //     this.invent_for_search = inventori;
  //     console.log(this.invent);
  //   },
  //   error: (response) => {
  //     console.log(response);
  //   }
  // });

  page_shift_next(): void {
    if (this.curr_page === this.total_pages) return;
    this.curr_page++;
    this.ngOnInit(this.curr_page);
  }
  page_shift_prev(): void {
    if (this.curr_page === 1)
      return;
    this.curr_page--;
    if (this.curr_page <= 0)
      this.curr_page = 1;
    this.ngOnInit(this.curr_page);
  }

  page_shift_first(): void {
    if (this.curr_page === 1)
      return;
    this.curr_page = 1;
    this.ngOnInit(1);
  }

  page_shift_last(): void {
    if (this.curr_page === this.total_pages)
      return;
    this.curr_page = this.total_pages;
    this.ngOnInit(this.total_pages);
  }

  redirectToEdit(obj: inventory): void {
    this.dataService.setSharedData(obj);
    // console.log(obj);
    this.router.navigate(['/update']);
  }

  search(): void {
    console.log("h===", this.search_inp);
    this.invent = this.invent.filter((item) => item.prod_name.toLowerCase().includes(this.search_inp.toLowerCase()));
    console.log(this.invent);
    if (this.search_inp === "")
      this.ngOnInit();
  }
}
/************************************************************************************ */

