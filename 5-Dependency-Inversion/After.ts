type product = {}

interface DeliveryService {
  deliverProduct(product: product): void
}

class DeliveryDriverAfter implements DeliveryService {
  deliverProduct(product: product): void {
    // Deliver product
  }
}

class DeliveryCompanyAfter {
  private deliveryService: DeliveryService

  constructor(deliveryService: DeliveryService) {
    // dependency injection
    this.deliveryService = deliveryService
  }

  sendProduct(product: product): void {
    this.deliveryService.deliverProduct(product)
  }
}
