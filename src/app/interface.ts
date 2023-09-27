export interface inventory{
    id:string;
    prod_name:string;
    price:number;
    description :string;
}

export interface InventoryResponse {
    dataToSend: inventory[]; // An array of inventory items
    totalSize: number; // The total size of the inventory collection
  }
  