import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { inventory } from 'src/app/interface';
import { ActivatedRoute } from '@angular/router';
import { InnerServiceService } from '../service/inner-service.service';
import { InventoriService } from '../service/inventori.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  receivedData!: inventory;

  madal: inventory = {
    id: '00000000-0000-0000-0000-000000000000',
    prod_name: '',
    description: '',
    price: 0
  }
  constructor(private router: Router, private route: ActivatedRoute, private dataService: InnerServiceService, private inventservice: InventoriService
  ) { }
  ngOnInit() {
    this.dataService.sharedData$.subscribe((data) => {
      this.receivedData = data;
      console.log("fcukkkkk===", this.receivedData);
      this.madal.id = this.receivedData.id;
      this.madal.prod_name = this.receivedData.prod_name;
      this.madal.price = this.receivedData.price;
      this.madal.description = this.receivedData.description;
    });
  }
  submit(): void {
    if (this.madal.description === '' || this.madal.prod_name === '' || this.madal.price === 0) {
      alert("All fields must be filled");
      return;
    }
    console.log("ja raha =", this.madal);
    this.inventservice.edit_data(this.madal).subscribe({
      next: (response) => {
        alert(response);
        this.router.navigate(['/prod']);
      }
    });
  }
  Del(): void {
    this.inventservice.delete(this.receivedData.id).subscribe({
      next: (response) => {
        alert(response);
        this.router.navigate(['/prod']);
      }
    })
  }
}
/****************************************************************** */
