import React from "react";

class Link extends React.Component {
  render() {
  let { title, url, safe } = this.props.bookmark;
    return(
      <div>
        <a href={url}
          style = { {color: (safe ? 'green' : 'black')} }>{title}</a>
      </div>
    )
  }
}

export default Link;
