import Category from "./Category";
import Group from "./Group";

export default class Presentation {
  private _id: number
  private _category: Category
  private _group: Group
  private _title: string

  constructor(id: number, category: Category, group: Group, title: string) {
    this._id = id
    this._category = category
    this._group = group
    this._title = title
  }

  get id(): number {
    return this._id;
  }

  get category(): Category {
    return this._category;
  }

  get group(): Group {
    return this._group;
  }

  get title(): string {
    return this._title;
  }

  set category(value: Category) {
    this._category = value;
  }

  set group(value: Group) {
    this._group = value;
  }

  set title(value: string) {
    this._title = value;
  }
}