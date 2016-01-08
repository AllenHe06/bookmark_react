import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerAction = {
  receiveLinks(links) {
    console.log("3.In ServerAction, receive all links!", links);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  },
  receiveOneLink(link) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ONE_LINK,
      link
    });
  }
}

export default ServerAction;
