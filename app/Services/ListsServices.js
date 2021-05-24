import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { save } from "../Utils/LocalStorage.js"

class ListsServices{
  newList(newList){
    ProxyState.lists = [...ProxyState.lists, new List(newList.title, newList.color)]
    document.getElementById("create-list-form").reset()
    save()
    
  }
}

export const listsService = new ListsServices()