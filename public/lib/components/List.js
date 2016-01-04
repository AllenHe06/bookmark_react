import React from "react";

import Link from "./Link";

class List extends React.Component {
  render() {
    let content = this.props.list.map(link =>
    <Link key={link.id} bookmark={link} />)
    return(
      <div>
        {content}
      </div>
    )
  }
}

export default List;
