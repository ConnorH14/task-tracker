import { ProxyState } from "../AppState.js";
import { Item } from "../Models/Item.js";
import { List } from "../Models/List.js";

function _drawLists(){
  let lists = ProxyState.lists
  let listElm = document.getElementById('list-container')
  let template = ''
  let itemTemplate = ''

  // lists.forEach(function(l) {
    
  // })

  for(let i = 0; i < lists.length; i++){
    for(let x = 0; x < lists[i].items.length; x++){
      itemTemplate += lists[i].items[x].task
    }
    template += /*html*/ `
    <div class="col-lg-4">
        <div class="p-0 my-3 task-card" style="background-color: ${lists[i].color}">
            <h2 class="text-center mb-lg-4 task-header"><b>${lists[i].title}</b></h2>
            <ul class="task-list m-3">
                ${itemTemplate}
            </ul>
            <div class="p-3">
                <form>
                    <div class="mb-3 ml-4 d-inline">
                        <label for="" class="form-label sr-only">Task Name</label>
                        <input type="text" class="add-task" placeholder="New Task" >
                        <button type="submit" class="btn ml-5"><i class="fas fa-plus"></i></button>
                        <hr>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `
    itemTemplate = ''
  }

  // lists.forEach(l => 
    
    
  // )


 

  listElm.innerHTML = template
}
export class ListsController {

  constructor(){
    ProxyState.on('lists', _drawLists)
    _drawLists()
  }
}