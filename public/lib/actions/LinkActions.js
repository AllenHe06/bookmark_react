import API from "../API";

let LinkAction = {
  getAllbookmarks(newBookmark) {
    console.log("1.In LinkAction, get all bookmarks!");
    API.fetchAllBookmarks();
  }
}

export default LinkAction;
