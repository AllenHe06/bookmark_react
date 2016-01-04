import React from "react";
import $ from "jquery";
import List from "./List";

class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarks: []};
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
      </div>
    )
  }
}

export default AppController;
