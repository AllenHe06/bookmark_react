import API from "../API";

let LinkAction = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  getAllbookmarks() {
    console.log("1.In LinkAction, get all bookmarks!");
    API.fetchAllBookmarks();
  }
}

export default LinkAction;
