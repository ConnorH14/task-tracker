import { ProxyState } from "../AppState.js"
import { ListsController } from "../Controllers/ListsController.js"
import { Item } from "../Models/Item.js"
import { List } from "../Models/List.js"
import { save } from "../Utils/LocalStorage.js"

class ItemsServices{
  newItem(newItem, list){
    if(ProxyState.lists[list].items){
      ProxyState.lists[list].items = [...ProxyState.lists[list].items, new Item(newItem.task)]
    }else{
      ProxyState.lists[list].items = [new Item(newItem.task)]
    }
    ProxyState.lists = ProxyState.lists
    save()
  }
}

export const itemsService = new ItemsServices()