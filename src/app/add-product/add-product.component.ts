
import { Component } from '@angular/core';
import { inventory } from '../interface';
import { InventoriService } from '../service/inventori.service';
import { Router } from '@angular/router';

// import{form}
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private service: InventoriService,private rout:Router){}
  // prod_name!:string;
  // price!:number;
  // description!:string;
  madal: inventory = {
    id: '00000000-0000-0000-0000-000000000000',
    prod_name: '',
    price: 0,
    description: ''
  }

  onAdd(): void {
    // this.madal.prod_name=this.prod_name;
    // this.madal.price=this.price;
    // this.madal.description=this.description;
    console.log("DSDSDS", this.madal.price);
    console.log("madaadad=", this.madal);
    this.service.add_data(this.madal).subscribe({
      next:(response) =>{
        console.log(response);
        alert(response);
        this.rout.navigate(['/prod']);
      }
    })
  }
}

