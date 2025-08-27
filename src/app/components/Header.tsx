import Link from "next/link";
import { MenuList } from "./Header.types";

const Header = () => {
  // Menu List Object
  const menuList: MenuList[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex justify-between px-10 py-5 border-b-1 border-zinc-800">
      <div>
        <h1 className="text-xl font-bold">
          <Link href="/">Next.js | WP</Link>
        </h1>
      </div>
      <div>
        <ul className="flex gap-10">
          {menuList.map((menu) => (
            <li key={menu.label}>
              <Link href={menu.href}>{menu.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
