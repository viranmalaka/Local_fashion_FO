/* tslint:disable */

declare var Object: any;
export interface CouponInterface {
  "name": string;
  "discount_percentage"?: number;
  "discount_value"?: number;
  "expire"?: Date;
  "id"?: number;
}

export class Coupon implements CouponInterface {
  "name": string;
  "discount_percentage": number;
  "discount_value": number;
  "expire": Date;
  "id": number;
  constructor(data?: CouponInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Coupon`.
   */
  public static getModelName() {
    return "Coupon";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Coupon for dynamic purposes.
  **/
  public static factory(data: CouponInterface): Coupon{
    return new Coupon(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Coupon',
      plural: 'Coupons',
      path: 'Coupons',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "discount_percentage": {
          name: 'discount_percentage',
          type: 'number'
        },
        "discount_value": {
          name: 'discount_value',
          type: 'number'
        },
        "expire": {
          name: 'expire',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
