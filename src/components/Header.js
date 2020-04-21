import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <h3 className="ui header">
          <i class="th large icon"></i>
          Post App
        </h3>
      </Link>
    </div>
  );
};

export default Header;
