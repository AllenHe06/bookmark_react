import { post, get } from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    post("./api/links", newBookmark);
  },
  fetchAllBookmarks() {
    console.log("2. In API, fetch all bookmarks from server!");
    get("./api/links")
    .done(data => ServerActions.receiveLinks(data.links));
  }
}

export default API;
