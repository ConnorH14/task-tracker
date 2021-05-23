import { Item } from "./Models/Item.js"
import { List } from "./Models/List.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {List[]} */

  lists = [
      new List('Task One', 'blue', [
        new Item('Do this task task taks fahjighpo'),
        new Item('Do that')]
      ),
      new List('Task Two', 'green', [
        new Item('Do what'),
        new Item('Do not')]
      ),
      new List('Task Three', '#bbceed', [
        new Item('Do agpiughauphguidhauishguidhapuighdiupoas'),
        new Item('ahugdhauishguipdhaiuoghdpoiahgiuodhpudgahuoiadsghuio')]
      ) 
  ];

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
