import React from "react";
import $ from "jquery";

import List from "./List";
import Form from "./Form";

class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarks: []};
  }
  insertBookmark(newBookmark) {
    $.post("/api/links", newBookmark)
    .success(data => {
      this.setState({ bookmarks: this.state.bookmarks.concat(data)});
    });
  }
  componentDidMount() {
    $.get('./api/links')
    .success(data => {
      this.setState({ bookmarks: data.links });
    })
  }
  render() {
    return(
      <div>
        <h2>Bookmarks!</h2>
        <List list={this.state.bookmarks}/>
        <Form addBookmark={this.insertBookmark.bind(this)} />
      </div>
    )
  }
}

export default AppController;
