/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Address } from '../../models/Address';
import { CartDetail } from '../../models/CartDetail';
import { Item } from '../../models/Item';
import { Theme } from '../../models/Theme';
import { Order } from '../../models/Order';
import { OrderDetail } from '../../models/OrderDetail';
import { WishListDetail } from '../../models/WishListDetail';
import { Email } from '../../models/Email';
import { CombinationDetails } from '../../models/CombinationDetails';
import { ExchangeRate } from '../../models/ExchangeRate';
import { Coupon } from '../../models/Coupon';
import { Points } from '../../models/Points';
import { Stores } from '../../models/Stores';
import { ContactMessage } from '../../models/ContactMessage';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Address: Address,
    CartDetail: CartDetail,
    Item: Item,
    Theme: Theme,
    Order: Order,
    OrderDetail: OrderDetail,
    WishListDetail: WishListDetail,
    Email: Email,
    CombinationDetails: CombinationDetails,
    ExchangeRate: ExchangeRate,
    Coupon: Coupon,
    Points: Points,
    Stores: Stores,
    ContactMessage: ContactMessage,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
