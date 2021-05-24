import { getId } from "../Utils/GetId.js"

export class Item {
  constructor(task, id) {
    this.task = task
    this.id = getId()
  }

}