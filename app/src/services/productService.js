
import img from '../images/product-surf.jpg';

export default class ProductService {

  constructor() {
    this.products = [
      {
        id: 1, 
        name: "Single Thruster 2014",
        price: 1270.15,
        discount: 0.15,
        img: img,
        markLabel: "New"
      },
      {
        id: 2, 
        name: "Single Thruster 2014",
        price: 1270.15,
        discount: 0.15,
        img: img,
        markLabel: "Hot"
      },
      {
        id: 3, 
        name: "Single Thruster 2014",
        price: 1270.15,
        discount: 0.15,
        img: img,
        markLabel: ""
      },
      {
        id: 4, 
        name: "Single Thruster 2014",
        price: 1450,
        discount: 0.4,
        img: img
      },
      {
        id: 5, 
        name: "Single Thruster 2014",
        price: 900,
        discount: 0.05,
        img: img
      },
      {
        id: 6, 
        name: "Single Thruster 2014",
        price: 1500,
        discount: 0.3,
        img: img,
        markLabel: null
      },
      {
        id: 7, 
        name: "Single Thruster 2014",
        price: 1000,
        discount: 0.2,
        img: img,
        markLabel: "Hot"
      },
      {
        id: 8, 
        name: "Single Thruster 2014",
        price: 700,
        discount: 0.1,
        img: img,
        markLabel: "New"
      },

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