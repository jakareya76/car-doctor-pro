import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="navbar bg-base-100 mt-5 text-black container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => {
              return (
                <Link key={item.path} href={item.path}>
                  {item.title}
                </Link>
              );
            })}
          </ul>
        </div>
        <Link href="/">
          <Image width={70} height={60} src="/assets/icons/logo.svg" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="space-x-8 font-semibold">
          {navItems.map((item) => {
            return (
              <Link key={item.path} href={item.path}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex gap-3 items-center">
          <CiShoppingCart size={25} className="cursor-pointer" />
          <CiSearch size={25} className="cursor-pointer" />
          <button className="btn btn-primary btn-outline">Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
