import React from "react";

// COMPONENTS
import NavBar from "../../component/NavBar"

const Skeleton = props => (
  <div>
    <NavBar />
    {props.children}
  </div>
);

export default Skeleton;
