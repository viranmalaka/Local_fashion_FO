/* tslint:disable */

declare var Object: any;
export interface PointsInterface {
  "value": number;
  "valid": boolean;
  "date": Date;
  "id"?: number;
}

export class Points implements PointsInterface {
  "value": number;
  "valid": boolean;
  "date": Date;
  "id": number;
  constructor(data?: PointsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Points`.
   */
  public static getModelName() {
    return "Points";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Points for dynamic purposes.
  **/
  public static factory(data: PointsInterface): Points{
    return new Points(data);
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
      name: 'Points',
      plural: 'Points',
      path: 'Points',
      idName: 'id',
      properties: {
        "value": {
          name: 'value',
          type: 'number',
          default: 0
        },
        "valid": {
          name: 'valid',
          type: 'boolean',
          default: false
        },
        "date": {
          name: 'date',
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
