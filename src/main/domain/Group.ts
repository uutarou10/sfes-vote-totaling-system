export default class Group {
  private _id: number
  private _name: string
  private _isInvalid: boolean

  constructor(id: number, name: string, isInvalid: boolean = false) {
    this._id = id
    this._name = name
    this._isInvalid = isInvalid
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get isInvalid(): boolean {
    return this._isInvalid;
  }

  set name(value: string) {
    this._name = value;
  }

  set isInvalid(value: boolean) {
    this._isInvalid = value;
  }
}