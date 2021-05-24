import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsServices.js";
import { load, save } from "../Utils/LocalStorage.js";
import { drawChecks} from "../Controllers/ListsController.js"

export class ItemsController {

  checkboxChecked(list, item, id){
    if(document.getElementById(`check-${id}`).checked){
      swal('You completed a task!', 'Good Job!', 'success');
      ProxyState.lists[list].items[item].check = true
      ProxyState.lists = ProxyState.lists
      save()
      
    }else{
      ProxyState.lists[list].items[item].check = false
      ProxyState.lists = ProxyState.lists
      save()
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
    drawChecks()
  }

  deleteItem(list, item){
    drawChecks()
    swal('Would you like to delete task?', {buttons: ['Cancel', true],}
    ).then(function(isConfirm){
      if(isConfirm){
        const remItem = ProxyState.lists[list].items.indexOf(ProxyState.lists[list].items[item]);
        if (remItem > -1) {
          ProxyState.lists[list].items.splice(remItem, 1);
        }
        ProxyState.lists = ProxyState.lists
        save()
        drawChecks()
      }
    })
  }
}