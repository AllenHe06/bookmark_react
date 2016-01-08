import {EventEmitter} from "events";
import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let _links = [];
class LinkStore extends EventEmitter {
  //Register with the Dispatcher
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch(action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
        console.log("4. We received data in store.", action);
        _links = action.links;
        this.emit("CHANGE");
        break;
        default:
        //do nothing
      }
    });
  }
  getAll() {
    return _links;
  }
  startListening(callback) {
    this.on("CHANGE", callback);
  }
  stopListening(callback) {
    this.removeListener("CHANGE", callback);
  }
}

export default new LinkStore();
