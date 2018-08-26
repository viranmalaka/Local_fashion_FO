/* tslint:disable */

declare var Object: any;
export interface ContactMessageInterface {
  "date"?: Date;
  "email"?: string;
  "message"?: string;
  "id"?: number;
}

export class ContactMessage implements ContactMessageInterface {
  "date": Date;
  "email": string;
  "message": string;
  "id": number;
  constructor(data?: ContactMessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ContactMessage`.
   */
  public static getModelName() {
    return "ContactMessage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ContactMessage for dynamic purposes.
  **/
  public static factory(data: ContactMessageInterface): ContactMessage{
    return new ContactMessage(data);
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
      name: 'ContactMessage',
      plural: 'ContactMessages',
      path: 'ContactMessages',
      idName: 'id',
      properties: {
        "date": {
          name: 'date',
          type: 'Date'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "message": {
          name: 'message',
          type: 'string'
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
