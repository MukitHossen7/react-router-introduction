import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav className="">
        <a href="/home">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
