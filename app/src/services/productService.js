
import img from '../images/product-surf.jpg';
import { Product } from '../models';

export default class ProductService {

  constructor() {
    this.products = [
      new Product(1, "Single Thruster 2014", 1270, 0.15, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(2, "Single Thruster 2014", 1000, 0.25, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(3, "Single Thruster 2014", 2000, 0.3, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(4, "Single Thruster 2014", 800, 0.05, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(5, "Single Thruster 2014", 1600, 0.03, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(6, "Single Thruster 2014", 200, 0.15, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(7, "Single Thruster 2014", 400, 0.15, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
      new Product(8, "Single Thruster 2014", 350, 0, img, "New", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."),
    ];

    this.data = {
      products: this.products,
      pagination: {
        itemsPerPage: 9,
        currPage: 1,
        pages: 1,
        totalItems: this.products.length
      }
    }
  }

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.data);
      }, 2000)
    });
  }
}