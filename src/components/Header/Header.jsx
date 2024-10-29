import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between px-5 py-4 gap-10 font-bold text-xl bg-slate-300 rounded-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </div>
  );
};

export default Header;
