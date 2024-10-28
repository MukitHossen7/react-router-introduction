import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between px-5 py-4 gap-10 font-bold text-xl bg-slate-300 rounded-xl">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Header;
