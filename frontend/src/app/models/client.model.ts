export class ClientModel {

  constructor(
    public sharedKey: string,
    public name: string,
    public email: string,
    public phone: string,
    public dataAdded?: string,
    public startDate?: Date,
    public endDate?: Date,
  ){}

}
