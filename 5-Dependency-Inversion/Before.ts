type Product = {}

class DeliveryDriver {
  deliverProduct(product: Product): void {
    // Deliver product
  }
}

class DeliveryCompany {
  sendProduct(product: Product): void {
    // The DeliveryCompany class is now tightly coupled to the DeliveryDriver class.
    const driver: DeliveryDriver = new DeliveryDriver()
    driver.deliverProduct(product) 
  }
}
