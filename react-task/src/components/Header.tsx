import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
const title = useSelector((state:any) => state.book.subTitle);
const subtitle = title ? ' | '+title : '';
  return (
    <header data-testid='header-comp'>
      <h2 className="title">eCommerce Site {subtitle} </h2> 
      <nav className="links">
        <Link to="/">Home |</Link>
        <Link to="/orders"> My orders |</Link>
        <Link to="/cart"> Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
