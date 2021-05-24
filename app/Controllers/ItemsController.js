import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsServices.js";
import { save } from "../Utils/LocalStorage.js";

export class ItemsController {

  checkboxChecked(id){
    if(document.getElementById(`check-${id}`).checked){
      swal('You completed a task!', 'Good Job!', 'success');
    }
  }

  newItem(event, list){
    event.preventDefault()
    let form = event.target
    let newItem = {
      task: form.task.value
    }
    itemsService.newItem(newItem, list)
    form.reset()
  }

  deleteItem(list, item){
    swal('Would you like to delete task?', {buttons: ['Cancel', true],}
    ).then(function(isConfirm){
      if(isConfirm){
        const remItem = ProxyState.lists[list].items.indexOf(ProxyState.lists[list].items[item]);
        if (remItem > -1) {
          ProxyState.lists[list].items.splice(remItem, 1);
        }
        ProxyState.lists = ProxyState.lists
        save()
      }
    })
  }
}