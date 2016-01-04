import React from "react";

class Link extends React.Component {
  render() {
  let { title, url } = this.props.bookmark;
    return(
      <div>
        <a href={url}>{title}</a>
      </div>
    )
  }
}

export default Link;
