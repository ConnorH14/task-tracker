import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

export function save(){
  localStorage.setItem('TaskTracker', JSON.stringify({
    lists: ProxyState.lists
  }))
}

export function load(){
  let data = JSON.parse(localStorage.getItem('TaskTracker'))
  if(data){
    ProxyState.lists = data.lists
  }
}