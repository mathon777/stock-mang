import { Order } from "../models/Order";
import { IdentityFactory } from "./IdentityFactory";

interface OrderFactoryInput {
  customerId: string;
}

export class OrderFactory {
  static create(input: OrderFactoryInput): Order {
    const id = IdentityFactory.create();

    return new Order(input.customerId, id);
  }
}
