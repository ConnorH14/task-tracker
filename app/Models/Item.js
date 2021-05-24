import { getId } from "../Utils/GetId.js"

export class Item {
  constructor(task) {
    this.task = task
    this.check = false
    this.id = getId()
  }

}