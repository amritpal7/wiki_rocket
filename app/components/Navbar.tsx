import Link from "next/link";
import Search from "./Search";
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-950 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        <Link
          className="text-gray-90 underline decoration-sky-600 hover:decoration-blue-400"
          href="/"
        >
          Wiki-Rocket!🚀
        </Link>
      </h1>
      <Search />
    </nav>
  );
}
