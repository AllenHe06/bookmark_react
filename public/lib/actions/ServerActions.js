import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerAction = {
  receiveLinks(links) {
    console.log("3.In ServerAction, receive all links!", links);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  }
}

export default ServerAction;
