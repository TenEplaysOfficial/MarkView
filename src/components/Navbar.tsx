import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="border-b-2 pb-4">

      <Link to="/">
        <h1 className="text-3xl text-gray-800 select-none transform duration-300 hover:tracking-wider font-fontPoetsenOne">MarkView</h1>
      </Link>
    </nav>
    </>
  );
}
