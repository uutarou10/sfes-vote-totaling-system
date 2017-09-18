export default class Category {
  private _id: number
  private _titile: string

  get id(): number {
    return this._id;
  }

  get titile(): string {
    return this._titile;
  }
}