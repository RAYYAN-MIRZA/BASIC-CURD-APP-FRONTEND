import { InnerServiceService } from 'src/app/service/inner-service.service';
// import { Component } from '@angular/core';
import { inventory } from 'src/app/interface';
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
  constructor(private inventoryService: InventoriService, private router: Router, private dataService: InnerServiceService) { }


  ngOnInit(): void {
    // this.invent.push({id:"sdsdsdsdsd",name:"comb",price:0.34,description:"noice"});
    this.inventoryService.getalldata().subscribe({
      next: (inventori: inventory[]) => {
        this.invent = inventori;
        this.invent_for_search = inventori;
        console.log(this.invent);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  
  redirectToEdit(obj: inventory): void {
    this.dataService.setSharedData(obj);
    // console.log(obj);
    this.router.navigate(['/update']);
  }

  search(): void {
    // alert("kon hai?");
    console.log("h===", this.search_inp);

      this.invent = this.invent.filter((item) => item.prod_name.toLowerCase().includes(this.search_inp.toLowerCase()));
      // this.invent= this.invent.filter((invent)=> invent.prod_name===this.search_inp);
      console.log(this.invent);
      if (this.search_inp === "")
        this.ngOnInit();
  }

}
/************************************************************************************ */

