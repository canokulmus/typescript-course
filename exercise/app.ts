import { ProductService } from './ProductService';
import { Product } from './Product';

let _productService = new ProductService();


let result;


// result = _productService.getProducts();

let prod2 = _productService.getById(2)

let p = new Product();
p.name = "Iphone 6"
p.price = 4000
p.category = "Telefon"

_productService.saveProduct(p);


_productService.deleteProduct(prod2)
result = _productService.getProducts();

console.log(result)