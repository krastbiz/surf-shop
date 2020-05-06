class Product {

  constructor(id, name, price, discount, img, markLabel, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.img = img;
    this.markLabel = markLabel;
    this.description = description;
  }

  getPrice() {
    return Math.floor(this.price * (1 - this.discount));
  }
};

export default Product;