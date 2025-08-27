import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between px-10 py-5 border-t-1 border-zinc-800">
      <div>
        <h2 className="text-xl font-bold">
          <Link href="/">Next.js | WP</Link>
        </h2>
      </div>
      <div>
        <small>&copy; Next.js | WP</small>
      </div>
    </footer>
  );
};

export default Footer;
