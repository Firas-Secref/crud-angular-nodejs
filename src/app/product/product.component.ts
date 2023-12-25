import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  productForm!: FormGroup
  public allProducts!: any[];
  private updateP!: boolean;
  private idP!: string;
  constructor(private fb: FormBuilder, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.productForm = this.fb.group({
      name: '',
      description: ''
    })
  }

  submitForm(){
    console.log(this.productForm.value)
    if (this.updateP){
      this.productService.updateProduct(this.idP,this.productForm.value).subscribe(()=>{
        console.log('update')
        this.idP = '';
        this.productForm.reset()
        this.updateP = false
        this.getAllProducts()
      })
    }else
    this.productService.newProduct(this.productForm.value).subscribe((data)=>{
      this.productForm.reset()
      this.getAllProducts();
    })
  }

  getAllProducts(){
    this.productService.getallProducts().subscribe(p=>{
      this.allProducts = p
      console.log(p)
    })
  }

  update(pr: any) {
    this.updateP = true
    this.idP = pr._id
    this.productForm.patchValue({
      name: pr.name,
      description: pr.description
    })
  }

  delete(pr: any) {
    if (confirm('ar you sure you want to delete this product')){
      this.productService.deleteProduct(pr._id).subscribe(()=>{
        console.log('delete')
        this.getAllProducts()
      })
    }
  }
}
