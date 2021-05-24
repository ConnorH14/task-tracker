import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsServices.js"
import { load, save } from "../Utils/LocalStorage.js";

function _drawLists(){
  let lists = ProxyState.lists
  let listElm = document.getElementById('list-container')
  let template = ''
  let itemTemplate = ''

  for(let i = 0; i < lists.length; i++){
    if(lists[i].items){
      for(let x = 0; x < lists[i].items.length; x++){
        itemTemplate += /*html*/ `
        <li id="item-${lists[i].items[x].id}">
            <div class="row">
                <div class="col-10">
                    <input onclick="app.itemsController.checkboxChecked('${lists[i].items[x].id}')" class="form-check-input" type="checkbox" value="" id='check-${lists[i].items[x].id}'>
                    <label class="form-check-label ml-3" for="flexCheckDefault"><p>${lists[i].items[x].task}</p></label>
                </div>
                <div class="col-2">
                    <i onclick="app.itemsController.deleteItem('${i}','${x}')" class="fas fa-minus-circle"></i>
                </div>
            </div>
        </li>
        `
      }
    }
    template += /*html*/ `
    <div class="col-lg-4">
        <div class="p-0 my-3 task-card" style="background-color: ${lists[i].color}">
            <h2 class="text-center mb-lg-4 task-header"><b>${lists[i].title}</b><i onclick="app.listsController.deleteList('${i}')" class="fas fa-minus delete-list ml-3"></i></h2>
            <ul class="task-list m-3">
              ${itemTemplate}
            </ul>
            <div class="p-3">
                <form onsubmit="app.itemsController.newItem(event, '${i}')">
                    <div class="mb-3 ml-4 d-inline">
                        <label for="task" class="form-label sr-only">Task Name</label>
                        <input required minlength="3" maxlength="25" type="text" name="task" class="add-task" placeholder="New Task" >
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
  listElm.innerHTML = template
}
export class ListsController {

  constructor(){
    ProxyState.on('lists', _drawLists)
    load()
    _drawLists()
  }

  newList(event){
    event.preventDefault()
    
    let form = event.target
    let newList = {
      title: form.list.value,
      color: form.color.value
    }
    listsService.newList(newList)
    
  }

  deleteList(list){
    const remList = ProxyState.lists.indexOf(ProxyState.lists[list]);
        if (remList > -1) {
          ProxyState.lists.splice(remList, 1);
        }
        ProxyState.lists = ProxyState.lists
        save()
  }
}